'use client';

import { useEffect, useRef, useState } from 'react';
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

const statsData = [
  { numeric: 354, suffix: '+', label: 'REST API Endpoints' },
  { numeric: 240, suffix: '+', label: 'Database Tables' },
  { numeric: 23, suffix: '', label: 'Integrated Modules' },
  { numeric: null, suffix: 'PHI', label: 'Encrypted at Rest & Transit' },
];

function useCountUp(target: number | null, active: boolean, duration = 1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active || target === null) return;
    const finalTarget = target;
    const start = performance.now();
    let raf: number;
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * finalTarget));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return count;
}

function StatItem({
  data,
  active,
  index,
}: {
  data: (typeof statsData)[0];
  active: boolean;
  index: number;
}) {
  const count = useCountUp(data.numeric, active, 1200 + index * 150);
  const display =
    data.numeric === null
      ? data.suffix
      : `${count}${data.suffix}`;

  return (
    <div className="text-center py-4">
      <div
        className="text-3xl font-bold text-white mb-1"
        style={
          active
            ? { animation: 'countUp 0.5s ease-out forwards' }
            : { opacity: 0 }
        }
      >
        {display}
      </div>
      <div className="text-xs text-[#A8BFCC] tracking-wide">{data.label}</div>
    </div>
  );
}

function SecurityRings() {
  return (
    <div className="flex items-center justify-center" style={{ height: '180px' }} aria-hidden="true">
      <div className="relative flex items-center justify-center" style={{ width: '180px', height: '180px' }}>
        {/* Outermost ring — slow clockwise */}
        <svg
          viewBox="0 0 180 180"
          className="absolute inset-0 w-full h-full"
          style={{ animation: 'ringRotate 22s linear infinite' }}
        >
          <circle
            cx="90" cy="90" r="82"
            fill="none"
            stroke="rgba(59,130,246,0.12)"
            strokeWidth="1"
            strokeDasharray="8 12"
          />
        </svg>
        {/* Middle ring — counterclockwise */}
        <svg
          viewBox="0 0 180 180"
          className="absolute inset-0 w-full h-full"
          style={{ animation: 'ringRotateReverse 14s linear infinite' }}
        >
          <circle
            cx="90" cy="90" r="62"
            fill="none"
            stroke="rgba(96,165,250,0.18)"
            strokeWidth="1"
            strokeDasharray="5 8"
          />
          {/* Dot on ring */}
          <circle cx="152" cy="90" r="3" fill="#60A5FA" opacity="0.6" />
        </svg>
        {/* Inner ring — fast clockwise */}
        <svg
          viewBox="0 0 180 180"
          className="absolute inset-0 w-full h-full"
          style={{ animation: 'ringRotate 8s linear infinite' }}
        >
          <circle
            cx="90" cy="90" r="42"
            fill="none"
            stroke="rgba(59,130,246,0.25)"
            strokeWidth="1.5"
            strokeDasharray="3 6"
          />
          <circle cx="132" cy="90" r="3" fill="#3B82F6" opacity="0.85" />
        </svg>
        {/* Center shield */}
        <div
          className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl"
          style={{
            background: 'rgba(59,130,246,0.12)',
            border: '1px solid rgba(59,130,246,0.3)',
            boxShadow: '0 0 32px rgba(59,130,246,0.15)',
          }}
        >
          <Shield size={28} style={{ color: '#3B82F6' }} />
        </div>
      </div>
    </div>
  );
}

export function Compliance() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const els = section.querySelectorAll('.animate-on-scroll');
    const scrollObserver = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => scrollObserver.observe(el));

    // Stats count-up trigger
    const statsEl = statsRef.current;
    if (statsEl) {
      const statsObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStatsActive(true);
            statsObserver.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      statsObserver.observe(statsEl);
      return () => {
        scrollObserver.disconnect();
        statsObserver.disconnect();
      };
    }

    return () => scrollObserver.disconnect();
  }, []);

  return (
    <section
      id="security"
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ background: 'linear-gradient(180deg, #0B5A94 0%, #06487A 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + rings — two column on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-on-scroll">
            <div className="section-eyebrow mb-4">Security & Governance</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Security and Governance{' '}
              <span className="text-accent-gradient">by Architecture</span>
            </h2>
            <p className="text-lg text-[#A8BFCC] leading-relaxed">
              Every layer of Datacules HealthData 97 is engineered with healthcare security and
              compliance requirements in mind — access control, encryption, audit, and governance
              are part of the platform architecture, not bolted on.
            </p>
          </div>
          <div className="animate-on-scroll stagger-2 hidden lg:flex items-center justify-center">
            <SecurityRings />
          </div>
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

        {/* Stats bar with count-up */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl border border-white/[0.07] mb-8 animate-on-scroll stagger-3"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          {statsData.map((stat, i) => (
            <StatItem key={stat.label} data={stat} active={statsActive} index={i} />
          ))}
        </div>

        {/* Disclaimer */}
        <div className="animate-on-scroll stagger-4 text-center">
          <p className="text-xs text-[#4A6080] max-w-2xl mx-auto leading-relaxed">
            Datacules HealthData 97 is designed with healthcare security and compliance requirements
            in mind. Organizations should conduct their own compliance assessments for their specific
            regulatory obligations.
          </p>
        </div>
      </div>
    </section>
  );
}
