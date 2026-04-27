# Synopsis

## Project Title

Access Control Management System

## Project Category

Management

## Synopsis

Access Control Management System is a web-based management system designed to help users manage Access Control Identities, Access Control Access Requests, Access Control Devices, Access Control Incidents, and Access Control Audit Logs through a secure dashboard, structured CRUD workflows, reports, and audit history.

The project uses the Student Project Factory management template and adapts it for the access control domain. It includes domain-specific modules, sample seed data, dashboard statistics, API documentation, and demo credentials so students can run and explain the project confidently.

## Main Features

- Authorize Access: Authorize Access for access control with clear steps, ownership, and audit-ready status updates.
- Log Incident: Log Incident for access control with clear steps, ownership, and audit-ready status updates.
- Review Security Audit: Review Security Audit for access control with clear steps, ownership, and audit-ready status updates.

## Main Modules

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

## Technology Stack

- Frontend: React + Tailwind
- Backend: .NET C#
- Database: PostgreSQL
- API Docs: Swagger
- Runtime: Docker Compose

## Domain Entities

- Access Control Identities: Access Control Identity Code, Access Control Identity Name, Access Control Category, Security & Access Management Owner, Access Control Identity Status, Access Control Identity Code, Access Control Access Level, Access Control Department
- Access Control Access Requests: Access Control AccessRequest Code, Access Control AccessRequest Name, Access Control Category, Security & Access Management Owner, Access Control AccessRequest Status, Access Control Request Number, Access Control Requested Area, Access Control Approval Status
- Access Control Devices: Access Control Device Code, Access Control Device Name, Access Control Category, Security & Access Management Owner, Access Control Device Status, Access Control Device Code, Access Control Device Type, Access Control Location
- Access Control Incidents: Access Control Incident Code, Access Control Incident Name, Access Control Category, Security & Access Management Owner, Access Control Incident Status, Access Control Incident Number, Access Control Severity, Access Control Reported Date
- Access Control Audit Logs: Access Control AuditLog Code, Access Control AuditLog Name, Access Control Category, Security & Access Management Owner, Access Control AuditLog Status, Access Control Audit Number, Access Control Event Type, Access Control Risk Level

## Domain Workflows

- Authorize Access: Open Request -> Verify Identity -> Assign Permission -> Approve Access
- Log Incident: Capture Incident -> Assign Severity -> Notify Officer -> Start Investigation
- Review Security Audit: Open Audit Log -> Check Risk -> Add Action -> Close Review

## Demo Access

```txt
Email: admin@example.com
Password: Admin@123
```
