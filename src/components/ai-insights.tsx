'use client'

import { useEffect, useRef, useState } from 'react'
import { BRAND } from '@/lib/brand'

interface MiniBarChartProps {
  visible: boolean
}

function MiniBarChart({ visible }: MiniBarChartProps) {
  const bars = [
    { height: 40, label: 'Low', color: '#00C9B1' },
    { height: 65, label: 'Med', color: '#00C9B1' },
    { height: 85, label: 'High', color: '#FF6B6B' },
    { height: 55, label: 'Med', color: '#00C9B1' },
    { height: 30, label: 'Low', color: '#00C9B1' },
  ]

  return (
    <div
      className="mt-6 p-4 rounded-xl"
      style={{
        background: 'rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          style={{
            fontSize: '11px',
            color: '#A8BFCC',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Risk Distribution
        </span>
        <span style={{ fontSize: '11px', color: '#00C9B1', fontWeight: 600 }}>
          Live Model
        </span>
      </div>
      <div className="flex items-end gap-2" style={{ height: '64px' }}>
        {bars.map((bar, i) => (
          <div key={i} className="flex flex-col items-center gap-1 flex-1">
            <div
              className="w-full rounded-t-sm"
              style={{
                height: visible ? `${bar.height}%` : '0%',
                background: bar.color,
                opacity: bar.color === '#FF6B6B' ? 0.85 : 0.6,
                transition: `height 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.08}s`,
                minHeight: visible ? '4px' : '0px',
              }}
            />
            <span style={{ fontSize: '9px', color: '#4A6080' }}>{bar.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-3">
        <span style={{ fontSize: '12px', color: '#A8BFCC' }}>Avg Risk Score</span>
        <span style={{ fontSize: '16px', color: '#FF6B6B', fontWeight: 700 }}>
          73.2%
        </span>
      </div>
    </div>
  )
}

interface MiniDonutProps {
  visible: boolean
}

function MiniDonut({ visible }: MiniDonutProps) {
  const [progress, setProgress] = useState(0)
  const radius = 28
  const circumference = 2 * Math.PI * radius
  const percentage = 94

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setProgress(percentage)
      }, 300)
      return () => clearTimeout(timer)
    } else {
      setProgress(0)
    }
  }, [visible])

  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div
      className="mt-6 p-4 rounded-xl"
      style={{
        background: 'rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          style={{
            fontSize: '11px',
            color: '#A8BFCC',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Denial Prevention
        </span>
        <span style={{ fontSize: '11px', color: '#7B8CDE', fontWeight: 600 }}>
          AI Model
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div
          className="relative flex items-center justify-center"
          style={{ width: '72px', height: '72px' }}
        >
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            style={{ transform: 'rotate(-90deg)' }}
          >
            <circle
              cx="36"
              cy="36"
              r={radius}
              fill="none"
              stroke="rgba(123,140,222,0.15)"
              strokeWidth="6"
            />
            <circle
              cx="36"
              cy="36"
              r={radius}
              fill="none"
              stroke="#7B8CDE"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{
                transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              style={{ fontSize: '15px', fontWeight: 700, color: '#7B8CDE' }}
            >
              {visible ? `${percentage}%` : '0%'}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <div style={{ fontSize: '12px', color: '#A8BFCC' }}>
              Claims Approved
            </div>
            <div
              style={{ fontSize: '18px', color: '#FFFFFF', fontWeight: 700 }}
            >
              94.1%
            </div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#A8BFCC' }}>
              Denials Caught
            </div>
            <div
              style={{ fontSize: '18px', color: '#7B8CDE', fontWeight: 700 }}
            >
              ↓ 67%
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface MiniSparklineProps {
  visible: boolean
}

function MiniSparkline({ visible }: MiniSparklineProps) {
  const points = [
    { x: 0, y: 45 },
    { x: 16, y: 42 },
    { x: 32, y: 44 },
    { x: 48, y: 38 },
    { x: 64, y: 40 },
    { x: 80, y: 35 },
    { x: 96, y: 32 },
    { x: 112, y: 55 },
    { x: 128, y: 48 },
    { x: 144, y: 50 },
    { x: 160, y: 44 },
    { x: 176, y: 42 },
    { x: 192, y: 38 },
    { x: 208, y: 35 },
  ]

  const pathD = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
    .join(' ')

  const areaD = `${pathD} L ${points[points.length - 1].x} 60 L 0 60 Z`

  return (
    <div
      className="mt-6 p-4 rounded-xl"
      style={{
        background: 'rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          style={{
            fontSize: '11px',
            color: '#A8BFCC',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Vitals Trend
        </span>
        <div className="flex items-center gap-1">
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: '#FF6B6B',
              animation: 'pulse-dot 1.5s ease-in-out infinite',
            }}
          />
          <span
            style={{ fontSize: '11px', color: '#FF6B6B', fontWeight: 600 }}
          >
            Anomaly Detected
          </span>
        </div>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <svg
          width="100%"
          viewBox="0 0 208 64"
          preserveAspectRatio="none"
          style={{ height: '56px' }}
        >
          <defs>
            <linearGradient
              id="sparkGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#00C9B1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00C9B1" stopOpacity="0" />
            </linearGradient>
            <clipPath id="sparkClip">
              <rect
                x="0"
                y="0"
                height="64"
                width={visible ? '208' : '0'}
                style={{
                  transition:
                    'width 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
                }}
              />
            </clipPath>
          </defs>
          <path
            d={areaD}
            fill="url(#sparkGradient)"
            clipPath="url(#sparkClip)"
          />
          <path
            d={pathD}
            fill="none"
            stroke="#00C9B1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            clipPath="url(#sparkClip)"
          />
          {/* Anomaly spike marker */}
          <circle
            cx="112"
            cy="55"
            r="3"
            fill="#FF6B6B"
            opacity={visible ? 1 : 0}
            style={{ transition: 'opacity 0.3s ease 1.2s' }}
          />
        </svg>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span style={{ fontSize: '12px', color: '#A8BFCC' }}>Heart Rate</span>
        <span style={{ fontSize: '16px', color: '#FF6B6B', fontWeight: 700 }}>
          ↑ 142 bpm
        </span>
      </div>
    </div>
  )
}

interface CardData {
  eyebrow: string
  title: string
  description: string
  accentColor: string
  icon: React.ReactNode
  chart: 'bar' | 'donut' | 'sparkline'
  stat: string
  statLabel: string
}

function BrainIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 4C13.8 4 12 5.8 12 8C10.3 8.4 9 9.9 9 11.7C7.3 12.2 6 13.8 6 15.7C6 17.6 7.3 19.2 9 19.7V22C9 24.2 10.8 26 13 26H19C21.2 26 23 24.2 23 22V19.7C24.7 19.2 26 17.6 26 15.7C26 13.8 24.7 12.2 23 11.7C23 9.9 21.7 8.4 20 8C20 5.8 18.2 4 16 4Z"
        stroke="#00C9B1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 4V14M12 8L16 12M20 8L16 12M9 19.7L13 17M23 19.7L19 17M9 11.7L12 13M23 11.7L20 13"
        stroke="#00C9B1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      <circle cx="16" cy="15" r="2" fill="#00C9B1" opacity="0.8" />
    </svg>
  )
}

function ShieldCheckIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 4L7 8V16C7 20.97 11.05 25.6 16 27C20.95 25.6 25 20.97 25 16V8L16 4Z"
        stroke="#7B8CDE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 16L14.5 19L20.5 13"
        stroke="#7B8CDE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HeartbeatIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 17H8L10 13L13 21L15 15L17 19L19 17H28"
        stroke="#00C9B1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 26C16 26 6 20 6 12C6 9.24 8.24 7 11 7C12.74 7 14.28 7.88 15.2 9.2L16 10.4L16.8 9.2C17.72 7.88 19.26 7 21 7C23.76 7 26 9.24 26 12"
        stroke="#00C9B1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  )
}

function AIInsightCard({
  card,
  index,
  isVisible,
  chartVisible,
}: {
  card: CardData
  index: number
  isVisible: boolean
  chartVisible: boolean
}) {
  const [hovered, setHovered] = useState(false)

  const isLavender = card.accentColor === '#7B8CDE'
  const rgbAccent = isLavender ? '123,140,222' : '0,201,177'
  const staggerDelay = `${index * 0.15}s`

  return (
    <div
      role="article"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(255, 255, 255, 0.04)',
        border: hovered
          ? `1px solid rgba(${rgbAccent}, 0.3)`
          : '1px solid rgba(255, 255, 255, 0.09)',
        borderRadius: '20px',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: hovered
          ? `0 16px 64px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(${rgbAccent}, 0.15), 0 1px 0 rgba(255,255,255,0.08) inset`
          : '0 8px 48px rgba(0, 0, 0, 0.28), 0 1px 0 rgba(255,255,255,0.06) inset',
        transform: isVisible
          ? hovered
            ? 'translateY(-4px)'
            : 'translateY(0)'
          : 'translateY(28px)',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: isVisible ? staggerDelay : '0s',
        opacity: isVisible ? 1 : 0,
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      {/* Colored top-border accent — 3px solid per spec */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: isLavender
            ? 'linear-gradient(90deg, transparent 0%, #7B8CDE 40%, #7B8CDE 60%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, #00C9B1 40%, #00C9B1 60%, transparent 100%)',
          borderRadius: '20px 20px 0 0',
        }}
        aria-hidden="true"
      />

      {/* Ambient corner glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '220px',
          height: '220px',
          background: `radial-gradient(circle at top right, ${card.accentColor}0A 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Eyebrow + icon row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <span
          style={{
            fontSize: '11px',
            color: card.accentColor,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
          }}
        >
          {card.eyebrow}
        </span>

        {/* Icon container */}
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '14px',
            background: `rgba(${rgbAccent}, 0.08)`,
            border: `1px solid rgba(${rgbAccent}, 0.2)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'background 0.3s ease, border-color 0.3s ease',
            ...(hovered && {
              background: `rgba(${rgbAccent}, 0.14)`,
              borderColor: `rgba(${rgbAccent}, 0.35)`,
            }),
          }}
        >
          {card.icon}
        </div>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '22px',
          fontWeight: 700,
          color: '#FFFFFF',
          letterSpacing: '-0.02em',
          lineHeight: 1.3,
          marginBottom: '12px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {card.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '15px',
          color: '#A8BFCC',
          lineHeight: 1.75,
          fontFamily: 'Inter, sans-serif',
          flexGrow: 1,
          margin: 0,
        }}
      >
        {card.description}
      </p>

      {/* Mini chart — conditionally rendered by type */}
      {card.chart === 'bar' && <MiniBarChart visible={chartVisible} />}
      {card.chart === 'donut' && <MiniDonut visible={chartVisible} />}
      {card.chart === 'sparkline' && <MiniSparkline visible={chartVisible} />}

      {/* Bottom stat row */}
      <div
        style={{
          marginTop: '24px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <span
          style={{
            fontSize: '28px',
            fontWeight: 800,
            color: card.accentColor,
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          {card.stat}
        </span>
        <span
          style={{
            fontSize: '13px',
            color: '#A8BFCC',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.4,
          }}
        >
          {card.statLabel}
        </span>
      </div>
    </div>
  )
}

export function AIInsights() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [cardVisible, setCardVisible] = useState<[boolean, boolean, boolean]>([
    false,
    false,
    false,
  ])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Stagger chart visibility per card — 0.15s apart
            setTimeout(
              () => setCardVisible([true, false, false]),
              300
            )
            setTimeout(
              () => setCardVisible([true, true, false]),
              300 + 150
            )
            setTimeout(
              () => setCardVisible([true, true, true]),
              300 + 300
            )
          }
        })
      },
      { threshold: 0.12 }
    )

    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const cards: CardData[] = [
    {
      eyebrow: 'Predictive Analytics',
      title: 'Readmission Risk Scoring',
      description:
        'AI models analyze 200+ clinical variables to predict 30-day readmission risk for each patient, enabling proactive care interventions before discharge.',
      accentColor: '#00C9B1',
      icon: <BrainIcon />,
      chart: 'bar',
      stat: '31%',
      statLabel: 'Reduction in 30-day readmissions',
    },
    {
      eyebrow: 'Revenue Integrity',
      title: 'Billing Denial Prediction',
      description:
        'Machine learning models trained on millions of claims detect denial risk patterns in real-time, allowing billing teams to intervene before submission.',
      accentColor: '#7B8CDE',
      icon: <ShieldCheckIcon />,
      chart: 'donut',
      stat: '67%',
      statLabel: 'Decrease in claim denials',
    },
    {
      eyebrow: 'Clinical Monitoring',
      title: 'Vitals Anomaly Detection',
      description:
        'Continuous real-time analysis of patient vitals streams detects early deterioration signals — surfacing critical anomalies hours before traditional thresholds trigger.',
      accentColor: '#00C9B1',
      icon: <HeartbeatIcon />,
      chart: 'sparkline',
      stat: '4.2hrs',
      statLabel: 'Earlier intervention on average',
    },
  ]

  return (
    <section
      ref={sectionRef}
      aria-labelledby="ai-insights-heading"
      style={{
        background: '#0D2137',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient orbs */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '8%',
          right: '-8%',
          width: '640px',
          height: '640px',
          background:
            'radial-gradient(circle, rgba(123,140,222,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '-8%',
          width: '520px',
          height: '520px',
          background:
            'radial-gradient(circle, rgba(0,201,177,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Molecular dot-grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* ── Section header ────────────────────────────────────── */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '72px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
            transition:
              'opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1), transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Eyebrow with cross decorations */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '24px',
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 1V13M1 7H13"
                stroke="#00C9B1"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span
              style={{
                fontSize: '11px',
                color: '#00C9B1',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
              }}
            >
              AI-Powered Intelligence
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 1V13M1 7H13"
                stroke="#00C9B1"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h2
            id="ai-insights-heading"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              margin: '0 0 20px',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Predictive Intelligence at{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, #00C9B1 0%, #7B8CDE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Every Care Touchpoint
            </span>
          </h2>

          <p
            style={{
              fontSize: '17px',
              color: '#A8BFCC',
              lineHeight: 1.75,
              maxWidth: '600px',
              margin: '0 auto',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {BRAND.name} embeds AI models directly into clinical and financial
            workflows — surfacing actionable predictions that reduce risk,
            prevent revenue loss, and improve patient outcomes.
          </p>
        </div>

        {/* ── Three-panel card grid ──────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {cards.map((card, index) => (
            <AIInsightCard
              key={card.title}
              card={card}
              index={index}
              isVisible={isVisible}
              chartVisible={cardVisible[index]}
            />
          ))}
        </div>

        {/* ── Responsive grid override via style tag ─────────────── */}
        <style>{`
          @media (max-width: 1024px) {
            .ai-insights-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .ai-insights-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>

      {/* Global keyframes for sparkline pulse dot */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(1.4); }
        }
      `}</style>
    </section>
  )
}