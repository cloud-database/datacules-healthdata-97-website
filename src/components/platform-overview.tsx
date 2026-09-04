'use client'

import { useEffect, useRef, useState } from 'react'
import { BRAND } from '@/lib/brand'

const modules = [
  { icon: '🏥', name: 'Patient Demographics', category: 'Clinical' },
  { icon: '🧬', name: 'Clinical Data Repository', category: 'Clinical' },
  { icon: '💊', name: 'Pharmacy Integration', category: 'Pharmacy' },
  { icon: '🔬', name: 'Laboratory Results', category: 'Labs' },
  { icon: '💳', name: 'Billing & Revenue Cycle', category: 'Financial' },
  { icon: '📡', name: 'Telehealth Connectivity', category: 'Operational' },
  { icon: '📟', name: 'IoT Device Streams', category: 'IoT' },
  { icon: '📊', name: 'Operational Analytics', category: 'Operational' },
]

const orbitNodes = [
  { label: 'Clinical', angle: 0, color: '#3B82F6', icon: '🏥' },
  { label: 'Financial', angle: 60, color: '#60A5FA', icon: '💰' },
  { label: 'Operational', angle: 120, color: '#3B82F6', icon: '⚙️' },
  { label: 'Labs', angle: 180, color: '#60A5FA', icon: '🔬' },
  { label: 'Pharmacy', angle: 240, color: '#3B82F6', icon: '💊' },
  { label: 'IoT', angle: 300, color: '#60A5FA', icon: '📡' },
]

function toRad(deg: number) {
  return (deg * Math.PI) / 180
}

