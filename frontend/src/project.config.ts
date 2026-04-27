export const projectConfig: any = {
  "projectName": "access-control-management-system",
  "displayName": "Access Control",
  "shortDescription": "Access Control for security & access management workflows, dashboard tracking, domain records, reports, and audit history.",
  "longDescription": "A student-ready access control generated from the management template with domain modules, seed data, reports, Swagger docs, Docker support, screenshots, viva questions, PPT content, and submission documentation.",
  "targetUsers": [
    "Security Admin",
    "Access Manager",
    "Compliance Officer",
    "System Auditor"
  ],
  "useCases": [
    "Manage access control identities for Access Control",
    "Track access control access requests and operational ownership",
    "Run authorize access workflow",
    "Generate access control reports and audit history"
  ],
  "projectCategory": "security",
  "projectCategoryName": "Cyber Security Project",
  "category": "Management",
  "layoutVariant": "process-board",
  "visualIdentity": {
    "icon": "ShieldCheck",
    "heroTitle": "Access Control Workspace",
    "heroSubtitle": "Access Control workspace for access control identities, access control access requests, access control devices, access control incidents, guided workflows, reports, and audit history.",
    "vectorTitle": "Access Control vector dashboard",
    "vectorMotifs": [
      "Access Control Identities",
      "Access Control Access Requests",
      "Access Control Devices",
      "Access Control Incidents",
      "Access Control Audit Logs"
    ],
    "badge": "Security Major Project",
    "vectorStyle": "security-access-dashboard"
  },
  "sidebarGroups": [
    {
      "group": "Access Operations",
      "items": [
        {
          "label": "Dashboard",
          "icon": "Shield",
          "route": "/dashboard",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 1
        },
        {
          "label": "Access Control Identities",
          "icon": "IdCard",
          "route": "/access-control-identities",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 2
        },
        {
          "label": "Access Control Access Requests",
          "icon": "KeyRound",
          "route": "/access-control-access-requests",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 3
        },
        {
          "label": "Access Control Devices",
          "icon": "ScanLine",
          "route": "/access-control-devices",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 4
        },
        {
          "label": "Access Control Incidents",
          "icon": "TriangleAlert",
          "route": "/access-control-incidents",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 5
        },
        {
          "label": "Access Control Audit Logs",
          "icon": "History",
          "route": "/access-control-audit-logs",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 6
        },
        {
          "label": "Authorize Access",
          "icon": "Siren",
          "route": "/access-control-workflows/authorize-access",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 7
        },
        {
          "label": "Log Incident",
          "icon": "Siren",
          "route": "/access-control-workflows/log-incident",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 8
        },
        {
          "label": "Review Security Audit",
          "icon": "Siren",
          "route": "/access-control-workflows/review-security-audit",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 9
        },
        {
          "label": "Reports",
          "icon": "ShieldAlert",
          "route": "/reports",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 10
        },
        {
          "label": "Audit Trail",
          "icon": "History",
          "route": "/audit-logs",
          "roles": [
            "admin",
            "operator"
          ],
          "order": 11
        }
      ]
    }
  ],
  "entities": [
    {
      "name": "AccessControlIdentity",
      "plural": "Access Control Identities",
      "route": "/access-control-identities",
      "icon": "IdCard",
      "fields": [
        {
          "name": "identityCode",
          "label": "Access Control Identity Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Access Control Identity Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Access Control Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Security & Access Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Access Control Identity Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "identityCode",
          "label": "Access Control Identity Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "accessLevel",
          "label": "Access Control Access Level",
          "type": "number",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "department",
          "label": "Access Control Department",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending",
            "Approved",
            "Closed"
          ]
        }
      ],
      "relationships": [],
      "page": {
        "title": "Access Control Identities",
        "createAction": "Add Access Control Identity",
        "intro": "Access Control uses access control identities to handle access control operations with domain-specific tracking.",
        "searchPlaceholder": "Search access control identities by code, name, category, owner, or status...",
        "emptyState": "No access control identities have been added yet.",
        "successMessage": "Access Control Identity saved successfully.",
        "validationMessage": "Please enter valid access control identities details."
      },
      "seed": [
        {
          "identityCode": "ACI-2026-0001",
          "name": "Aarav Sharma",
          "category": "Access Operations",
          "ownerName": "Aarav Sharma",
          "status": "Active",
          "accessLevel": 14,
          "department": "Access Operations",
          "title": "Access Control Incident Alert"
        },
        {
          "identityCode": "ACI-2026-0002",
          "name": "Diya Patel",
          "category": "Access Service",
          "ownerName": "Diya Patel",
          "status": "Pending Review",
          "accessLevel": 21,
          "department": "Access Service",
          "title": "Access Control Audit Log Review"
        },
        {
          "identityCode": "ACI-2026-0003",
          "name": "Rohan Mehta",
          "category": "Access Review",
          "ownerName": "Rohan Mehta",
          "status": "Approved",
          "accessLevel": 28,
          "department": "Access Review",
          "title": "Access Control Threat Signal"
        },
        {
          "identityCode": "ACI-2026-0004",
          "name": "Ananya Rao",
          "category": "Access Support",
          "ownerName": "Ananya Rao",
          "status": "In Progress",
          "accessLevel": 35,
          "department": "Access Support",
          "title": "Access Control Access Request"
        },
        {
          "identityCode": "ACI-2026-0005",
          "name": "Kabir Singh",
          "category": "Access Operations",
          "ownerName": "Kabir Singh",
          "status": "Closed",
          "accessLevel": 42,
          "department": "Access Operations",
          "title": "Access Control Incident Alert"
        },
        {
          "identityCode": "ACI-2026-0006",
          "name": "Isha Nair",
          "category": "Access Service",
          "ownerName": "Isha Nair",
          "status": "Escalated",
          "accessLevel": 49,
          "department": "Access Service",
          "title": "Access Control Audit Log Review"
        },
        {
          "identityCode": "ACI-2026-0007",
          "name": "Arjun Verma",
          "category": "Access Review",
          "ownerName": "Arjun Verma",
          "status": "Active",
          "accessLevel": 56,
          "department": "Access Review",
          "title": "Access Control Threat Signal"
        },
        {
          "identityCode": "ACI-2026-0008",
          "name": "Meera Iyer",
          "category": "Access Support",
          "ownerName": "Meera Iyer",
          "status": "Pending Review",
          "accessLevel": 63,
          "department": "Access Support",
          "title": "Access Control Access Request"
        },
        {
          "identityCode": "ACI-2026-0009",
          "name": "Vivaan Joshi",
          "category": "Access Operations",
          "ownerName": "Vivaan Joshi",
          "status": "Approved",
          "accessLevel": 70,
          "department": "Access Operations",
          "title": "Access Control Incident Alert"
        },
        {
          "identityCode": "ACI-2026-0010",
          "name": "Sara Khan",
          "category": "Access Service",
          "ownerName": "Sara Khan",
          "status": "In Progress",
          "accessLevel": 77,
          "department": "Access Service",
          "title": "Access Control Audit Log Review"
        }
      ]
    },
    {
      "name": "AccessControlAccessRequest",
      "plural": "Access Control Access Requests",
      "route": "/access-control-access-requests",
      "icon": "KeyRound",
      "fields": [
        {
          "name": "accessRequestCode",
          "label": "Access Control AccessRequest Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Access Control AccessRequest Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Access Control Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Security & Access Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Access Control AccessRequest Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "requestNo",
          "label": "Access Control Request Number",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "requestedArea",
          "label": "Access Control Requested Area",
          "type": "number",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "approvalStatus",
          "label": "Access Control Approval Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending",
            "Approved",
            "Closed"
          ]
        }
      ],
      "relationships": [],
      "page": {
        "title": "Access Control Access Requests",
        "createAction": "Manage Access Control AccessRequest",
        "intro": "Access Control uses access control access requests to handle access control operations with domain-specific tracking.",
        "searchPlaceholder": "Search access control access requests by code, name, category, owner, or status...",
        "emptyState": "No access control access requests have been added yet.",
        "successMessage": "Access Control Access Request saved successfully.",
        "validationMessage": "Please enter valid access control access requests details."
      },
      "seed": [
        {
          "accessRequestCode": "ACAR-2026-0001",
          "name": "Aarav Sharma",
          "category": "Access Operations",
          "ownerName": "Aarav Sharma",
          "status": "Active",
          "requestNo": "ACAR-2026-0001",
          "requestedArea": "Pune",
          "approvalStatus": "Active",
          "title": "Access Control Incident Alert"
        },
        {
          "accessRequestCode": "ACAR-2026-0002",
          "name": "Diya Patel",
          "category": "Access Service",
          "ownerName": "Diya Patel",
          "status": "Pending Review",
          "requestNo": "ACAR-2026-0002",
          "requestedArea": "Mumbai",
          "approvalStatus": "Pending Review",
          "title": "Access Control Audit Log Review"
        },
        {
          "accessRequestCode": "ACAR-2026-0003",
          "name": "Rohan Mehta",
          "category": "Access Review",
          "ownerName": "Rohan Mehta",
          "status": "Approved",
          "requestNo": "ACAR-2026-0003",
          "requestedArea": "Bengaluru",
          "approvalStatus": "Approved",
          "title": "Access Control Threat Signal"
        },
        {
          "accessRequestCode": "ACAR-2026-0004",
          "name": "Ananya Rao",
          "category": "Access Support",
          "ownerName": "Ananya Rao",
          "status": "In Progress",
          "requestNo": "ACAR-2026-0004",
          "requestedArea": "Hyderabad",
          "approvalStatus": "In Progress",
          "title": "Access Control Access Request"
        },
        {
          "accessRequestCode": "ACAR-2026-0005",
          "name": "Kabir Singh",
          "category": "Access Operations",
          "ownerName": "Kabir Singh",
          "status": "Closed",
          "requestNo": "ACAR-2026-0005",
          "requestedArea": "Ahmedabad",
          "approvalStatus": "Closed",
          "title": "Access Control Incident Alert"
        },
        {
          "accessRequestCode": "ACAR-2026-0006",
          "name": "Isha Nair",
          "category": "Access Service",
          "ownerName": "Isha Nair",
          "status": "Escalated",
          "requestNo": "ACAR-2026-0006",
          "requestedArea": "Jaipur",
          "approvalStatus": "Escalated",
          "title": "Access Control Audit Log Review"
        }
      ]
    },
    {
      "name": "AccessControlDevice",
      "plural": "Access Control Devices",
      "route": "/access-control-devices",
      "icon": "ScanLine",
      "fields": [
        {
          "name": "deviceCode",
          "label": "Access Control Device Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Access Control Device Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Access Control Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Security & Access Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Access Control Device Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "deviceCode",
          "label": "Access Control Device Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "deviceType",
          "label": "Access Control Device Type",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "location",
          "label": "Access Control Location",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        }
      ],
      "relationships": [],
      "page": {
        "title": "Access Control Devices",
        "createAction": "Manage Access Control Device",
        "intro": "Access Control uses access control devices to handle access control operations with domain-specific tracking.",
        "searchPlaceholder": "Search access control devices by code, name, category, owner, or status...",
        "emptyState": "No access control devices have been added yet.",
        "successMessage": "Access Control Device saved successfully.",
        "validationMessage": "Please enter valid access control devices details."
      },
      "seed": [
        {
          "deviceCode": "ACD-2026-0001",
          "name": "Aarav Sharma",
          "category": "Access Operations",
          "ownerName": "Aarav Sharma",
          "status": "Active",
          "deviceType": "Access Operations",
          "location": "Pune",
          "title": "Access Control Incident Alert"
        },
        {
          "deviceCode": "ACD-2026-0002",
          "name": "Diya Patel",
          "category": "Access Service",
          "ownerName": "Diya Patel",
          "status": "Pending Review",
          "deviceType": "Access Service",
          "location": "Mumbai",
          "title": "Access Control Audit Log Review"
        },
        {
          "deviceCode": "ACD-2026-0003",
          "name": "Rohan Mehta",
          "category": "Access Review",
          "ownerName": "Rohan Mehta",
          "status": "Approved",
          "deviceType": "Access Review",
          "location": "Bengaluru",
          "title": "Access Control Threat Signal"
        },
        {
          "deviceCode": "ACD-2026-0004",
          "name": "Ananya Rao",
          "category": "Access Support",
          "ownerName": "Ananya Rao",
          "status": "In Progress",
          "deviceType": "Access Support",
          "location": "Hyderabad",
          "title": "Access Control Access Request"
        },
        {
          "deviceCode": "ACD-2026-0005",
          "name": "Kabir Singh",
          "category": "Access Operations",
          "ownerName": "Kabir Singh",
          "status": "Closed",
          "deviceType": "Access Operations",
          "location": "Ahmedabad",
          "title": "Access Control Incident Alert"
        },
        {
          "deviceCode": "ACD-2026-0006",
          "name": "Isha Nair",
          "category": "Access Service",
          "ownerName": "Isha Nair",
          "status": "Escalated",
          "deviceType": "Access Service",
          "location": "Jaipur",
          "title": "Access Control Audit Log Review"
        }
      ]
    },
    {
      "name": "AccessControlIncident",
      "plural": "Access Control Incidents",
      "route": "/access-control-incidents",
      "icon": "TriangleAlert",
      "fields": [
        {
          "name": "incidentCode",
          "label": "Access Control Incident Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Access Control Incident Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Access Control Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Security & Access Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Access Control Incident Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "incidentNo",
          "label": "Access Control Incident Number",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "severity",
          "label": "Access Control Severity",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "reportedDate",
          "label": "Access Control Reported Date",
          "type": "date",
          "required": true,
          "table": true,
          "form": true
        }
      ],
      "relationships": [],
      "page": {
        "title": "Access Control Incidents",
        "createAction": "Manage Access Control Incident",
        "intro": "Access Control uses access control incidents to handle access control operations with domain-specific tracking.",
        "searchPlaceholder": "Search access control incidents by code, name, category, owner, or status...",
        "emptyState": "No access control incidents have been added yet.",
        "successMessage": "Access Control Incident saved successfully.",
        "validationMessage": "Please enter valid access control incidents details."
      },
      "seed": [
        {
          "incidentCode": "ACI-2026-0001",
          "name": "Aarav Sharma",
          "category": "Access Operations",
          "ownerName": "Aarav Sharma",
          "status": "Active",
          "incidentNo": "ACI-2026-0001",
          "severity": "High",
          "reportedDate": "2026-05-01",
          "title": "Access Control Incident Alert"
        },
        {
          "incidentCode": "ACI-2026-0002",
          "name": "Diya Patel",
          "category": "Access Service",
          "ownerName": "Diya Patel",
          "status": "Pending Review",
          "incidentNo": "ACI-2026-0002",
          "severity": "Medium",
          "reportedDate": "2026-05-02",
          "title": "Access Control Audit Log Review"
        },
        {
          "incidentCode": "ACI-2026-0003",
          "name": "Rohan Mehta",
          "category": "Access Review",
          "ownerName": "Rohan Mehta",
          "status": "Approved",
          "incidentNo": "ACI-2026-0003",
          "severity": "Low",
          "reportedDate": "2026-05-03",
          "title": "Access Control Threat Signal"
        },
        {
          "incidentCode": "ACI-2026-0004",
          "name": "Ananya Rao",
          "category": "Access Support",
          "ownerName": "Ananya Rao",
          "status": "In Progress",
          "incidentNo": "ACI-2026-0004",
          "severity": "Critical",
          "reportedDate": "2026-05-04",
          "title": "Access Control Access Request"
        },
        {
          "incidentCode": "ACI-2026-0005",
          "name": "Kabir Singh",
          "category": "Access Operations",
          "ownerName": "Kabir Singh",
          "status": "Closed",
          "incidentNo": "ACI-2026-0005",
          "severity": "High",
          "reportedDate": "2026-05-05",
          "title": "Access Control Incident Alert"
        },
        {
          "incidentCode": "ACI-2026-0006",
          "name": "Isha Nair",
          "category": "Access Service",
          "ownerName": "Isha Nair",
          "status": "Escalated",
          "incidentNo": "ACI-2026-0006",
          "severity": "Medium",
          "reportedDate": "2026-05-06",
          "title": "Access Control Audit Log Review"
        }
      ]
    },
    {
      "name": "AccessControlAuditLog",
      "plural": "Access Control Audit Logs",
      "route": "/access-control-audit-logs",
      "icon": "History",
      "fields": [
        {
          "name": "auditLogCode",
          "label": "Access Control AuditLog Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Access Control AuditLog Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Access Control Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Security & Access Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Access Control AuditLog Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "auditNo",
          "label": "Access Control Audit Number",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "eventType",
          "label": "Access Control Event Type",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "riskLevel",
          "label": "Access Control Risk Level",
          "type": "number",
          "required": true,
          "table": true,
          "form": true
        }
      ],
      "relationships": [],
      "page": {
        "title": "Access Control Audit Logs",
        "createAction": "Manage Access Control AuditLog",
        "intro": "Access Control uses access control audit logs to handle access control operations with domain-specific tracking.",
        "searchPlaceholder": "Search access control audit logs by code, name, category, owner, or status...",
        "emptyState": "No access control audit logs have been added yet.",
        "successMessage": "Access Control Audit Log saved successfully.",
        "validationMessage": "Please enter valid access control audit logs details."
      },
      "seed": [
        {
          "auditLogCode": "ACAL-2026-0001",
          "name": "Aarav Sharma",
          "category": "Access Operations",
          "ownerName": "Aarav Sharma",
          "status": "Active",
          "auditNo": "ACAL-2026-0001",
          "eventType": "Access Operations",
          "riskLevel": "High",
          "title": "Access Control Incident Alert"
        },
        {
          "auditLogCode": "ACAL-2026-0002",
          "name": "Diya Patel",
          "category": "Access Service",
          "ownerName": "Diya Patel",
          "status": "Pending Review",
          "auditNo": "ACAL-2026-0002",
          "eventType": "Access Service",
          "riskLevel": "Medium",
          "title": "Access Control Audit Log Review"
        },
        {
          "auditLogCode": "ACAL-2026-0003",
          "name": "Rohan Mehta",
          "category": "Access Review",
          "ownerName": "Rohan Mehta",
          "status": "Approved",
          "auditNo": "ACAL-2026-0003",
          "eventType": "Access Review",
          "riskLevel": "Low",
          "title": "Access Control Threat Signal"
        },
        {
          "auditLogCode": "ACAL-2026-0004",
          "name": "Ananya Rao",
          "category": "Access Support",
          "ownerName": "Ananya Rao",
          "status": "In Progress",
          "auditNo": "ACAL-2026-0004",
          "eventType": "Access Support",
          "riskLevel": "Critical",
          "title": "Access Control Access Request"
        },
        {
          "auditLogCode": "ACAL-2026-0005",
          "name": "Kabir Singh",
          "category": "Access Operations",
          "ownerName": "Kabir Singh",
          "status": "Closed",
          "auditNo": "ACAL-2026-0005",
          "eventType": "Access Operations",
          "riskLevel": "High",
          "title": "Access Control Incident Alert"
        },
        {
          "auditLogCode": "ACAL-2026-0006",
          "name": "Isha Nair",
          "category": "Access Service",
          "ownerName": "Isha Nair",
          "status": "Escalated",
          "auditNo": "ACAL-2026-0006",
          "eventType": "Access Service",
          "riskLevel": "Medium",
          "title": "Access Control Audit Log Review"
        }
      ]
    }
  ],
  "workflows": [
    {
      "name": "AuthorizeAccess",
      "label": "Authorize Access",
      "description": "Authorize Access for access control with clear steps, ownership, and audit-ready status updates.",
      "route": "/access-control-workflows/authorize-access",
      "steps": [
        "Open Request",
        "Verify Identity",
        "Assign Permission",
        "Approve Access"
      ],
      "actions": [
        "Open Request",
        "Verify Identity",
        "Assign Permission",
        "Approve Access"
      ],
      "serviceMethod": "authorizeAccess",
      "pluginHook": "generateWorkflowActions"
    },
    {
      "name": "LogIncident",
      "label": "Log Incident",
      "description": "Log Incident for access control with clear steps, ownership, and audit-ready status updates.",
      "route": "/access-control-workflows/log-incident",
      "steps": [
        "Capture Incident",
        "Assign Severity",
        "Notify Officer",
        "Start Investigation"
      ],
      "actions": [
        "Capture Incident",
        "Assign Severity",
        "Notify Officer",
        "Start Investigation"
      ],
      "serviceMethod": "logIncident",
      "pluginHook": "generateWorkflowActions"
    },
    {
      "name": "ReviewSecurityAudit",
      "label": "Review Security Audit",
      "description": "Review Security Audit for access control with clear steps, ownership, and audit-ready status updates.",
      "route": "/access-control-workflows/review-security-audit",
      "steps": [
        "Open Audit Log",
        "Check Risk",
        "Add Action",
        "Close Review"
      ],
      "actions": [
        "Open Audit Log",
        "Check Risk",
        "Add Action",
        "Close Review"
      ],
      "serviceMethod": "reviewSecurityAudit",
      "pluginHook": "generateWorkflowActions"
    }
  ],
  "pluginHooks": [
    "beforeCreateEntity",
    "afterCreateEntity",
    "calculateDerivedFields",
    "generateWorkflowActions",
    "seedDomainData"
  ],
  "theme": {
    "accent": "security-access-access-control",
    "sidebarTitle": "Access Control for security & access management workflows, dashboard tracking, domain records, reports, and audit history."
  },
  "themeConfig": {
    "projectName": "access-control",
    "displayName": "Access Control",
    "domain": "security-access",
    "designTemplateId": "security-access-process-board",
    "designTemplateName": "Access Control Process Board",
    "style": "security-access-major-project",
    "styleDescription": "Access Control layout with security-access-dashboard visuals and domain-specific controls.",
    "colors": {
      "primary": "#111827",
      "accent": "#dc2626",
      "background": "#f9fafb",
      "surface": "#ffffff",
      "muted": "#e5e7eb",
      "text": "#111827"
    },
    "radius": "10px",
    "density": "comfortable",
    "vector": "security-access-dashboard",
    "vectorFamily": "security-access-access-control",
    "illustration": {
      "title": "Access Control visual",
      "motifs": [
        "Access Control Identities",
        "Access Control Access Requests",
        "Access Control Devices",
        "Access Control Incidents"
      ]
    },
    "sidebarVariant": "process-board",
    "cardStyle": "insight-panel",
    "layout": {
      "variant": "process-board"
    }
  },
  "dashboardTitle": "Access Control Command Center",
  "dashboardIntro": "Access Control shows access control identities, access control access requests, access control devices, access control incidents, workflows, alerts, and reports.",
  "workflowPanelTitle": "Access Control Workflow Board",
  "tableSearchPlaceholder": "Search access control identities, access control access requests, access control devices...",
  "emptyState": "No access control identities found for this filter.",
  "navigationLabels": [
    {
      "to": "/dashboard",
      "label": "Dashboard",
      "icon": "Shield",
      "group": "Access Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/access-control-identities",
      "label": "Access Control Identities",
      "icon": "IdCard",
      "group": "Access Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/access-control-access-requests",
      "label": "Access Control Access Requests",
      "icon": "KeyRound",
      "group": "Access Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/access-control-devices",
      "label": "Access Control Devices",
      "icon": "ScanLine",
      "group": "Access Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/access-control-incidents",
      "label": "Access Control Incidents",
      "icon": "TriangleAlert",
      "group": "Access Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/access-control-audit-logs",
      "label": "Access Control Audit Logs",
      "icon": "History",
      "group": "Access Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/access-control-workflows/authorize-access",
      "label": "Authorize Access",
      "icon": "Siren",
      "group": "Access Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/access-control-workflows/log-incident",
      "label": "Log Incident",
      "icon": "Siren",
      "group": "Access Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/access-control-workflows/review-security-audit",
      "label": "Review Security Audit",
      "icon": "Siren",
      "group": "Access Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/reports",
      "label": "Reports",
      "icon": "ShieldAlert",
      "group": "Access Operations",
      "roles": [
        "admin",
        "operator"
      ]
    },
    {
      "to": "/audit-logs",
      "label": "Audit Trail",
      "icon": "History",
      "group": "Access Operations",
      "roles": [
        "admin",
        "operator"
      ]
    }
  ],
  "dashboardCards": [
    {
      "key": "domain:AccessControlIdentity",
      "title": "Active Identities",
      "helper": "count metric from AccessControlIdentity",
      "sourceEntity": "AccessControlIdentity",
      "metric": "count",
      "value": "28"
    },
    {
      "key": "domain:AccessControlAccessRequest",
      "title": "Pending Access",
      "helper": "pendingCount metric from AccessControlAccessRequest",
      "sourceEntity": "AccessControlAccessRequest",
      "metric": "pendingCount",
      "value": "32"
    },
    {
      "key": "domain:AccessControlDevice",
      "title": "Open Incidents",
      "helper": "sumValue metric from AccessControlDevice",
      "sourceEntity": "AccessControlDevice",
      "metric": "sumValue",
      "value": "15"
    },
    {
      "key": "domain:AccessControlIncident",
      "title": "Audit Findings",
      "helper": "todayCount metric from AccessControlIncident",
      "sourceEntity": "AccessControlIncident",
      "metric": "todayCount",
      "value": "42"
    }
  ],
  "domainModules": [
    {
      "title": "Access Control Identities",
      "description": "Access Control Identities module with Access Control Identity Code, Access Control Identity Name, Access Control Category, Security & Access Management Owner.",
      "metric": "31",
      "tone": "blue"
    },
    {
      "title": "Access Control Access Requests",
      "description": "Access Control Access Requests module with Access Control AccessRequest Code, Access Control AccessRequest Name, Access Control Category, Security & Access Management Owner.",
      "metric": "38",
      "tone": "emerald"
    },
    {
      "title": "Access Control Devices",
      "description": "Access Control Devices module with Access Control Device Code, Access Control Device Name, Access Control Category, Security & Access Management Owner.",
      "metric": "33",
      "tone": "amber"
    },
    {
      "title": "Access Control Incidents",
      "description": "Access Control Incidents module with Access Control Incident Code, Access Control Incident Name, Access Control Category, Security & Access Management Owner.",
      "metric": "31",
      "tone": "rose"
    },
    {
      "title": "Access Control Audit Logs",
      "description": "Access Control Audit Logs module with Access Control AuditLog Code, Access Control AuditLog Name, Access Control Category, Security & Access Management Owner.",
      "metric": "36",
      "tone": "violet"
    }
  ],
  "workflowSteps": [
    "Open Request",
    "Verify Identity",
    "Assign Permission",
    "Approve Access"
  ],
  "quickActions": [
    "Authorize Access",
    "Log Incident",
    "Review Security Audit"
  ],
  "insightPanels": [
    {
      "title": "Authorize Access",
      "value": "16",
      "description": "Authorize Access for access control with clear steps, ownership, and audit-ready status updates."
    },
    {
      "title": "Log Incident",
      "value": "18",
      "description": "Log Incident for access control with clear steps, ownership, and audit-ready status updates."
    },
    {
      "title": "Review Security Audit",
      "value": "20",
      "description": "Review Security Audit for access control with clear steps, ownership, and audit-ready status updates."
    }
  ],
  "formSchema": [
    {
      "name": "identityCode",
      "label": "Access Control Identity Code",
      "type": "string",
      "required": true,
      "table": true,
      "form": true,
      "unique": true
    },
    {
      "name": "name",
      "label": "Access Control Identity Name",
      "type": "string",
      "required": true,
      "table": true,
      "form": true
    },
    {
      "name": "category",
      "label": "Access Control Category",
      "type": "string",
      "required": true,
      "table": true,
      "form": true
    },
    {
      "name": "ownerName",
      "label": "Security & Access Management Owner",
      "type": "string",
      "required": true,
      "table": true,
      "form": true
    },
    {
      "name": "status",
      "label": "Access Control Identity Status",
      "type": "select",
      "required": true,
      "table": true,
      "form": true,
      "options": [
        "Active",
        "Pending Review",
        "Approved",
        "Closed"
      ]
    },
    {
      "name": "identityCode",
      "label": "Access Control Identity Code",
      "type": "string",
      "required": true,
      "table": true,
      "form": true
    },
    {
      "name": "accessLevel",
      "label": "Access Control Access Level",
      "type": "number",
      "required": true,
      "table": true,
      "form": true
    },
    {
      "name": "department",
      "label": "Access Control Department",
      "type": "select",
      "required": true,
      "table": true,
      "form": true,
      "options": [
        "Active",
        "Pending",
        "Approved",
        "Closed"
      ]
    }
  ],
  "recordPage": {
    "entityName": "AccessControlIdentity",
    "title": "Access Control Identities",
    "route": "/access-control-identities",
    "createAction": "Add Access Control Identity",
    "intro": "Access Control uses access control identities to handle access control operations with domain-specific tracking.",
    "searchPlaceholder": "Search access control identities by code, name, category, owner, or status...",
    "emptyState": "No access control identities have been added yet.",
    "fields": [
      {
        "name": "identityCode",
        "label": "Access Control Identity Code",
        "type": "string",
        "required": true,
        "table": true,
        "form": true,
        "unique": true
      },
      {
        "name": "name",
        "label": "Access Control Identity Name",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "category",
        "label": "Access Control Category",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "ownerName",
        "label": "Security & Access Management Owner",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "status",
        "label": "Access Control Identity Status",
        "type": "select",
        "required": true,
        "table": true,
        "form": true,
        "options": [
          "Active",
          "Pending Review",
          "Approved",
          "Closed"
        ]
      },
      {
        "name": "identityCode",
        "label": "Access Control Identity Code",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "accessLevel",
        "label": "Access Control Access Level",
        "type": "number",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "department",
        "label": "Access Control Department",
        "type": "select",
        "required": true,
        "table": true,
        "form": true,
        "options": [
          "Active",
          "Pending",
          "Approved",
          "Closed"
        ]
      }
    ],
    "columns": [
      {
        "key": "identityCode",
        "label": "Access Control Identity Code"
      },
      {
        "key": "name",
        "label": "Access Control Identity Name"
      },
      {
        "key": "category",
        "label": "Access Control Category"
      },
      {
        "key": "ownerName",
        "label": "Security & Access Management Owner"
      },
      {
        "key": "status",
        "label": "Access Control Identity Status"
      },
      {
        "key": "identityCode",
        "label": "Access Control Identity Code"
      },
      {
        "key": "accessLevel",
        "label": "Access Control Access Level"
      },
      {
        "key": "department",
        "label": "Access Control Department"
      }
    ]
  },
  "transactionPage": {
    "entityName": "AccessControlAccessRequest",
    "title": "Access Control Access Requests",
    "route": "/access-control-access-requests",
    "createAction": "Manage Access Control AccessRequest",
    "intro": "Access Control uses access control access requests to handle access control operations with domain-specific tracking.",
    "searchPlaceholder": "Search access control access requests by code, name, category, owner, or status...",
    "emptyState": "No access control access requests have been added yet.",
    "fields": [
      {
        "name": "accessRequestCode",
        "label": "Access Control AccessRequest Code",
        "type": "string",
        "required": true,
        "table": true,
        "form": true,
        "unique": true
      },
      {
        "name": "name",
        "label": "Access Control AccessRequest Name",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "category",
        "label": "Access Control Category",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "ownerName",
        "label": "Security & Access Management Owner",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "status",
        "label": "Access Control AccessRequest Status",
        "type": "select",
        "required": true,
        "table": true,
        "form": true,
        "options": [
          "Active",
          "Pending Review",
          "Approved",
          "Closed"
        ]
      },
      {
        "name": "requestNo",
        "label": "Access Control Request Number",
        "type": "string",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "requestedArea",
        "label": "Access Control Requested Area",
        "type": "number",
        "required": true,
        "table": true,
        "form": true
      },
      {
        "name": "approvalStatus",
        "label": "Access Control Approval Status",
        "type": "select",
        "required": true,
        "table": true,
        "form": true,
        "options": [
          "Active",
          "Pending",
          "Approved",
          "Closed"
        ]
      }
    ],
    "columns": [
      {
        "key": "accessRequestCode",
        "label": "Access Control AccessRequest Code"
      },
      {
        "key": "name",
        "label": "Access Control AccessRequest Name"
      },
      {
        "key": "category",
        "label": "Access Control Category"
      },
      {
        "key": "ownerName",
        "label": "Security & Access Management Owner"
      },
      {
        "key": "status",
        "label": "Access Control AccessRequest Status"
      },
      {
        "key": "requestNo",
        "label": "Access Control Request Number"
      },
      {
        "key": "requestedArea",
        "label": "Access Control Requested Area"
      },
      {
        "key": "approvalStatus",
        "label": "Access Control Approval Status"
      }
    ]
  },
  "entityPages": {
    "AccessControlIdentity": {
      "entityName": "AccessControlIdentity",
      "title": "Access Control Identities",
      "route": "/access-control-identities",
      "createAction": "Add Access Control Identity",
      "intro": "Access Control uses access control identities to handle access control operations with domain-specific tracking.",
      "searchPlaceholder": "Search access control identities by code, name, category, owner, or status...",
      "emptyState": "No access control identities have been added yet.",
      "fields": [
        {
          "name": "identityCode",
          "label": "Access Control Identity Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Access Control Identity Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Access Control Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Security & Access Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Access Control Identity Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "identityCode",
          "label": "Access Control Identity Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "accessLevel",
          "label": "Access Control Access Level",
          "type": "number",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "department",
          "label": "Access Control Department",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending",
            "Approved",
            "Closed"
          ]
        }
      ],
      "columns": [
        {
          "key": "identityCode",
          "label": "Access Control Identity Code"
        },
        {
          "key": "name",
          "label": "Access Control Identity Name"
        },
        {
          "key": "category",
          "label": "Access Control Category"
        },
        {
          "key": "ownerName",
          "label": "Security & Access Management Owner"
        },
        {
          "key": "status",
          "label": "Access Control Identity Status"
        },
        {
          "key": "identityCode",
          "label": "Access Control Identity Code"
        },
        {
          "key": "accessLevel",
          "label": "Access Control Access Level"
        },
        {
          "key": "department",
          "label": "Access Control Department"
        }
      ]
    },
    "AccessControlAccessRequest": {
      "entityName": "AccessControlAccessRequest",
      "title": "Access Control Access Requests",
      "route": "/access-control-access-requests",
      "createAction": "Manage Access Control AccessRequest",
      "intro": "Access Control uses access control access requests to handle access control operations with domain-specific tracking.",
      "searchPlaceholder": "Search access control access requests by code, name, category, owner, or status...",
      "emptyState": "No access control access requests have been added yet.",
      "fields": [
        {
          "name": "accessRequestCode",
          "label": "Access Control AccessRequest Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Access Control AccessRequest Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Access Control Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Security & Access Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Access Control AccessRequest Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "requestNo",
          "label": "Access Control Request Number",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "requestedArea",
          "label": "Access Control Requested Area",
          "type": "number",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "approvalStatus",
          "label": "Access Control Approval Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending",
            "Approved",
            "Closed"
          ]
        }
      ],
      "columns": [
        {
          "key": "accessRequestCode",
          "label": "Access Control AccessRequest Code"
        },
        {
          "key": "name",
          "label": "Access Control AccessRequest Name"
        },
        {
          "key": "category",
          "label": "Access Control Category"
        },
        {
          "key": "ownerName",
          "label": "Security & Access Management Owner"
        },
        {
          "key": "status",
          "label": "Access Control AccessRequest Status"
        },
        {
          "key": "requestNo",
          "label": "Access Control Request Number"
        },
        {
          "key": "requestedArea",
          "label": "Access Control Requested Area"
        },
        {
          "key": "approvalStatus",
          "label": "Access Control Approval Status"
        }
      ]
    },
    "AccessControlDevice": {
      "entityName": "AccessControlDevice",
      "title": "Access Control Devices",
      "route": "/access-control-devices",
      "createAction": "Manage Access Control Device",
      "intro": "Access Control uses access control devices to handle access control operations with domain-specific tracking.",
      "searchPlaceholder": "Search access control devices by code, name, category, owner, or status...",
      "emptyState": "No access control devices have been added yet.",
      "fields": [
        {
          "name": "deviceCode",
          "label": "Access Control Device Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Access Control Device Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Access Control Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Security & Access Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Access Control Device Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "deviceCode",
          "label": "Access Control Device Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "deviceType",
          "label": "Access Control Device Type",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "location",
          "label": "Access Control Location",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        }
      ],
      "columns": [
        {
          "key": "deviceCode",
          "label": "Access Control Device Code"
        },
        {
          "key": "name",
          "label": "Access Control Device Name"
        },
        {
          "key": "category",
          "label": "Access Control Category"
        },
        {
          "key": "ownerName",
          "label": "Security & Access Management Owner"
        },
        {
          "key": "status",
          "label": "Access Control Device Status"
        },
        {
          "key": "deviceCode",
          "label": "Access Control Device Code"
        },
        {
          "key": "deviceType",
          "label": "Access Control Device Type"
        },
        {
          "key": "location",
          "label": "Access Control Location"
        }
      ]
    },
    "AccessControlIncident": {
      "entityName": "AccessControlIncident",
      "title": "Access Control Incidents",
      "route": "/access-control-incidents",
      "createAction": "Manage Access Control Incident",
      "intro": "Access Control uses access control incidents to handle access control operations with domain-specific tracking.",
      "searchPlaceholder": "Search access control incidents by code, name, category, owner, or status...",
      "emptyState": "No access control incidents have been added yet.",
      "fields": [
        {
          "name": "incidentCode",
          "label": "Access Control Incident Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Access Control Incident Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Access Control Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Security & Access Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Access Control Incident Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "incidentNo",
          "label": "Access Control Incident Number",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "severity",
          "label": "Access Control Severity",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "reportedDate",
          "label": "Access Control Reported Date",
          "type": "date",
          "required": true,
          "table": true,
          "form": true
        }
      ],
      "columns": [
        {
          "key": "incidentCode",
          "label": "Access Control Incident Code"
        },
        {
          "key": "name",
          "label": "Access Control Incident Name"
        },
        {
          "key": "category",
          "label": "Access Control Category"
        },
        {
          "key": "ownerName",
          "label": "Security & Access Management Owner"
        },
        {
          "key": "status",
          "label": "Access Control Incident Status"
        },
        {
          "key": "incidentNo",
          "label": "Access Control Incident Number"
        },
        {
          "key": "severity",
          "label": "Access Control Severity"
        },
        {
          "key": "reportedDate",
          "label": "Access Control Reported Date"
        }
      ]
    },
    "AccessControlAuditLog": {
      "entityName": "AccessControlAuditLog",
      "title": "Access Control Audit Logs",
      "route": "/access-control-audit-logs",
      "createAction": "Manage Access Control AuditLog",
      "intro": "Access Control uses access control audit logs to handle access control operations with domain-specific tracking.",
      "searchPlaceholder": "Search access control audit logs by code, name, category, owner, or status...",
      "emptyState": "No access control audit logs have been added yet.",
      "fields": [
        {
          "name": "auditLogCode",
          "label": "Access Control AuditLog Code",
          "type": "string",
          "required": true,
          "table": true,
          "form": true,
          "unique": true
        },
        {
          "name": "name",
          "label": "Access Control AuditLog Name",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "category",
          "label": "Access Control Category",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "ownerName",
          "label": "Security & Access Management Owner",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "status",
          "label": "Access Control AuditLog Status",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending Review",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "auditNo",
          "label": "Access Control Audit Number",
          "type": "string",
          "required": true,
          "table": true,
          "form": true
        },
        {
          "name": "eventType",
          "label": "Access Control Event Type",
          "type": "select",
          "required": true,
          "table": true,
          "form": true,
          "options": [
            "Active",
            "Pending",
            "Approved",
            "Closed"
          ]
        },
        {
          "name": "riskLevel",
          "label": "Access Control Risk Level",
          "type": "number",
          "required": true,
          "table": true,
          "form": true
        }
      ],
      "columns": [
        {
          "key": "auditLogCode",
          "label": "Access Control AuditLog Code"
        },
        {
          "key": "name",
          "label": "Access Control AuditLog Name"
        },
        {
          "key": "category",
          "label": "Access Control Category"
        },
        {
          "key": "ownerName",
          "label": "Security & Access Management Owner"
        },
        {
          "key": "status",
          "label": "Access Control AuditLog Status"
        },
        {
          "key": "auditNo",
          "label": "Access Control Audit Number"
        },
        {
          "key": "eventType",
          "label": "Access Control Event Type"
        },
        {
          "key": "riskLevel",
          "label": "Access Control Risk Level"
        }
      ]
    }
  },
  "reportSections": [
    {
      "heading": "Project Overview",
      "description": "A student-ready access control generated from the management template with domain modules, seed data, reports, Swagger docs, Docker support, screenshots, viva questions, PPT content, and submission documentation."
    },
    {
      "heading": "Demo Use Cases",
      "description": "Manage access control identities for Access Control, Track access control access requests and operational ownership, Run authorize access workflow, Generate access control reports and audit history"
    },
    {
      "heading": "Learning Outcomes",
      "description": "Access Control domain modelling, Security & Access Management CRUD and dashboard design, Access Control workflow automation, Student-ready documentation, screenshots, and Docker deployment"
    }
  ],
  "docs": {
    "problemStatement": "Access Control needs a focused system for access control identities, access control access requests, access control devices, access control incidents, workflows, reports, and audit visibility instead of manual spreadsheets.",
    "learningOutcomes": [
      "Access Control domain modelling",
      "Security & Access Management CRUD and dashboard design",
      "Access Control workflow automation",
      "Student-ready documentation, screenshots, and Docker deployment"
    ]
  }
};
