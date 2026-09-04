'use client'

import { useEffect, useRef } from 'react'
import {
  Activity,
  Brain,
  Shield,
  Database,
  FileText,
  Heart,
  Microscope,
  Pill,
  Stethoscope,
  BarChart3,
  Users,
  Lock,
  Globe,
  Zap,
  Cloud,
  Cpu,
  ClipboardList,
  DollarSign,
  Bell,
  RefreshCw,
  Search,
  GitMerge,
  Settings,
} from 'lucide-react'

const modules = [
  {
    icon: Heart,
    name: 'Patient Demographics',
    category: 'Clinical',
    color: 'teal',
  },
  {
    icon: Activity,
    name: 'Vitals Monitoring',
    category: 'Clinical',
    color: 'teal',
  },
  {
    icon: Microscope,
    name: 'Lab Results',
    category: 'Diagnostics',
    color: 'teal',
  },
  {
    icon: Pill,
    name: 'Pharmacy & Medications',
    category: 'Clinical',
    color: 'teal',
  },
  {
    icon: FileText,
    name: 'Clinical Notes',
    category: 'Documentation',
    color: 'teal',
  },
  {
    icon: Stethoscope,
    name: 'Care Plans',
    category: 'Clinical',
    color: 'teal',
  },
  {
    icon: Brain,
    name: 'AI Risk Scoring',
    category: 'AI/ML',
    color: 'lavender',
  },
  {
    icon: BarChart3,
    name: 'Analytics Dashboard',
    category: 'Analytics',
    color: 'lavender',
  },
  {
    icon: DollarSign,
    name: 'Billing & Revenue',
    category: 'Financial',
    color: 'teal',
  },
  {
    icon: Shield,
    name: 'HIPAA Compliance',
    category: 'Security',
    color: 'lavender',
  },
  {
    icon: Lock,
    name: 'Access Control',
    category: 'Security',
    color: 'lavender',
  },
  {
    icon: Database,
    name: 'Unified Data Lake',
    category: 'Infrastructure',
    color: 'teal',
  },
  {
    icon: Users,
    name: 'Care Team Mgmt',
    category: 'Operations',
    color: 'teal',
  },
  {
    icon: Globe,
    name: 'Telehealth Integration',
    category: 'Integration',
    color: 'teal',
  },
  {
    icon: Zap,
    name: 'Real-Time Alerts',
    category: 'Operations',
    color: 'teal',
  },
  {
    icon: Cloud,
    name: 'Cloud Data Sync',
    category: 'Infrastructure',
    color: 'lavender',
  },
  {
    icon: Cpu,
    name: 'IoT Device Streams',
    category: 'Integration',
    color: 'teal',
  },
  {
    icon: ClipboardList,
    name: 'Regulatory Reporting',
    category: 'Compliance',
    color: 'lavender',
  },
  {
    icon: Bell,
    name: 'Notification Engine',
    category: 'Operations',
    color: 'teal',
  },
  {
    icon: RefreshCw,
    name: 'Data Interoperability',
    category: 'Integration',
    color: 'teal',
  },
  {
    icon: Search,
    name: 'Clinical Search',
    category: 'Analytics',
    color: 'teal',
  },
  {
    icon: GitMerge,
    name: 'HL7 / FHIR Engine',
    category: 'Integration',
    color: 'lavender',
  },
  {
    icon: Settings,
    name: 'Admin & Configuration',
    category: 'Operations',
    color: 'teal',
  },
]

