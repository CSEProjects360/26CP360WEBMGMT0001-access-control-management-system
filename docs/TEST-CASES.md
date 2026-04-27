# Test Cases

| Test Case ID | Scenario | Steps | Expected Result |
| --- | --- | --- | --- |
| TC-001 | Admin login | Enter valid demo credentials and submit | Dashboard opens successfully |
| TC-002 | Invalid login | Enter wrong password and submit | Error message is displayed |
| TC-003 | View dashboard | Login and open dashboard | Statistics for Active Identities, Pending Access, Open Incidents, and Audit Findings are shown |
| TC-004 | Create AccessControlIdentity | Open Access Control Identities page and submit valid form | New AccessControlIdentity entry is created |
| TC-005 | Edit record | Update an existing Access Control Identities item | Updated values are saved |
| TC-006 | Delete record | Delete an existing item after confirmation | Item is removed or marked inactive |
| TC-007 | Search Access Control Identities | Search by domain fields | Matching Access Control Identities are displayed |
| TC-008 | View reports | Open reports page | Summary report loads correctly |
| TC-009 | Swagger check | Open `/api/docs` | Swagger documentation is visible |
| TC-010 | Health check | Call `/api/health` | API returns healthy status |

## Domain-Specific Test Focus

The tester should verify that seed data correctly represents domain records with code, title, description, and status, staff users and administrators, and Authorize Access, Log Incident, Review Security Audit.
