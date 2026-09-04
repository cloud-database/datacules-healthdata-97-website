'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Database, Shield, BarChart2, Brain, Zap } from 'lucide-react';

const flowSteps = [
  { icon: Database, label: 'CONNECT' },
  { icon: Shield, label: 'MANAGE' },
  { icon: BarChart2, label: 'GOVERN' },
  { icon: Brain, label: 'ANALYZE' },
  { icon: Zap, label: 'ACT' },
];

const sources = [
  { x: 60, label: 'EHR', color: '#3B82F6' },
  { x: 130, label: 'Labs', color: '#60A5FA' },
  { x: 200, label: 'Billing', color: '#3B82F6' },
  { x: 270, label: 'IoT', color: '#60A5FA' },
  { x: 340, label: 'Pharma', color: '#3B82F6' },
];

const destinations = [
  { x: 110, label: 'Analytics', color: '#3B82F6' },
  { x: 200, label: 'AI', color: '#60A5FA' },
  { x: 290, label: 'Action', color: '#3B82F6' },
];

function DataFlowViz() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % 100), 80);
    return () => clearInterval(id);
  }, []);

  const packets = sources.map((src, i) => {
    const progress = ((tick + i * 20) % 100) / 100;
    const hubX = 200;
    const hubY = 162;
    const srcY = 30;
    return {
      x: src.x + (hubX - src.x) * progress,
      y: srcY + (hubY - srcY) * progress,
      opacity: progress < 0.85 ? 0.9 : (1 - (progress - 0.85) / 0.15) * 0.9,
      color: src.color,
    };
  });

  const outPackets = destinations.map((dst, i) => {
    const progress = ((tick + i * 33 + 50) % 100) / 100;
    const hubX = 200;
    const hubY = 162;
    const dstY = 292;
    return {
      x: hubX + (dst.x - hubX) * progress,
      y: hubY + (dstY - hubY) * progress,
      opacity: progress < 0.85 ? 0.9 : (1 - (progress - 0.85) / 0.15) * 0.9,
      color: dst.color,
    };
  });

  return (
    <div className="relative w-full" aria-hidden="true">
      <svg viewBox="0 0 400 345" className="w-full" style={{ maxHeight: '430px' }}>
        {/* DATA SOURCES label */}
        <text
          x={200}
          y={13}
          textAnchor="middle"
          fill="white"
          fillOpacity="0.28"
          fontSize="7"
          fontFamily="Inter,sans-serif"
          letterSpacing="2.5"
        >
          DATA SOURCES
        </text>

        {/* Source nodes */}
        {sources.map((src) => (
          <g key={src.label}>
            <circle cx={src.x} cy={30} r={20} fill={`${src.color}15`} stroke={src.color} strokeWidth="1" strokeOpacity="0.35" />
            <circle cx={src.x} cy={30} r={4} fill={src.color} opacity="0.9">
              <animate attributeName="r" values="4;5.5;4" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" />
            </circle>
            <text
              x={src.x}
              y={58}
              textAnchor="middle"
              fill="white"
              fillOpacity="0.55"
              fontSize="8"
              fontFamily="Inter,sans-serif"
            >
              {src.label}
            </text>
            {/* Connector lines to hub */}
            <line
              x1={src.x}
              y1={35}
              x2={200}
              y2={148}
              stroke={src.color}
              strokeWidth="1"
              strokeOpacity="0.18"
              strokeDasharray="4 5"
            />
          </g>
        ))}

        {/* Center hub */}
        <circle cx={200} cy={162} r={40} fill="rgba(59,130,246,0.08)" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.5" />
        {/* Outer pulse ring */}
        <circle cx={200} cy={162} r={40} fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.1">
          <animate attributeName="r" values="40;50;40" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.1;0;0.1" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <text
          x={200}
          y={158}
          textAnchor="middle"
          fill="white"
          fontSize="8.5"
          fontFamily="Inter,sans-serif"
          fontWeight="600"
          letterSpacing="0.5"
        >
          DATACULES
        </text>
        <text
          x={200}
          y={171}
          textAnchor="middle"
          fill="#3B82F6"
          fontSize="8"
          fontFamily="Inter,sans-serif"
          fontWeight="600"
          letterSpacing="0.5"
        >
          CORE
        </text>

        {/* INTELLIGENCE OUTPUT label */}
        <text
          x={200}
          y={248}
          textAnchor="middle"
          fill="white"
          fillOpacity="0.28"
          fontSize="7"
          fontFamily="Inter,sans-serif"
          letterSpacing="2.5"
        >
          INTELLIGENCE OUTPUT
        </text>

        {/* Lines to destinations */}
        {destinations.map((dst) => (
          <line
            key={`out-line-${dst.label}`}
            x1={200}
            y1={200}
            x2={dst.x}
            y2={275}
            stroke={dst.color}
            strokeWidth="1"
            strokeOpacity="0.18"
            strokeDasharray="4 5"
          />
        ))}

        {/* Destination nodes */}
        {destinations.map((dst, di) => (
          <g key={dst.label}>
            <circle cx={dst.x} cy={290} r={24} fill={`${dst.color}12`} stroke={dst.color} strokeWidth="1" strokeOpacity="0.4" />
            <circle cx={dst.x} cy={290} r={4} fill={dst.color} opacity="0.9">
              <animate
                attributeName="r"
                values="4;5.5;4"
                dur="2.5s"
                begin={`${di * 0.6}s`}
                repeatCount="indefinite"
              />
            </circle>
            <text
              x={dst.x}
              y={322}
              textAnchor="middle"
              fill="white"
              fillOpacity="0.55"
              fontSize="8"
              fontFamily="Inter,sans-serif"
            >
              {dst.label}
            </text>
          </g>
        ))}

        {/* Animated inbound data packets */}
        {packets.map((p, i) => (
          <circle key={`in-${i}`} cx={p.x} cy={p.y} r={2.5} fill={p.color} opacity={p.opacity} />
        ))}

        {/* Animated outbound data packets */}
        {outPackets.map((p, i) => (
          <circle key={`out-${i}`} cx={p.x} cy={p.y} r={2.5} fill={p.color} opacity={p.opacity} />
        ))}
      </svg>
    </div>
  );
}

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    const raf = requestAnimationFrame(() => {
      el.style.transition =
        'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#06487A]"
      style={{ paddingTop: 'calc(var(--nav-height) + 60px)', paddingBottom: '80px' }}
    >
      {/* Ambient glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: '900px',
            height: '600px',
            background:
              'radial-gradient(ellipse at center bottom, rgba(59,130,246,0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/4 right-0"
          style={{
            width: '500px',
            height: '500px',
            background:
              'radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/3 left-0"
          style={{
            width: '400px',
            height: '400px',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Main content — two column on lg+ */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: all existing text content — unchanged */}
          <div>
            <div className="section-eyebrow mb-6">DATACULES HEALTHDATA 97</div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              One Platform for{' '}
              <span className="text-accent-gradient">Healthcare Data,</span>
              <br className="hidden sm:block" />
              {' '}Intelligence &amp; Action
            </h1>

            <p className="text-lg sm:text-xl text-[#A8BFCC] max-w-2xl mb-10 leading-relaxed">
              Bring clinical, operational, financial, and population data into one governed
              platform — with AI-driven intelligence and enterprise-grade security built into
              every layer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/#platform"
                className="btn-arrow inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-all duration-200 hover:shadow-[0_0_24px_rgba(59,130,246,0.3)]"
              >
                Explore the Platform
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-xl transition-all duration-200"
              >
                Request a Demo
              </Link>
            </div>

            {/* Platform flow visualization — preserved exactly */}
            <div
              className="relative"
              aria-label="Platform workflow: Connect, Manage, Govern, Analyze, Act"
            >
              <div className="flex items-center gap-0 overflow-x-auto pb-2">
                {flowSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.label} className="flex items-center flex-shrink-0">
                      <div className="pipeline-node flex flex-col items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#3B82F6]/40 hover:bg-white/[0.06] transition-all duration-200 min-w-[90px]">
                        <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/15 flex items-center justify-center">
                          <Icon size={16} className="text-[#3B82F6]" />
                        </div>
                        <span className="text-xs font-semibold tracking-wider text-[#A8BFCC]">
                          {step.label}
                        </span>
                      </div>
                      {i < flowSteps.length - 1 && (
                        <div className="flex items-center px-2">
                          <div className="w-6 h-px bg-gradient-to-r from-[#3B82F6]/50 to-[#3B82F6]/20" />
                          <div
                            className="w-0 h-0"
                            style={{
                              borderTop: '4px solid transparent',
                              borderBottom: '4px solid transparent',
                              borderLeft: '5px solid rgba(59,130,246,0.4)',
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-[#4A6080] mt-3 tracking-wide">
                DATA → INTELLIGENCE → ACTION
              </p>
            </div>
          </div>

          {/* Right: animated data flow visualization — desktop only */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full max-w-[420px]" style={{ opacity: 0.88 }}>
              <DataFlowViz />
            </div>
          </div>
        </div>
      </div>

      {/* ECG waveform at bottom — preserved */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden"
        style={{ height: '80px', opacity: 0.08 }}
      >
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full" fill="none">
          <path
            className="ecg-path"
            d="M0,40 L180,40 L200,40 L210,10 L220,70 L230,5 L240,75 L250,40 L260,40 L300,40 L320,40 L330,18 L340,62 L345,8 L350,72 L355,40 L380,40 L420,40 L440,40 L450,20 L460,60 L465,8 L470,72 L475,40 L500,40 L600,40 L620,40 L630,15 L640,65 L645,5 L650,75 L655,40 L680,40 L780,40 L800,40 L810,22 L820,58 L825,10 L830,70 L835,40 L860,40 L960,40 L980,40 L990,18 L1000,62 L1005,8 L1010,72 L1015,40 L1040,40 L1140,40 L1160,40 L1170,20 L1180,60 L1185,8 L1190,72 L1195,40 L1220,40 L1440,40"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            style={{ animation: 'ecgDraw 4s ease-in-out infinite' }}
          />
        </svg>
      </div>
    </section>
  );
}
