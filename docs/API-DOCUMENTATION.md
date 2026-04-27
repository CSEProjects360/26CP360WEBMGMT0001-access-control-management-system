# API Documentation

The backend exposes REST APIs for Access Control Management System. Swagger documentation is available at:

```txt
http://localhost:18080/api/docs
```

## Authentication

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/api/auth/login` | Login and receive an access token |

## Common APIs

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/health` | Check backend health |
| GET | `/api/dashboard/stats` | Fetch dashboard statistics |
| GET | `/api/reports/summary` | View report summary |
| GET | `/api/audit-log` | View audit history |

## Domain APIs

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/domain/AccessControlIdentity` | List Access Control Identities |
| POST | `/api/domain/AccessControlIdentity` | Create Access Control Identities entry |
| GET | `/api/domain/AccessControlAccessRequest` | List Access Control Access Requests |
| POST | `/api/domain/AccessControlAccessRequest` | Create Access Control Access Requests entry |
| GET | `/api/domain/AccessControlDevice` | List Access Control Devices |
| POST | `/api/domain/AccessControlDevice` | Create Access Control Devices entry |
| GET | `/api/domain/AccessControlIncident` | List Access Control Incidents |
| POST | `/api/domain/AccessControlIncident` | Create Access Control Incidents entry |
| GET | `/api/domain/AccessControlAuditLog` | List Access Control Audit Logs |
| POST | `/api/domain/AccessControlAuditLog` | Create Access Control Audit Logs entry |

## Demo Login

```json
{
  "email": "admin@example.com",
  "password": "Admin@123"
}
```
