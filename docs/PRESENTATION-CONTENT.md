# Presentation Content

## Project

Access Control Management System

## Slide 1: Title

Access Control Management System

Final Year Major Project using React + Tailwind, .NET C#, PostgreSQL, Swagger, Docker, and config-driven generation.

## Slide 2: Problem Statement

Manual handling of Access Control Identities, Access Control Access Requests, Access Control Devices, Access Control Incidents, and Access Control Audit Logs causes delays, duplicate entries, weak reporting, and poor tracking in the access control domain.

## Slide 3: Objectives

Provide secure login, domain workflows, analytics dashboard, reports, audit history, seed data, documented APIs, and student-ready project material.

## Slide 4: Existing System

Existing work is usually managed using paper registers, spreadsheets, or disconnected tools with limited validation and reporting.

## Slide 5: Proposed System

Access Control Management System centralizes Access Control Identities, Access Control Access Requests, Access Control Devices, Access Control Incidents, and Access Control Audit Logs in one web application with a frontend dashboard, backend REST API, and PostgreSQL storage.

## Slide 6: Technology Stack

Frontend: React + Tailwind
Backend: .NET C#
Database: PostgreSQL
API Docs: Swagger
Runtime: Docker Compose

## Slide 7: System Architecture

Browser frontend communicates with the .NET C# API. The API validates requests, applies authentication, stores data in PostgreSQL, and exposes Swagger documentation.

## Slide 8: Modules

- Dashboard
- Access Control Identities
- Access Control Access Requests
- Access Control Devices
- Access Control Incidents
- Access Control Audit Logs
- Authorize Access
- Log Incident
- Review Security Audit
- Reports
- Audit Trail

## Slide 9: Database Design

The data model includes users, roles, audit logs, and domain collections for Access Control Identities, Access Control Access Requests, Access Control Devices, Access Control Incidents, Access Control Audit Logs. Key fields include Access Control Identities with Access Control Identity Code, Access Control Identity Name, Access Control Category, Security & Access Management Owner, Access Control Identity Status, Access Control Identity Code, Access Control Access Level, Access Control Department; Access Control Access Requests with Access Control AccessRequest Code, Access Control AccessRequest Name, Access Control Category, Security & Access Management Owner, Access Control AccessRequest Status, Access Control Request Number, Access Control Requested Area, Access Control Approval Status; Access Control Devices with Access Control Device Code, Access Control Device Name, Access Control Category, Security & Access Management Owner, Access Control Device Status, Access Control Device Code, Access Control Device Type, Access Control Location; Access Control Incidents with Access Control Incident Code, Access Control Incident Name, Access Control Category, Security & Access Management Owner, Access Control Incident Status, Access Control Incident Number, Access Control Severity, Access Control Reported Date; Access Control Audit Logs with Access Control AuditLog Code, Access Control AuditLog Name, Access Control Category, Security & Access Management Owner, Access Control AuditLog Status, Access Control Audit Number, Access Control Event Type, Access Control Risk Level.

## Slide 10: Screenshots Placeholder

Use screenshots from docs/screenshots: login page, dashboard, management pages, reports, audit log, and Swagger.

## Slide 11: Testing

Testing includes backend build, frontend build, Docker config, migration, seed, health endpoint, Swagger endpoint, login API, CRUD smoke test, browser smoke test, screenshots, and uniqueness validation.

## Slide 12: Future Scope

- Authorize Access: Authorize Access for access control with clear steps, ownership, and audit-ready status updates.
- Log Incident: Log Incident for access control with clear steps, ownership, and audit-ready status updates.
- Review Security Audit: Review Security Audit for access control with clear steps, ownership, and audit-ready status updates.
- PDF/Excel export
- role-based permissions
- email/SMS notifications
- advanced analytics

## Slide 13: Conclusion

Access Control Management System is major-project ready because it includes working code, workflows, analytics scope, seed data, Docker setup, validation, browser testing, screenshots, config-driven project material, and complete submission documentation.
