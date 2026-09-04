import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Code2, Shield, Network, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Developer Documentation',
  description:
    'Datacules HealthData 97 developer documentation — API reference, integration guides, authentication, and platform architecture.',
};

const sections = [
  {
    icon: Code2,
    title: 'REST API Reference',
    description: '354+ endpoints across all 23 platform modules. Full OpenAPI / Swagger documentation with request/response schemas.',
    badge: '354+ Endpoints',
  },
  {
    icon: Network,
    title: 'HL7 FHIR Integration',
    description: 'HL7 FHIR R4 compatible data exchange for EHR interoperability, clinical data sharing, and health network connectivity.',
    badge: 'FHIR R4',
  },
  {
    icon: Shield,
    title: 'Authentication & Security',
    description: 'OAuth 2.0 and JWT authentication, role-based access control, PHI access controls, and rate limiting on every endpoint.',
    badge: 'OAuth 2.0 / JWT',
  },
  {
    icon: BookOpen,
    title: 'Platform Architecture',
    description: 'Overview of the platform data model, module architecture, integration protocols, and governance framework.',
    badge: 'Architecture Guide',
  },
];

export default function DocsPage() {
  return (
    <main className="bg-[#0D2137] min-h-screen">
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="section-eyebrow mb-5">Developer Documentation</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Build on Datacules HealthData 97
          </h1>
          <p className="text-xl text-[#A8BFCC] leading-relaxed">
            Comprehensive developer resources for the Datacules HealthData 97 REST API, HL7 FHIR integration, authentication, and platform architecture.
          </p>
        </div>

        {/* Coming soon state */}
        <div className="rounded-2xl border border-[#3B82F6]/20 bg-[#3B82F6]/[0.04] p-8 mb-14 max-w-2xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/20 flex items-center justify-center flex-shrink-0">
              <BookOpen size={18} className="text-[#3B82F6]" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-white mb-2">Documentation Coming Soon</h2>
              <p className="text-sm text-[#A8BFCC] leading-relaxed mb-4">
                Full developer documentation is under active development. Request early access or contact our team to discuss API integration requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-colors"
                >
                  Request API Access
                  <ExternalLink size={13} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#A8BFCC] hover:text-white border border-white/15 hover:border-white/30 rounded-xl transition-all"
                >
                  Contact the Team
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Doc sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {sections.map((sec) => {
            const Icon = sec.icon;
            return (
              <div key={sec.title} className="card-base p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/15 flex items-center justify-center">
                    <Icon size={18} className="text-[#3B82F6]" />
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-[#3B82F6] bg-[#3B82F6]/10 px-2 py-1 rounded-full">
                    {sec.badge}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{sec.title}</h3>
                <p className="text-sm text-[#A8BFCC] leading-relaxed">{sec.description}</p>
              </div>
            );
          })}
        </div>

        {/* API preview */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-white mb-6">API Quick Reference</h2>
          <div
            className="rounded-2xl border border-white/[0.07] overflow-hidden"
            style={{ background: '#0A1628' }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
              <span className="ml-3 text-xs text-[#4A6080] font-mono">REST API — Base URL</span>
            </div>
            <div className="code-surface p-5 text-xs overflow-x-auto">
              <div className="text-[#4A6080] mb-2"># Patient endpoints</div>
              <div className="text-[#A8BFCC]">GET  <span className="text-[#3B82F6]">/api/v1/patients</span></div>
              <div className="text-[#A8BFCC]">GET  <span className="text-[#3B82F6]">/api/v1/patients/{'{id}'}</span></div>
              <div className="text-[#A8BFCC]">GET  <span className="text-[#3B82F6]">/api/v1/patients/{'{id}'}/risk-scores</span></div>
              <div className="text-[#A8BFCC]">GET  <span className="text-[#3B82F6]">/api/v1/patients/{'{id}'}/encounters</span></div>
              <div className="mt-3 text-[#4A6080]"># AI Intelligence endpoints</div>
              <div className="text-[#A8BFCC]">GET  <span className="text-[#60A5FA]">/api/v1/ai/readmission-risk</span></div>
              <div className="text-[#A8BFCC]">GET  <span className="text-[#60A5FA]">/api/v1/ai/denial-prediction</span></div>
              <div className="text-[#A8BFCC]">GET  <span className="text-[#60A5FA]">/api/v1/ai/vitals-anomaly</span></div>
              <div className="mt-3 text-[#4A6080]"># ... 354+ total endpoints across 23 modules</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
