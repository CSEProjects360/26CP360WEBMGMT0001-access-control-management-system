using System.Data.Common;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.Data.Sqlite;
using MySqlConnector;
using Npgsql;

var builder = WebApplication.CreateBuilder(args);
builder.Services.ConfigureHttpJsonOptions(options =>
{
    options.SerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
    options.SerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
});
builder.Services.AddCors(options => options.AddDefaultPolicy(policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options => options.SwaggerDoc("v1", new() { Title = "Access Control Management System API", Version = "1.0.0" }));

var task = GetArg(args, "--factory.task");
if (!string.IsNullOrWhiteSpace(task))
{
    await using var taskDb = await Database.OpenWithRetry();
    await Database.Migrate(taskDb);
    if (task == "seed")
    {
        await Seeder.Seed(taskDb);
        Console.WriteLine("[seed] completed");
    }
    else
    {
        Console.WriteLine("[migrate] schema synchronized");
    }
    return;
}

var app = builder.Build();
app.Urls.Clear();
app.Urls.Add("http://0.0.0.0:3000");
app.UseCors();

app.MapGet("/api/health", () => Results.Json(new { status = "ok", service = "access-control-management-system-api" }));
app.MapGet("/api/docs", () => Results.Content("<!doctype html><title>Access Control Management System API</title><h1>Access Control Management System API</h1><p>OpenAPI JSON: <a href=\"/api/docs-json\">/api/docs-json</a></p>", "text/html"));
app.MapGet("/api/docs-json", () => Results.Json(new
{
    openapi = "3.0.0",
    info = new { title = "Access Control Management System API", version = "1.0.0" },
    paths = new Dictionary<string, object>
    {
        ["/api/health"] = new { get = new { summary = "Health check" } },
        ["/api/auth/login"] = new { post = new { summary = "Admin login" } },
        ["/api/categories"] = new { get = new { summary = "List categories" }, post = new { summary = "Create category" } },
        ["/api/departments"] = new { get = new { summary = "List departments" }, post = new { summary = "Create department" } },
        ["/api/records"] = new { get = new { summary = "List records" }, post = new { summary = "Create record" } },
        ["/api/transactions"] = new { get = new { summary = "List transactions" }, post = new { summary = "Create transaction" } },
        ["/api/reports/summary"] = new { get = new { summary = "Summary reports" } },
        ["/api/audit-logs"] = new { get = new { summary = "Audit logs" } }
    }
}));

app.MapPost("/api/auth/login", async (LoginRequest payload) =>
{
    await using var db = await Database.OpenWithRetry();
    var user = await Database.First(db, "SELECT * FROM users WHERE email = @email", new() { ["email"] = payload.Email });
    if (user is null || !Support.VerifyPassword(payload.Password, user["password_hash"]?.ToString() ?? ""))
    {
        return Results.Json(new { message = "Invalid credentials" }, statusCode: 401);
    }
    return Results.Json(new { accessToken = Support.Token(payload.Email), user = Support.SanitizeUser(user) });
});

app.MapGet("/api/categories", async (int? page, int? limit) => await Handlers.List("categories", page, limit));
app.MapPost("/api/categories", async (NamedPayload payload) => await Handlers.CreateNamed("categories", "category", payload));
app.MapGet("/api/departments", async (int? page, int? limit) => await Handlers.List("departments", page, limit));
app.MapPost("/api/departments", async (NamedPayload payload) => await Handlers.CreateNamed("departments", "department", payload));
app.MapGet("/api/records", async (int? page, int? limit) => await Handlers.List("records", page, limit));
app.MapPost("/api/records", async (RecordPayload payload) => await Handlers.CreateRecord(payload));
app.MapGet("/api/transactions", async (int? page, int? limit) => await Handlers.List("transactions", page, limit));
app.MapPost("/api/transactions", async (TransactionPayload payload) => await Handlers.CreateTransaction(payload));
app.MapGet("/api/users", async () => await Handlers.Users());
app.MapGet("/api/roles", async () => await Handlers.List("roles", null, null));
app.MapGet("/api/reports/summary", async () => await Handlers.Summary());
app.MapGet("/api/audit-logs", async (int? page, int? limit) => await Handlers.List("audit_logs", page, limit, "timestamp DESC"));

await using (var db = await Database.OpenWithRetry())
{
    await Database.Migrate(db);
}
app.Run();

static string? GetArg(string[] args, string key)
{
    var prefix = key + "=";
    return args.FirstOrDefault(arg => arg.StartsWith(prefix, StringComparison.Ordinal))?.Substring(prefix.Length);
}

record LoginRequest(string Email, string Password);
record NamedPayload(string Name, string? Description);
record RecordPayload(string Title, string? Description, string? CategoryId, string? DepartmentId, string? Status);
record TransactionPayload(string? RecordId, string Type, double Amount, string? Note);

static class Database
{
    public static async Task<DbConnection> OpenWithRetry()
    {
        var attempts = int.Parse(Env("DB_CONNECT_ATTEMPTS", "30"));
        var delayMs = int.Parse(Env("DB_CONNECT_DELAY_MS", "2000"));
        Exception? last = null;
        for (var attempt = 1; attempt <= attempts; attempt++)
        {
            try
            {
                var connection = Create();
                await connection.OpenAsync();
                return connection;
            }
            catch (Exception error)
            {
                last = error;
                if (attempt < attempts)
                {
                    Console.Error.WriteLine($"[database] connection attempt {attempt}/{attempts} failed: {error.Message}");
                    await Task.Delay(delayMs);
                }
            }
        }
        throw last!;
    }

    static DbConnection Create()
    {
        var type = Env("DB_TYPE", "postgres");
        if (type == "sqlite")
        {
            var path = Env("DB_SQLITE_PATH", "./data/access-control-management-system.sqlite");
            Directory.CreateDirectory(Path.GetDirectoryName(path) ?? ".");
            return new SqliteConnection($"Data Source={path}");
        }
        var host = Env("DB_HOST", "localhost");
        var port = Env("DB_PORT", type == "mysql" ? "3306" : "5432");
        var name = Env("DB_NAME", "student_factory");
        var user = Env("DB_USER", type == "mysql" ? "student_factory" : "postgres");
        var password = Env("DB_PASSWORD", type == "mysql" ? "mysql" : "postgres");
        if (type == "mysql")
        {
            return new MySqlConnection($"Server={host};Port={port};Database={name};User={user};Password={password};AllowPublicKeyRetrieval=True;SslMode=None");
        }
        return new NpgsqlConnection($"Host={host};Port={port};Database={name};Username={user};Password={password}");
    }

    public static async Task Migrate(DbConnection db)
    {
        var number = Env("DB_TYPE", "postgres") == "mysql" ? "DOUBLE" : "DOUBLE PRECISION";
        await Exec(db, "CREATE TABLE IF NOT EXISTS roles (id VARCHAR(64) PRIMARY KEY, name VARCHAR(255) UNIQUE NOT NULL, description TEXT)");
        await Exec(db, "CREATE TABLE IF NOT EXISTS users (id VARCHAR(64) PRIMARY KEY, email VARCHAR(255) UNIQUE NOT NULL, display_name VARCHAR(255) NOT NULL, password_hash VARCHAR(255) NOT NULL, role_id VARCHAR(64) NOT NULL)");
        await Exec(db, "CREATE TABLE IF NOT EXISTS categories (id VARCHAR(64) PRIMARY KEY, name VARCHAR(255) UNIQUE NOT NULL, description TEXT)");
        await Exec(db, "CREATE TABLE IF NOT EXISTS departments (id VARCHAR(64) PRIMARY KEY, name VARCHAR(255) UNIQUE NOT NULL, description TEXT)");
        await Exec(db, "CREATE TABLE IF NOT EXISTS records (id VARCHAR(64) PRIMARY KEY, title VARCHAR(255) NOT NULL, description TEXT, category_id VARCHAR(64), department_id VARCHAR(64), status VARCHAR(80))");
        await Exec(db, $"CREATE TABLE IF NOT EXISTS transactions (id VARCHAR(64) PRIMARY KEY, record_id VARCHAR(64), type VARCHAR(120) NOT NULL, amount {number}, note TEXT, created_at VARCHAR(80))");
        await Exec(db, "CREATE TABLE IF NOT EXISTS audit_logs (id VARCHAR(64) PRIMARY KEY, actor VARCHAR(255), action VARCHAR(120) NOT NULL, entity VARCHAR(120) NOT NULL, entity_id VARCHAR(255), payload TEXT, timestamp VARCHAR(80))");
    }

    public static async Task Exec(DbConnection db, string sql, Dictionary<string, object?>? parameters = null)
    {
        await using var command = db.CreateCommand();
        command.CommandText = sql;
        AddParams(command, parameters);
        await command.ExecuteNonQueryAsync();
    }

    public static async Task<Dictionary<string, object?>?> First(DbConnection db, string sql, Dictionary<string, object?>? parameters = null)
    {
        await using var command = db.CreateCommand();
        command.CommandText = sql;
        AddParams(command, parameters);
        await using var reader = await command.ExecuteReaderAsync();
        if (!await reader.ReadAsync()) return null;
        return Row(reader);
    }

    public static async Task<List<Dictionary<string, object?>>> Query(DbConnection db, string sql, Dictionary<string, object?>? parameters = null)
    {
        await using var command = db.CreateCommand();
        command.CommandText = sql;
        AddParams(command, parameters);
        await using var reader = await command.ExecuteReaderAsync();
        var rows = new List<Dictionary<string, object?>>();
        while (await reader.ReadAsync()) rows.Add(Row(reader));
        return rows;
    }

    public static async Task<int> Count(DbConnection db, string table)
    {
        var row = await First(db, $"SELECT COUNT(*) AS total FROM {table}");
        return Convert.ToInt32(row!["total"]);
    }

    static void AddParams(DbCommand command, Dictionary<string, object?>? parameters)
    {
        if (parameters is null) return;
        foreach (var (key, value) in parameters)
        {
            var parameter = command.CreateParameter();
            parameter.ParameterName = key;
            parameter.Value = value ?? DBNull.Value;
            command.Parameters.Add(parameter);
        }
    }

    static Dictionary<string, object?> Row(DbDataReader reader)
    {
        var row = new Dictionary<string, object?>();
        for (var i = 0; i < reader.FieldCount; i++)
        {
            row[reader.GetName(i)] = reader.IsDBNull(i) ? null : reader.GetValue(i);
        }
        return row;
    }

    public static string Env(string key, string fallback) => Environment.GetEnvironmentVariable(key) is { Length: > 0 } value ? value : fallback;
}

static class Seeder
{
    public static async Task Seed(DbConnection db)
    {
        var seed = JsonSerializer.Deserialize<SeedConfig>(await File.ReadAllTextAsync("config/seed.json"), new JsonSerializerOptions { PropertyNameCaseInsensitive = true })!;
        var role = await Database.First(db, "SELECT * FROM roles WHERE name = @name", new() { ["name"] = seed.Admin.Role });
        if (role is null)
        {
            role = new() { ["id"] = Support.Id(), ["name"] = seed.Admin.Role, ["description"] = "Project administrator" };
            await Insert(db, "roles", role);
        }
        if (await Database.First(db, "SELECT * FROM users WHERE email = @email", new() { ["email"] = seed.Admin.Email }) is null)
        {
            await Insert(db, "users", new()
            {
                ["id"] = Support.Id(), ["email"] = seed.Admin.Email, ["display_name"] = seed.Admin.DisplayName,
                ["password_hash"] = Support.PasswordHash(seed.Admin.Password), ["role_id"] = role["id"]
            });
        }
        foreach (var name in seed.Categories)
        {
            if (await Database.First(db, "SELECT * FROM categories WHERE name = @name", new() { ["name"] = name }) is null)
                await Insert(db, "categories", new() { ["id"] = Support.Id(), ["name"] = name, ["description"] = $"{name} category" });
        }
        foreach (var name in seed.Departments)
        {
            if (await Database.First(db, "SELECT * FROM departments WHERE name = @name", new() { ["name"] = name }) is null)
                await Insert(db, "departments", new() { ["id"] = Support.Id(), ["name"] = name, ["description"] = $"{name} department" });
        }
        var category = await Database.First(db, "SELECT * FROM categories LIMIT 1");
        var department = await Database.First(db, "SELECT * FROM departments LIMIT 1");
        if (await Database.Count(db, "records") == 0)
        {
            foreach (var item in seed.Records)
                await Insert(db, "records", new() { ["id"] = Support.Id(), ["title"] = item.Title, ["description"] = item.Description, ["category_id"] = category?["id"], ["department_id"] = department?["id"], ["status"] = item.Status });
        }
        var record = await Database.First(db, "SELECT * FROM records LIMIT 1");
        if (await Database.Count(db, "transactions") == 0)
        {
            foreach (var item in seed.Transactions)
                await Insert(db, "transactions", new() { ["id"] = Support.Id(), ["record_id"] = record?["id"], ["type"] = item.Type, ["amount"] = item.Amount, ["note"] = item.Note, ["created_at"] = Support.Now() });
        }
        await Insert(db, "audit_logs", new() { ["id"] = Support.Id(), ["actor"] = seed.Admin.Email, ["action"] = "seed", ["entity"] = "project", ["entity_id"] = "access-control-management-system", ["payload"] = "{\"source\":\"csharp-seed\"}", ["timestamp"] = Support.Now() });
    }

    public static async Task Insert(DbConnection db, string table, Dictionary<string, object?> data)
    {
        var columns = string.Join(", ", data.Keys);
        var values = string.Join(", ", data.Keys.Select(key => "@" + key));
        await Database.Exec(db, $"INSERT INTO {table} ({columns}) VALUES ({values})", data);
    }
}

static class Handlers
{
    public static async Task<IResult> List(string table, int? page, int? limit, string order = "")
    {
        await using var db = await Database.OpenWithRetry();
        var orderSql = string.IsNullOrWhiteSpace(order) ? "" : $" ORDER BY {order}";
        if (page is null)
        {
            return Results.Json(Normalize(table, await Database.Query(db, $"SELECT * FROM {table}{orderSql}")));
        }
        var safePage = Math.Max(1, page.Value);
        var safeLimit = Math.Min(100, Math.Max(1, limit ?? 10));
        var total = await Database.Count(db, table);
        var rows = await Database.Query(db, $"SELECT * FROM {table}{orderSql} LIMIT {safeLimit} OFFSET {(safePage - 1) * safeLimit}");
        return Results.Json(new { data = Normalize(table, rows), meta = new { page = safePage, limit = safeLimit, total, totalPages = Math.Max(1, (int)Math.Ceiling(total / (double)safeLimit)) } });
    }

    public static async Task<IResult> CreateNamed(string table, string entity, NamedPayload payload)
    {
        await using var db = await Database.OpenWithRetry();
        var row = new Dictionary<string, object?> { ["id"] = Support.Id(), ["name"] = payload.Name, ["description"] = payload.Description ?? "" };
        await Seeder.Insert(db, table, row);
        await Audit(db, "create", entity, row["id"]!.ToString()!, row);
        return Results.Json(row, statusCode: 201);
    }

    public static async Task<IResult> CreateRecord(RecordPayload payload)
    {
        await using var db = await Database.OpenWithRetry();
        var row = new Dictionary<string, object?> { ["id"] = Support.Id(), ["title"] = payload.Title, ["description"] = payload.Description ?? "", ["category_id"] = payload.CategoryId, ["department_id"] = payload.DepartmentId, ["status"] = payload.Status ?? "active" };
        await Seeder.Insert(db, "records", row);
        await Audit(db, "create", "record", row["id"]!.ToString()!, row);
        return Results.Json(Support.RecordToApi(row), statusCode: 201);
    }

    public static async Task<IResult> CreateTransaction(TransactionPayload payload)
    {
        await using var db = await Database.OpenWithRetry();
        var row = new Dictionary<string, object?> { ["id"] = Support.Id(), ["record_id"] = payload.RecordId, ["type"] = payload.Type, ["amount"] = payload.Amount, ["note"] = payload.Note ?? "", ["created_at"] = Support.Now() };
        await Seeder.Insert(db, "transactions", row);
        await Audit(db, "create", "transaction", row["id"]!.ToString()!, row);
        return Results.Json(Support.TransactionToApi(row), statusCode: 201);
    }

    public static async Task<IResult> Users()
    {
        await using var db = await Database.OpenWithRetry();
        return Results.Json((await Database.Query(db, "SELECT * FROM users")).Select(Support.SanitizeUser));
    }

    public static async Task<IResult> Summary()
    {
        await using var db = await Database.OpenWithRetry();
        return Results.Json(new { records = await Database.Count(db, "records"), categories = await Database.Count(db, "categories"), departments = await Database.Count(db, "departments"), transactions = await Database.Count(db, "transactions") });
    }

    static async Task Audit(DbConnection db, string action, string entity, string entityId, Dictionary<string, object?> payload)
    {
        await Seeder.Insert(db, "audit_logs", new() { ["id"] = Support.Id(), ["actor"] = "admin@example.com", ["action"] = action, ["entity"] = entity, ["entity_id"] = entityId, ["payload"] = JsonSerializer.Serialize(payload), ["timestamp"] = Support.Now() });
    }

    static object Normalize(string table, List<Dictionary<string, object?>> rows) => table switch
    {
        "records" => rows.Select(Support.RecordToApi),
        "transactions" => rows.Select(Support.TransactionToApi),
        "users" => rows.Select(Support.SanitizeUser),
        _ => rows
    };
}

static class Support
{
    public static string Id() => Guid.NewGuid().ToString("N");
    public static string Now() => DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss");
    public static string PasswordHash(string password) => Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes("access-control-management-system-salt:" + password))).ToLowerInvariant();
    public static bool VerifyPassword(string password, string hash) => CryptographicOperations.FixedTimeEquals(Encoding.UTF8.GetBytes(PasswordHash(password)), Encoding.UTF8.GetBytes(hash));
    public static string Token(string email) => Convert.ToBase64String(Encoding.UTF8.GetBytes($"{email}:access-control-management-system:{Database.Env("JWT_SECRET", "change-me-in-production")}"));
    public static object SanitizeUser(Dictionary<string, object?> user) => new { id = user["id"], email = user["email"], displayName = user["display_name"], roleId = user["role_id"] };
    public static Dictionary<string, object?> RecordToApi(Dictionary<string, object?> row) { row["categoryId"] = row.GetValueOrDefault("category_id"); row["departmentId"] = row.GetValueOrDefault("department_id"); row.Remove("category_id"); row.Remove("department_id"); return row; }
    public static Dictionary<string, object?> TransactionToApi(Dictionary<string, object?> row) { row["recordId"] = row.GetValueOrDefault("record_id"); row["createdAt"] = row.GetValueOrDefault("created_at"); row.Remove("record_id"); row.Remove("created_at"); return row; }
}

record SeedConfig(SeedAdmin Admin, string[] Categories, string[] Departments, SeedRecord[] Records, SeedTransaction[] Transactions);
record SeedAdmin(string Email, string Password, string DisplayName, string Role);
record SeedRecord(string Title, string Description, string Status);
record SeedTransaction(string Type, double Amount, string Note);
