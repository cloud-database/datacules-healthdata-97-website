'use client';

import { useEffect, useRef } from 'react';
import {
  UserRound, FileHeart, Stethoscope, FlaskConical, Pill, Video,
  Activity, CircleDollarSign, FileCheck, ClipboardCheck, Shield,
  Brain, BarChart2, Users, Lock, ShieldCheck, ScrollText,
  Network, CalendarCheck, BadgeCheck, Package, LineChart, BellRing,
} from 'lucide-react';

const modules = [
  { name: 'Patient Management', category: 'Clinical', icon: UserRound },
  { name: 'EHR Integration', category: 'Integration', icon: FileHeart },
  { name: 'Clinical Encounters', category: 'Clinical', icon: Stethoscope },
  { name: 'Lab Results', category: 'Diagnostics', icon: FlaskConical },
  { name: 'Prescription Management', category: 'Pharmacy', icon: Pill },
  { name: 'Telehealth', category: 'Virtual Care', icon: Video },
  { name: 'IoT Vitals Monitoring', category: 'Remote Monitoring', icon: Activity },
  { name: 'Revenue Cycle', category: 'Financial', icon: CircleDollarSign },
  { name: 'Claims Management', category: 'Financial', icon: FileCheck },
  { name: 'Prior Authorization', category: 'Financial', icon: ClipboardCheck },
  { name: 'Denial Prevention', category: 'Financial', icon: Shield },
  { name: 'AI Predictive Engine', category: 'Intelligence', icon: Brain },
  { name: 'Risk Stratification', category: 'Intelligence', icon: BarChart2 },
  { name: 'Population Health', category: 'Analytics', icon: Users },
  { name: 'HIPAA Compliance', category: 'Compliance', icon: Lock },
  { name: 'GDPR Controls', category: 'Compliance', icon: ShieldCheck },
  { name: 'Audit Trail', category: 'Compliance', icon: ScrollText },
  { name: 'HL7 FHIR Gateway', category: 'Integration', icon: Network },
  { name: 'Appointment Scheduling', category: 'Operations', icon: CalendarCheck },
  { name: 'Staff & Credentialing', category: 'Operations', icon: BadgeCheck },
  { name: 'Pharmacy Management', category: 'Pharmacy', icon: Package },
  { name: 'Analytics & Reporting', category: 'Analytics', icon: LineChart },
  { name: 'Notification Engine', category: 'Operations', icon: BellRing },
];

const categoryColors: Record<string, string> = {
  Clinical: '#3B82F6',
  Integration: '#60A5FA',
  Diagnostics: '#3B82F6',
  Pharmacy: '#60A5FA',
  'Virtual Care': '#3B82F6',
  'Remote Monitoring': '#60A5FA',
  Financial: '#3B82F6',
  Intelligence: '#60A5FA',
  Analytics: '#3B82F6',
  Compliance: '#60A5FA',
  Operations: '#3B82F6',
};

export function ModulesGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="modules"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#043A62] relative overflow-hidden"
    >
      {/* Watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-black text-white"
          style={{ fontSize: 'clamp(200px, 30vw, 400px)', opacity: 0.02, lineHeight: 1 }}
        >
          23
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 animate-on-scroll">
          <div className="section-eyebrow mb-4">Platform Anatomy</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            23 Tightly{' '}
            <span className="text-accent-gradient">Integrated Modules</span>
          </h2>
          <p className="text-lg text-[#A8BFCC]">
            Every clinical, financial, operational, and compliance workflow unified in a single coherent platform architecture — from patient registration through AI-powered risk intelligence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 animate-on-scroll stagger-2">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            const color = categoryColors[mod.category] ?? '#3B82F6';
            return (
              <div
                key={mod.name}
                className="group flex flex-col items-center gap-3 p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04] transition-all duration-200 text-center"
                style={{ transitionDelay: `${(i % 6) * 0.04}s` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <span className="text-xs font-medium text-[#A8BFCC] group-hover:text-white transition-colors leading-snug">
                  {mod.name}
                </span>
                <span
                  className="text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full"
                  style={{ color, background: `${color}15` }}
                >
                  {mod.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
