'use client';

import { useEffect, useRef } from 'react';
import { Brain, ShieldCheck, Activity } from 'lucide-react';

const cards = [
  {
    icon: Brain,
    title: 'Readmission Risk Scoring',
    description:
      'Identify patients at elevated risk of 30-day readmission before discharge. XGBoost and Random Forest models analyze clinical history, diagnosis codes, social determinants, and prior utilization patterns to generate actionable risk stratification.',
    accentColor: '#3B82F6',
    visual: 'bar',
    bars: [65, 82, 45, 91, 58, 74, 88],
    barLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  {
    icon: ShieldCheck,
    title: 'Billing Denial Prediction',
    description:
      'Prevent revenue leakage at the source. Predictive models analyze claim attributes, payer rules, and coding patterns to flag high-probability denials before submission — giving your billing team time to correct and resubmit.',
    accentColor: '#60A5FA',
    visual: 'donut',
    donutValue: 73,
  },
  {
    icon: Activity,
    title: 'Vitals Anomaly Detection',
    description:
      'Continuous Isolation Forest modeling monitors patient vitals streams in real time, surfacing subtle deterioration patterns that traditional threshold alerts miss — enabling earlier, more precise clinical intervention.',
    accentColor: '#3B82F6',
    visual: 'sparkline',
    sparklinePoints: '0,30 20,28 40,32 60,25 80,35 100,20 120,38 140,15 160,40 180,22 200,36 220,18 240,42 260,30',
  },
];

export function AIInsights() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ai"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#0D2137]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16 animate-on-scroll">
          <div className="section-eyebrow mb-4">AI & Predictive Intelligence</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Healthcare Intelligence,{' '}
            <span className="text-accent-gradient">Built Into the Platform</span>
          </h2>
          <p className="text-lg text-[#A8BFCC] leading-relaxed">
            Purpose-built machine-learning models connected directly to your data platform — surfacing AI-assisted decision-support intelligence precisely when your clinical and financial teams need it.
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
                {/* Visual */}
                <div
                  className="h-28 mb-6 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{ background: `${card.accentColor}0A` }}
                >
                  {card.visual === 'bar' && card.bars && (
                    <div className="flex items-end gap-1.5 h-16 px-4">
                      {card.bars.map((h, idx) => (
                        <div
                          key={idx}
                          className="flex-1 rounded-sm transition-all duration-500"
                          style={{
                            height: `${h}%`,
                            background: `linear-gradient(to top, ${card.accentColor}, ${card.accentColor}80)`,
                            opacity: 0.8,
                          }}
                        />
                      ))}
                    </div>
                  )}
                  {card.visual === 'donut' && (
                    <div className="relative w-20 h-20">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <circle
                          cx="18" cy="18" r="15.9"
                          fill="none"
                          stroke="rgba(255,255,255,0.08)"
                          strokeWidth="3"
                        />
                        <circle
                          cx="18" cy="18" r="15.9"
                          fill="none"
                          stroke={card.accentColor}
                          strokeWidth="3"
                          strokeDasharray={`${card.donutValue || 0} ${100 - (card.donutValue || 0)}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-white">{card.donutValue}%</span>
                      </div>
                    </div>
                  )}
                  {card.visual === 'sparkline' && card.sparklinePoints && (
                    <svg viewBox="0 0 260 50" className="w-full h-12 px-4" preserveAspectRatio="none">
                      <polyline
                        points={card.sparklinePoints}
                        fill="none"
                        stroke={card.accentColor}
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <polyline
                        points={`0,50 ${card.sparklinePoints} 260,50`}
                        fill={`${card.accentColor}15`}
                        stroke="none"
                      />
                    </svg>
                  )}
                </div>

                {/* Icon + title */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${card.accentColor}20` }}
                  >
                    <Icon size={16} style={{ color: card.accentColor }} />
                  </div>
                  <h3 className="text-base font-semibold text-white leading-snug">{card.title}</h3>
                </div>

                <p className="text-sm text-[#A8BFCC] leading-relaxed flex-1">{card.description}</p>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 animate-on-scroll stagger-3">
          <p className="text-xs text-[#4A6080] text-center max-w-2xl mx-auto leading-relaxed">
            AI models are designed as decision-support tools. Clinical decisions should always incorporate physician judgment and applicable clinical protocols. Datacules HealthData 97 does not provide medical advice.
          </p>
        </div>
      </div>
    </section>
  );
}
