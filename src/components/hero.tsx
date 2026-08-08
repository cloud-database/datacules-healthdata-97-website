'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BRAND } from '@/lib/brand'

const NODES = [
  { id: 'ehr', label: 'EHR', icon: '🏥', angle: -90, description: 'HL7 & FHIR' },
  { id: 'labs', label: 'Labs', icon: '🧪', angle: -18, description: 'Real-time Results' },
  { id: 'billing', label: 'Billing', icon: '💳', angle: 54, description: 'Revenue Cycle' },
  { id: 'telehealth', label: 'Telehealth', icon: '📡', angle: 126, description: 'Virtual Care' },
  { id: 'iot', label: 'IoT', icon: '📟', angle: 198, description: 'Vitals & Devices' },
]

/* ─────────────────────────────────────────────
   ECG Waveform — bottom-third hero overlay
───────────────────────────────────────────── */
function EcgWaveform() {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full pointer-events-none"
      style={{ height: '140px', opacity: 0.15 }}
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ecgFade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00C9B1" stopOpacity="0" />
          <stop offset="8%" stopColor="#00C9B1" stopOpacity="1" />
          <stop offset="92%" stopColor="#00C9B1" stopOpacity="1" />
          <stop offset="100%" stopColor="#00C9B1" stopOpacity="0" />
        </linearGradient>
        <style>{`
          @keyframes ecg-scroll {
            0%   { stroke-dashoffset: 2880; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes ecg-scroll-delayed {
            0%   { stroke-dashoffset: 2880; }
            100% { stroke-dashoffset: 0; }
          }
          .ecg-line {
            stroke-dasharray: 2880;
            stroke-dashoffset: 2880;
            animation: ecg-scroll 5s linear infinite;
          }
          .ecg-line-2 {
            stroke-dasharray: 2880;
            stroke-dashoffset: 2880;
            animation: ecg-scroll-delayed 5s linear infinite;
            animation-delay: -2.5s;
          }
          @media (prefers-reduced-motion: reduce) {
            .ecg-line, .ecg-line-2 {
              animation: none;
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </defs>
      {/* Primary ECG trace */}
      <path
        className="ecg-line"
        d="M0 95 L100 95 L118 95 L130 95 L142 30 L150 118 L158 12 L166 108 L174 95 L280 95 L298 95 L310 95 L322 30 L330 118 L338 12 L346 108 L354 95 L460 95 L478 95 L490 95 L502 30 L510 118 L518 12 L526 108 L534 95 L640 95 L658 95 L670 95 L682 30 L690 118 L698 12 L706 108 L714 95 L820 95 L838 95 L850 95 L862 30 L870 118 L878 12 L886 108 L894 95 L1000 95 L1018 95 L1030 95 L1042 30 L1050 118 L1058 12 L1066 108 L1074 95 L1180 95 L1198 95 L1210 95 L1222 30 L1230 118 L1238 12 L1246 108 L1254 95 L1360 95 L1378 95 L1390 95 L1402 30 L1410 118 L1418 12 L1426 108 L1434 95 L1440 95"
        fill="none"
        stroke="url(#ecgFade)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Secondary dimmer trace for depth */}
      <path
        className="ecg-line-2"
        d="M0 95 L100 95 L118 95 L130 95 L142 30 L150 118 L158 12 L166 108 L174 95 L280 95 L298 95 L310 95 L322 30 L330 118 L338 12 L346 108 L354 95 L460 95 L478 95 L490 95 L502 30 L510 118 L518 12 L526 108 L534 95 L640 95 L658 95 L670 95 L682 30 L690 118 L698 12 L706 108 L714 95 L820 95 L838 95 L850 95 L862 30 L870 118 L878 12 L886 108 L894 95 L1000 95 L1018 95 L1030 95 L1042 30 L1050 118 L1058 12 L1066 108 L1074 95 L1180 95 L1198 95 L1210 95 L1222 30 L1230 118 L1238 12 L1246 108 L1254 95 L1360 95 L1378 95 L1390 95 L1402 30 L1410 118 L1418 12 L1426 108 L1434 95 L1440 95"
        fill="none"
        stroke="#7B8CDE"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.35"
      />
    </svg>
  )
}

/* ─────────────────────────────────────────────
   Static Data-Flow Visualization — mobile only
───────────────────────────────────────────── */
function StaticDataFlowVisualization() {
  const SIZE = 320
  const centerX = SIZE / 2
  const centerY = SIZE / 2
  const orbitRadius = 115
  const nodeRadius = 30

  const getNodePos = (angle: number) => ({
    x: centerX + orbitRadius * Math.cos((angle * Math.PI) / 180),
    y: centerY + orbitRadius * Math.sin((angle * Math.PI) / 180),
  })

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: SIZE, height: SIZE }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 65% at 50% 50%, rgba(123,140,222,0.08) 0%, transparent 70%)',
        }}
      />

      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="absolute inset-0"
        aria-hidden="true"
      >
        {/* Orbit ring */}
        <circle
          cx={centerX}
          cy={centerY}
          r={orbitRadius}
          stroke="rgba(0,201,177,0.12)"
          strokeWidth="1"
          strokeDasharray="3 12"
          fill="none"
        />
        {/* Middle orbit ring */}
        <circle
          cx={centerX}
          cy={centerY}
          r={orbitRadius * 0.58}
          stroke="rgba(123,140,222,0.09)"
          strokeWidth="1"
          strokeDasharray="2 16"
          fill="none"
        />
        {/* Connection lines */}
        {NODES.map((node) => {
          const pos = getNodePos(node.angle)
          return (
            <line
              key={node.id}
              x1={pos.x}
              y1={pos.y}
              x2={centerX}
              y2={centerY}
              stroke="rgba(0,201,177,0.18)"
              strokeWidth="1.2"
            />
          )
        })}
        {/* Center glow */}
        <defs>
          <radialGradient id="staticHubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,201,177,0.22)" />
            <stop offset="100%" stopColor="rgba(0,201,177,0)" />
          </radialGradient>
        </defs>
        <circle cx={centerX} cy={centerY} r={56} fill="url(#staticHubGlow)" />
      </svg>

      {/* Center hub */}
      <div
        className="absolute z-10 flex flex-col items-center justify-center rounded-full"
        style={{
          left: centerX - 36,
          top: centerY - 36,
          width: 72,
          height: 72,
          background: 'linear-gradient(135deg, #112744 0%, #0D2137 60%, #0A1828 100%)',
          border: '2px solid rgba(0,201,177,0.65)',
          boxShadow:
            '0 0 32px rgba(0,201,177,0.32), 0 0 10px rgba(0,201,177,0.18), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" style={{ marginBottom: '2px' }}>
          <rect x="8" y="2" width="4" height="16" rx="2" fill="#00C9B1" opacity="0.9" />
          <rect x="2" y="8" width="16" height="4" rx="2" fill="#00C9B1" opacity="0.9" />
        </svg>
        <span className="text-[7px] font-bold tracking-widest" style={{ color: '#00C9B1' }}>
          UNIFIED
        </span>
      </div>

      {/* Orbit nodes */}
      {NODES.map((node) => {
        const pos = getNodePos(node.angle)
        return (
          <div
            key={node.id}
            className="absolute z-10 flex flex-col items-center justify-center rounded-xl"
            style={{
              left: pos.x - nodeRadius,
              top: pos.y - nodeRadius,
              width: nodeRadius * 2,
              height: nodeRadius * 2,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.24)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <span className="text-base leading-none">{node.icon}</span>
            <span
              className="text-[8px] font-semibold mt-1 tracking-wide"
              style={{ color: '#A8BFCC' }}
            >
              {node.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

/* ─────────────────────────────────────────────
   Animated SVG Data-Flow Visualization
   5 source nodes → central patient record hub
   Desktop only — full canvas animation
───────────────────────────────────────────── */
function DataFlowVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animFrameRef = useRef<number>(0)
  const particlesRef = useRef<
    Array<{
      nodeFrom: number
      progress: number
      speed: number
      opacity: number
      color: string
    }>
  >([])
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const timeRef = useRef<number>(0)

  const SIZE = 520
  const centerX = SIZE / 2
  const centerY = SIZE / 2
  const orbitRadius = 185
  const nodeRadius = 38

  const getNodePos = (angle: number) => ({
    x: centerX + orbitRadius * Math.cos((angle * Math.PI) / 180),
    y: centerY + orbitRadius * Math.sin((angle * Math.PI) / 180),
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const colors = ['#00C9B1', '#00C9B1', '#7B8CDE', '#00C9B1', '#7B8CDE']

    particlesRef.current = Array.from({ length: 25 }, (_, i) => ({
      nodeFrom: i % NODES.length,
      progress: Math.random(),
      speed: 0.0035 + Math.random() * 0.004,
      opacity: 0.55 + Math.random() * 0.45,
      color: colors[i % colors.length],
    }))

    const draw = (timestamp: number) => {
      timeRef.current = timestamp
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Outer orbit ring — dashed
      ctx.beginPath()
      ctx.arc(centerX, centerY, orbitRadius, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(0,201,177,0.08)'
      ctx.lineWidth = 1
      ctx.setLineDash([3, 12])
      ctx.stroke()
      ctx.setLineDash([])

      // Middle orbit ring
      ctx.beginPath()
      ctx.arc(centerX, centerY, orbitRadius * 0.58, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(123,140,222,0.07)'
      ctx.lineWidth = 1
      ctx.setLineDash([2, 16])
      ctx.stroke()
      ctx.setLineDash([])

      // Inner orbit ring — slow rotation
      const innerAngle = (timestamp / 8000) * Math.PI * 2
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(innerAngle)
      ctx.beginPath()
      ctx.arc(0, 0, orbitRadius * 0.3, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(0,201,177,0.05)'
      ctx.lineWidth = 1
      ctx.setLineDash([2, 20])
      ctx.stroke()
      ctx.setLineDash([])
      ctx.restore()

      // Connection lines from nodes to center
      NODES.forEach((node) => {
        const pos = getNodePos(node.angle)
        const gradient = ctx.createLinearGradient(pos.x, pos.y, centerX, centerY)
        gradient.addColorStop(0, 'rgba(0,201,177,0.03)')
        gradient.addColorStop(0.4, 'rgba(0,201,177,0.15)')
        gradient.addColorStop(0.8, 'rgba(0,201,177,0.22)')
        gradient.addColorStop(1, 'rgba(0,201,177,0.08)')
        ctx.beginPath()
        ctx.moveTo(pos.x, pos.y)
        ctx.lineTo(centerX, centerY)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.2
        ctx.stroke()
      })

      // Particles flowing to center
      particlesRef.current.forEach((p) => {
        const fromNode = NODES[p.nodeFrom]
        const fromPos = getNodePos(fromNode.angle)
        const t = p.progress
        const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        const x = fromPos.x + (centerX - fromPos.x) * ease
        const y = fromPos.y + (centerY - fromPos.y) * ease
        const radius = 3.8 * (1 - t * 0.55)
        const alpha = p.opacity * (t < 0.85 ? 1 : (1 - t) / 0.15)
        const grd = ctx.createRadialGradient(x, y, 0, x, y, radius * 2.5)
        const isLavender = p.color === '#7B8CDE'
        grd.addColorStop(0, isLavender ? `rgba(123,140,222,${alpha})` : `rgba(0,201,177,${alpha})`)
        grd.addColorStop(1, isLavender ? 'rgba(123,140,222,0)' : 'rgba(0,201,177,0)')
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        p.progress += p.speed
        if (p.progress > 1) {
          p.progress = 0
          p.nodeFrom = Math.floor(Math.random() * NODES.length)
          p.speed = 0.0035 + Math.random() * 0.004
          p.opacity = 0.55 + Math.random() * 0.45
          p.color = colors[Math.floor(Math.random() * colors.length)]
        }
      })

      // Center hub outer glow
      const hubGlow2 = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 90)
      hubGlow2.addColorStop(0, 'rgba(0,201,177,0.18)')
      hubGlow2.addColorStop(0.5, 'rgba(0,201,177,0.07)')
      hubGlow2.addColorStop(1, 'rgba(0,201,177,0)')
      ctx.beginPath()
      ctx.arc(centerX, centerY, 90, 0, Math.PI * 2)
      ctx.fillStyle = hubGlow2
      ctx.fill()

      // Pulse ring 1
      const pulse1 = 50 + 12 * Math.abs(Math.sin(timestamp / 1100))
      const pulseAlpha1 = 0.22 * (1 - Math.abs(Math.sin(timestamp / 1100)))
      ctx.beginPath()
      ctx.arc(centerX, centerY, pulse1, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(0,201,177,${pulseAlpha1})`
      ctx.lineWidth = 2
      ctx.stroke()

      // Pulse ring 2 — offset phase
      const pulse2 = 50 + 12 * Math.abs(Math.sin(timestamp / 1100 + Math.PI * 0.66))
      const pulseAlpha2 = 0.12 * (1 - Math.abs(Math.sin(timestamp / 1100 + Math.PI * 0.66)))
      ctx.beginPath()
      ctx.arc(centerX, centerY, pulse2, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(123,140,222,${pulseAlpha2})`
      ctx.lineWidth = 1.5
      ctx.stroke()

      animFrameRef.current = requestAnimationFrame(draw)
    }

    animFrameRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [])

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: SIZE, height: SIZE }}
    >
      {/* Ambient lavender glow behind visualization */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 65% at 50% 50%, rgba(123,140,222,0.08) 0%, transparent 70%)',
        }}
      />
      {/* Ambient teal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 40% at 50% 50%, rgba(0,201,177,0.05) 0%, transparent 65%)',
        }}
      />

      <canvas ref={canvasRef} width={SIZE} height={SIZE} className="absolute inset-0" />

      {/* Center patient record hub */}
      <div
        className="absolute z-10 flex flex-col items-center justify-center rounded-full"
        style={{
          left: centerX - 46,
          top: centerY - 46,
          width: 92,
          height: 92,
          background: 'linear-gradient(135deg, #112744 0%, #0D2137 60%, #0A1828 100%)',
          border: '2px solid rgba(0,201,177,0.65)',
          boxShadow:
            '0 0 48px rgba(0,201,177,0.38), 0 0 16px rgba(0,201,177,0.22), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        {/* Cross / plus healthcare symbol */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{ marginBottom: '2px' }}
        >
          <rect x="8" y="2" width="4" height="16" rx="2" fill="#00C9B1" opacity="0.9" />
          <rect x="2" y="8" width="16" height="4" rx="2" fill="#00C9B1" opacity="0.9" />
        </svg>
        <span
          className="text-[8px] font-bold tracking-widest"
          style={{ color: '#00C9B1' }}
        >
          UNIFIED
        </span>
        <span className="text-[7px] mt-0.5 tracking-wider" style={{ color: '#A8BFCC' }}>
          PATIENT HUB
        </span>
      </div>

      {/* Orbit nodes */}
      {NODES.map((node) => {
        const pos = getNodePos(node.angle)
        const isActive = activeNode === node.id
        return (
          <div
            key={node.id}
            className="absolute z-10 flex flex-col items-center justify-center rounded-2xl cursor-pointer"
            style={{
              left: pos.x - nodeRadius,
              top: pos.y - nodeRadius,
              width: nodeRadius * 2,
              height: nodeRadius * 2,
              background: isActive
                ? 'linear-gradient(135deg, rgba(0,201,177,0.24) 0%, rgba(17,39,68,0.96) 100%)'
                : 'rgba(255,255,255,0.04)',
              border: `1px solid ${isActive ? 'rgba(0,201,177,0.65)' : 'rgba(255,255,255,0.1)'}`,
              boxShadow: isActive
                ? '0 0 28px rgba(0,201,177,0.38), 0 8px 32px rgba(0,0,0,0.32)'
                : '0 4px 20px rgba(0,0,0,0.28)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              transform: isActive ? 'scale(1.12) translateY(-3px)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
            }}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
          >
            <span className="text-xl leading-none">{node.icon}</span>
            <span
              className="text-[9px] font-semibold mt-1.5 tracking-wide"
              style={{ color: isActive ? '#00C9B1' : '#A8BFCC' }}
            >
              {node.label}
            </span>
          </div>
        )
      })}

      {/* Tooltip */}
      {activeNode &&
        (() => {
          const node = NODES.find((n) => n.id === activeNode)!
          const pos = getNodePos(node.angle)
          const isRight = pos.x > centerX
          return (
            <div
              className="absolute z-20 px-3 py-1.5 rounded-xl text-[10px] font-semibold pointer-events-none whitespace-nowrap"
              style={{
                left: isRight ? pos.x + nodeRadius + 10 : pos.x - nodeRadius - 10,
                top: pos.y - 12,
                transform: isRight ? 'none' : 'translateX(-100%)',
                background: 'rgba(0,201,177,0.13)',
                border: '1px solid rgba(0,201,177,0.38)',
                color: '#00C9B1',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
              }}
            >
              {node.description}
            </div>
          )
        })()}
    </div>
  )
}

/* ─────────────────────────────────────────────
   Mock Browser Frame — wraps product/UI screenshots
   Renders a styled dark browser chrome bar above
   the image with three traffic-light dots and a
   fake URL bar. Applies shadow-2xl and rounded
   corners so the image feels native to the section.
───────────────────────────────────────────── */
function MockBrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative rounded-[20px] overflow-hidden shadow-2xl"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow:
          '0 8px 48px rgba(0,0,0,0.3), 0 0 80px rgba(0,201,177,0.07), inset 0 1px 0 rgba(255,255,255,0.06)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      {/* Browser chrome bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{
          background: 'rgba(6,20,34,0.92)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Traffic-light dots */}
        <span
          className="w-3 h-3 rounded-full"
          style={{ background: 'rgba(255,95,87,0.72)' }}
        />
        <span
          className="w-3 h-3 rounded-full"
          style={{ background: 'rgba(255,189,46,0.72)' }}
        />
        <span
          className="w-3 h-3 rounded-full"
          style={{ background: 'rgba(39,201,63,0.72)' }}
        />
        {/* Fake URL bar */}
        <div
          className="ml-4 flex-1 max-w-xs h-5 rounded-md flex items-center px-3"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <span
            className="text-[10px] tracking-wide"
            style={{ color: '#4A6080', fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            app.healthdata97.com/dashboard
          </span>
        </div>
      </div>

      {/* Slotted content — screenshot image goes here */}
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────────
   Hero Section — Full Redesign
───────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D2137 0%, #0A1E30 50%, #061422 100%)',
      }}
    >
      {/* ════════════════════════════════════════
          BACKGROUND LAYER STACK
      ════════════════════════════════════════ */}

      {/* Layer 0: Molecular / cellular dot-grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(0,201,177,0.22) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          opacity: 0.03,
        }}
      />

      {/* Layer 1: Ambient glow orb — Electric Teal, bottom-left */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          bottom: '-120px',
          left: '-120px',
          width: '900px',
          height: '900px',
          background:
            'radial-gradient(ellipse 55% 55% at 20% 80%, rgba(0,201,177,0.08) 0%, transparent 68%)',
          borderRadius: '50%',
        }}
      />

      {/* Layer 2: Ambient glow orb — Soft Lavender, top-right */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '-160px',
          right: '-160px',
          width: '1000px',
          height: '900px',
          background:
            'radial-gradient(ellipse 50% 50% at 80% 20%, rgba(123,140,222,0.06) 0%, transparent 68%)',
          borderRadius: '50%',
        }}
      />

      {/* Layer 3: Mid-page radial depth vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(13,33,55,0.0) 0%, rgba(6,20,34,0.55) 100%)',
        }}
      />

      {/* Layer 4: ECG waveform — animates horizontally across bottom third */}
      <EcgWaveform />

      {/* ════════════════════════════════════════
          MAIN CONTENT GRID
      ════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 pt-32 pb-16 w-full flex flex-col lg:flex-row items-center gap-16">

        {/* ════════════════════════════════════════
            LEFT COLUMN — Copy & CTAs
        ════════════════════════════════════════ */}
        <div className="flex-1 min-w-0">

          {/* ── Eyebrow badge ── */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 tracking-[0.18em] uppercase"
            style={{
              background: 'rgba(0,201,177,0.08)',
              border: '1px solid rgba(0,201,177,0.28)',
              color: '#00C9B1',
              fontFamily: '"Inter", system-ui, sans-serif',
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <rect x="4" y="0" width="2" height="10" rx="1" fill="#00C9B1" />
              <rect x="0" y="4" width="10" height="2" rx="1" fill="#00C9B1" />
            </svg>
            <span
              className="w-1.5 h-1.5 rounded-full bg-current"
              style={{ animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite' }}
            />
            {BRAND.tagline}
          </div>

          {/* ── H1 ── */}
          <h1
            className="mb-8 text-white"
            style={{
              fontFamily: '"Fraunces", "Playfair Display", "Georgia", serif',
              fontSize: 'clamp(40px, 5.5vw, 72px)',
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: '-0.03em',
            }}
          >
            Healthcare Data,
            <br />
            <span style={{ display: 'inline-block' }}>
              Unified and{' '}
              <span
                style={{
                  background:
                    'linear-gradient(92deg, #00C9B1 0%, #5BE8D5 40%, #7B8CDE 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline',
                }}
              >
                Intelligent
              </span>
            </span>
          </h1>

          {/* ── Subheadline ── */}
          <p
            className="mb-10"
            style={{
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '20px',
              lineHeight: 1.75,
              color: '#A8BFCC',
              maxWidth: '560px',
            }}
          >
            {BRAND.name} unifies EHRs, labs, billing, telehealth, and IoT devices into
            a single HIPAA-compliant data repository — powered by AI-driven insights that
            transform patient outcomes.
          </p>

          {/* ── CTA Button Pair ── */}
          <div className="flex flex-wrap gap-4 mb-12">

            {/* Primary CTA */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 font-semibold rounded-xl select-none"
              style={{
                background: '#00C9B1',
                color: '#0D2137',
                height: '56px',
                paddingLeft: '28px',
                paddingRight: '28px',
                borderRadius: '12px',
                boxShadow:
                  '0 0 32px rgba(0,201,177,0.38), 0 4px 16px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.25)',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '-0.01em',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.boxShadow =
                  '0 0 52px rgba(0,201,177,0.6), 0 8px 24px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.3)'
                el.style.transform = 'scale(1.03) translateY(-1px)'
                el.style.background = '#05DFC3'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.boxShadow =
                  '0 0 32px rgba(0,201,177,0.38), 0 4px 16px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.25)'
                el.style.transform = 'scale(1) translateY(0)'
                el.style.background = '#00C9B1'
              }}
            >
              Request a Platform Demo
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#features"
              className="inline-flex items-center gap-2 font-semibold text-white rounded-xl select-none"
              style={{
                height: '56px',
                paddingLeft: '28px',
                paddingRight: '28px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontWeight: 600,
                fontSize: '15px',
                letterSpacing: '-0.01em',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(0,201,177,0.45)'
                el.style.background = 'rgba(0,201,177,0.07)'
                el.style.transform = 'scale(1.03) translateY(-1px)'
                el.style.boxShadow = '0 0 24px rgba(0,201,177,0.12)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(255,255,255,0.2)'
                el.style.background = 'rgba(255,255,255,0.04)'
                el.style.transform = 'scale(1) translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              Explore the Platform
              <svg
                className="w-4 h-4 flex-shrink-0 opacity-60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* ── Trust / compliance indicators ── */}
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-3"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            {['HIPAA Compliant', 'GDPR Ready', 'HL7 FHIR Native', 'SOC 2 Type II'].map(
              (badge, i) => (
                <div key={badge} className="flex items-center gap-2">
                  <svg
                    className="w-3.5 h-3.5 flex-shrink-0"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 1.5L2 4v4c0 3.3 2.5 6.4 6 7 3.5-.6 6-3.7 6-7V4L8 1.5z"
                      fill="rgba(0,201,177,0.15)"
                      stroke="#00C9B1"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M5.5 8l1.8 1.8L10.5 6"
                      stroke="#00C9B1"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className="text-xs font-medium tracking-wide"
                    style={{ color: '#A8BFCC' }}
                  >
                    {badge}
                  </span>
                  {i < 3 && (
                    <span
                      aria-hidden="true"
                      style={{
                        color: 'rgba(168,191,204,0.18)',
                        fontSize: '14px',
                        marginLeft: '4px',
                      }}
                    >
                      |
                    </span>
                  )}
                </div>
              ),
            )}
          </div>
        </div>

        {/* ════════════════════════════════════════
            RIGHT COLUMN — Animated Data-Flow Diagram
            Desktop: full canvas animation
            Mobile: static SVG version
        ════════════════════════════════════════ */}
        <div className="flex-shrink-0 hidden lg:flex flex-col items-center justify-center gap-4">
          {/* Section label above visualization */}
          <div
            className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] uppercase mb-2"
            style={{
              color: '#A8BFCC',
              fontFamily: '"Inter", system-ui, sans-serif',
            }}
          >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
              <circle cx="4" cy="4" r="3" stroke="#00C9B1" strokeWidth="1.5" />
              <circle cx="4" cy="4" r="1.5" fill="#00C9B1" />
            </svg>
            Live Data Convergence
          </div>

          <DataFlowVisualization />

          {/* Caption below visualization */}
          <p
            className="text-center text-[11px] tracking-wide mt-2"
            style={{
              color: '#4A6080',
              fontFamily: '"Inter", system-ui, sans-serif',
              maxWidth: '320px',
            }}
          >
            5 data streams unified into a single patient record — in real time
          </p>
        </div>

        {/* ── Mobile static visualization ── */}
        <div className="flex lg:hidden flex-col items-center justify-center gap-3 w-full">
          <div
            className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] uppercase"
            style={{
              color: '#A8BFCC',
              fontFamily: '"Inter", system-ui, sans-serif',
            }}
          >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
              <circle cx="4" cy="4" r="3" stroke="#00C9B1" strokeWidth="1.5" />
              <circle cx="4" cy="4" r="1.5" fill="#00C9B1" />
            </svg>
            Unified Data Platform
          </div>
          <StaticDataFlowVisualization />
          <p
            className="text-center text-[11px] tracking-wide"
            style={{
              color: '#4A6080',
              fontFamily: '"Inter", system-ui, sans-serif',
              maxWidth: '280px',
            }}
          >
            5 data streams unified into a single patient record
          </p>
        </div>
      </div>

      {/* ════════════════════════════════════════
          PLATFORM PREVIEW BLOCK
          Product screenshot wrapped in MockBrowserFrame.
          - On desktop: full width below the copy/diagram grid
          - On mobile: stacks naturally below text (mt-8 via
            the outer padding flow; no absolute positioning)
      ════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 pb-24 w-full">

        {/* Divider label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span
            className="h-px flex-1 max-w-[140px] rounded-full"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(0,201,177,0.38))',
            }}
          />
          <span
            className="text-[11px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
            style={{
              color: '#A8BFCC',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              fontFamily: '"Inter", system-ui, sans-serif',
            }}
          >
            Platform Preview
          </span>
          <span
            className="h-px flex-1 max-w-[140px] rounded-full"
            style={{
              background: 'linear-gradient(to left, transparent, rgba(0,201,177,0.38))',
            }}
          />
        </div>

        {/* ── MockBrowserFrame wraps the product screenshot ──
            On mobile the entire block sits below the text column
            thanks to the flex-col flow in the parent grid.
            mt-8 is applied on small screens via the wrapper div.  */}
        <div className="mt-0 md:mt-8 lg:mt-0">
          <MockBrowserFrame>
            {/* Screenshot image — Next.js Image with priority for LCP */}
            <div className="relative">
              <Image
                src="/1376x768.png"
                alt="HealthData97 Platform Dashboard — unified health data infrastructure"
                width={1376}
                height={768}
                priority
                className="w-full h-auto block"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
              />
              {/* Bottom gradient fade — blends screenshot into section */}
              <div
                className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent 0%, rgba(6,20,34,0.7) 100%)',
                }}
              />
            </div>
          </MockBrowserFrame>
        </div>

        <p
          className="text-center text-xs mt-4 tracking-wide"
          style={{
            color: '#4A6080',
            fontFamily: '"Inter", system-ui, sans-serif',
          }}
        >
          Unified healthcare data platform — real-time EHR, labs, billing &amp; device integration
        </p>
      </div>

      {/* ── Bottom page fade — smooth transition into next section ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(6,20,34,0.88))',
        }}
      />
    </section>
  )
}