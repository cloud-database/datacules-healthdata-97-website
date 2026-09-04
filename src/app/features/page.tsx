import type { Metadata } from 'next';
import Link from 'next/link';
import {
  UserRound, FileHeart, Stethoscope, FlaskConical, Pill, Video,
  Activity, CircleDollarSign, FileCheck, ClipboardCheck, Shield,
  Brain, BarChart2, Users, Lock, ShieldCheck, ScrollText,
  Network, CalendarCheck, BadgeCheck, Package, LineChart, BellRing,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '23 Integrated Modules',
  description:
    'Explore all 23 integrated modules of Datacules HealthData 97 — from patient management and clinical encounters to AI predictive analytics, compliance, and HL7 FHIR integration.',
};

const modulesByCategory = [
  {
    category: 'Clinical',
    color: '#3B82F6',
    modules: [
      { name: 'Patient Management', icon: UserRound, description: 'Longitudinal patient records aggregating every clinical and administrative data point in a single unified view.' },
      { name: 'Clinical Encounters', icon: Stethoscope, description: 'Structured encounter management with diagnosis codes, SOAP notes, care plans, and clinical decision support.' },
    ],
  },
  {
    category: 'Integration',
    color: '#60A5FA',
    modules: [
      { name: 'EHR Integration', icon: FileHeart, description: 'Bidirectional EHR data exchange via REST, HL7 FHIR R4, and SFTP — connecting your existing clinical systems.' },
      { name: 'HL7 FHIR Gateway', icon: Network, description: 'Standards-based clinical data exchange enabling interoperability across health networks and payer systems.' },
    ],
  },
  {
    category: 'Diagnostics & Pharmacy',
    color: '#3B82F6',
    modules: [
      { name: 'Lab Results', icon: FlaskConical, description: 'Lab result ingestion, normalization, and integration with the longitudinal patient record.' },
      { name: 'Prescription Management', icon: Pill, description: 'Prescription tracking, medication reconciliation, and pharmacy workflow management.' },
      { name: 'Pharmacy Management', icon: Package, description: 'Pharmacy inventory, dispensing workflows, and medication event tracking.' },
    ],
  },
  {
    category: 'Virtual Care & Remote Monitoring',
    color: '#60A5FA',
    modules: [
      { name: 'Telehealth', icon: Video, description: 'Telehealth encounter management integrated with the clinical data environment.' },
      { name: 'IoT Vitals Monitoring', icon: Activity, description: 'Real-time vitals ingestion from bedside and wearable IoT devices with configurable anomaly detection.' },
    ],
  },
  {
    category: 'Financial',
    color: '#3B82F6',
    modules: [
      { name: 'Revenue Cycle', icon: CircleDollarSign, description: 'End-to-end revenue cycle management with billing automation and financial analytics.' },
      { name: 'Claims Management', icon: FileCheck, description: 'Claims creation, scrubbing, submission tracking, and remittance processing.' },
      { name: 'Prior Authorization', icon: ClipboardCheck, description: 'Prior authorization workflows with payer integration and status tracking.' },
      { name: 'Denial Prevention', icon: Shield, description: 'AI-assisted denial prediction and prevention for revenue cycle optimization.' },
    ],
  },
  {
    category: 'Intelligence',
    color: '#60A5FA',
    modules: [
      { name: 'AI Predictive Engine', icon: Brain, description: 'Machine-learning models for readmission risk, denial prediction, vitals anomaly detection, and no-show prediction.' },
      { name: 'Risk Stratification', icon: BarChart2, description: 'Population-level risk stratification for clinical and operational prioritization.' },
    ],
  },
  {
    category: 'Analytics',
    color: '#3B82F6',
    modules: [
      { name: 'Population Health', icon: Users, description: 'Population health analytics including cohort analysis, risk trend monitoring, and intervention tracking.' },
      { name: 'Analytics & Reporting', icon: LineChart, description: 'Operational, clinical, and financial reporting across all platform modules.' },
    ],
  },
  {
    category: 'Compliance',
    color: '#60A5FA',
    modules: [
      { name: 'HIPAA Compliance', icon: Lock, description: 'PHI protection infrastructure including encryption, minimum necessary access, and audit trail management.' },
      { name: 'GDPR Controls', icon: ShieldCheck, description: 'Data subject rights workflows, consent management, and configurable data retention policies.' },
      { name: 'Audit Trail', icon: ScrollText, description: 'Immutable, comprehensive audit logging across all data access and modification events.' },
    ],
  },
  {
    category: 'Operations',
    color: '#3B82F6',
    modules: [
      { name: 'Appointment Scheduling', icon: CalendarCheck, description: 'Appointment management with scheduling analytics and no-show prediction integration.' },
      { name: 'Staff & Credentialing', icon: BadgeCheck, description: 'Staff management, credentialing tracking, and role-based access administration.' },
      { name: 'Notification Engine', icon: BellRing, description: 'Configurable event-driven notifications for clinical alerts, operational triggers, and workflow automation.' },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main className="bg-[#0D2137] min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="section-eyebrow mb-5">Platform Anatomy</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-7 leading-tight">
            23 Tightly Integrated Modules
          </h1>
          <p className="text-xl text-[#A8BFCC] leading-relaxed">
            Every clinical, financial, operational, and compliance workflow unified in a single coherent platform architecture — from patient registration through AI-powered risk intelligence.
          </p>
        </div>
      </section>

      {/* Module categories */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {modulesByCategory.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 rounded-full" style={{ background: group.color }} />
                <h2 className="text-lg font-semibold text-white">{group.category}</h2>
                <span className="text-xs text-[#4A6080]">{group.modules.length} module{group.modules.length > 1 ? 's' : ''}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.modules.map((mod) => {
                  const Icon = mod.icon;
                  return (
                    <div key={mod.name} className="card-base p-6">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: `${group.color}15` }}
                      >
                        <Icon size={18} style={{ color: group.color }} />
                      </div>
                      <h3 className="text-sm font-semibold text-white mb-2">{mod.name}</h3>
                      <p className="text-xs text-[#A8BFCC] leading-relaxed">{mod.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/[0.06] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-4">See All 23 Modules in Action</h2>
          <p className="text-[#A8BFCC] mb-8 max-w-lg mx-auto">Request a demo to explore how Datacules HealthData 97 handles your specific workflows.</p>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-colors"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
