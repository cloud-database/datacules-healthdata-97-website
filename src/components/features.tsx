export function Features() {
  const features = [
  {
    name: "Unified patient repository aggregating data from EHR, labs, prescriptions, appointments, billing, and telehealth modules into a single comprehensive patient view",
    description: "Unified patient repository aggregating data from EHR, labs, prescriptions, appointments, billing, and telehealth modules into a single comprehensive patient view",
    category: "core",
    icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M13 2L4.09 12.96H11L10 22L20.91 11.04H14L13 2Z\" fill=\"#1A3A5C\"/></svg>",
  },
  {
    name: "AI/ML predictive engine covering readmission risk scoring, claim denial prediction, no-show forecasting, vitals anomaly detection, and chronic condition progression using XGBoost, Random Forest, and Isolation Forest models",
    description: "AI/ML predictive engine covering readmission risk scoring, claim denial prediction, no-show forecasting, vitals anomaly detection, and chronic condition progression using XGBoost, Random Forest, and Isolation Forest models",
    category: "core",
    icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z\" fill=\"#1A3A5C\"/><path d=\"M19 14L19.75 17.25L23 18L19.75 18.75L19 22L18.25 18.75L15 18L18.25 17.25L19 14Z\" fill=\"#1A3A5C\" opacity=\"0.6\"/></svg>",
  },
  {
    name: "HIPAA and GDPR compliance infrastructure including full audit trails, PHI encryption at rest and in transit, automated audit logging, data export capabilities, and privacy request tracking",
    description: "HIPAA and GDPR compliance infrastructure including full audit trails, PHI encryption at rest and in transit, automated audit logging, data export capabilities, and privacy request tracking",
    category: "core",
    icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M8 4L2 12L8 20\" stroke=\"#1A3A5C\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M16 4L22 12L16 20\" stroke=\"#1A3A5C\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
  },
  {
    name: "Real-time vitals monitoring with IoT device integration, configurable critical threshold alerting, and automated anomaly detection",
    description: "Real-time vitals monitoring with IoT device integration, configurable critical threshold alerting, and automated anomaly detection",
    category: "core",
    icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 4V9H9\" stroke=\"#1A3A5C\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M20 20V15H15\" stroke=\"#1A3A5C\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M20.49 9A9 9 0 005.64 5.64L4 9M3.51 15A9 9 0 0018.36 18.36L20 15\" stroke=\"#1A3A5C\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
  },
  {
    name: "Revenue cycle management with intelligent billing, claims scrubbing, claims submission, ICD code mapping assistance, and AI-driven denial prediction",
    description: "Revenue cycle management with intelligent billing, claims scrubbing, claims submission, ICD code mapping assistance, and AI-driven denial prediction",
    category: "core",
    icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M12 2L3 6V12C3 16.55 7.08 20.74 12 22C16.92 20.74 21 16.55 21 12V6L12 2Z\" stroke=\"#1A3A5C\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9 12L11 14L15 10\" stroke=\"#1A3A5C\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
  },
  {
    name: "HL7 and FHIR data integration with support for REST API, MQTT, and SFTP protocols enabling connectivity to major EHR systems and lab systems",
    description: "HL7 and FHIR data integration with support for REST API, MQTT, and SFTP protocols enabling connectivity to major EHR systems and lab systems",
    category: "core",
    icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke=\"#1A3A5C\" stroke-width=\"2.5\"/><path d=\"M2 12H22M12 2C9.33 5.33 8 8.67 8 12C8 15.33 9.33 18.67 12 22C14.67 18.67 16 15.33 16 12C16 8.67 14.67 5.33 12 2Z\" stroke=\"#1A3A5C\" stroke-width=\"2.5\"/></svg>",
  }
  ];

  return (
    <section id="features" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 border border-white/10 bg-white/5 text-gray-400">
            Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Built to ship faster
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Everything you need, nothing you don&apos;t.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 card-hover overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at top left, rgba(var(--brand-primary-rgb), 0.08), transparent 60%)`,
                }}
              />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `rgba(var(--brand-primary-rgb), 0.12)` }}
                dangerouslySetInnerHTML={{ __html: feature.icon }}
              />
              <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-colors">
                {feature.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
