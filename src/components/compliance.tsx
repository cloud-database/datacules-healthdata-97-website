'use client'

import { useEffect, useRef, useState } from 'react'
import { BRAND } from '@/lib/brand'

interface StatItem {
  value: number
  suffix: string
  label: string
}

const stats: StatItem[] = [
  { value: 354, suffix: '+', label: 'API Endpoints' },
  { value: 240, suffix: '+', label: 'Database Tables' },
  { value: 23, suffix: '', label: 'Integrated Modules' },
  { value: 100, suffix: '%', label: 'HIPAA Compliant' },
]

interface ComplianceBadge {
  title: string
  description: string
  color: 'teal' | 'lavender'
  icon: React.ReactNode
}

function ShieldIcon({ color }: { color: 'teal' | 'lavender' }) {
  const stroke = color === 'teal' ? '#3B82F6' : '#60A5FA'
  const glow = color === 'teal' ? 'rgba(59,130,246,0.25)' : 'rgba(96,165,250,0.25)'
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shield-glow-def" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <path
        d="M32 8L12 16V32C12 43.2 20.8 53.6 32 56C43.2 53.6 52 43.2 52 32V16L32 8Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={glow}
        filter="url(#shield-glow-def)"
      />
      <path
        d="M32 8L12 16V32C12 43.2 20.8 53.6 32 56C43.2 53.6 52 43.2 52 32V16L32 8Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M24 32L29 37L40 26"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LockIcon({ color }: { color: 'teal' | 'lavender' }) {
  const stroke = color === 'teal' ? '#3B82F6' : '#60A5FA'
  const glow = color === 'teal' ? 'rgba(59,130,246,0.15)' : 'rgba(96,165,250,0.15)'
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="28" width="36" height="28" rx="4" stroke={stroke} strokeWidth="2" fill={glow} />
      <rect x="14" y="28" width="36" height="28" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
      <path
        d="M22 28V22C22 16.477 26.477 12 32 12C37.523 12 42 16.477 42 22V28"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="42" r="4" stroke={stroke} strokeWidth="2" fill={glow} />
      <line x1="32" y1="46" x2="32" y2="50" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function NetworkIcon({ color }: { color: 'teal' | 'lavender' }) {
  const stroke = color === 'teal' ? '#3B82F6' : '#60A5FA'
  const glow = color === 'teal' ? 'rgba(59,130,246,0.2)' : 'rgba(96,165,250,0.2)'
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="6" stroke={stroke} strokeWidth="2" fill={glow} />
      <circle cx="12" cy="20" r="4" stroke={stroke} strokeWidth="2" fill={glow} />
      <circle cx="52" cy="20" r="4" stroke={stroke} strokeWidth="2" fill={glow} />
      <circle cx="12" cy="44" r="4" stroke={stroke} strokeWidth="2" fill={glow} />
      <circle cx="52" cy="44" r="4" stroke={stroke} strokeWidth="2" fill={glow} />
      <line x1="16" y1="22" x2="27" y2="28" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="48" y1="22" x2="37" y2="28" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="42" x2="27" y2="36" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="48" y1="42" x2="37" y2="36" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function AuditIcon({ color }: { color: 'teal' | 'lavender' }) {
  const stroke = color === 'teal' ? '#3B82F6' : '#60A5FA'
  const glow = color === 'teal' ? 'rgba(59,130,246,0.15)' : 'rgba(96,165,250,0.15)'
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="8" width="36" height="48" rx="4" stroke={stroke} strokeWidth="2" fill={glow} />
      <rect x="14" y="8" width="36" height="48" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
      <line x1="22" y1="22" x2="42" y2="22" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="30" x2="42" y2="30" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="38" x2="34" y2="38" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="44" r="6" stroke={stroke} strokeWidth="2" fill={glow} />
      <path d="M37.5 44L39.2 45.7L42.5 42.5" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const badges: ComplianceBadge[] = [
  {
    title: 'HIPAA Compliant',
    description:
      'Full compliance with Health Insurance Portability and Accountability Act standards for protected health information.',
    color: 'teal',
    icon: <ShieldIcon color="teal" />,
  },
  {
    title: 'GDPR Ready',
    description:
      'General Data Protection Regulation compliant data handling, consent management, and right-to-erasure workflows.',
    color: 'lavender',
    icon: <LockIcon color="lavender" />,
  },
  {
    title: 'HL7 FHIR',
    description:
      'Native HL7 Fast Healthcare Interoperability Resources support for seamless healthcare data exchange standards.',
    color: 'teal',
    icon: <NetworkIcon color="teal" />,
  },
  {
    title: 'SOC 2 Type II',
    description:
      'Third-party audited security, availability, and confidentiality controls meeting enterprise trust service criteria.',
    color: 'lavender',
    icon: <AuditIcon color="lavender" />,
  },
]

function AnimatedRing({ color, index }: { color: 'teal' | 'lavender'; index: number }) {
  const outerStroke =
    color === 'teal' ? 'rgba(59,130,246,0.55)' : 'rgba(96,165,250,0.55)'
  const innerStroke =
    color === 'teal' ? 'rgba(59,130,246,0.22)' : 'rgba(96,165,250,0.22)'
  const midStroke =
    color === 'teal' ? 'rgba(59,130,246,0.14)' : 'rgba(96,165,250,0.14)'

  // Use deterministic names based on index only — no random suffix
  const outerAnim = `compliance-spin-outer-${index}`
  const innerAnim = `compliance-spin-inner-${index}`

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ pointerEvents: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <style>{`
        @keyframes ${outerAnim} {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes ${innerAnim} {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
      `}</style>

      {/* Outermost dashed rotating ring */}
      <circle
        cx="70"
        cy="70"
        r="64"
        stroke={outerStroke}
        strokeWidth="1.5"
        strokeDasharray="10 6"
        strokeLinecap="round"
        style={{
          transformOrigin: '70px 70px',
          animation: `${outerAnim} 6s linear infinite`,
        }}
      />

      {/* Mid subtle ring — counter-rotating */}
      <circle
        cx="70"
        cy="70"
        r="54"
        stroke={midStroke}
        strokeWidth="1"
        strokeDasharray="5 10"
        strokeLinecap="round"
        style={{
          transformOrigin: '70px 70px',
          animation: `${innerAnim} 10s linear infinite`,
        }}
      />

      {/* Inner counter-rotating dashed ring */}
      <circle
        cx="70"
        cy="70"
        r="44"
        stroke={innerStroke}
        strokeWidth="1"
        strokeDasharray="4 8"
        strokeLinecap="round"
        style={{
          transformOrigin: '70px 70px',
          animation: `${outerAnim} 14s linear infinite`,
        }}
      />

      {/* Static base ring for depth */}
      <circle
        cx="70"
        cy="70"
        r="36"
        stroke={color === 'teal' ? 'rgba(59,130,246,0.07)' : 'rgba(96,165,250,0.07)'}
        strokeWidth="1"
      />
    </svg>
  )
}

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let startTime: number | null = null
    let animFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic for natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        animFrame = requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }

    animFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animFrame)
  }, [target, duration, started])

  return count
}

