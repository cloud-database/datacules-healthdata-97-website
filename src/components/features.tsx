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

        {/* Legacy vs Modern Platform Comparison */}
        <div className="mb-16 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="px-6 py-5 border-b border-white/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-2 border border-white/10 bg-white/5 text-gray-400">
              Platform Evolution
            </div>
            <h3 className="text-2xl font-bold text-white">
              From Legacy to AI-Powered Intelligence
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              See how HealthData97 transforms fragmented healthcare data management into a unified, intelligent platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Legacy / Before */}
            <div className="p-6 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-red-500/10 border border-red-500/20 text-red-400">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="4" fill="#ef4444" opacity="0.7"/>
                  </svg>
                  Before — Legacy System
                </span>
              </div>
              <div className="w-full flex items-center justify-center rounded-xl bg-gray-900 border border-white/10 py-5 px-4">
                <img
                  src="/old_sample_324x89.png"
                  alt="Legacy HealthData platform branding — before the AI-powered upgrade"
                  className="max-w-full h-auto opacity-75"
                  style={{ maxHeight: 89 }}
                />
              </div>
              <ul className="w-full space-y-2 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#ef4444" strokeWidth="1.5"/>
                    <path d="M5 5l6 6M11 5l-6 6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Siloed data across disparate EHR and billing modules
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#ef4444" strokeWidth="1.5"/>
                    <path d="M5 5l6 6M11 5l-6 6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Manual claims processing with high denial rates
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#ef4444" strokeWidth="1.5"/>
                    <path d="M5 5l6 6M11 5l-6 6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  No predictive risk scoring or anomaly detection
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#ef4444" strokeWidth="1.5"/>
                    <path d="M5 5l6 6M11 5l-6 6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Limited interoperability and integration support
                </li>
              </ul>
            </div>

            {/* Modern / After */}
            <div className="p-6 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="4" fill="#10b981" opacity="0.7"/>
                  </svg>
                  After — HealthData97 AI Platform
                </span>
              </div>
              <div className="w-full flex items-center justify-center rounded-xl bg-[#0d2340] border border-white/10 py-5 px-4">
                <img
                  src="/331x89.png"
                  alt="HealthData97 AI-powered healthcare platform — modern branding"
                  className="max-w-full h-auto"
                  style={{ maxHeight: 89 }}
                />
              </div>
              <ul className="w-full space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#10b981" strokeWidth="1.5"/>
                    <path d="M5 8l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Unified patient repository across all care modules
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#10b981" strokeWidth="1.5"/>
                    <path d="M5 8l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  AI-driven claims scrubbing and denial prediction
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#10b981" strokeWidth="1.5"/>
                    <path d="M5 8l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  XGBoost &amp; Random Forest predictive risk models
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#10b981" strokeWidth="1.5"/>
                    <path d="M5 8l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Full HL7/FHIR interoperability and HIPAA compliance
                </li>
              </ul>
            </div>
          </div>

          {/* Arrow connector row */}
          <div className="hidden md:flex absolute pointer-events-none" aria-hidden="true" />
          <div className="flex items-center justify-center py-4 border-t border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3 text-xs text-gray-500 font-medium uppercase tracking-widest">
              <span className="text-red-400">Legacy Platform</span>
              <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                <path d="M0 8h28M22 2l8 6-8 6" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-emerald-400">HealthData97 AI</span>
            </div>
          </div>
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