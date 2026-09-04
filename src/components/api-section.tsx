'use client'

import { useEffect, useRef } from 'react'

const JSON_LINES = [
  { type: 'brace', content: '{' },
  { type: 'key', content: '  "patient_id"', suffix: ': ', value: '"pt_8f3a2c19d"', valueType: 'string' },
  { type: 'key', content: '  "mrn"', suffix: ': ', value: '"MRN-00492871"', valueType: 'string' },
  { type: 'key', content: '  "status"', suffix: ': ', value: '"active"', valueType: 'string' },
  { type: 'key', content: '  "last_updated"', suffix: ': ', value: '"2024-01-15T14:32:00Z"', valueType: 'string' },
  { type: 'comment', content: '  // Unified clinical record' },
  { type: 'key', content: '  "record"', suffix: ': ', value: '{', valueType: 'brace' },
  { type: 'key', content: '    "ehr_source"', suffix: ': ', value: '"Epic Systems"', valueType: 'string' },
  { type: 'key', content: '    "diagnoses"', suffix: ': ', value: '["I10", "E11.9", "Z87.39"]', valueType: 'array' },
  { type: 'key', content: '    "medications"', suffix: ': ', value: '14', valueType: 'number' },
  { type: 'key', content: '    "vitals_synced"', suffix: ': ', value: 'true', valueType: 'boolean' },
  { type: 'key', content: '    "risk_score"', suffix: ': ', value: '0.87', valueType: 'number' },
  { type: 'comment', content: '    // AI readmission probability' },
  { type: 'key', content: '    "anomaly_flags"', suffix: ': ', value: '["BP_ELEVATED", "HR_IRREGULAR"]', valueType: 'array' },
  { type: 'brace', content: '  },' },
  { type: 'comment', content: '  // Billing & compliance context' },
  { type: 'key', content: '  "billing"', suffix: ': ', value: '{', valueType: 'brace' },
  { type: 'key', content: '    "denial_risk"', suffix: ': ', value: '"LOW"', valueType: 'string' },
  { type: 'key', content: '    "payer"', suffix: ': ', value: '"BlueCross PPO"', valueType: 'string' },
  { type: 'key', content: '    "hipaa_consent"', suffix: ': ', value: 'true', valueType: 'boolean' },
  { type: 'brace', content: '  }' },
  { type: 'brace', content: '}' },
]

const API_CAPABILITIES = [
  'RESTful JSON API with OpenAPI 3.1 specification',
  '354+ documented endpoints across all modules',
  'OAuth 2.0 & API key authentication',
  'HL7 FHIR R4 compliant data structures',
  'Real-time webhooks for clinical event streams',
  'Rate limiting: 10,000 requests/minute per tenant',
  'Full audit log trail on every API call',
  'Sandbox environment with synthetic patient data',
  'SDKs available for Python, Node.js, and Java',
]

function getSyntaxColor(valueType: string): string {
  switch (valueType) {
    case 'string':
      return '#3B82F6'
    case 'number':
      return '#F0A500'
    case 'boolean':
      return '#60A5FA'
    case 'array':
      return '#3B82F6'
    case 'brace':
      return 'rgba(255,255,255,0.7)'
    default:
      return 'rgba(255,255,255,0.7)'
  }
}

