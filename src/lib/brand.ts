// PROMOTIONAL WEBSITE — customer-facing only
// No internal GitHub usernames, repo paths, stack details, or maturity labels
// should be exposed to visitors.
export const BRAND = {
  name: "Datacules-HealthData-97",
  tagline: "One Platform. Every Healthcare Insight.",
  description: "Datacules HealthData 97 is an enterprise healthcare data management and insights platform built on Node.js/Express and React that unifies clinical and operational healthcare data across EHR, billing, telehealth, prescriptions, labs, and IoT devices while maintaining full HIPAA and GDPR compliance. The platform features AI-powered predictive analytics for readmission risk, billing denial prediction, and vitals anomaly detection, backed by an Oracle database with 240+ tables across 23 integrated modules. It provides a comprehensive REST API with 354+ endpoints covering patient management, real-time vitals monitoring, revenue cycle management, and compliance audit trails.",
  colors: {
    primary: "#1A3A5C",
    accent: "#00C2A8",
    secondary: "#0D7E8A",
  },
  messaging: {
    headline: "Healthcare Data, Unified and Intelligent",
    subheadline: "One enterprise platform connecting your EHR, billing, telehealth, labs, and IoT data with AI-powered insights and built-in compliance.",
    cta: "Request a Platform Demo",
  },
  valuePropositions: [
    {
      "headline": "Enterprise-Wide Data Unification",
      "body": "Connect EHR, billing, telehealth, labs, prescriptions, and IoT into 23 integrated modules via 354+ API endpoints."
    },
    {
      "headline": "AI That Works When It Matters",
      "body": "Dual AI architecture delivers readmission risk, denial prediction, and vitals anomaly detection with statistical fallback coverage."
    },
    {
      "headline": "Compliance Built Into the Foundation",
      "body": "HIPAA and GDPR controls, PHI encryption, configurable audit log retention, and dedicated compliance tables — by design, not as an add-on."
    }
  ] as const,
  features: [
    {
      "name": "Unified patient repository aggregating data from EHR, labs, prescriptions, appointments, billing, and telehealth modules into a single comprehensive patient view",
      "description": "Unified patient repository aggregating data from EHR, labs, prescriptions, appointments, billing, and telehealth modules into a single comprehensive patient view",
      "category": "core"
    },
    {
      "name": "AI/ML predictive engine covering readmission risk scoring, claim denial prediction, no-show forecasting, vitals anomaly detection, and chronic condition progression using XGBoost, Random Forest, and Isolation Forest models",
      "description": "AI/ML predictive engine covering readmission risk scoring, claim denial prediction, no-show forecasting, vitals anomaly detection, and chronic condition progression using XGBoost, Random Forest, and Isolation Forest models",
      "category": "core"
    },
    {
      "name": "HIPAA and GDPR compliance infrastructure including full audit trails, PHI encryption at rest and in transit, automated audit logging, data export capabilities, and privacy request tracking",
      "description": "HIPAA and GDPR compliance infrastructure including full audit trails, PHI encryption at rest and in transit, automated audit logging, data export capabilities, and privacy request tracking",
      "category": "core"
    },
    {
      "name": "Real-time vitals monitoring with IoT device integration, configurable critical threshold alerting, and automated anomaly detection",
      "description": "Real-time vitals monitoring with IoT device integration, configurable critical threshold alerting, and automated anomaly detection",
      "category": "core"
    },
    {
      "name": "Revenue cycle management with intelligent billing, claims scrubbing, claims submission, ICD code mapping assistance, and AI-driven denial prediction",
      "description": "Revenue cycle management with intelligent billing, claims scrubbing, claims submission, ICD code mapping assistance, and AI-driven denial prediction",
      "category": "core"
    },
    {
      "name": "HL7 and FHIR data integration with support for REST API, MQTT, and SFTP protocols enabling connectivity to major EHR systems and lab systems",
      "description": "HL7 and FHIR data integration with support for REST API, MQTT, and SFTP protocols enabling connectivity to major EHR systems and lab systems",
      "category": "core"
    }
  ] as const,
  stats: [
    {
      "value": "Beta",
      "label": "Product Status"
    },
    {
      "value": "Express + React",
      "label": "Built With"
    }
  ] as const,
  // Company info — Datacules LLC publishes and maintains these products
  company: {
    name: "Datacules LLC",
    tagline: "Building AI-powered tools for creators and developers",
    url: "https://datacules.com",
  },
  // Auth routes — used by Navbar and gated pages
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    dashboard: "/dashboard",
  },
  // Content routes
  nav: {
    blog: "/blog",
    features: "/features",
    docs: "/docs",
    about: "/about",
  },
  category: "data-platform",
};

export type Brand = typeof BRAND;
