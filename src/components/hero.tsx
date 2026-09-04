'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Database, Shield, BarChart2, Brain, Zap } from 'lucide-react';

const flowSteps = [
  { icon: Database, label: 'CONNECT' },
  { icon: Shield, label: 'MANAGE' },
  { icon: BarChart2, label: 'GOVERN' },
  { icon: Brain, label: 'ANALYZE' },
  { icon: Zap, label: 'ACT' },
];

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    const raf = requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)';
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: '900px',
            height: '600px',
            background: 'radial-gradient(ellipse at center bottom, rgba(59,130,246,0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/4 right-0"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/3 left-0"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Main content */}
      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="section-eyebrow mb-6">
            DATACULES HEALTHDATA 97
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            One Platform for{' '}
            <span className="text-accent-gradient">Healthcare Data,</span>
            <br className="hidden sm:block" />
            {' '}Intelligence &amp; Action
          </h1>

          {/* Subhead */}
          <p className="text-lg sm:text-xl text-[#A8BFCC] max-w-2xl mb-10 leading-relaxed">
            Bring clinical, operational, financial, and population data into one governed platform — with AI-driven intelligence and enterprise-grade security built into every layer.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/#platform"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-all duration-200 shadow-glow-blue hover:shadow-lg"
            >
              Explore the Platform
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-xl transition-all duration-200"
            >
              Request a Demo
            </Link>
          </div>

          {/* Platform flow visualization */}
          <div className="relative" aria-label="Platform workflow: Connect, Manage, Govern, Analyze, Act">
            <div className="flex items-center gap-0 overflow-x-auto pb-2">
              {flowSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex items-center flex-shrink-0">
                    <div className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#3B82F6]/40 hover:bg-white/[0.06] transition-all duration-200 min-w-[90px]">
                      <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/15 flex items-center justify-center">
                        <Icon size={16} className="text-[#3B82F6]" />
                      </div>
                      <span className="text-xs font-semibold tracking-wider text-[#A8BFCC]">{step.label}</span>
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
            <p className="text-xs text-[#4A6080] mt-3 tracking-wide">DATA → INTELLIGENCE → ACTION</p>
          </div>
        </div>
      </div>

      {/* ECG waveform at bottom */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden"
        style={{ height: '80px', opacity: 0.08 }}
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="none"
        >
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
