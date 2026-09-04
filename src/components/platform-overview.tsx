'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Database,
  Settings,
  ShieldCheck,
  BarChart2,
  Brain,
  Zap,
  ChevronDown,
} from 'lucide-react';

const tiers = [
  {
    number: '01',
    title: 'Data Sources',
    subtitle: 'The Foundation',
    icon: Database,
    borderColor: '#3B82F6',
    items: [
      'EHR & Clinical Systems',
      'Labs & Diagnostics',
      'Billing & Claims',
      'Telehealth & IoT',
      'Pharmacy & External APIs',
    ],
  },
  {
    number: '02',
    title: 'Data Management',
    subtitle: 'Unify & Normalize',
    icon: Settings,
    borderColor: '#60A5FA',
    items: [
      'Integration & Ingestion',
      'Normalization & Validation',
      'Data Quality Controls',
      'Longitudinal Patient Records',
      'Multi-source Reconciliation',
    ],
  },
  {
    number: '03',
    title: 'Governance & Security',
    subtitle: 'Control & Protect',
    icon: ShieldCheck,
    borderColor: '#3B82F6',
    items: [
      'Role-Based Access Control',
      'PHI Encryption at Rest & Transit',
      'Complete Audit Trail',
      'Privacy & Consent Management',
      'Compliance-Oriented Architecture',
    ],
  },
  {
    number: '04',
    title: 'Analytics',
    subtitle: 'Understand & Measure',
    icon: BarChart2,
    borderColor: '#60A5FA',
    items: [
      'Clinical Analytics',
      'Operational Analytics',
      'Financial & Revenue Analytics',
      'Population Health Metrics',
      'Quality & Performance Dashboards',
    ],
  },
  {
    number: '05',
    title: 'AI & Intelligence',
    subtitle: 'Predict & Surface',
    icon: Brain,
    borderColor: '#3B82F6',
    items: [
      'Readmission Risk Scoring',
      'Billing Denial Prediction',
      'Vitals Anomaly Detection',
      'No-Show & No-Contact Prediction',
      'Population Stratification',
    ],
  },
  {
    number: '06',
    title: 'Action',
    subtitle: 'Decide & Operate',
    icon: Zap,
    borderColor: '#60A5FA',
    items: [
      'Operational Insights & Alerts',
      'Clinical Decision Support',
      'Workflow Triggers',
      'Risk Prioritization',
      'Executive Intelligence',
    ],
  },
];

export function PlatformOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const tierRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTiers, setActiveTiers] = useState<boolean[]>(tiers.map(() => false));

  useEffect(() => {
    // Observe section header
    const headerEls = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    if (headerEls) {
      const headerObserver = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add('is-visible');
          }),
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
      );
      headerEls.forEach((el) => headerObserver.observe(el));
    }

    // Observe each tier individually
    const observers: IntersectionObserver[] = [];
    tierRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveTiers((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            obs.disconnect();
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="platform"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#06487A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16 animate-on-scroll">
          <div className="section-eyebrow mb-4">What is Datacules HealthData 97?</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Healthcare Data, Unified from{' '}
            <span className="text-accent-gradient">Source to Decision</span>
          </h2>
          <p className="text-lg text-[#A8BFCC] leading-relaxed">
            Datacules HealthData 97 is an enterprise healthcare data platform built to connect,
            manage, govern, analyze, and operationalize data across your entire organization. It
            brings clinical, financial, operational, and population data into one governed
            environment — with AI-driven intelligence integrated throughout every layer.
          </p>
        </div>

        {/* Architecture tiers — scroll-activated */}
        <div className="space-y-3">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            const isActive = activeTiers[i];

            return (
              <div
                key={tier.number}
                ref={(el) => { tierRefs.current[i] = el; }}
              >
                <div
                  className={`tier-row relative rounded-2xl overflow-hidden border border-white/[0.07] bg-[rgba(255,255,255,0.03)] hover:border-white/15 transition-all duration-300 group ${
                    isActive ? 'tier-active' : 'tier-inactive'
                  }`}
                  style={{
                    borderLeftWidth: '3px',
                    borderLeftColor: isActive ? tier.borderColor : 'rgba(255,255,255,0.1)',
                  }}
                >
                  <div className="p-5 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Left: number + icon + title */}
                      <div className="flex items-center gap-4 sm:w-64 flex-shrink-0">
                        <span
                          className="text-xs font-bold tracking-widest"
                          style={{ color: tier.borderColor, opacity: 0.6 }}
                        >
                          {tier.number}
                        </span>
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${tier.borderColor}18` }}
                        >
                          <Icon size={18} style={{ color: tier.borderColor }} />
                        </div>
                        <div>
                          <div className="font-semibold text-white text-sm">{tier.title}</div>
                          <div className="text-xs text-[#4A6080] mt-0.5">{tier.subtitle}</div>
                        </div>
                      </div>

                      {/* Right: items */}
                      <div className="flex flex-wrap gap-2 sm:pt-0.5">
                        {tier.items.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-[#A8BFCC] bg-white/[0.04] border border-white/[0.07] group-hover:border-white/15 transition-colors"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector arrow */}
                {i < tiers.length - 1 && (
                  <div className="flex justify-center my-1">
                    <ChevronDown
                      size={16}
                      className="transition-colors duration-500"
                      style={{ color: '#3B82F6', opacity: activeTiers[i] ? 0.6 : 0.2 }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
