// PROMOTIONAL WEBSITE — customer-facing only
// No internal GitHub usernames, repo paths, stack details, or maturity labels
// should be exposed to visitors.
export const BRAND = {
  name: "Datacules HealthData 97",
  tagline: "Intelligent Healthcare Data Management with AI-Powered Insights",
  description:
    "Datacules HealthData 97 is an enterprise healthcare data management and insights platform that unifies clinical and operational data across EHR, billing, telehealth, prescriptions, labs, and IoT devices — while maintaining full HIPAA, GDPR, and HL7 FHIR compliance. The platform delivers AI-powered predictive analytics for readmission risk, billing denial prediction, and vitals anomaly detection, backed by 240+ database tables across 23 tightly integrated modules and a comprehensive REST API with 354+ endpoints.",

  // ─── Design System Tokens ───────────────────────────────────────────────────
  designSystem: {
    colors: {
      // Backgrounds
      bgPrimary: "#06487A",
      bgSecondary: "#0B5A94",
      bgDeep: "#043A62",
      bgHeroGradient:
        "linear-gradient(135deg, #06487A 0%, #054270 50%, #043A62 100%)",
      bgComplianceGradient:
        "linear-gradient(180deg, #0B5A94 0%, #06487A 100%)",
      // Accents
      accentTeal: "#3B82F6",
      accentLavender: "#60A5FA",
      // Text
      textPrimary: "#FFFFFF",
      textSecondary: "#A8BFCC",
      // Surfaces
      surfaceCard: "rgba(255, 255, 255, 0.04)",
      surfaceBorder: "rgba(255, 255, 255, 0.09)",
      surfaceBorderHover: "rgba(59, 130, 246, 0.3)",
      surfaceTrustBar: "rgba(255, 255, 255, 0.02)",
      // Glows
      glowTeal: "rgba(59, 130, 246, 0.08)",
      glowLavender: "rgba(96, 165, 250, 0.06)",
      glowCtaRadial:
        "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.12) 0%, transparent 70%)",
    },
    typography: {
      fontPrimary: "Inter, 'Plus Jakarta Sans', sans-serif",
      fontDisplay: "Fraunces, 'Playfair Display', serif",
      // Scale (desktop)
      sizeH1: "72px",
      sizeH2: "48px",
      sizeH3: "32px",
      sizeBody: "17px",
      sizeSubhero: "20px",
      sizeLabel: "11px",
      sizeFooter: "14px",
      // Mobile scale
      sizeH1Mobile: "40px",
      sizeH2Mobile: "32px",
      sizeH3Mobile: "24px",
      // Weights
      weightBold: "700",
      weightSemibold: "600",
      weightRegular: "400",
      // Tracking / leading
      letterSpacingHeading: "-0.03em",
      letterSpacingLabel: "0.2em",
      lineHeightBody: "1.75",
    },
    spacing: {
      // 8pt grid — all values multiples of 8
      sectionPaddingDesktop: "120px",
      sectionPaddingTablet: "80px",
      sectionPaddingMobile: "60px",
      maxContentWidth: "1280px",
      cardPaddingDesktop: "40px",
      cardPaddingMobile: "20px",
      gridGap: "24px",
      cardBorderRadius: "20px",
    },
    glassmorphism: {
      base: {
        background: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.09)",
        borderRadius: "20px",
        backdropFilter: "blur(16px)",
        boxShadow:
          "0 8px 48px rgba(0, 0, 0, 0.28), 0 1px 0 rgba(255,255,255,0.06) inset",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      hover: {
        borderColor: "rgba(59, 130, 246, 0.3)",
        boxShadow:
          "0 16px 64px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.15), 0 1px 0 rgba(255,255,255,0.08) inset",
        transform: "translateY(-4px)",
      },
    },
    animations: {
      scrollFadeUp: {
        initial: { opacity: 0, translateY: "28px" },
        visible: { opacity: 1, translateY: "0" },
        duration: "0.65s",
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      cardStaggerDelay: "0.15s",
      pulseRing: "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      marqueeScroll: "marquee-scroll 32s linear infinite",
      marqueeScrollMobile: "marquee-scroll 52s linear infinite",
      ecgDraw: "ecg-draw 4s ease-in-out infinite",
      float: "float 6s ease-in-out infinite",
      complianceRing: "compliance-ring 6s linear infinite",
      pageLoader: "page-loader 0.8s ease-out forwards",
      buttonScale: "transform 0.2s ease",
      navBlur: "backdrop-filter blur(20px)",
      countUp: "count-up 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
    },
  },

  // ─── Brand Colors (legacy alias kept for existing consumers) ────────────────
  colors: {
    primary: "#06487A",
    accent: "#3B82F6",
    secondary: "#60A5FA",
  },

  // ─── Messaging ───────────────────────────────────────────────────────────────
  messaging: {
    headline: "Healthcare Data, Unified and Intelligent",
    headlinePart1: "Healthcare Data,",
    headlinePart2: "Unified and",
    headlineAccent: "Intelligent",
    subheadline:
      "One enterprise platform connecting your EHR, billing, telehealth, labs, and IoT data — with AI-powered insights and compliance built into every layer.",
    cta: "Request a Platform Demo",
    ctaSecondary: "Explore the Platform",
    ctaTertiary: "Schedule a Technical Review",
  },

  // ─── Trust Bar ───────────────────────────────────────────────────────────────
  trustBar: {
    label: "BUILT FOR ENTERPRISE HEALTHCARE ECOSYSTEMS",
    logoFilter: "brightness(0) invert(1) opacity(0.55)",
    logoHeight: "36px",
    logoHoverFilter: "brightness(0) invert(1) opacity(1)",
    maskImage:
      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
  },

  // ─── Value Propositions ──────────────────────────────────────────────────────
  valuePropositions: [
    {
      headline: "Enterprise-Wide Data Unification",
      body: "Consolidate EHR, billing, telehealth, labs, prescriptions, and IoT streams into a single authoritative patient record across 23 integrated modules — accessible through 354+ REST API endpoints.",
      icon: "layers",
      accentColor: "#3B82F6",
    },
    {
      headline: "AI That Surfaces What Matters",
      body: "Purpose-built predictive models deliver readmission risk scores, billing denial forecasts, and real-time vitals anomaly detection — with statistical fallback coverage for maximum reliability.",
      icon: "brain",
      accentColor: "#60A5FA",
    },
    {
      headline: "Compliance Engineered From the Ground Up",
      body: "HIPAA and GDPR controls, PHI encryption at rest and in transit, configurable audit log retention, and dedicated compliance infrastructure — built into the platform architecture, not bolted on.",
      icon: "shield-check",
      accentColor: "#3B82F6",
    },
  ] as const,

  // ─── Features ────────────────────────────────────────────────────────────────
  features: [
    {
      name: "Unified Patient Repository",
      description:
        "Aggregate clinical, financial, and operational data from EHR, labs, prescriptions, appointments, billing, and telehealth into a single longitudinal patient record — giving every care team member a complete, real-time view.",
      category: "core",
      icon: "database",
      accentColor: "#3B82F6",
    },
    {
      name: "AI-Powered Predictive Analytics",
      description:
        "Identify high-risk patients before adverse events occur. Our predictive engine covers readmission risk scoring, claim denial prediction, appointment no-show forecasting, vitals anomaly detection, and chronic condition progression modeling.",
      category: "ai",
      icon: "brain",
      accentColor: "#60A5FA",
    },
    {
      name: "HIPAA & GDPR Compliance Infrastructure",
      description:
        "Comprehensive compliance by design — full PHI audit trails, encryption at rest and in transit, automated audit logging, data export workflows, privacy request tracking, and dedicated compliance reporting tables.",
      category: "compliance",
      icon: "lock",
      accentColor: "#3B82F6",
    },
    {
      name: "Real-Time Vitals & IoT Monitoring",
      description:
        "Connect bedside and wearable IoT devices to continuous vitals streams with configurable critical threshold alerting and automated anomaly detection — ensuring clinical teams respond before conditions escalate.",
      category: "clinical",
      icon: "activity",
      accentColor: "#3B82F6",
    },
    {
      name: "Revenue Cycle Management",
      description:
        "Accelerate collections and reduce denials with intelligent billing automation, real-time claims scrubbing, ICD code mapping assistance, automated claims submission, and AI-driven denial prediction.",
      category: "financial",
      icon: "circle-dollar-sign",
      accentColor: "#60A5FA",
    },
    {
      name: "HL7 FHIR Integration",
      description:
        "Interoperate with any major EHR, lab system, or health network via REST, MQTT, and SFTP protocols — fully compliant with HL7 FHIR standards for seamless, secure data exchange across your entire healthcare ecosystem.",
      category: "integration",
      icon: "network",
      accentColor: "#3B82F6",
    },
  ] as const,

  // ─── Platform Overview ────────────────────────────────────────────────────────
  platformOverview: {
    eyebrow: "PLATFORM OVERVIEW",
    headline: "The Unified Patient Repository",
    subheadline:
      "A single longitudinal record aggregating every clinical, financial, and operational data stream — accessible in real time across your entire care ecosystem.",
    sectionAccentBorderColor: "#3B82F6",
    dataSources: [
      { label: "EHR Systems", icon: "file-heart", color: "#3B82F6" },
      { label: "Lab Results", icon: "flask-conical", color: "#3B82F6" },
      { label: "Billing & RCM", icon: "circle-dollar-sign", color: "#60A5FA" },
      { label: "Telehealth", icon: "video", color: "#3B82F6" },
      { label: "IoT Devices", icon: "activity", color: "#60A5FA" },
      { label: "Pharmacy", icon: "pill", color: "#3B82F6" },
    ],
    moduleChips: [
      { label: "Patient Management", icon: "user-round" },
      { label: "Clinical Encounters", icon: "stethoscope" },
      { label: "Revenue Cycle", icon: "circle-dollar-sign" },
      { label: "AI Predictive Engine", icon: "brain" },
      { label: "HIPAA Compliance", icon: "shield" },
      { label: "HL7 FHIR Gateway", icon: "network" },
    ],
  },

  // ─── AI Insights ─────────────────────────────────────────────────────────────
  aiInsights: {
    eyebrow: "AI-POWERED INTELLIGENCE",
    headline: "Predictive Intelligence at the Point of Decision",
    subheadline:
      "Purpose-built machine learning models trained on healthcare-specific data patterns — surfacing the insights your clinical and financial teams need, precisely when they need them.",
    cards: [
      {
        title: "Readmission Risk Scoring",
        description:
          "Identify patients at elevated risk of 30-day readmission before discharge. XGBoost and Random Forest models analyze clinical history, diagnosis codes, social determinants, and prior utilization patterns to generate actionable risk stratification.",
        icon: "brain",
        accent: "teal" as const,
        topBorderColor: "#3B82F6",
        visualType: "bar-chart" as const,
        staggerIndex: 0,
      },
      {
        title: "Billing Denial Prediction",
        description:
          "Prevent revenue leakage at the source. Predictive models analyze claim attributes, payer rules, and coding patterns to flag high-probability denials before submission — giving your billing team time to correct and resubmit.",
        icon: "shield-check",
        accent: "lavender" as const,
        topBorderColor: "#60A5FA",
        visualType: "donut-chart" as const,
        staggerIndex: 1,
      },
      {
        title: "Vitals Anomaly Detection",
        description:
          "Continuous Isolation Forest modeling monitors patient vitals streams in real time, surfacing subtle deterioration patterns that traditional threshold alerts miss — enabling earlier, more precise clinical intervention.",
        icon: "activity",
        accent: "teal" as const,
        topBorderColor: "#3B82F6",
        visualType: "sparkline" as const,
        staggerIndex: 2,
      },
    ],
  } as const,

  // ─── Modules ─────────────────────────────────────────────────────────────────
  modules: {
    eyebrow: "PLATFORM ANATOMY",
    headline: "23 Tightly Integrated Modules",
    subheadline:
      "Every clinical, financial, operational, and compliance workflow — unified in a single coherent platform architecture.",
    backgroundWatermark: "23",
    watermarkStyle: {
      fontSize: "400px",
      color: "rgba(59, 130, 246, 0.03)",
    },
    iconColor: "#3B82F6",
    iconSize: "48px",
    cardMinWidth: "200px",
    cardMinHeight: "180px",
    items: [
      { name: "Patient Management", category: "Clinical", icon: "user-round" },
      { name: "EHR Integration", category: "Integration", icon: "file-heart" },
      { name: "Clinical Encounters", category: "Clinical", icon: "stethoscope" },
      { name: "Lab Results", category: "Diagnostics", icon: "flask-conical" },
      { name: "Prescription Management", category: "Pharmacy", icon: "pill" },
      { name: "Telehealth", category: "Virtual Care", icon: "video" },
      {
        name: "IoT Vitals Monitoring",
        category: "Remote Monitoring",
        icon: "activity",
      },
      {
        name: "Revenue Cycle",
        category: "Financial",
        icon: "circle-dollar-sign",
      },
      { name: "Claims Management", category: "Financial", icon: "file-check" },
      {
        name: "Prior Authorization",
        category: "Financial",
        icon: "clipboard-check",
      },
      { name: "Denial Prevention", category: "Financial", icon: "shield" },
      { name: "AI Predictive Engine", category: "Intelligence", icon: "brain" },
      {
        name: "Risk Stratification",
        category: "Intelligence",
        icon: "bar-chart-2",
      },
      { name: "Population Health", category: "Analytics", icon: "users" },
      { name: "HIPAA Compliance", category: "Compliance", icon: "lock" },
      { name: "GDPR Controls", category: "Compliance", icon: "shield-check" },
      { name: "Audit Trail", category: "Compliance", icon: "scroll-text" },
      { name: "HL7 FHIR Gateway", category: "Integration", icon: "network" },
      {
        name: "Appointment Scheduling",
        category: "Operations",
        icon: "calendar-check",
      },
      {
        name: "Staff & Credentialing",
        category: "Operations",
        icon: "badge-check",
      },
      { name: "Pharmacy Management", category: "Pharmacy", icon: "package" },
      {
        name: "Analytics & Reporting",
        category: "Analytics",
        icon: "line-chart",
      },
      { name: "Notification Engine", category: "Operations", icon: "bell-ring" },
    ],
  } as const,

  // ─── Stats ───────────────────────────────────────────────────────────────────
  stats: [
    {
      value: "354+",
      label: "REST API Endpoints",
      numericTarget: 354,
      suffix: "+",
    },
    {
      value: "240+",
      label: "Database Tables",
      numericTarget: 240,
      suffix: "+",
    },
    {
      value: "23",
      label: "Integrated Modules",
      numericTarget: 23,
      suffix: "",
    },
    {
      value: "100%",
      label: "HIPAA Compliant",
      numericTarget: 100,
      suffix: "%",
    },
  ] as const,

  // ─── Compliance ──────────────────────────────────────────────────────────────
  compliance: {
    eyebrow: "SECURITY & COMPLIANCE",
    headline: "Security and Compliance You Can Stake Your Organization On",
    subheadline:
      "Every layer of Datacules HealthData 97 is engineered to meet the most demanding healthcare regulatory and security standards — so your team can focus on care, not compliance audits.",
    sectionBackground:
      "linear-gradient(180deg, #0B5A94 0%, #06487A 100%)",
    tileSize: { width: "240px", height: "200px" },
    badgeIconSize: "64px",
    ringAnimation: "compliance-ring 6s linear infinite",
    statsBar: [
      { value: "354+", label: "API Endpoints", numericTarget: 354, suffix: "+" },
      { value: "240+", label: "Database Tables", numericTarget: 240, suffix: "+" },
      { value: "23", label: "Integrated Modules", numericTarget: 23, suffix: "" },
      { value: "100%", label: "HIPAA Compliant", numericTarget: 100, suffix: "%" },
    ],
    badges: [
      {
        title: "HIPAA-Aligned Architecture",
        description:
          "Designed with HIPAA requirements in mind — PHI encryption at rest and in transit, minimum necessary access controls, and complete audit trail infrastructure.",
        icon: "shield",
        accentColor: "#3B82F6",
        gridPosition: { row: 1, col: 1 },
      },
      {
        title: "GDPR Privacy Controls",
        description:
          "Privacy by design with data subject rights workflows, consent management, automated data export, and configurable retention policies.",
        icon: "lock",
        accentColor: "#3B82F6",
        gridPosition: { row: 1, col: 2 },
      },
      {
        title: "HL7 FHIR Compatible",
        description:
          "HL7 FHIR R4 support for standardized clinical data exchange, enabling seamless interoperability across your healthcare ecosystem.",
        icon: "network",
        accentColor: "#60A5FA",
        gridPosition: { row: 2, col: 1 },
      },
      {
        title: "SOC 2 Aligned Architecture",
        description:
          "Security, availability, and confidentiality controls aligned with SOC 2 principles — providing enterprise procurement teams a structured security posture.",
        icon: "badge-check",
        accentColor: "#60A5FA",
        gridPosition: { row: 2, col: 2 },
      },
    ],
  },

  // ─── API / Developer Section ─────────────────────────────────────────────────
  api: {
    eyebrow: "REST API",
    headline: "A REST API Built for Enterprise Scale",
    subheadline:
      "354+ endpoints covering every clinical, financial, and operational data domain — with HL7 FHIR compliance, OAuth 2.0 security, and comprehensive developer documentation.",
    sectionBackground: "#043A62",
    codeBlock: {
      surface: "#043E68",
      terminalDots: ["#FF5F57", "#FFBD2E", "#28CA41"],
      syntaxColors: {
        string: "#3B82F6",
        keyword: "#60A5FA",
        comment: "#4A6080",
        property: "#A8BFCC",
        number: "#3B82F6",
        punctuation: "#FFFFFF",
      },
    },
    capabilities: [
      "354+ RESTful endpoints across all 23 platform modules",
      "HL7 FHIR R4 compliant data exchange",
      "OAuth 2.0 and JWT authentication with role-based access control",
      "MQTT protocol support for real-time IoT vitals streaming",
      "SFTP integration for batch lab and billing data workflows",
      "Comprehensive Swagger / OpenAPI documentation",
      "Webhook support for real-time event-driven integrations",
      "Rate limiting, audit logging, and PHI access controls on every endpoint",
    ],
    cta: "View Full API Documentation",
    sampleEndpoint: "GET /api/v1/patients/{id}/risk-scores",
    sampleResponse: {
      patient_id: "pt_8a3f92c1",
      risk_scores: {
        readmission_30d: { score: 0.847, tier: "HIGH", confidence: 0.923 },
        billing_denial: { score: 0.312, tier: "LOW", confidence: 0.881 },
        vitals_anomaly: { detected: false, last_checked: "2024-01-15T14:32:00Z" },
      },
      model_version: "v3.2.1",
      generated_at: "2024-01-15T14:32:07Z",
    },
  },

  // ─── Bottom CTA Section ──────────────────────────────────────────────────────
  cta: {
    headline: "Ready to Unify Your Healthcare Data?",
    subheadline:
      "See how Datacules HealthData 97 consolidates your clinical, financial, and operational data into one intelligent platform — purpose-built for enterprise healthcare systems.",
    primary: "Request a Platform Demo",
    secondary: "Schedule a Technical Review",
    complianceLine: "SOC 2 Type II  ·  HIPAA  ·  GDPR  ·  HL7 FHIR Compliant",
    backgroundStyle:
      "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.12) 0%, transparent 70%)",
    primaryButtonStyle: {
      height: "64px",
      minWidth: "280px",
      background: "#3B82F6",
      color: "#06487A",
      borderRadius: "12px",
      fontWeight: "700",
      pulseAnimation: "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
    secondaryButtonStyle: {
      height: "64px",
      border: "1px solid rgba(255,255,255,0.2)",
      color: "#FFFFFF",
      borderRadius: "12px",
    },
  },

  // ─── Company ─────────────────────────────────────────────────────────────────
  company: {
    name: "Datacules LLC",
    tagline: "Intelligent Healthcare Data Management with AI-Powered Insights",
    url: "https://datacules.com",
  },

  // ─── Auth Routes ─────────────────────────────────────────────────────────────
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    dashboard: "/dashboard",
  },

  // ─── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    platform: "/platform",
    features: "/features",
    aiInsights: "/ai-insights",
    compliance: "/compliance",
    api: "/api-reference",
    pricing: "/pricing",
    blog: "/blog",
    docs: "/docs",
    about: "/about",
    contact: "/contact",
  },

  // ─── Navigation Links (ordered, labeled) ─────────────────────────────────────
  navLinks: [
    { label: "Platform", href: "/platform" },
    { label: "AI Insights", href: "/ai-insights" },
    { label: "Modules", href: "/features" },
    { label: "Compliance", href: "/compliance" },
    { label: "API", href: "/api-reference" },
    { label: "Pricing", href: "/pricing" },
  ],

  // ─── Logo Placements ──────────────────────────────────────────────────────────
  logoTreatments: {
    nav: {
      maxHeight: "40px",
      treatment: "full-color",
      description: "Full color, vertically centered in sticky nav",
    },
    heroBadge: {
      size: "32px",
      treatment: "white-monochrome",
      filter: "brightness(0) invert(1)",
      caption: "by Datacules LLC",
    },
    trustBar: {
      height: "36px",
      treatment: "white-monochrome",
      filter: "brightness(0) invert(1) opacity(0.55)",
      hoverFilter: "brightness(0) invert(1) opacity(1)",
    },
    complianceSection: {
      size: "64px",
      treatment: "full-color-on-dark",
      description: "Full color preserved on dark glassmorphism tile",
    },
    footer: {
      maxHeight: "48px",
      treatment: "full-color",
      description: "Full color — dark footer background supports full fidelity",
    },
  },

  // ─── Footer ──────────────────────────────────────────────────────────────────
  footer: {
    tagline: "Intelligent Healthcare Data Management with AI-Powered Insights",
    complianceBadge: "HIPAA Compliant Platform",
    background: "#043A62",
    topBorder: "1px solid rgba(255,255,255,0.06)",
    ecgWaveformOpacity: "0.05",
    pulsingDotColor: "#3B82F6",
    product: [
      { label: "Platform Overview", href: "/platform" },
      { label: "AI Insights Engine", href: "/ai-insights" },
      { label: "23 Integrated Modules", href: "/features" },
      { label: "REST API Reference", href: "/api-reference" },
      { label: "HL7 FHIR Integration", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
    ],
    compliance: [
      { label: "HIPAA Compliance", href: "/compliance/hipaa" },
      { label: "GDPR Controls", href: "/compliance/gdpr" },
      { label: "SOC 2 Type II", href: "/compliance/soc2" },
      { label: "Security Overview", href: "/security" },
      { label: "Audit & Reporting", href: "/compliance/audit" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
    company: [
      { label: "About Datacules", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Documentation", href: "/docs" },
      { label: "Contact Sales", href: "/contact" },
      { label: "Request a Demo", href: "/demo" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },

  // ─── Healthcare Visual Language ───────────────────────────────────────────────
  healthcareVisuals: {
    ecgWaveform: {
      heroOpacity: 0.15,
      footerOpacity: 0.05,
      color: "#3B82F6",
      animationName: "ecg-draw",
      animationDuration: "4s",
    },
    molecularDotGrid: {
      opacity: 0.03,
      description: "Radial gradient dot pattern overlay — biological precision cue",
    },
    ambientOrbs: {
      teal: {
        color: "rgba(59, 130, 246, 0.08)",
        position: "bottom-left",
        size: "600px",
      },
      lavender: {
        color: "rgba(96, 165, 250, 0.06)",
        position: "top-right",
        size: "500px",
      },
    },
    crossMicro: {
      symbol: "+",
      size: "16px",
      color: "#3B82F6",
      usage: "Section header eyebrow decoration",
    },
    pulseRings: {
      usage: ["compliance-badge-icons", "demo-cta-button"],
      color: "#3B82F6",
      animation: "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
    dataFlowDiagram: {
      nodes: [
        { id: "ehr", label: "EHR", color: "#3B82F6" },
        { id: "labs", label: "Labs", color: "#3B82F6" },
        { id: "billing", label: "Billing", color: "#60A5FA" },
        { id: "telehealth", label: "Telehealth", color: "#3B82F6" },
        { id: "iot", label: "IoT", color: "#60A5FA" },
      ],
      hubLabel: "Unified Patient Record",
      lineColor: "#3B82F6",
      lineAnimationName: "stroke-dashoffset",
    },
  },

  category: "data-platform",
};

export type Brand = typeof BRAND;