function OrbitDiagram() {
  return (
    <svg
      viewBox="0 0 480 480"
      className="w-full max-w-[500px] mx-auto"
      aria-label="Unified patient data flow diagram showing 6 integrated data streams converging into a central patient record"
      role="img"
    >
      <defs>
        {/* Central glow gradient */}
        <radialGradient id="po-centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>

        {/* Outer ambient glow */}
        <radialGradient id="po-outerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.07" />
          <stop offset="60%" stopColor="#60A5FA" stopOpacity="0.05" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>

        {/* Teal node fill */}
        <radialGradient id="po-tealNode" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
        </radialGradient>

        {/* Lavender node fill */}
        <radialGradient id="po-lavNode" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.05" />
        </radialGradient>

        {/* Central fill */}
        <radialGradient id="po-centerFill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.07" />
        </radialGradient>

        {/* Orbit ring gradient */}
        <linearGradient id="po-orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.20" />
          <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.20" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="po-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Strong center glow filter */}
        <filter id="po-strongGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="7" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Lavender glow filter */}
        <filter id="po-lavGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <style>{`
          @keyframes po-orbitPulse {
            0%, 100% { opacity: 0.72; }
            50% { opacity: 1; }
          }
          @keyframes po-arcFlowTeal {
            0% { stroke-dashoffset: 260; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes po-arcFlowLav {
            0% { stroke-dashoffset: 260; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes po-centerPulse {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.07); }
          }
          @keyframes po-glowPulse {
            0%, 100% { opacity: 0.52; transform: scale(1); }
            50% { opacity: 0.88; transform: scale(1.12); }
          }
          @keyframes po-outerRing {
            0%, 100% { opacity: 0.22; }
            50% { opacity: 0.48; }
          }
          @keyframes po-outerRing2 {
            0%, 100% { opacity: 0.12; }
            50% { opacity: 0.28; }
          }
          @keyframes po-dotPulse {
            0%, 100% { opacity: 0.45; }
            50% { opacity: 1; }
          }
          @keyframes po-particleMove {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
          }
          .po-orbit-node {
            animation: po-orbitPulse 2.8s ease-in-out infinite;
          }
          .po-center-glow {
            animation: po-glowPulse 3.4s ease-in-out infinite;
            transform-origin: 240px 240px;
          }
          .po-center-ring {
            animation: po-centerPulse 3.4s ease-in-out infinite;
            transform-origin: 240px 240px;
          }
          .po-outer-ring {
            animation: po-outerRing 4.2s ease-in-out infinite;
          }
          .po-outer-ring2 {
            animation: po-outerRing2 5.5s ease-in-out infinite;
          }
          .po-arc-teal {
            stroke-dasharray: 10 6;
            animation: po-arcFlowTeal 2.6s linear infinite;
          }
          .po-arc-lav {
            stroke-dasharray: 10 6;
            animation: po-arcFlowLav 2.6s linear infinite;
          }
          .po-dot {
            animation: po-dotPulse 2s ease-in-out infinite;
          }
        `}</style>
      </defs>

      {/* Outer ambient background glow */}
      <circle cx={240} cy={240} r={220} fill="url(#po-outerGlow)" />

      {/* Outermost very subtle dashed ring */}
      <circle
        cx={240}
        cy={240}
        r={200}
        fill="none"
        stroke="rgba(96,165,250,0.07)"
        strokeWidth="1"
        strokeDasharray="2 10"
        className="po-outer-ring2"
      />

      {/* Subtle outer dashed ring */}
      <circle
        cx={240}
        cy={240}
        r={183}
        fill="none"
        stroke="rgba(59,130,246,0.10)"
        strokeWidth="1"
        strokeDasharray="3 9"
        className="po-outer-ring"
      />

      {/* Orbit ring */}
      <circle
        cx={240}
        cy={240}
        r={152}
        fill="none"
        stroke="url(#po-orbitGrad)"
        strokeWidth="1.5"
        strokeDasharray="5 8"
        opacity="0.60"
      />

      {/* Inner orbit ring */}
      <circle
        cx={240}
        cy={240}
        r={80}
        fill="none"
        stroke="rgba(59,130,246,0.14)"
        strokeWidth="1"
        strokeDasharray="3 6"
        opacity="0.65"
      />

      {/* Animated arcs from orbit nodes to center */}
      {orbitNodes.map((node, i) => {
        const rad = toRad(node.angle)
        const nx = 240 + 152 * Math.cos(rad)
        const ny = 240 + 152 * Math.sin(rad)
        const curveFactor = 0.40
        const cx1 = 240 + 152 * curveFactor * Math.cos(rad - 0.48)
        const cy1 = 240 + 152 * curveFactor * Math.sin(rad - 0.48)
        const isTeal = node.color === '#3B82F6'
        return (
          <path
            key={`arc-${node.label}`}
            d={`M ${nx} ${ny} Q ${cx1} ${cy1} 240 240`}
            fill="none"
            stroke={node.color}
            strokeWidth="1.6"
            className={isTeal ? 'po-arc-teal' : 'po-arc-lav'}
            style={{ animationDelay: `${i * 0.44}s` }}
            filter={isTeal ? 'url(#po-glow)' : 'url(#po-lavGlow)'}
            opacity="0.68"
          />
        )
      })}

      {/* Central ambient glow layer */}
      <circle
        cx={240}
        cy={240}
        r={96}
        fill="url(#po-centerGlow)"
        className="po-center-glow"
      />

      {/* Central outer ring (dashed, rotating feel) */}
      <circle
        cx={240}
        cy={240}
        r={64}
        fill="rgba(59,130,246,0.07)"
        stroke="#3B82F6"
        strokeWidth="1.2"
        strokeDasharray="4 5"
        opacity="0.55"
        className="po-center-ring"
        filter="url(#po-glow)"
      />

      {/* Central node solid fill */}
      <circle
        cx={240}
        cy={240}
        r={50}
        fill="url(#po-centerFill)"
        stroke="#3B82F6"
        strokeWidth="2.2"
        filter="url(#po-strongGlow)"
        className="po-center-ring"
      />

      {/* Central node inner circle */}
      <circle
        cx={240}
        cy={240}
        r={36}
        fill="rgba(59,130,246,0.18)"
      />

      {/* Central label */}
      <text
        x={240}
        y={232}
        textAnchor="middle"
        fill="#3B82F6"
        fontSize="11"
        fontWeight="700"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing="0.09em"
      >
        UNIFIED
      </text>
      <text
        x={240}
        y={246}
        textAnchor="middle"
        fill="#3B82F6"
        fontSize="11"
        fontWeight="700"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing="0.09em"
      >
        PATIENT
      </text>
      <text
        x={240}
        y={260}
        textAnchor="middle"
        fill="#3B82F6"
        fontSize="11"
        fontWeight="700"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing="0.09em"
      >
        RECORD
      </text>

      {/* Orbit nodes */}
      {orbitNodes.map((node, i) => {
        const rad = toRad(node.angle)
        const nx = 240 + 152 * Math.cos(rad)
        const ny = 240 + 152 * Math.sin(rad)
        const isTeal = node.color === '#3B82F6'
        const nodeR = 32

        // Label positioned further outside the node
        const labelDist = 152 + nodeR + 20
        const lx = 240 + labelDist * Math.cos(rad)
        const ly = 240 + labelDist * Math.sin(rad)

        return (
          <g key={node.label}>
            {/* Node outer glow ring */}
            <circle
              cx={nx}
              cy={ny}
              r={nodeR + 8}
              fill="none"
              stroke={node.color}
              strokeWidth="1"
              opacity="0.16"
              className="po-orbit-node"
              style={{ animationDelay: `${i * 0.44}s` }}
            />

            {/* Node fill */}
            <circle
              cx={nx}
              cy={ny}
              r={nodeR}
              fill={isTeal ? 'url(#po-tealNode)' : 'url(#po-lavNode)'}
              stroke={node.color}
              strokeWidth="1.6"
              className="po-orbit-node"
              style={{ animationDelay: `${i * 0.44}s` }}
              filter={isTeal ? 'url(#po-glow)' : 'url(#po-lavGlow)'}
            />

            {/* Inner node circle accent */}
            <circle
              cx={nx}
              cy={ny}
              r={nodeR - 10}
              fill="none"
              stroke={node.color}
              strokeWidth="0.6"
              opacity="0.25"
            />

            {/* Icon */}
            <text
              x={nx}
              y={ny + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={node.color}
              fontSize="17"
              fontFamily="system-ui, sans-serif"
            >
              {node.icon}
            </text>

            {/* Label outside node */}
            <text
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={node.color}
              fontSize="9.5"
              fontWeight="700"
              fontFamily="Inter, system-ui, sans-serif"
              letterSpacing="0.11em"
              opacity="0.88"
            >
              {node.label.toUpperCase()}
            </text>

            {/* Small pulsing dot at node center */}
            <circle
              cx={nx}
              cy={ny}
              r={3}
              fill={node.color}
              className="po-dot"
              style={{ animationDelay: `${i * 0.44}s` }}
            />
          </g>
        )
      })}
    </svg>
  )
}

export function PlatformOverview() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#112744' }}
      className="relative overflow-hidden"
      aria-labelledby="platform-overview-heading"
    >
      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(168,191,204,0.05) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          opacity: 0.55,
        }}
        aria-hidden="true"
      />

      {/* Ambient teal glow bottom-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-100px',
          left: '-120px',
          width: '560px',
          height: '560px',
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 68%)',
          borderRadius: '50%',
        }}
        aria-hidden="true"
      />

      {/* Ambient lavender glow top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-80px',
          right: '-100px',
          width: '480px',
          height: '480px',
          background: 'radial-gradient(ellipse, rgba(96,165,250,0.07) 0%, transparent 68%)',
          borderRadius: '50%',
        }}
        aria-hidden="true"
      />

      <div
        className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12"
        style={{ paddingTop: '120px', paddingBottom: '120px' }}
      >

        {/* ── Section Header ── */}
        <div
          style={{
            marginBottom: '64px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.4,0,0.2,1)',
            transitionDelay: '0ms',
          }}
        >
          {/* Eyebrow label */}
          <div className="flex items-center gap-2 mb-5">
            <span
              aria-hidden="true"
              style={{ color: '#3B82F6', fontSize: '13px', lineHeight: 1 }}
            >
              ✚
            </span>
            <span
              style={{
                color: '#3B82F6',
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
              }}
            >
              PLATFORM ARCHITECTURE
            </span>
          </div>

          {/* Heading with teal left-border accent */}
          <div className="flex items-start gap-5">
            {/* Teal left-border bar */}
            <div
              aria-hidden="true"
              style={{
                flexShrink: 0,
                marginTop: '6px',
                width: '4px',
                height: '56px',
                backgroundColor: '#3B82F6',
                borderRadius: '2px',
                boxShadow: '0 0 18px rgba(59,130,246,0.6), 0 0 36px rgba(59,130,246,0.28)',
              }}
            />
            <div>
              <h2
                id="platform-overview-heading"
                style={{
                  fontSize: 'clamp(30px, 4vw, 48px)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  margin: 0,
                }}
              >
                The Unified Patient{' '}
                <span
                  style={{
                    background: 'linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Repository
                </span>
              </h2>

              <p
                style={{
                  marginTop: '16px',
                  fontSize: '17px',
                  lineHeight: '1.75',
                  color: '#A8BFCC',
                  maxWidth: '640px',
                }}
              >
                Every patient touchpoint — clinical encounters, financial records,
                lab results, device streams — converges into a single, AI-enriched
                longitudinal record. Real-time. HIPAA-compliant. Enterprise-ready.
              </p>
            </div>
          </div>
        </div>

        {/* ── 60 / 40 Split Layout ── */}
        <div
          className="platform-split-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '72px',
            alignItems: 'center',
          }}
        >
          {/* ── LEFT 60% — Orbit Diagram ── */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.4,0,0.2,1)',
              transitionDelay: '160ms',
              position: 'relative',
            }}
          >
            {/* Diagram ambient glow behind SVG */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(59,130,246,0.09) 0%, transparent 68%)',
                pointerEvents: 'none',
                borderRadius: '50%',
              }}
            />

            <OrbitDiagram />

            {/* Caption */}
            <p
              style={{
                textAlign: 'center',
                fontSize: '11px',
                marginTop: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                color: '#A8BFCC',
                opacity: 0.60,
              }}
            >
              Unified Patient Data Hub — 6 Integrated Data Streams
            </p>
          </div>

          {/* ── RIGHT 40% — Module Chip List ── */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.4,0,0.2,1)',
              transitionDelay: '320ms',
              display: 'flex',
              flexDirection: 'column',
              gap: '0px',
            }}
          >
            {/* Right-column header */}
            <div style={{ marginBottom: '24px' }}>
              <h3
                style={{
                  fontSize: 'clamp(20px, 2.5vw, 26px)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                  margin: '0 0 10px 0',
                  lineHeight: 1.2,
                }}
              >
                Integrated Data Modules
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '1.72',
                  color: '#A8BFCC',
                  margin: 0,
                }}
              >
                {(BRAND as unknown as Record<string, string>)['productName'] ?? 'Datacules HealthData 97'} consolidates
                disparate healthcare data sources into a coherent, queryable architecture —
                ready for AI enrichment and API delivery.
              </p>
            </div>

            {/* Module Chips */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {modules.map((mod, i) => (
                <ModuleChip
                  key={mod.name}
                  mod={mod}
                  index={i}
                  isVisible={isVisible}
                />
              ))}
            </div>

            {/* View All Modules CTA */}
            <div style={{ marginTop: '24px' }}>
              <ViewAllButton />
            </div>
          </div>
        </div>

        {/* ── Bottom Stats Row ── */}
        <div
          style={{
            marginTop: '88px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.4,0,0.2,1)',
            transitionDelay: '520ms',
          }}
        >
          <StatsBar isVisible={isVisible} />
        </div>
      </div>

      {/* Responsive grid styles */}
      <style>{`
        @media (min-width: 960px) {
          .platform-split-grid {
            grid-template-columns: 60% 40% !important;
            gap: 72px !important;
          }
        }
        @media (max-width: 959px) {
          .platform-split-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}

// ── Module Chip ─────────────────────────────────────────────────────────────

function ModuleChip({
  mod,
  index,
  isVisible,
}: {
  mod: { icon: string; name: string; category: string }
  index: number
  isVisible: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`${mod.name} — ${mod.category} module`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        padding: '14px 20px',
        borderRadius: '16px',
        cursor: 'pointer',
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? hovered ? 'translateY(-3px)' : 'translateY(0)'
          : 'translateY(28px)',
        transition:
          'opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.35s cubic-bezier(0.4,0,0.2,1), background 0.30s ease, border-color 0.30s ease, box-shadow 0.30s ease',
        transitionDelay: isVisible ? `${480 + index * 55}ms` : '0ms',
        background: hovered
          ? 'rgba(59,130,246,0.07)'
          : 'rgba(255,255,255,0.04)',
        border: hovered
          ? '1px solid rgba(59,130,246,0.32)'
          : '1px solid rgba(255,255,255,0.09)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: hovered
          ? '0 16px 64px rgba(0,0,0,0.40), 0 0 0 1px rgba(59,130,246,0.15), 0 1px 0 rgba(255,255,255,0.08) inset'
          : '0 8px 48px rgba(0,0,0,0.28), 0 1px 0 rgba(255,255,255,0.06) inset',
        outline: 'none',
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') e.currentTarget.click()
      }}
    >
      {/* Left: icon + text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {/* Icon container */}
        <div
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: '42px',
            height: '42px',
            borderRadius: '11px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            background: hovered
              ? 'rgba(59,130,246,0.16)'
              : 'rgba(59,130,246,0.09)',
            border: '1px solid rgba(59,130,246,0.22)',
            transition: 'background 0.30s ease',
            boxShadow: hovered ? '0 0 12px rgba(59,130,246,0.18)' : 'none',
          }}
        >
          {mod.icon}
        </div>

        {/* Name + category */}
        <div>
          <p
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            {mod.name}
          </p>
          <p
            style={{
              fontSize: '11px',
              marginTop: '3px',
              textTransform: 'uppercase',
              letterSpacing: '0.10em',
              color: '#3B82F6',
              margin: '3px 0 0 0',
            }}
          >
            {mod.category}
          </p>
        </div>
      </div>

      {/* Right: arrow */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        style={{
          flexShrink: 0,
          opacity: hovered ? 1 : 0.32,
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

// ── View All Button ──────────────────────────────────────────────────────────

function ViewAllButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      aria-label="View all 23 platform modules"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px',
        fontWeight: 600,
        color: '#3B82F6',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '4px 0',
        transition: 'opacity 0.2s ease',
        outline: 'none',
        opacity: hovered ? 0.85 : 1,
      }}
    >
      <span>View All 23 Modules</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        style={{
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          transition: 'transform 0.22s ease',
        }}
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

// ── Stats Bar ────────────────────────────────────────────────────────────────

const stats = [
  { value: '354+', label: 'API Endpoints' },
  { value: '240+', label: 'Database Tables' },
  { value: '23', label: 'Integrated Modules' },
  { value: '100%', label: 'HIPAA Compliant' },
]

function StatsBar({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className="stats-bar-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        overflow: 'hidden',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 8px 48px rgba(0,0,0,0.28), 0 1px 0 rgba(255,255,255,0.06) inset',
      }}
      role="list"
      aria-label="Platform statistics"
    >
      {stats.map((stat, i) => (
        <StatCell key={stat.label} stat={stat} index={i} isVisible={isVisible} />
      ))}

      <style>{`
        @media (max-width: 599px) {
          .stats-bar-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stats-bar-grid > div:nth-child(2) {
            border-right: none !important;
          }
          .stats-bar-grid > div:nth-child(3) {
            border-top: 1px solid rgba(255,255,255,0.07) !important;
          }
          .stats-bar-grid > div:nth-child(4) {
            border-top: 1px solid rgba(255,255,255,0.07) !important;
          }
        }
        @media (max-width: 959px) and (min-width: 600px) {
          .stats-bar-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stats-bar-grid > div:nth-child(2) {
            border-right: none !important;
          }
          .stats-bar-grid > div:nth-child(3) {
            border-top: 1px solid rgba(255,255,255,0.07) !important;
          }
          .stats-bar-grid > div:nth-child(4) {
            border-top: 1px solid rgba(255,255,255,0.07) !important;
          }
        }
      `}</style>
    </div>
  )
}

function StatCell({
  stat,
  index,
  isVisible,
}: {
  stat: { value: string; label: string }
  index: number
  isVisible: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      role="listitem"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 24px',
        borderRight:
          index < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition:
          'opacity 0.55s cubic-bezier(0.4,0,0.2,1), transform 0.55s cubic-bezier(0.4,0,0.2,1), background 0.28s ease',
        transitionDelay: `${640 + index * 80}ms`,
        background: hovered ? 'rgba(59,130,246,0.05)' : 'transparent',
        cursor: 'default',
      }}
    >
      <span
        style={{
          fontSize: 'clamp(24px, 3vw, 32px)',
          fontWeight: 700,
          lineHeight: 1,
          marginBottom: '6px',
          color: '#3B82F6',
          letterSpacing: '-0.03em',
        }}
      >
        {stat.value}
      </span>
      <span
        style={{
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: '#A8BFCC',
          textAlign: 'center',
          lineHeight: 1.4,
        }}
      >
        {stat.label}
      </span>
    </div>
  )
}