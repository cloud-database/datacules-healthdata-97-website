import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Eye, ScrollText, Key, Server } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Security Overview',
  description:
    'Datacules HealthData 97 security architecture — access control, encryption, audit trail, and healthcare compliance-oriented design.',
};

const securityPillars = [
  {
    icon: Key,
    title: 'Authentication & Access Control',
    items: [
      'OAuth 2.0 and JWT token-based authentication',
      'Role-based access control across all platform modules',
      'Minimum necessary access principle enforcement',
      'Session management and token expiration controls',
    ],
  },
  {
    icon: Lock,
    title: 'Data Encryption',
    items: [
      'PHI encryption at rest using industry-standard algorithms',
      'TLS encryption for all data in transit',
      'Encrypted database fields for sensitive clinical and financial data',
      'Secure key management practices',
    ],
  },
  {
    icon: ScrollText,
    title: 'Audit & Logging',
    items: [
      'Comprehensive audit trail across all data access events',
      'Immutable audit logs with configurable retention policies',
      'PHI access logging with user, timestamp, and action recording',
      'Security event monitoring and alerting infrastructure',
    ],
  },
  {
    icon: Eye,
    title: 'Privacy & Data Governance',
    items: [
      'Data subject rights workflows (access, correction, deletion)',
      'Consent management and tracking',
      'Configurable data retention and purge policies',
      'PHI minimization controls and data masking capabilities',
    ],
  },
  {
    icon: Server,
    title: 'API Security',
    items: [
      'Rate limiting on all API endpoints',
      'PHI access controls enforced at every endpoint',
      'Input validation and sanitization',
      'Webhook payload signing and verification',
    ],
  },
  {
    icon: Shield,
    title: 'Compliance-Oriented Architecture',
    items: [
      'Designed with HIPAA requirements in mind',
      'GDPR privacy controls built into the data model',
      'HL7 FHIR R4 compatible data exchange',
      'SOC 2 aligned security control framework',
    ],
  },
];

export default function SecurityPage() {
  return (
    <main className="bg-[#06487A] min-h-screen">
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="section-eyebrow mb-5">Security Overview</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Security Architecture
          </h1>
          <p className="text-xl text-[#A8BFCC] leading-relaxed">
            Datacules HealthData 97 is designed with healthcare security and compliance requirements in mind. Access control, encryption, audit, and governance are core components of the platform architecture.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="rounded-2xl border border-[#3B82F6]/15 bg-[#3B82F6]/[0.04] p-6 mb-14 max-w-2xl">
          <p className="text-sm text-[#A8BFCC] leading-relaxed">
            <strong className="text-white">Important:</strong> Datacules HealthData 97 is designed with healthcare security and compliance requirements in mind. Organizations are responsible for conducting their own compliance assessments and ensuring that platform deployment meets their specific regulatory obligations.
          </p>
        </div>

        {/* Security pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="card-base p-6">
                <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/15 flex items-center justify-center mb-5">
                  <Icon size={18} className="text-[#3B82F6]" />
                </div>
                <h3 className="text-base font-semibold text-white mb-4">{pillar.title}</h3>
                <ul className="space-y-2">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#A8BFCC]">
                      <span className="text-[#3B82F6] mt-0.5 flex-shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Learn More About Our Security Approach</h2>
          <p className="text-[#A8BFCC] mb-8 max-w-lg mx-auto">
            Request a technical review to discuss security architecture, data handling practices, and compliance considerations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-colors"
            >
              Schedule a Technical Review
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 hover:border-white/40 rounded-xl transition-all"
            >
              Contact the Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
