export type ThemeConfig = {
  projectName: string;
  displayName: string;
  domain: string;
  designTemplateId?: string;
  designTemplateName?: string;
  style: string;
  styleDescription?: string;
  colors: Record<string, string>;
  radius: string;
  density: string;
  vector: string;
  vectorFamily?: string;
  illustration?: {
    title: string;
    motifs: string[];
  };
  sidebarVariant: string;
  cardStyle: string;
  layout?: Record<string, string>;
};

export const themeConfig: ThemeConfig = {
  "projectName": "access-control-management-system",
  "displayName": "Access Control",
  "domain": "security-access-access-control",
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
};
