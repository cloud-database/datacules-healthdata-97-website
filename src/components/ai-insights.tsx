'use client';

import { useEffect, useRef, useState } from 'react';
import { Brain, ShieldCheck, Activity } from 'lucide-react';

const bars = [65, 82, 45, 91, 58, 74, 88];
const barLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const sparklinePoints =
  '0,30 20,28 40,32 60,25 80,35 100,20 120,38 140,15 160,40 180,22 200,36 220,18 240,42 260,30';

function BarChartVisual({ animated }: { animated: boolean }) {
  return (
    <div className="h-28 mb-6 rounded-xl flex flex-col items-stretch justify-end overflow-hidden px-4 pb-3 pt-3 gap-1" style={{ background: 'rgba(59,130,246,0.06)' }}>
      {/* Score badge */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-semibold tracking-wider text-[#4A6080] uppercase">
          Readmission Risk
        </span>
        <span
          className="text-xs font-bold px-2 py-0.5 rounded-full"
          style={{ background: 'rgba(59,130,246,0.2)', color: '#3B82F6' }}
        >
          {animated ? '84.7% HIGH' : '—'}
        </span>
      </div>
      {/* Bars */}
      <div className="flex items-end gap-1.5 h-10">
        {bars.map((h, idx) => (
          <div
            key={idx}
            className="flex-1 rounded-sm"
            style={{
              height: animated ? `${h}%` : '0%',
              background: `linear-gradient(to top, #3B82F6, rgba(59,130,246,0.5))`,
              opacity: 0.85,
              transition: `height 0.9s cubic-bezier(0.4,0,0.2,1) ${idx * 0.07}s`,
              transformOrigin: 'bottom',
            }}
          />
        ))}
      </div>
    </div>
  );
}

function DonutVisual({ animated }: { animated: boolean }) {
  const value = 73;
  const dash = animated ? `${value} ${100 - value}` : '0 100';
  return (
    <div
      className="h-28 mb-6 rounded-xl flex items-center justify-center overflow-hidden relative"
      style={{ background: 'rgba(96,165,250,0.06)' }}
    >
      {/* Status dot */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5">
        <div
          className="status-dot w-1.5 h-1.5 rounded-full"
          style={{ background: animated ? '#3B82F6' : '#4A6080' }}
        />
        <span className="text-[10px] text-[#4A6080] font-semibold tracking-wide">
          {animated ? 'ANALYZING' : 'STANDBY'}
        </span>
      </div>
      <div className="relative w-20 h-20">
        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
          <circle
            cx="18"
            cy="18"
            r="15.9"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="3"
            strokeDasharray={dash}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dasharray 1.4s cubic-bezier(0.4,0,0.2,1) 0.3s',
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-white">{animated ? `${value}%` : '—'}</span>
        </div>
      </div>
    </div>
  );
}

function SparklineVisual({ animated }: { animated: boolean }) {
  const pathLen = 400;
  return (
    <div
      className="h-28 mb-6 rounded-xl flex flex-col overflow-hidden relative"
      style={{ background: 'rgba(59,130,246,0.06)' }}
    >
      {/* Status */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5">
        <div
          className="status-dot-green w-1.5 h-1.5 rounded-full"
          style={{ background: animated ? '#22C55E' : '#4A6080' }}
        />
        <span
          className="text-[10px] font-bold tracking-wider"
          style={{ color: animated ? '#22C55E' : '#4A6080' }}
        >
          NORMAL
        </span>
      </div>
      <svg viewBox="0 0 260 50" className="w-full flex-1 px-2" preserveAspectRatio="none">
        <defs>
          <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline
          points={`0,50 ${sparklinePoints} 260,50`}
          fill="url(#sparkFill)"
          stroke="none"
        />
        <polyline
          points={sparklinePoints}
          fill="none"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeDasharray={animated ? 'none' : pathLen}
          strokeDashoffset={animated ? 0 : pathLen}
          style={{
            transition: animated
              ? 'stroke-dashoffset 1.6s cubic-bezier(0.4,0,0.2,1) 0.2s'
              : undefined,
          }}
        />
      </svg>
    </div>
  );
}

export function AIInsights() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate-on-scroll for header
    const els = section.querySelectorAll('.animate-on-scroll');
    const scrollObserver = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => scrollObserver.observe(el));

    // Trigger chart animations
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          sectionObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    sectionObserver.observe(section);

    return () => {
      scrollObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const cards = [
    {
      icon: Brain,
      title: 'Readmission Risk Scoring',
      description:
        'Identify patients at elevated risk of 30-day readmission before discharge. XGBoost and Random Forest models analyze clinical history, diagnosis codes, social determinants, and prior utilization patterns to generate actionable risk stratification.',
      accentColor: '#3B82F6',
      visual: <BarChartVisual animated={sectionVisible} />,
    },
    {
      icon: ShieldCheck,
      title: 'Billing Denial Prediction',
      description:
        'Prevent revenue leakage at the source. Predictive models analyze claim attributes, payer rules, and coding patterns to flag high-probability denials before submission — giving your billing team time to correct and resubmit.',
      accentColor: '#60A5FA',
      visual: <DonutVisual animated={sectionVisible} />,
    },
    {
      icon: Activity,
      title: 'Vitals Anomaly Detection',
      description:
        'Continuous Isolation Forest modeling monitors patient vitals streams in real time, surfacing subtle deterioration patterns that traditional threshold alerts miss — enabling earlier, more precise clinical intervention.',
      accentColor: '#3B82F6',
      visual: <SparklineVisual animated={sectionVisible} />,
    },
  ];

  return (
    <section
      id="ai"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#06487A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* AI Engine status bar */}
        <div className="flex items-center gap-3 mb-10 animate-on-scroll">
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
          >
            <div
              className="status-dot w-2 h-2 rounded-full"
              style={{ background: '#3B82F6' }}
            />
            <span className="text-[11px] font-semibold tracking-wider text-[#A8BFCC]">
              AI ENGINE: ACTIVE
            </span>
            <span className="text-[11px] text-[#4A6080]">· Processing 3 models</span>
          </div>
        </div>

        {/* Section header */}
        <div className="max-w-3xl mb-16 animate-on-scroll">
          <div className="section-eyebrow mb-4">AI & Predictive Intelligence</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Healthcare Intelligence,{' '}
            <span className="text-accent-gradient">Built Into the Platform</span>
          </h2>
          <p className="text-lg text-[#A8BFCC] leading-relaxed">
            Purpose-built machine-learning models connected directly to your data platform —
            surfacing AI-assisted decision-support intelligence precisely when your clinical and
            financial teams need it.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-on-scroll stagger-2">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="card-base p-6 flex flex-col"
                style={{
                  borderTopWidth: '2px',
                  borderTopColor: card.accentColor,
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                {/* Animated visual */}
                {card.visual}

                {/* Icon + title */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${card.accentColor}20` }}
                  >
                    <Icon size={16} style={{ color: card.accentColor }} />
                  </div>
                  <h3 className="text-base font-semibold text-white leading-snug">
                    {card.title}
                  </h3>
                </div>

                <p className="text-sm text-[#A8BFCC] leading-relaxed flex-1">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Disclaimer — preserved exactly */}
        <div className="mt-10 animate-on-scroll stagger-3">
          <p className="text-xs text-[#4A6080] text-center max-w-2xl mx-auto leading-relaxed">
            AI models are designed as decision-support tools. Clinical decisions should always
            incorporate physician judgment and applicable clinical protocols. Datacules HealthData
            97 does not provide medical advice.
          </p>
        </div>
      </div>
    </section>
  );
}
