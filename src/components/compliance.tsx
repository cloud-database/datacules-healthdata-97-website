'use client';

import { useEffect, useRef } from 'react';
import { Shield, Lock, Network, BadgeCheck } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'HIPAA-Aligned Architecture',
    description:
      'Designed with HIPAA requirements in mind — PHI encryption at rest and in transit, minimum necessary access controls, role-based permissions, and complete audit trail infrastructure.',
    accentColor: '#3B82F6',
  },
  {
    icon: Lock,
    title: 'GDPR Privacy Controls',
    description:
      'Privacy by design with data subject rights workflows, consent management, automated data export, and configurable retention policies aligned with GDPR principles.',
    accentColor: '#3B82F6',
  },
  {
    icon: Network,
    title: 'HL7 FHIR Compatible',
    description:
      'HL7 FHIR R4 support for standardized clinical data exchange, enabling seamless interoperability with major EHR systems and health information networks.',
    accentColor: '#60A5FA',
  },
  {
    icon: BadgeCheck,
    title: 'SOC 2 Aligned Architecture',
    description:
      'Security, availability, and confidentiality controls aligned with SOC 2 principles — providing enterprise procurement teams a structured, auditable security posture.',
    accentColor: '#60A5FA',
  },
];

const stats = [
  { value: '354+', label: 'REST API Endpoints' },
  { value: '240+', label: 'Database Tables' },
  { value: '23', label: 'Integrated Modules' },
  { value: 'PHI', label: 'Encrypted at Rest & Transit' },
];

export function Compliance() {
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
      id="security"
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ background: 'linear-gradient(180deg, #0B5A94 0%, #06487A 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 animate-on-scroll">
          <div className="section-eyebrow mb-4">Security & Governance</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Security and Governance{' '}
            <span className="text-accent-gradient">by Architecture</span>
          </h2>
          <p className="text-lg text-[#A8BFCC] leading-relaxed">
            Every layer of Datacules HealthData 97 is engineered with healthcare security and compliance requirements in mind — access control, encryption, audit, and governance are part of the platform architecture, not bolted on.
          </p>
        </div>

        {/* Badge grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 animate-on-scroll stagger-2">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="card-base p-8"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: `${badge.accentColor}20` }}
                    >
                      <Icon size={24} style={{ color: badge.accentColor }} />
                    </div>
                    {/* Pulse ring */}
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        border: `1px solid ${badge.accentColor}`,
                        opacity: 0,
                        animation: 'pulseRing 3s cubic-bezier(0.4,0,0.6,1) infinite',
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{badge.title}</h3>
                    <p className="text-sm text-[#A8BFCC] leading-relaxed">{badge.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl border border-white/[0.07] mb-8 animate-on-scroll stagger-3"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-4">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-[#A8BFCC] tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="animate-on-scroll stagger-4 text-center">
          <p className="text-xs text-[#4A6080] max-w-2xl mx-auto leading-relaxed">
            Datacules HealthData 97 is designed with healthcare security and compliance requirements in mind. Organizations should conduct their own compliance assessments for their specific regulatory obligations.
          </p>
        </div>
      </div>
    </section>
  );
}