function StatCounter({
  stat,
  started,
  index,
}: {
  stat: StatItem
  started: boolean
  index: number
}) {
  const count = useCountUp(stat.value, 1800 + index * 120, started)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
      }}
    >
      <span
        aria-live="polite"
        style={{
          color: '#3B82F6',
          fontSize: 'clamp(24px, 3vw, 32px)',
          fontWeight: 700,
          lineHeight: 1.1,
          fontVariantNumeric: 'tabular-nums',
          letterSpacing: '-0.02em',
          textShadow: '0 0 24px rgba(59,130,246,0.35)',
        }}
      >
        {count}
        {stat.suffix}
      </span>
      <span
        style={{
          color: '#A8BFCC',
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '0.03em',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        {stat.label}
      </span>
    </div>
  )
}

export function Compliance() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([])

  const [sectionVisible, setSectionVisible] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const [badgesVisible, setBadgesVisible] = useState<boolean[]>([false, false, false, false])

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true)
            sectionObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06 }
    )

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true)
            statsObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    const badgeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(
              (entry.target as HTMLElement).dataset.badgeIndex ?? '0',
              10
            )
            setBadgesVisible((prev) => {
              if (prev[idx]) return prev
              const next = [...prev]
              next[idx] = true
              return next
            })
            badgeObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) sectionObserver.observe(sectionRef.current)
    if (statsRef.current) statsObserver.observe(statsRef.current)
    badgeRefs.current.forEach((el) => {
      if (el) badgeObserver.observe(el)
    })

    return () => {
      sectionObserver.disconnect()
      statsObserver.disconnect()
      badgeObserver.disconnect()
    }
  }, [])

  return (
    <>
      {/* ─── Global keyframes & utility classes ─── */}
      <style>{`
        @keyframes pulse-dot-compliance {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(59,130,246,0.55);
          }
          50% {
            opacity: 0.75;
            transform: scale(0.88);
            box-shadow: 0 0 0 7px rgba(59,130,246,0);
          }
        }

        @keyframes vault-pulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }

        .compliance-tile {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 20px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow:
            0 8px 48px rgba(0,0,0,0.28),
            0 1px 0 rgba(255,255,255,0.06) inset;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          cursor: default;
        }

        .compliance-tile:hover {
          transform: translateY(-5px);
        }

        .compliance-tile.teal:hover {
          border-color: rgba(59,130,246,0.32);
          box-shadow:
            0 20px 72px rgba(0,0,0,0.42),
            0 0 0 1px rgba(59,130,246,0.18),
            0 1px 0 rgba(255,255,255,0.08) inset;
        }

        .compliance-tile.lavender:hover {
          border-color: rgba(96,165,250,0.32);
          box-shadow:
            0 20px 72px rgba(0,0,0,0.42),
            0 0 0 1px rgba(96,165,250,0.18),
            0 1px 0 rgba(255,255,255,0.08) inset;
        }

        .compliance-tile.teal:hover .tile-top-glow {
          opacity: 1;
        }

        .compliance-tile.lavender:hover .tile-top-glow {
          opacity: 1;
        }

        .tile-top-glow {
          opacity: 0.5;
          transition: opacity 0.35s ease;
        }

        .compliance-stats-bar {
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 20px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow:
            0 8px 48px rgba(0,0,0,0.28),
            0 1px 0 rgba(255,255,255,0.05) inset;
          position: relative;
          overflow: hidden;
        }

        .compliance-stats-bar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(59,130,246,0.35) 30%,
            rgba(96,165,250,0.35) 70%,
            transparent 100%
          );
        }

        /* ── Responsive grid ── */
        @media (max-width: 880px) {
          .compliance-badge-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .compliance-badge-grid {
            grid-template-columns: 1fr !important;
          }
          .compliance-stats-inner {
            grid-template-columns: repeat(2, 1fr) !important;
            row-gap: 32px !important;
          }
          .compliance-stats-divider {
            display: none !important;
          }
          .compliance-stat-cell:nth-child(odd) {
            border-right: 1px solid rgba(255,255,255,0.07) !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        aria-label="Compliance and Security"
        style={{
          background: 'linear-gradient(180deg, #112744 0%, #0D2137 100%)',
          paddingTop: '120px',
          paddingBottom: '120px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ── Vault ambient glow backdrop ── */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 75% 50% at 50% 15%, rgba(59,130,246,0.05) 0%, transparent 65%), ' +
              'radial-gradient(ellipse 55% 45% at 85% 85%, rgba(96,165,250,0.045) 0%, transparent 60%), ' +
              'radial-gradient(ellipse 40% 40% at 10% 70%, rgba(59,130,246,0.025) 0%, transparent 60%)',
          }}
        />

        {/* ── Molecular dot-grid overlay ── */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage:
              'radial-gradient(circle, rgba(168,191,204,0.065) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.55,
          }}
        />

        {/* ── Large watermark "VAULT" text for depth ── */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '-40px',
            right: '-20px',
            fontSize: '280px',
            fontWeight: 900,
            letterSpacing: '-0.06em',
            color: 'rgba(59,130,246,0.018)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          SECURE
        </div>

        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 32px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* ─── Section Header ─── */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '72px',
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? 'translateY(0)' : 'translateY(28px)',
              transition:
                'opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            {/* Eyebrow label */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#3B82F6',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  lineHeight: 1,
                  color: '#3B82F6',
                }}
              >
                ✚
              </span>
              COMPLIANCE &amp; SECURITY
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700,
                letterSpacing: '-0.028em',
                lineHeight: 1.15,
                color: '#FFFFFF',
                maxWidth: '680px',
                margin: '0 auto',
              }}
            >
              Enterprise-Grade Security,{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Built Into Every Layer
              </span>
            </h2>

            <p
              style={{
                color: '#A8BFCC',
                fontSize: '17px',
                lineHeight: 1.75,
                maxWidth: '560px',
                margin: '20px auto 0',
              }}
            >
              {BRAND.name} is architected from the ground up to meet the strictest healthcare
              data security and interoperability standards demanded by enterprise health systems.
            </p>
          </div>

          {/* ─── 2 × 2 Compliance Badge Grid ─── */}
          <div
            className="compliance-badge-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            {badges.map((badge, index) => {
              const accentColor = badge.color === 'teal' ? '#3B82F6' : '#60A5FA'
              const accentRgbaStrong =
                badge.color === 'teal'
                  ? 'rgba(59,130,246,0.65)'
                  : 'rgba(96,165,250,0.65)'
              const glowColor =
                badge.color === 'teal'
                  ? 'rgba(59,130,246,0.08)'
                  : 'rgba(96,165,250,0.08)'
              const iconGlow =
                badge.color === 'teal'
                  ? 'rgba(59,130,246,0.45)'
                  : 'rgba(96,165,250,0.45)'

              return (
                <div
                  key={badge.title}
                  ref={(el) => {
                    badgeRefs.current[index] = el
                  }}
                  data-badge-index={index}
                  className={`compliance-tile ${badge.color}`}
                  style={{
                    padding: '52px 40px 44px',
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderTop: `3px solid ${accentRgbaStrong}`,
                    opacity: badgesVisible[index] ? 1 : 0,
                    transform: badgesVisible[index]
                      ? 'translateY(0)'
                      : 'translateY(32px)',
                    transition: `opacity 0.65s cubic-bezier(0.4,0,0.2,1) ${index * 0.15}s,
                                 transform 0.65s cubic-bezier(0.4,0,0.2,1) ${index * 0.15}s`,
                  }}
                >
                  {/* Top ambient glow blob */}
                  <div
                    aria-hidden="true"
                    className="tile-top-glow"
                    style={{
                      position: 'absolute',
                      top: '-60px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '240px',
                      height: '240px',
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${glowColor} 0%, transparent 65%)`,
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Corner sparkle accent */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '24px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: accentColor,
                      opacity: 0.5,
                      boxShadow: `0 0 10px 3px ${accentColor}`,
                      animation: 'vault-pulse 3s ease-in-out infinite',
                    }}
                  />

                  {/* ── Icon container with animated rings ── */}
                  <div
                    style={{
                      position: 'relative',
                      width: '140px',
                      height: '140px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '32px',
                      flexShrink: 0,
                    }}
                  >
                    {/* Rotating dashed rings SVG */}
                    <AnimatedRing color={badge.color} index={index} />

                    {/* Icon — raised above rings with glow */}
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 2,
                        filter: `drop-shadow(0 0 14px ${iconGlow})`,
                      }}
                    >
                      {badge.icon}
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: '21px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '-0.015em',
                      marginBottom: '12px',
                      lineHeight: 1.2,
                    }}
                  >
                    {badge.title}
                  </h3>

                  <p
                    style={{
                      color: '#A8BFCC',
                      fontSize: '14px',
                      lineHeight: 1.72,
                      maxWidth: '300px',
                    }}
                  >
                    {badge.description}
                  </p>

                  {/* Bottom accent gradient line */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '72px',
                      height: '2px',
                      borderRadius: '2px',
                      background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                      opacity: 0.45,
                    }}
                  />
                </div>
              )
            })}
          </div>

          {/* ─── Stats Bar ─── */}
          <div
            ref={statsRef}
            className="compliance-stats-bar"
            style={{
              padding: '40px 48px',
              opacity: statsVisible ? 1 : 0,
              transform: statsVisible ? 'translateY(0)' : 'translateY(28px)',
              transition:
                'opacity 0.65s cubic-bezier(0.4,0,0.2,1) 0.3s, transform 0.65s cubic-bezier(0.4,0,0.2,1) 0.3s',
            }}
          >
            {/* Subtle inner teal glow */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '20px',
                background:
                  'radial-gradient(ellipse 60% 70% at 50% 100%, rgba(59,130,246,0.04) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div
              className="compliance-stats-inner"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="compliance-stat-cell"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0 24px',
                    borderRight:
                      index < stats.length - 1
                        ? '1px solid rgba(255,255,255,0.08)'
                        : 'none',
                  }}
                >
                  <StatCounter stat={stat} started={statsVisible} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* ─── Trust note ─── */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '40px',
              opacity: sectionVisible ? 1 : 0,
              transition: 'opacity 0.65s cubic-bezier(0.4,0,0.2,1) 0.75s',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#A8BFCC',
                fontSize: '13px',
                lineHeight: 1.6,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#3B82F6',
                  flexShrink: 0,
                  animation: 'pulse-dot-compliance 2.4s ease-in-out infinite',
                  boxShadow: '0 0 0 0 rgba(59,130,246,0.5)',
                }}
              />
              <span>
                All data encrypted at rest and in transit &nbsp;·&nbsp; Annual third-party
                penetration testing &nbsp;·&nbsp; Role-based access control with full audit logging
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}