export function ApiSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const items = section.querySelectorAll('.animate-on-scroll')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: '#061422',
        paddingTop: '120px',
        paddingBottom: '120px',
      }}
    >
      {/* Subtle molecular dot grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(59,130,246,0.18) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.03,
          pointerEvents: 'none',
        }}
      />

      {/* Bottom ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '320px',
          background:
            'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(59,130,246,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top-right lavender glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '400px',
          height: '400px',
          background:
            'radial-gradient(ellipse 60% 60% at 100% 0%, rgba(96,165,250,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: '32px',
          paddingRight: '32px',
        }}
      >
        {/* ── Section Header ───────────────────────────────────── */}
        <div
          className="animate-on-scroll"
          style={{ marginBottom: '64px' }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px',
            }}
          >
            <span
              style={{
                color: '#3B82F6',
                fontSize: '13px',
                lineHeight: 1,
              }}
            >
              ✦
            </span>
            <span
              style={{
                color: '#3B82F6',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontFamily: 'Inter, Plus Jakarta Sans, sans-serif',
              }}
            >
              Developer API
            </span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: '48px',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              fontFamily: 'Inter, Plus Jakarta Sans, sans-serif',
            }}
          >
            Built for{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Developers
            </span>
          </h2>

          {/* Sub-headline */}
          <p
            style={{
              fontSize: '17px',
              color: '#A8BFCC',
              lineHeight: 1.75,
              maxWidth: '560px',
              fontFamily: 'Inter, Plus Jakarta Sans, sans-serif',
            }}
          >
            A comprehensive REST API with 354+ endpoints gives your engineering
            team full programmatic control over every layer of healthcare data —
            built on open standards, secured by design.
          </p>
        </div>

        {/* ── Two-Column Layout ─────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* ── LEFT — Syntax-Highlighted Code Block ─────────── */}
          <div
            className="animate-on-scroll"
            style={{
              transitionDelay: '0.1s',
            }}
          >
            {/* Code card */}
            <div
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow:
                  '0 8px 48px rgba(0,0,0,0.36), 0 1px 0 rgba(255,255,255,0.06) inset',
                transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = 'rgba(59,130,246,0.3)'
                el.style.boxShadow =
                  '0 16px 64px rgba(0,0,0,0.48), 0 0 0 1px rgba(59,130,246,0.15), 0 1px 0 rgba(255,255,255,0.08) inset'
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = 'rgba(255,255,255,0.09)'
                el.style.boxShadow =
                  '0 8px 48px rgba(0,0,0,0.36), 0 1px 0 rgba(255,255,255,0.06) inset'
                el.style.transform = 'translateY(0)'
              }}
            >
              {/* ── Terminal Header ── */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 20px',
                  background: 'rgba(0,0,0,0.35)',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Traffic-light dots */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flexShrink: 0 }}>
                  <span
                    style={{
                      display: 'block',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: '#FF5F57',
                    }}
                  />
                  <span
                    style={{
                      display: 'block',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: '#FEBC2E',
                    }}
                  />
                  <span
                    style={{
                      display: 'block',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: '#28C840',
                    }}
                  />
                </div>

                {/* Endpoint path */}
                <div
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                    fontSize: '12px',
                    color: '#4A6080',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  GET /api/v2/patients/pt_8f3a2c19d/unified-record
                </div>

                {/* Status badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#3B82F6',
                      animation: 'api-pulse 2s ease-in-out infinite',
                    }}
                  />
                  <span
                    style={{
                      fontFamily:
                        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#3B82F6',
                    }}
                  >
                    200 OK
                  </span>
                </div>
              </div>

              {/* ── JSON Body ── */}
              <div
                style={{
                  background: '#0A1628',
                  padding: '24px',
                  overflowX: 'auto',
                  minHeight: '420px',
                }}
              >
                <pre
                  style={{
                    margin: 0,
                    fontFamily:
                      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                    fontSize: '13px',
                    lineHeight: 1.8,
                    whiteSpace: 'pre',
                  }}
                >
                  {JSON_LINES.map((line, idx) => {
                    if (line.type === 'comment') {
                      return (
                        <div key={idx} style={{ color: '#4A6080' }}>
                          {line.content}
                        </div>
                      )
                    }

                    if (line.type === 'brace') {
                      return (
                        <div key={idx} style={{ color: 'rgba(255,255,255,0.65)' }}>
                          {line.content}
                        </div>
                      )
                    }

                    return (
                      <div key={idx}>
                        {/* Key */}
                        <span style={{ color: '#60A5FA' }}>{line.content}</span>
                        {/* Colon */}
                        <span style={{ color: 'rgba(255,255,255,0.4)' }}>{line.suffix}</span>
                        {/* Value */}
                        {line.valueType === 'brace' ? (
                          <span style={{ color: 'rgba(255,255,255,0.65)' }}>{line.value}</span>
                        ) : (
                          <span style={{ color: getSyntaxColor(line.valueType || '') }}>
                            {line.value}
                          </span>
                        )}
                        {/* Trailing comma */}
                        {line.valueType !== 'brace' && idx < JSON_LINES.length - 2 && (
                          <span style={{ color: 'rgba(255,255,255,0.25)' }}>,</span>
                        )}
                      </div>
                    )
                  })}
                </pre>
              </div>

              {/* ── Footer bar ── */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 20px',
                  background: 'rgba(0,0,0,0.22)',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <span
                  style={{
                    fontFamily:
                      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                    fontSize: '11px',
                    color: '#4A6080',
                  }}
                >
                  Response time: 42ms
                </span>
                <span
                  style={{
                    fontFamily:
                      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                    fontSize: '11px',
                    color: '#4A6080',
                  }}
                >
                  HIPAA encrypted · TLS 1.3
                </span>
              </div>
            </div>

            {/* ── Endpoint pills ── */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginTop: '16px',
              }}
            >
              {[
                'GET /patients',
                'POST /encounters',
                'PUT /vitals/{id}',
                'GET /billing/claims',
              ].map((endpoint) => (
                <span
                  key={endpoint}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontFamily:
                      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                    background: 'rgba(59,130,246,0.08)',
                    border: '1px solid rgba(59,130,246,0.22)',
                    color: '#3B82F6',
                  }}
                >
                  {endpoint}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Capabilities + CTA ───────────────────── */}
          <div
            className="animate-on-scroll"
            style={{ transitionDelay: '0.25s' }}
          >
            {/* Stats row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                marginBottom: '32px',
              }}
            >
              {[
                { value: '354+', label: 'API Endpoints' },
                { value: '10K', label: 'Req/min per tenant' },
                { value: '99.9%', label: 'Uptime SLA' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    borderRadius: '16px',
                    padding: '16px',
                    textAlign: 'center',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '28px',
                      fontWeight: 700,
                      lineHeight: 1,
                      marginBottom: '4px',
                      background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: '#A8BFCC',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontFamily: 'Inter, Plus Jakarta Sans, sans-serif',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* ── API Capability Bullet List ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {API_CAPABILITIES.map((cap, idx) => (
                <div
                  key={idx}
                  className="api-capability-item"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}
                >
                  {/* Teal checkmark circle */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '2px',
                      background: 'rgba(59,130,246,0.15)',
                      border: '1px solid rgba(59,130,246,0.32)',
                    }}
                  >
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="#3B82F6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {/* Capability text */}
                  <span
                    style={{
                      fontSize: '15px',
                      color: '#A8BFCC',
                      lineHeight: 1.6,
                      fontFamily: 'Inter, Plus Jakarta Sans, sans-serif',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLSpanElement).style.color = '#ffffff'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLSpanElement).style.color = '#A8BFCC'
                    }}
                  >
                    {cap}
                  </span>
                </div>
              ))}
            </div>

            {/* Standards badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '32px',
              }}
            >
              {['HL7 FHIR R4', 'OpenAPI 3.1', 'OAuth 2.0', 'SMART on FHIR'].map((badge) => (
                <span
                  key={badge}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 600,
                    background: 'rgba(96,165,250,0.1)',
                    border: '1px solid rgba(96,165,250,0.26)',
                    color: '#60A5FA',
                    fontFamily: 'Inter, Plus Jakarta Sans, sans-serif',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* ── CTA Buttons ── */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
              }}
            >
              {/* Primary ghost CTA — "View Full API Documentation" */}
              <a
                href="#"
                className="api-cta-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '0 32px',
                  height: '56px',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: 600,
                  fontFamily: 'Inter, Plus Jakarta Sans, sans-serif',
                  border: '1px solid rgba(59,130,246,0.42)',
                  color: '#3B82F6',
                  background: 'rgba(59,130,246,0.06)',
                  textDecoration: 'none',
                  transition: 'all 0.22s cubic-bezier(0.4,0,0.2,1)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.background = 'rgba(59,130,246,0.13)'
                  el.style.borderColor = 'rgba(59,130,246,0.65)'
                  el.style.boxShadow = '0 0 24px rgba(59,130,246,0.18)'
                  el.style.transform = 'scale(1.03)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.background = 'rgba(59,130,246,0.06)'
                  el.style.borderColor = 'rgba(59,130,246,0.42)'
                  el.style.boxShadow = 'none'
                  el.style.transform = 'scale(1)'
                }}
              >
                {/* Doc icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="14,2 14,8 20,8"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="16"
                    y1="13"
                    x2="8"
                    y2="13"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="16"
                    y1="17"
                    x2="8"
                    y2="17"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                View Full API Documentation
                {/* Arrow icon */}
                <svg
                  className="api-arrow"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0, transition: 'transform 0.2s ease' }}
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Secondary ghost CTA — "Access Sandbox" */}
              <a
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '0 24px',
                  height: '56px',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: 600,
                  fontFamily: 'Inter, Plus Jakarta Sans, sans-serif',
                  border: '1px solid rgba(255,255,255,0.13)',
                  color: 'rgba(255,255,255,0.7)',
                  background: 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.22s cubic-bezier(0.4,0,0.2,1)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'rgba(255,255,255,0.28)'
                  el.style.color = '#ffffff'
                  el.style.transform = 'scale(1.03)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'rgba(255,255,255,0.13)'
                  el.style.color = 'rgba(255,255,255,0.7)'
                  el.style.transform = 'scale(1)'
                }}
              >
                {/* Monitor icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0 }}
                >
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="8"
                    y1="21"
                    x2="16"
                    y2="21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="12"
                    y1="17"
                    x2="12"
                    y2="21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Access Sandbox
              </a>
            </div>

            {/* Trust note */}
            <p
              style={{
                marginTop: '20px',
                fontSize: '12px',
                color: '#4A6080',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'Inter, Plus Jakarta Sans, sans-serif',
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ flexShrink: 0 }}
              >
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  stroke="#4A6080"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Sandbox uses synthetic data only — fully HIPAA-safe for development
            </p>
          </div>
        </div>
      </div>

      {/* ── Keyframes + Scroll Animation Styles ── */}
      <style jsx>{`
        @keyframes api-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .api-cta-primary:hover .api-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 36px !important;
          }
        }
      `}</style>
    </section>
  )
}