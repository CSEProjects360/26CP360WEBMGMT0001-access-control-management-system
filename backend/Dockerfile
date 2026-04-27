FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY src/StudentFactory.Api.csproj ./StudentFactory.Api.csproj
RUN dotnet restore
COPY src ./src
RUN dotnet publish ./src/StudentFactory.Api.csproj -c Release -o /out

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /out ./
COPY config ./config
EXPOSE 3000
ENTRYPOINT ["dotnet", "StudentFactory.Api.dll"]
