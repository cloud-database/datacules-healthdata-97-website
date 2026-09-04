'use client';

import { useEffect, useRef } from 'react';
import {
  HeartPulse, Users, DollarSign, Activity, Database, BarChart2,
} from 'lucide-react';

const useCases = [
  {
    icon: HeartPulse,
    title: 'Care Management',
    description:
      'Identify high-risk patients early and prioritize clinical interventions. Use AI-assisted risk scores and longitudinal patient data to focus care management resources where they have the greatest impact.',
    color: '#3B82F6',
  },
  {
    icon: Users,
    title: 'Population Health',
    description:
      'Understand population-level risk, utilization patterns, and care gaps across defined cohorts. Enable data-driven population health programs with stratification and trend analytics.',
    color: '#60A5FA',
  },
  {
    icon: DollarSign,
    title: 'Revenue Cycle',
    description:
      'Reduce claim denials and accelerate collections with predictive billing intelligence. Analyze coding patterns, payer rules, and claims data to optimize revenue cycle performance.',
    color: '#3B82F6',
  },
  {
    icon: Activity,
    title: 'Clinical Operations',
    description:
      'Gain visibility into operational workflows, scheduling patterns, and capacity utilization. Use data to identify bottlenecks and improve clinical throughput.',
    color: '#60A5FA',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description:
      'Build trusted healthcare data workflows with a platform designed for complex multi-source data environments. Centralize, normalize, and operationalize healthcare data at enterprise scale.',
    color: '#3B82F6',
  },
  {
    icon: BarChart2,
    title: 'Executive Intelligence',
    description:
      'Give healthcare leadership a unified view of organizational performance across clinical, operational, and financial dimensions — from a single governed data environment.',
    color: '#60A5FA',
  },
];

export function ValueProps() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="use-cases"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#0B5A94]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 animate-on-scroll">
          <div className="section-eyebrow mb-4">Healthcare Use Cases</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Built for Every Healthcare{' '}
            <span className="text-accent-gradient">Decision-Maker</span>
          </h2>
          <p className="text-lg text-[#A8BFCC]">
            Datacules HealthData 97 serves multiple stakeholders across the healthcare organization — from clinical teams and data engineers to executives and compliance officers.
          </p>
        </div>

        {/* Use case grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll stagger-2">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <div
                key={uc.title}
                className="card-base p-7"
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${uc.color}15` }}
                >
                  <Icon size={22} style={{ color: uc.color }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{uc.title}</h3>
                <p className="text-sm text-[#A8BFCC] leading-relaxed">{uc.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
