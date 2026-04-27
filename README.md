# Access Control Management System

`Access Control Management System` is a ready-to-run student project generated from the `management` template. It includes frontend, backend, database, Docker setup, Swagger API docs, demo login, seed data, screenshots, viva questions, project report content, and presentation material.

Project Category: `Cyber Security Project`.

This project can be used as a minor project or upgraded into a final-year major/enterprise project with custom modules, new UI, advanced reports, role permissions, payment/export modules, and complete college submission documentation.

## Features

- React + Tailwind frontend with protected dashboard
- ASP.NET Core C# backend REST API
- PostgreSQL database
- Docker Compose run system
- Swagger API documentation
- Demo admin login
- CRUD modules
- Dashboard statistics
- Reports and CSV export
- Audit log
- Seed data
- Student documentation pack
- Browser-tested demo screenshots
- Upgrade-ready custom UI design

## Project Modules

`Access Control Identities, Access Control Access Requests, Access Control Devices, Access Control Incidents, Access Control Audit Logs`

## Tech Stack

- Frontend: React + Tailwind
- Backend: ASP.NET Core C#
- Database: PostgreSQL
- API Docs: Swagger
- Runtime: Docker Compose

## Demo Login

```txt
Email: admin@example.com
Password: Admin@123
```

## Run Locally

### Prerequisites

Install these tools first:

- Git
- Docker Desktop
- Node.js 20 or newer

### Steps

```bash
git clone <your-repo-url>
cd access-control-management-system
cd backend
cp .env.example .env
docker compose up --build
```

Open:

```txt
Frontend: http://localhost:13000
Backend API: http://localhost:18080/api
Swagger Docs: http://localhost:18080/api/docs
Health Check: http://localhost:18080/api/health
```

Stop the project:

```bash
cd backend
docker compose down
```

Reset database and seed again:

```bash
cd backend
docker compose down -v
docker compose up --build
```

## Change Master Login Email And Password

Before the first run, edit:

```txt
backend/config/seed.json
```

Change this section:

```json
{
  "admin": {
    "email": "admin@example.com",
    "password": "Admin@123",
    "displayName": "System Admin",
    "role": "admin"
  }
}
```

Then run:

```bash
cd backend
docker compose up --build
```

If you already ran the project once, reset the database so the new admin user is seeded:

```bash
cd backend
docker compose down -v
docker compose up --build
```

## Student Submission Docs

Generated documentation is available in:

```txt
docs/
```

Important files:

- `SYNOPSIS.md`
- `ABSTRACT.md`
- `PROJECT-REPORT.md`
- `MAJOR-PROJECT.md`
- `PRESENTATION-CONTENT.md`
- `PRESENTATION.pptx`
- `VIVA-QUESTIONS.md`
- `TEST-CASES.md`
- `ER-DIAGRAM.md`
- `UML-DIAGRAMS.md`
- `SCREENSHOTS-CHECKLIST.md`
- `screenshots/`
- `diagrams/`

## Screenshots

Demo screenshots are stored in:

```txt
docs/screenshots/
```

Typical screenshots include login page, dashboard, list pages, forms, reports, audit log, and Swagger docs.

## Promotional Upgrade Options

Want this project upgraded so it does not look like a common downloaded project?

Available upgrades:

- Convert minor project to major project
- Convert major project to enterprise-level project
- Change complete UI theme and layout
- Add unique vector images based on your project topic
- Make the project look fresh and different from common downloaded projects
- Add project-specific modules
- Add advanced dashboard analytics
- Add role-based permissions
- Add PDF/Excel export
- Add payment, email, SMS, or notification modules
- Add custom report, synopsis, PPT, viva, and screenshots
- Prepare a complete college submission package

## Contact And Community

For upgrades and customization, contact CSEProjects360:

```txt
WhatsApp: +91 78914 45668
Website: CSEProjects360
```

[Send WhatsApp Message](https://wa.me/917891445668?text=Hello%2C%20I%20want%20to%20upgrade%20my%20student%20project%20with%20a%20unique%20design%20and%20major%20project%20features.)

[Visit CSEProjects360](https://cseprojects360.com)

Scan to message on WhatsApp:

[![WhatsApp QR Code](https://quickchart.io/qr?text=https%3A%2F%2Fwa.me%2F917891445668%3Ftext%3DHello%252C%2520I%2520want%2520to%2520upgrade%2520my%2520student%2520project%2520with%2520a%2520unique%2520design%2520and%2520major%2520project%2520features.&size=180)](https://wa.me/917891445668?text=Hello%2C%20I%20want%20to%20upgrade%20my%20student%20project%20with%20a%20unique%20design%20and%20major%20project%20features.)

Community links:

- WhatsApp Group: request the latest group invite on WhatsApp.
- WhatsApp Channel: request the latest channel link on WhatsApp.
- Telegram Group: request the latest group invite on WhatsApp.
- Telegram Channel: request the latest channel link on WhatsApp.

## Why Customize?

Many student projects look the same because they use the same template, same colors, same dashboard, and same module names. This project factory supports domain-specific modules, configurable design templates, vector illustrations, documentation, and screenshots so your project can look original and presentation-ready.

## Notes

- Change demo credentials before submission.
- Do not commit real API keys or production passwords.
- Use Docker Compose for the easiest local setup.
- If ports are busy, update `backend/.env` and run again.


## Domain-Specific Project Details

A student-ready access control generated from the management template with domain modules, seed data, reports, Swagger docs, Docker support, screenshots, viva questions, PPT content, and submission documentation.

### Target Users

- Security Admin
- Access Manager
- Compliance Officer
- System Auditor

### Domain Modules

- Access Control Identities: Access Control Identity Code, Access Control Identity Name, Access Control Category, Security & Access Management Owner, Access Control Identity Status, Access Control Identity Code, Access Control Access Level, Access Control Department
- Access Control Access Requests: Access Control AccessRequest Code, Access Control AccessRequest Name, Access Control Category, Security & Access Management Owner, Access Control AccessRequest Status, Access Control Request Number, Access Control Requested Area, Access Control Approval Status
- Access Control Devices: Access Control Device Code, Access Control Device Name, Access Control Category, Security & Access Management Owner, Access Control Device Status, Access Control Device Code, Access Control Device Type, Access Control Location
- Access Control Incidents: Access Control Incident Code, Access Control Incident Name, Access Control Category, Security & Access Management Owner, Access Control Incident Status, Access Control Incident Number, Access Control Severity, Access Control Reported Date
- Access Control Audit Logs: Access Control AuditLog Code, Access Control AuditLog Name, Access Control Category, Security & Access Management Owner, Access Control AuditLog Status, Access Control Audit Number, Access Control Event Type, Access Control Risk Level

### Workflows

- Authorize Access: Open Request -> Verify Identity -> Assign Permission -> Approve Access
- Log Incident: Capture Incident -> Assign Severity -> Notify Officer -> Start Investigation
- Review Security Audit: Open Audit Log -> Check Risk -> Add Action -> Close Review

### Demo Use Cases

- Manage access control identities for Access Control
- Track access control access requests and operational ownership
- Run authorize access workflow
- Generate access control reports and audit history

### Problem Statement

Access Control needs a focused system for access control identities, access control access requests, access control devices, access control incidents, workflows, reports, and audit visibility instead of manual spreadsheets.

### Learning Outcomes

- Access Control domain modelling
- Security & Access Management CRUD and dashboard design
- Access Control workflow automation
- Student-ready documentation, screenshots, and Docker deployment
