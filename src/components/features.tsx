'use client';

import { useEffect, useRef } from 'react';
import {
  Database,
  User,
  BarChart2,
  Brain,
  ShieldCheck,
  Network,
  Activity,
  FileText,
  DollarSign,
  Stethoscope,
  Lock,
  Globe,
} from 'lucide-react';

const domains = [
  {
    number: '01',
    title: 'Healthcare Data Management',
    description: 'A single authoritative data environment connecting every healthcare data source in your organization.',
    capabilities: [
      { icon: Database, name: 'Unified Patient Repository', desc: 'Aggregate clinical, financial, and operational records into one longitudinal patient record.' },
      { icon: FileText, name: 'Data Integration', desc: 'Ingest data via REST, MQTT, SFTP, and HL7 FHIR protocols from any connected source.' },
      { icon: Activity, name: 'Data Quality Controls', desc: 'Automated validation, normalization, and reconciliation across every data stream.' },
      { icon: BarChart2, name: 'Analytics & Reporting', desc: 'Operational, clinical, and financial reporting across all 23 platform modules.' },
    ],
  },
  {
    number: '02',
    title: 'Patient & Clinical Data',
    description: 'Complete patient data management from scheduling and encounters through prescriptions, labs, and vitals.',
    capabilities: [
      { icon: User, name: 'Patient Management', desc: 'Longitudinal patient records aggregating every clinical and administrative data point.' },
      { icon: Stethoscope, name: 'Clinical Encounters', desc: 'Structured encounter management with diagnosis codes, care plans, and clinical notes.' },
      { icon: Activity, name: 'Vitals & IoT Monitoring', desc: 'Real-time vitals ingestion from bedside and wearable devices with anomaly detection.' },
      { icon: FileText, name: 'Lab & Prescription Tracking', desc: 'Lab result management and prescription tracking integrated with the patient record.' },
    ],
  },
  {
    number: '03',
    title: 'Analytics & Intelligence',
    description: 'Operational, clinical, financial, and population analytics across your entire data environment.',
    capabilities: [
      { icon: BarChart2, name: 'Clinical Analytics', desc: 'Understand care delivery patterns, quality metrics, and clinical outcomes across populations.' },
      { icon: DollarSign, name: 'Financial Analytics', desc: 'Revenue, collections, denials, and financial performance analytics in one environment.' },
      { icon: User, name: 'Population Analytics', desc: 'Stratify and analyze population cohorts for risk, utilization, and intervention planning.' },
      { icon: Activity, name: 'Operational Analytics', desc: 'Identify operational bottlenecks, capacity patterns, and workflow optimization opportunities.' },
    ],
  },
  {
    number: '04',
    title: 'AI & Predictive Engine',
    description: 'Machine-learning models integrated into the data platform for decision-support intelligence.',
    capabilities: [
      { icon: Brain, name: 'Readmission Risk', desc: 'XGBoost and Random Forest models identifying patients at elevated readmission risk.' },
      { icon: DollarSign, name: 'Denial Prediction', desc: 'Predict high-probability billing denials before claim submission.' },
      { icon: Activity, name: 'Vitals Anomaly Detection', desc: 'Isolation Forest modeling on continuous vitals streams for early deterioration signals.' },
      { icon: User, name: 'No-Show Prediction', desc: 'Appointment attendance prediction enabling targeted engagement interventions.' },
    ],
  },
  {
    number: '05',
    title: 'Security & Governance',
    description: 'Security, access control, audit, and governance architecture designed for healthcare data environments.',
    capabilities: [
      { icon: ShieldCheck, name: 'Role-Based Access Control', desc: 'Granular access controls mapping permissions to clinical roles and organizational hierarchy.' },
      { icon: Lock, name: 'PHI Encryption', desc: 'Encryption at rest and in transit for all Protected Health Information.' },
      { icon: FileText, name: 'Audit Trail', desc: 'Complete, immutable audit logging across all data access and modification events.' },
      { icon: ShieldCheck, name: 'Privacy Controls', desc: 'Data subject rights workflows, consent management, and configurable retention policies.' },
    ],
  },
  {
    number: '06',
    title: 'Integrations & APIs',
    description: 'A comprehensive REST API and integration framework supporting enterprise-scale healthcare workflows.',
    capabilities: [
      { icon: Network, name: 'REST API — 354+ Endpoints', desc: 'Complete API coverage across all 23 platform modules with OpenAPI documentation.' },
      { icon: Globe, name: 'HL7 FHIR R4', desc: 'Standardized clinical data exchange compatible with major EHR and health network systems.' },
      { icon: Activity, name: 'MQTT & Real-Time Streams', desc: 'Event-driven IoT and vitals data integration for continuous real-time data flows.' },
      { icon: FileText, name: 'Webhook & Event Framework', desc: 'Real-time event notifications for custom integrations and downstream workflow triggers.' },
    ],
  },
];

export function Features() {
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
      id="capabilities"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#112744]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-20 animate-on-scroll">
          <div className="section-eyebrow mb-4">Core Platform Capabilities</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Six Capability Domains,{' '}
            <span className="text-accent-gradient">One Platform</span>
          </h2>
          <p className="text-lg text-[#A8BFCC]">
            Every healthcare data workflow — clinical, financial, operational, analytical, AI-driven, and governed — organized into six interconnected capability domains.
          </p>
        </div>

        {/* Domains */}
        <div className="space-y-20">
          {domains.map((domain, domainIdx) => {
            const isEven = domainIdx % 2 === 1;
            return (
              <div
                key={domain.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start animate-on-scroll stagger-${(domainIdx % 3) + 1}`}
              >
                {/* Content side */}
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl font-black text-[#3B82F6]/15 leading-none select-none">
                      {domain.number}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{domain.title}</h3>
                    </div>
                  </div>
                  <p className="text-[#A8BFCC] mb-8 leading-relaxed">{domain.description}</p>
                  <div className="space-y-4">
                    {domain.capabilities.map((cap) => {
                      const Icon = cap.icon;
                      return (
                        <div key={cap.name} className="flex gap-4">
                          <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon size={16} className="text-[#3B82F6]" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white mb-0.5">{cap.name}</div>
                            <div className="text-sm text-[#A8BFCC] leading-relaxed">{cap.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Visual side */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} hidden lg:block`}>
                  <div
                    className="rounded-2xl border border-white/[0.07] p-6 h-64 flex items-center justify-center relative overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                  >
                    {/* Abstract visual representation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="text-[140px] font-black select-none"
                        style={{ color: '#3B82F6', opacity: 0.04, lineHeight: 1 }}
                      >
                        {domain.number}
                      </div>
                    </div>
                    <div className="relative z-10 flex flex-wrap gap-2 justify-center">
                      {domain.capabilities.map((cap) => {
                        const Icon = cap.icon;
                        return (
                          <div
                            key={cap.name}
                            className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04]"
                          >
                            <Icon size={20} className="text-[#3B82F6]" />
                            <span className="text-xs text-[#A8BFCC] text-center leading-tight max-w-[80px]">
                              {cap.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
