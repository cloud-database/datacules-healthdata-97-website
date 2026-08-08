'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { BRAND } from '@/lib/brand'

const NODES = [
  { id: 'ehr', label: 'EHR', icon: '🏥', angle: 0, description: 'HL7 & FHIR' },
  { id: 'labs', label: 'Labs', icon: '🧪', angle: 60, description: 'Real-time Results' },
  { id: 'billing', label: 'Billing', icon: '💳', angle: 120, description: 'Revenue Cycle' },
  { id: 'telehealth', label: 'Telehealth', icon: '📡', angle: 180, description: 'Virtual Care' },
  { id: 'iot', label: 'IoT', icon: '📟', angle: 240, description: 'Vitals & Devices' },
  { id: 'rx', label: 'Prescriptions', icon: '💊', angle: 300, description: 'Medication Data' },
]

const STATS = [
  { value: 'HIPAA', label: 'Compliant' },
  { value: 'GDPR', label: 'Ready' },
  { value: 'FHIR', label: 'Native' },
  { value: 'HL7', label: 'Integrated' },
]

function DataFlowVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animFrameRef = useRef<number>(0)
  const particlesRef = useRef<Array<{
    nodeFrom: number
    nodeTo: number
    progress: number
    speed: number
    opacity: number
  }>>([])
  const [activeNode, setActiveNode] = useState<string | null>(null)

  const centerX = 250
  const centerY = 250
  const orbitRadius = 170
  const nodeRadius = 32

  const getNodePos = (angle: number) => ({
    x: centerX + orbitRadius * Math.cos((angle * Math.PI) / 180),
    y: centerY + orbitRadius * Math.sin((angle * Math.PI) / 180),
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = Array.from({ length: 18 }, (_, i) => ({
        nodeFrom: i % NODES.length,
        nodeTo: NODES.length, // center
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.004,
        opacity: 0.4 + Math.random() * 0.6,
      }))
    }
    initParticles()

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw orbit ring
      ctx.beginPath()
      ctx.arc(centerX, centerY, orbitRadius, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(0, 194, 168, 0.08)'
      ctx.lineWidth = 1
      ctx.setLineDash([4, 8])
      ctx.stroke()
      ctx.setLineDash([])

      // Draw connection lines
      NODES.forEach((node) => {
        const pos = getNodePos(node.angle)
        const gradient = ctx.createLinearGradient(pos.x, pos.y, centerX, centerY)
        gradient.addColorStop(0, 'rgba(0, 194, 168, 0.05)')
        gradient.addColorStop(0.5, 'rgba(0, 194, 168, 0.15)')
        gradient.addColorStop(1, 'rgba(0, 194, 168, 0.05)')
        ctx.beginPath()
        ctx.moveTo(pos.x, pos.y)
        ctx.lineTo(centerX, centerY)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Draw particles
      particlesRef.current.forEach((p) => {
        const fromNode = NODES[p.nodeFrom]
        const fromPos = getNodePos(fromNode.angle)
        const toPos = { x: centerX, y: centerY }

        const t = p.progress
        const x = fromPos.x + (toPos.x - fromPos.x) * t
        const y = fromPos.y + (toPos.y - fromPos.y) * t

        const grd = ctx.createRadialGradient(x, y, 0, x, y, 4)
        grd.addColorStop(0, `rgba(0, 194, 168, ${p.opacity})`)
        grd.addColorStop(1, 'rgba(0, 194, 168, 0)')
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        p.progress += p.speed
        if (p.progress > 1) {
          p.progress = 0
          p.nodeFrom = Math.floor(Math.random() * NODES.length)
          p.speed = 0.003 + Math.random() * 0.004
          p.opacity = 0.4 + Math.random() * 0.6
        }
      })

      // Center hub glow
      const hubGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40)
      hubGlow.addColorStop(0, 'rgba(0, 194, 168, 0.3)')
      hubGlow.addColorStop(0.5, 'rgba(26, 58, 92, 0.4)')
      hubGlow.addColorStop(1, 'rgba(0, 194, 168, 0)')
      ctx.beginPath()
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2)
      ctx.fillStyle = hubGlow
      ctx.fill()

      animFrameRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [])

  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      {/* Canvas for animated particles and lines */}
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        className="absolute inset-0"
      />

      {/* Center hub */}
      <div
        className="absolute z-10 flex flex-col items-center justify-center rounded-full border-2 glow-primary"
        style={{
          left: centerX - 38,
          top: centerY - 38,
          width: 76,
          height: 76,
          background: 'linear-gradient(135deg, #1A3A5C 60%, #0d2540 100%)',
          borderColor: 'var(--brand-accent)',
          boxShadow: '0 0 32px rgba(0,194,168,0.35), 0 0 8px rgba(0,194,168,0.2)',
        }}
      >
        <span className="text-xs font-bold tracking-widest" style={{ color: 'var(--brand-accent)' }}>
          DC97
        </span>
        <span className="text-[9px] text-slate-400 mt-0.5 tracking-wider">UNIFIED</span>
      </div>

      {/* Orbit nodes */}
      {NODES.map((node) => {
        const pos = getNodePos(node.angle)
        const isActive = activeNode === node.id
        return (
          <div
            key={node.id}
            className="absolute z-10 flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all duration-300"
            style={{
              left: pos.x - nodeRadius,
              top: pos.y - nodeRadius,
              width: nodeRadius * 2,
              height: nodeRadius * 2,
              background: isActive
                ? 'linear-gradient(135deg, rgba(0,194,168,0.25) 0%, rgba(26,58,92,0.9) 100%)'
                : 'linear-gradient(135deg, rgba(26,58,92,0.85) 0%, rgba(13,37,64,0.95) 100%)',
              border: `1.5px solid ${isActive ? 'rgba(0,194,168,0.8)' : 'rgba(0,194,168,0.25)'}`,
              boxShadow: isActive ? '0 0 18px rgba(0,194,168,0.4)' : '0 2px 12px rgba(0,0,0,0.3)',
              transform: isActive ? 'scale(1.12)' : 'scale(1)',
            }}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
          >
            <span className="text-base leading-none">{node.icon}</span>
            <span className="text-[9px] font-semibold mt-0.5 text-slate-300 tracking-wide">{node.label}</span>
          </div>
        )
      })}

      {/* Active node tooltip */}
      {activeNode && (() => {
        const node = NODES.find(n => n.id === activeNode)!
        const pos = getNodePos(node.angle)
        const isRight = pos.x > centerX
        return (
          <div
            className="absolute z-20 px-2.5 py-1.5 rounded-lg text-[10px] font-medium pointer-events-none whitespace-nowrap"
            style={{
              left: isRight ? pos.x + nodeRadius + 6 : pos.x - nodeRadius - 6,
              top: pos.y - 12,
              transform: isRight ? 'none' : 'translateX(-100%)',
              background: 'rgba(0,194,168,0.15)',
              border: '1px solid rgba(0,194,168,0.4)',
              color: 'var(--brand-accent)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {node.description}
          </div>
        )
      })()}
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise"
      style={{
        background: 'linear-gradient(135deg, #0a1e33 0%, #0d2540 40%, #0f2d4a 70%, #0a1e33 100%)',
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,194,168,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,194,168,1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, rgba(0,194,168,0.4) 0%, transparent 70%)',
        }}
      />

      {/* Radial glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at bottom left, rgba(0,194,168,0.3) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Text content */}
        <div className="flex-1 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase"
            style={{
              background: 'rgba(0,194,168,0.1)',
              border: '1px solid rgba(0,194,168,0.3)',
              color: 'var(--brand-accent)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {BRAND.tagline}
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
            Unify Your{' '}
            <span
              className="relative inline-block"
              style={{ color: 'var(--brand-accent)' }}
            >
              Health Data
              <span
                className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                style={{ background: 'var(--brand-accent)', opacity: 0.4 }}
              />
            </span>
            <br />
            Infrastructure
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
            {BRAND.name} connects EHRs, labs, billing, telehealth, IoT devices, and prescriptions
            into a single HIPAA-compliant data platform — built for modern healthcare.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mb-10">
            {STATS.map((stat) => (
              <div key={stat.value} className="flex flex-col">
                <span
                  className="text-xl font-bold tracking-wide"
                  style={{ color: 'var(--brand-accent)' }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 font-medium tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: 'var(--brand-accent)',
                color: '#0a1e33',
                boxShadow: '0 0 24px rgba(0,194,168,0.4)',
              }}
            >
              Get Early Access
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 text-slate-200"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              Explore Features
            </Link>
          </div>
        </div>

        {/* Right: Visualization */}
        <div className="flex-shrink-0 hidden lg:flex items-center justify-center">
          <DataFlowVisualization />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(10,30,51,0.8))',
        }}
      />
    </section>
  )
}