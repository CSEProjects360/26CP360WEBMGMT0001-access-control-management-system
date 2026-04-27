# System Architecture Diagram

```mermaid
flowchart LR
  User[User Browser] --> Frontend[React + Tailwind]
  Frontend --> API[.NET C# REST API]
  API --> DB[(PostgreSQL)]
  API --> Swagger[Swagger Docs]
  API --> Auth[JWT Auth]
```