export function ModulesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const statsRef = useRef<HTMLDivElement>(null)
  const statValueRefs = useRef<(HTMLSpanElement | null)[]>([])

  // Scroll animation observer for section header and cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.08 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Count-up animation for stats
  useEffect(() => {
    const targets = [
      { value: 23, suffix: '', decimals: 0 },
      { value: 240, suffix: '+', decimals: 0 },
      { value: 354, suffix: '+', decimals: 0 },
      { value: 100, suffix: '%', decimals: 0 },
    ]

    const countUp = (
      el: HTMLSpanElement,
      target: number,
      suffix: string,
      duration: number
    ) => {
      const start = performance.now()
      const step = (now: number) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = Math.floor(eased * target)
        el.textContent = current + suffix
        if (progress < 1) {
          requestAnimationFrame(step)
        } else {
          el.textContent = target + suffix
        }
      }
      requestAnimationFrame(step)
    }

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            statValueRefs.current.forEach((el, i) => {
              if (el && targets[i]) {
                countUp(el, targets[i].value, targets[i].suffix, 1400)
              }
            })
            statsObserver.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      statsObserver.observe(statsRef.current)
    }

    return () => statsObserver.disconnect()
  }, [])

  return (
    <section
      className="modules-section relative overflow-hidden"
      style={{
        background: '#112744',
        paddingTop: '120px',
        paddingBottom: '120px',
      }}
    >
      {/* ── Giant Watermark "23" ── */}
      <div
        aria-hidden="true"
        className="watermark-23 pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
      >
        <span
          style={{
            fontSize: 'clamp(260px, 35vw, 480px)',
            fontWeight: 900,
            color: 'rgba(59, 130, 246, 0.028)',
            lineHeight: 1,
            userSelect: 'none',
            letterSpacing: '-0.06em',
            fontFamily: 'Inter, "Plus Jakarta Sans", sans-serif',
            whiteSpace: 'nowrap',
            position: 'relative',
            top: '0',
          }}
        >
          23
        </span>
      </div>

      {/* ── Dot grid overlay ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(168,191,204,0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Ambient glow orbs ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          bottom: '-140px',
          left: '-100px',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: '-100px',
          right: '-80px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(96,165,250,0.065) 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">

        {/* ── Section Header ── */}
        <div
          ref={sectionRef}
          className="animate-on-scroll mb-16"
        >
          {/* Eyebrow label */}
          <div className="mb-5 flex items-center gap-3">
            <span
              aria-hidden="true"
              style={{
                color: '#3B82F6',
                fontSize: '14px',
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              ✚
            </span>
            <span
              className="font-semibold uppercase"
              style={{
                color: '#3B82F6',
                fontSize: '11px',
                letterSpacing: '0.2em',
              }}
            >
              Platform Anatomy
            </span>
          </div>

          {/* Heading with left-border accent */}
          <div className="flex items-start gap-5">
            <div
              aria-hidden="true"
              className="mt-1 shrink-0"
              style={{
                width: '4px',
                height: '56px',
                borderRadius: '99px',
                background:
                  'linear-gradient(180deg, #3B82F6 0%, rgba(59,130,246,0.25) 100%)',
              }}
            />
            <div>
              <h2
                className="mb-4 font-bold leading-tight text-white"
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  letterSpacing: '-0.03em',
                  fontFamily: 'Inter, "Plus Jakarta Sans", sans-serif',
                }}
              >
                23 Integrated Modules
              </h2>
              <p
                className="max-w-[580px] leading-[1.75]"
                style={{
                  color: '#A8BFCC',
                  fontSize: '17px',
                }}
              >
                A comprehensive suite of healthcare data modules — every
                clinical, financial, operational, and compliance workflow
                unified in a single intelligent platform.
              </p>
            </div>
          </div>
        </div>

        {/* ── 4-Column Modules Grid ── */}
        <div className="modules-grid">
          {modules.map((mod, index) => {
            const Icon = mod.icon
            const isTeal = mod.color === 'teal'
            const accentColor = isTeal ? '#3B82F6' : '#60A5FA'
            const iconBg = isTeal
              ? 'rgba(59, 130, 246, 0.10)'
              : 'rgba(96, 165, 250, 0.10)'
            const iconGlow = isTeal
              ? '0 0 20px rgba(59, 130, 246, 0.20)'
              : '0 0 20px rgba(96, 165, 250, 0.20)'
            const tagBg = isTeal
              ? 'rgba(59, 130, 246, 0.08)'
              : 'rgba(96, 165, 250, 0.08)'
            const tagBorder = isTeal
              ? 'rgba(59, 130, 246, 0.24)'
              : 'rgba(96, 165, 250, 0.24)'

            // Stagger delay cycles across 4 columns
            const colIndex = index % 4
            const staggerDelay = `${colIndex * 0.09}s`

            return (
              <div
                key={mod.name}
                ref={(el: HTMLDivElement | null) => {
                  cardRefs.current[index] = el
                }}
                className="animate-on-scroll"
                style={{ transitionDelay: staggerDelay }}
              >
                <div
                  className="module-card group relative flex flex-col items-center justify-center px-6 py-8 text-center"
                  style={{
                    minHeight: '200px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    borderTop: `3px solid ${accentColor}`,
                    borderRadius: '20px',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    boxShadow:
                      '0 8px 48px rgba(0, 0, 0, 0.28), 0 1px 0 rgba(255,255,255,0.06) inset',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'rgba(59, 130, 246, 0.30)'
                    el.style.borderTopColor = accentColor
                    el.style.boxShadow =
                      '0 16px 64px rgba(0, 0, 0, 0.40), 0 0 0 1px rgba(59, 130, 246, 0.15), 0 1px 0 rgba(255,255,255,0.08) inset'
                    el.style.transform = 'translateY(-4px)'
                    // Boost icon glow on hover
                    const iconEl = el.querySelector<HTMLDivElement>('.icon-wrap')
                    if (iconEl) {
                      iconEl.style.boxShadow = isTeal
                        ? '0 0 32px rgba(59, 130, 246, 0.35)'
                        : '0 0 32px rgba(96, 165, 250, 0.35)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'rgba(255, 255, 255, 0.09)'
                    el.style.borderTopColor = accentColor
                    el.style.boxShadow =
                      '0 8px 48px rgba(0, 0, 0, 0.28), 0 1px 0 rgba(255,255,255,0.06) inset'
                    el.style.transform = 'translateY(0)'
                    const iconEl = el.querySelector<HTMLDivElement>('.icon-wrap')
                    if (iconEl) {
                      iconEl.style.boxShadow = iconGlow
                    }
                  }}
                >
                  {/* Icon container */}
                  <div
                    className="icon-wrap mb-4 flex items-center justify-center"
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      background: iconBg,
                      boxShadow: iconGlow,
                      transition: 'box-shadow 0.35s ease',
                      flexShrink: 0,
                    }}
                  >
                    <Icon
                      size={28}
                      strokeWidth={1.6}
                      style={{ color: accentColor }}
                    />
                  </div>

                  {/* Module name */}
                  <p
                    className="mb-3 font-semibold leading-snug text-white"
                    style={{
                      fontSize: '14px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {mod.name}
                  </p>

                  {/* Category tag */}
                  <span
                    className="inline-flex items-center rounded-full px-3 font-medium uppercase"
                    style={{
                      paddingTop: '5px',
                      paddingBottom: '5px',
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      color: accentColor,
                      background: tagBg,
                      border: `1px solid ${tagBorder}`,
                      lineHeight: 1,
                    }}
                  >
                    {mod.category}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Bottom Stats Strip ── */}
        <div
          ref={statsRef}
          className="animate-on-scroll mt-16"
        >
          <div
            className="rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '32px 40px',
            }}
          >
            <div className="stats-inner flex flex-wrap items-stretch justify-center">
              {[
                { value: 23, suffix: '', label: 'Integrated Modules' },
                { value: 240, suffix: '+', label: 'Database Tables' },
                { value: 354, suffix: '+', label: 'API Endpoints' },
                { value: 100, suffix: '%', label: 'HL7 / FHIR Compatible' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="stat-item flex flex-col items-center justify-center gap-2 px-10"
                  style={{
                    borderRight:
                      i < 3 ? '1px solid rgba(255,255,255,0.09)' : 'none',
                    minWidth: '160px',
                  }}
                >
                  <span
                    ref={(el: HTMLSpanElement | null) => {
                      statValueRefs.current[i] = el
                    }}
                    className="font-bold leading-none tabular-nums"
                    style={{
                      fontSize: '32px',
                      color: '#3B82F6',
                      letterSpacing: '-0.03em',
                      fontFamily: 'Inter, "Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {stat.value}
                    {stat.suffix}
                  </span>
                  <span
                    className="font-medium"
                    style={{
                      fontSize: '13px',
                      color: '#A8BFCC',
                      textAlign: 'center',
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Global Styles ── */}
      <style jsx>{`
        /* ── Scroll animation base state ── */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Modules grid — 4 columns default ── */
        .modules-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* ── Tablet: 3 columns ── */
        @media (max-width: 1100px) {
          .modules-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* ── Tablet small / large mobile: 2 columns ── */
        @media (max-width: 768px) {
          .modules-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .modules-section {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
        }

        /* ── Small mobile: 1 column ── */
        @media (max-width: 480px) {
          .modules-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Stats strip responsive ── */
        @media (max-width: 768px) {
          .stats-inner {
            flex-direction: column;
            align-items: center;
          }
          .stat-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            padding: 20px 0 !important;
            width: 100%;
          }
          .stat-item:last-child {
            border-bottom: none;
          }
        }

        /* ── Section padding mobile ── */
        @media (max-width: 480px) {
          .modules-section {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }
        }

        /* ── Watermark responsive ── */
        @media (max-width: 768px) {
          .watermark-23 span {
            font-size: clamp(180px, 50vw, 280px) !important;
          }
        }
      `}</style>
    </section>
  )
}