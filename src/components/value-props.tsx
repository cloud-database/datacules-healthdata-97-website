'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { BRAND } from '@/lib/brand'

const valuePropositionDetails = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="#00C9B1" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M14 24h4l4-8 4 16 4-12 4 8h4" stroke="#00C9B1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="2" fill="#00C9B1"/>
      </svg>
    ),
    accentColor: '#00C9B1',
    accentRgb: '0,201,177',
    title: String(BRAND.valuePropositions[0]),
    description:
      'Aggregate EHR, labs, prescriptions, billing, telehealth, and IoT device data into a single longitudinal patient record — eliminating silos that cost clinicians time and compromise care decisions.',
    pillars: ['EHR & Labs', 'Billing & Claims', 'IoT & Telehealth'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <circle cx="24" cy="24" r="18" stroke="#7B8CDE" strokeWidth="2.5"/>
        <path d="M16 24l5 5 11-10" stroke="#7B8CDE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 6v4M24 38v4M6 24h4M38 24h4" stroke="#7B8CDE" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="4" fill="#7B8CDE" fillOpacity="0.15"/>
      </svg>
    ),
    accentColor: '#7B8CDE',
    accentRgb: '123,140,222',
    title: String(BRAND.valuePropositions[1]),
    description:
      'XGBoost, Random Forest, and Isolation Forest models surface readmission risk, claim denial likelihood, no-show probability, and vitals anomalies — delivering actionable intelligence at the point of decision.',
    pillars: ['Readmission Risk', 'Denial Prediction', 'Anomaly Detection'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M24 4L8 12v12c0 9.94 6.84 19.24 16 22 9.16-2.76 16-12.06 16-22V12L24 4z" stroke="#00C9B1" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M17 24l4 4 10-10" stroke="#00C9B1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accentColor: '#00C9B1',
    accentRgb: '0,201,177',
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
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#00C9B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    value: '35%',
    label: 'Fewer claim denials',
    sublabel: 'with AI-driven claims scrubbing and ICD mapping',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#00C9B1" strokeWidth="2"/>
        <path d="M8 21h8M12 17v4" stroke="#00C9B1" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 10l3 3 5-5" stroke="#00C9B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    value: '60%',
    label: 'Faster anomaly response',
    sublabel: 'via real-time IoT vitals monitoring and alerting',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" stroke="#00C9B1" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="#00C9B1" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    value: '99.9%',
    label: 'Compliance audit pass rate',
    sublabel: 'with automated HIPAA/GDPR audit trail generation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="#00C9B1" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#00C9B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vp-is-visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    const targets = sectionRef.current?.querySelectorAll('.vp-animate')
    targets?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0D2137 0%, #112744 40%, #0D2137 100%)' }}
    >
      {/* ── Global styles ── */}
      <style>{`
        /* ── Scroll animations ── */
        .vp-animate {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .vp-animate.vp-is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .vp-delay-1  { transition-delay: 0.05s; }
        .vp-delay-2  { transition-delay: 0.15s; }
        .vp-delay-3  { transition-delay: 0.25s; }
        .vp-delay-4  { transition-delay: 0.10s; }
        .vp-delay-5  { transition-delay: 0.20s; }
        .vp-delay-6  { transition-delay: 0.30s; }
        .vp-delay-7  { transition-delay: 0.40s; }
        .vp-delay-8  { transition-delay: 0.15s; }
        .vp-delay-9  { transition-delay: 0.25s; }
        .vp-delay-10 { transition-delay: 0.35s; }
        .vp-delay-11 { transition-delay: 0.45s; }

        /* ── Glassmorphism card system ── */
        .glass-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 20px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 48px rgba(0, 0, 0, 0.28),
                      0 1px 0 rgba(255, 255, 255, 0.06) inset;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-card:hover {
          border-color: rgba(0, 201, 177, 0.3);
          box-shadow: 0 16px 64px rgba(0, 0, 0, 0.4),
                      0 0 0 1px rgba(0, 201, 177, 0.15),
                      0 1px 0 rgba(255, 255, 255, 0.08) inset;
          transform: translateY(-4px);
        }
        .glass-card-lavender:hover {
          border-color: rgba(123, 140, 222, 0.3) !important;
          box-shadow: 0 16px 64px rgba(0, 0, 0, 0.4),
                      0 0 0 1px rgba(123, 140, 222, 0.15),
                      0 1px 0 rgba(255, 255, 255, 0.08) inset !important;
          transform: translateY(-4px);
        }

        /* ── Stat cards ── */
        .glass-stat-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 20px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 48px rgba(0, 0, 0, 0.28),
                      0 1px 0 rgba(255, 255, 255, 0.06) inset;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-stat-card:hover {
          border-color: rgba(0, 201, 177, 0.25);
          box-shadow: 0 16px 64px rgba(0, 0, 0, 0.35),
                      0 0 0 1px rgba(0, 201, 177, 0.12),
                      0 1px 0 rgba(255, 255, 255, 0.08) inset;
          transform: translateY(-3px);
        }

        /* ── Integration chips ── */
        .integration-chip {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .integration-chip:hover {
          border-color: rgba(0, 201, 177, 0.3);
          background: rgba(0, 201, 177, 0.05);
          transform: translateY(-2px);
        }

        /* ── Integration wrapper panel ── */
        .integration-panel {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 20px;
          box-shadow: 0 4px 32px rgba(0, 0, 0, 0.2),
                      0 1px 0 rgba(255, 255, 255, 0.04) inset;
        }

        /* ── Primary CTA button ── */
        .vp-cta-btn {
          background: #00C9B1;
          color: #0D2137;
          height: 56px;
          padding: 0 32px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 24px rgba(0, 201, 177, 0.25);
          text-decoration: none;
        }
        .vp-cta-btn:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 32px rgba(0, 201, 177, 0.4);
          background: #00dcc4;
        }

        /* ── Teal gradient text ── */
        .teal-gradient-text {
          background: linear-gradient(135deg, #00C9B1, #7B8CDE);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Section left-border heading accent ── */
        .section-left-border {
          position: relative;
          padding-left: 20px;
        }
        .section-left-border::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 48px;
          background: #00C9B1;
          border-radius: 2px;
        }

        /* ── Pillar chips ── */
        .pillar-chip {
          font-size: 11px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 100px;
          border: 1px solid;
          transition: all 0.2s ease;
        }

        /* ── Teal accent gradient lines ── */
        .teal-section-line {
          height: 1px;
          background: linear-gradient(
            to right,
            rgba(0, 201, 177, 0.0),
            rgba(0, 201, 177, 0.25),
            rgba(0, 201, 177, 0.0)
          );
        }
        .white-section-line {
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.07),
            transparent
          );
        }
        .teal-bottom-line {
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(0, 201, 177, 0.12),
            transparent
          );
        }
        .teal-top-line {
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(0, 201, 177, 0.15),
            transparent
          );
        }

        /* ── Depth bands ── */
        .depth-band-dark {
          background: rgba(6, 20, 34, 0.45);
        }
        .depth-band-mid {
          background: rgba(17, 39, 68, 0.5);
        }
        .depth-band-darkest {
          background: rgba(6, 20, 34, 0.55);
        }
        .depth-band-cta {
          background: rgba(13, 33, 55, 0.4);
        }
      `}</style>

      {/* ── Subtle dot-grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(0,201,177,0.06) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          opacity: 0.6,
        }}
      />

      {/* ── Ambient glow orbs ── */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(123,140,222,0.08) 0%, transparent 70%)',
          transform: 'translate(30%, -20%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,201,177,0.07) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      {/* ── Top hairline accent ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(0,201,177,0.2), transparent)',
        }}
      />

      {/* ══════════════════════════════════════════════
          LAYER 1 — Section header
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 pt-[120px] pb-16">
        <div className="text-center vp-animate">
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="w-4 h-4 flex-shrink-0"
              style={{ color: '#00C9B1' }}
            >
              <path
                d="M8 2v12M2 8h12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <span
              className="text-[11px] font-semibold tracking-[0.2em] uppercase"
              style={{ color: '#00C9B1' }}
            >
              Why Datacules HealthData 97
            </span>
          </div>

          {/* Heading with left-border accent */}
          <div className="flex justify-center">
            <h2
              className="section-left-border text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.02em] mb-5 text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}
            >
              Built for the Complexity of{' '}
              <span className="teal-gradient-text">Enterprise Healthcare</span>
            </h2>
          </div>

          {/* Subheadline */}
          <p
            className="text-[17px] leading-[1.75] max-w-[560px] mx-auto mt-4"
            style={{ color: '#A8BFCC' }}
          >
            Healthcare data is fragmented, regulated, and mission-critical. HealthData 97 is the
            only platform engineered to unify it, analyze it, and protect it — without compromise.
          </p>
        </div>
      </div>

      {/* Divider — header → cards */}
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="teal-section-line" />
      </div>

      {/* ══════════════════════════════════════════════
          LAYER 2 — Value proposition cards
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 depth-band-dark py-16">
        {/* Band border lines */}
        <div className="absolute top-0 left-0 right-0 white-section-line pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 white-section-line pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6">
          {/* Sub-section eyebrow */}
          <div className="flex items-center gap-2 mb-8 vp-animate vp-delay-1">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="w-3.5 h-3.5 flex-shrink-0"
              style={{ color: '#00C9B1' }}
            >
              <path
                d="M8 2v12M2 8h12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <span
              className="text-[11px] font-semibold tracking-[0.18em] uppercase"
              style={{ color: '#A8BFCC' }}
            >
              Core Value Propositions
            </span>
          </div>

          {/* Cards — 8pt gap (24px = 3×8) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valuePropositionDetails.map((vp, i) => (
              <div
                key={i}
                className={`glass-card${i === 1 ? ' glass-card-lavender' : ''} vp-animate vp-delay-${
                  i + 1
                } relative flex flex-col gap-6`}
                style={{ padding: '40px' }}
              >
                {/* Colored 3px top-border accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px]"
                  style={{ background: vp.accentColor }}
                />

                {/* Icon container — 8pt sizing (64px = 8×8) */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `rgba(${vp.accentRgb}, 0.1)`,
                    border: `1px solid rgba(${vp.accentRgb}, 0.2)`,
                  }}
                >
                  {vp.icon}
                </div>

                {/* Copy block */}
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-[20px] font-bold tracking-[-0.02em] text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}
                  >
                    {vp.title}
                  </h3>
                  <p
                    className="text-[15px] leading-[1.75]"
                    style={{ color: '#A8BFCC' }}
                  >
                    {vp.description}
                  </p>
                </div>

                {/* Pillar chips — pushed to card bottom */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {vp.pillars.map((p) => (
                    <span
                      key={p}
                      className="pillar-chip"
                      style={{
                        color: vp.accentColor,
                        borderColor: `rgba(${vp.accentRgb}, 0.3)`,
                        backgroundColor: `rgba(${vp.accentRgb}, 0.07)`,
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          LAYER 3 — Integration protocols strip
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 depth-band-mid py-16">
        {/* Band border lines */}
        <div className="absolute top-0 left-0 right-0 teal-top-line pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 white-section-line pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6">
          <div
            className="integration-panel vp-animate vp-delay-4"
            style={{ padding: '32px' }}
          >
            {/* Panel eyebrow */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="w-3.5 h-3.5 flex-shrink-0"
                style={{ color: '#00C9B1' }}
              >
                <path
                  d="M8 2v12M2 8h12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <p
                className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: '#A8BFCC' }}
              >
                Supported Integration Protocols &amp; Standards
              </p>
            </div>

            {/* Chip row — 8pt gap (16px = 2×8) */}
            <div className="flex flex-wrap justify-center gap-4">
              {integrationLogos.map((logo) => (
                <div
                  key={logo.abbr}
                  className="integration-chip flex items-center gap-2 px-5 py-3"
                >
                  {/* Abbr badge */}
                  <span
                    className="text-[11px] font-bold px-2 py-1 rounded-md"
                    style={{
                      background: 'rgba(0,201,177,0.12)',
                      color: '#00C9B1',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {logo.abbr}
                  </span>
                  {/* Full name */}
                  <span
                    className="text-[14px] font-semibold"
                    style={{ color: '#A8BFCC' }}
                  >
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          LAYER 4 — Platform impact stats grid
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 depth-band-darkest py-16">
        {/* Band border lines */}
        <div className="absolute top-0 left-0 right-0 white-section-line pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 teal-bottom-line pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6">
          {/* Sub-section eyebrow */}
          <div className="flex items-center gap-2 mb-8 vp-animate vp-delay-4">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="w-3.5 h-3.5 flex-shrink-0"
              style={{ color: '#00C9B1' }}
            >
              <path
                d="M8 2v12M2 8h12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <span
              className="text-[11px] font-semibold tracking-[0.18em] uppercase"
              style={{ color: '#A8BFCC' }}
            >
              Platform Impact Metrics
            </span>
          </div>

          {/* Stats — 4-col on lg, 2-col otherwise; 8pt gap (24px) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`glass-stat-card vp-animate vp-delay-${i + 8} flex flex-col items-center text-center gap-4`}
                style={{ padding: '32px 24px' }}
              >
                {/* Icon container — 44px = ~5.5×8, closest 8pt value */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(0,201,177,0.1)',
                    border: '1px solid rgba(0,201,177,0.2)',
                  }}
                >
                  {stat.icon}
                </div>

                {/* Stat value — Electric Teal, bold */}
                <div
                  className="text-[40px] font-extrabold tracking-[-0.03em] leading-none"
                  style={{ color: '#00C9B1' }}
                >
                  {stat.value}
                </div>

                {/* Labels */}
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-semibold text-white">
                    {stat.label}
                  </p>
                  <p
                    className="text-[12px] leading-[1.6]"
                    style={{ color: '#A8BFCC' }}
                  >
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          LAYER 5 — CTA strip
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 depth-band-cta" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        {/* Band top border */}
        <div className="absolute top-0 left-0 right-0 white-section-line pointer-events-none" />

        {/* Radial teal glow behind button */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div
            style={{
              width: '600px',
              height: '300px',
              background:
                'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,201,177,0.07) 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 text-center vp-animate vp-delay-7">
          <Link href="/demo" className="vp-cta-btn">
            See the Platform in Action
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <p className="mt-4 text-[12px]" style={{ color: '#A8BFCC' }}>
            SOC 2 Type II · HIPAA · GDPR · HL7 FHIR Compliant
          </p>
        </div>
      </div>

      {/* Bottom fade-out to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[80px] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(6,20,34,0.3))',
        }}
      />
    </section>
  )
}