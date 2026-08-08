'use client'

import Link from 'next/link'
import { BRAND } from '@/lib/brand'

const valuePropositionDetails = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M14 24h4l4-8 4 16 4-12 4 8h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="2" fill="currentColor"/>
      </svg>
    ),
    title: String(BRAND.valuePropositions[0]),
    description:
      'Aggregate EHR, labs, prescriptions, billing, telehealth, and IoT device data into a single longitudinal patient record — eliminating silos that cost clinicians time and compromise care decisions.',
    pillars: ['EHR & Labs', 'Billing & Claims', 'IoT & Telehealth'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M16 24l5 5 11-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 6v4M24 38v4M6 24h4M38 24h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="4" fill="currentColor" fillOpacity="0.15"/>
      </svg>
    ),
    title: String(BRAND.valuePropositions[1]),
    description:
      'XGBoost, Random Forest, and Isolation Forest models surface readmission risk, claim denial likelihood, no-show probability, and vitals anomalies — delivering actionable intelligence at the point of decision.',
    pillars: ['Readmission Risk', 'Denial Prediction', 'Anomaly Detection'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M24 4L8 12v12c0 9.94 6.84 19.24 16 22 9.16-2.76 16-12.06 16-22V12L24 4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M17 24l4 4 10-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: String(BRAND.valuePropositions[2]),
    description:
      'HIPAA and GDPR compliance is not an add-on — it is architected into every layer. Full audit trails, PHI encryption at rest and in transit, automated logging, and privacy request tracking are standard.',
    pillars: ['HIPAA & GDPR', 'PHI Encryption', 'Audit Trails'],
  },
]

const stats = [
  {
    value: '40%',
    label: 'Reduction in care gaps',
    sublabel: 'through unified patient data visibility',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    value: '35%',
    label: 'Fewer claim denials',
    sublabel: 'with AI-driven claims scrubbing and ICD mapping',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 10l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    value: '60%',
    label: 'Faster anomaly response',
    sublabel: 'via real-time IoT vitals monitoring and alerting',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    value: '99.9%',
    label: 'Compliance audit pass rate',
    sublabel: 'with automated HIPAA/GDPR audit trail generation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const integrationLogos = [
  { name: 'HL7 FHIR', abbr: 'FHIR' },
  { name: 'REST API', abbr: 'REST' },
  { name: 'MQTT', abbr: 'MQTT' },
  { name: 'SFTP', abbr: 'SFTP' },
  { name: 'ICD-10', abbr: 'ICD' },
  { name: 'HL7 v2', abbr: 'HL7' },
]

export function ValueProps() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── Value Propositions ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 border"
            style={{
              color: 'var(--brand-accent)',
              borderColor: 'rgba(var(--brand-accent-rgb), 0.3)',
              backgroundColor: 'rgba(var(--brand-accent-rgb), 0.06)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse-slow"
              style={{ backgroundColor: 'var(--brand-accent)' }}
            />
            Why Datacules HealthData 97
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--brand-primary)' }}>
            Built for the Complexity of{' '}
            <span className="gradient-text">Enterprise Healthcare</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Healthcare data is fragmented, regulated, and mission-critical. HealthData 97 is the only platform
            engineered to unify it, analyze it, and protect it — without compromise.
          </p>
        </div>

        {/* Value proposition cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {valuePropositionDetails.map((vp, i) => (
            <div
              key={i}
              className="card-hover relative rounded-2xl border border-slate-100 bg-white p-8 flex flex-col gap-5 shadow-sm"
            >
              {/* Accent top bar */}
              <div
                className="absolute top-0 left-8 right-8 h-0.5 rounded-full"
                style={{
                  background: `linear-gradient(90deg, var(--brand-accent), var(--brand-primary))`,
                  opacity: 0.6,
                }}
              />

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: 'rgba(var(--brand-primary-rgb), 0.06)',
                  color: 'var(--brand-primary)',
                }}
              >
                {vp.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--brand-primary)' }}>
                  {vp.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{vp.description}</p>
              </div>

              {/* Pillars */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {vp.pillars.map((p) => (
                  <span
                    key={p}
                    className="text-xs font-medium px-3 py-1 rounded-full border"
                    style={{
                      color: 'var(--brand-accent)',
                      borderColor: 'rgba(var(--brand-accent-rgb), 0.25)',
                      backgroundColor: 'rgba(var(--brand-accent-rgb), 0.05)',
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integration protocol strip */}
        <div
          className="rounded-2xl border p-6 mb-20"
          style={{
            borderColor: 'rgba(var(--brand-primary-rgb), 0.1)',
            backgroundColor: 'rgba(var(--brand-primary-rgb), 0.02)',
          }}
        >
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-slate-400 mb-5">
            Supported Integration Protocols & Standards
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {integrationLogos.map((logo) => (
              <div
                key={logo.abbr}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-100 bg-white shadow-sm"
              >
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: 'rgba(var(--brand-primary-rgb), 0.08)',
                    color: 'var(--brand-primary)',
                  }}
                >
                  {logo.abbr}
                </span>
                <span className="text-sm text-slate-600 font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-100 bg-white p-6 flex flex-col gap-3 shadow-sm text-center"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto"
                style={{
                  backgroundColor: 'rgba(var(--brand-accent-rgb), 0.08)',
                  color: 'var(--brand-accent)',
                }}
              >
                {stat.icon}
              </div>
              <div
                className="text-3xl font-extrabold tracking-tight"
                style={{ color: 'var(--brand-primary)' }}
              >
                {stat.value}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">{stat.label}</p>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            style={{ background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-accent))' }}
          >
            See the Platform in Action
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}