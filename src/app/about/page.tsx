import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Brain, Database, BarChart2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Datacules LLC',
  description:
    'Datacules LLC develops enterprise healthcare data technology. Learn about our approach to healthcare data management, governance, and AI-driven intelligence.',
};

const pillars = [
  {
    icon: Database,
    title: 'Data-First Architecture',
    description:
      'Healthcare data is the foundation of every capability we build. We designed Datacules HealthData 97 around a unified patient record that aggregates clinical, financial, and operational data from every connected source.',
  },
  {
    icon: Shield,
    title: 'Governance by Design',
    description:
      'Security, access control, audit, and privacy controls are part of the platform architecture — not add-ons. Every data access event is logged, every permission is role-scoped, every PHI field is protected.',
  },
  {
    icon: Brain,
    title: 'AI as an Intelligence Layer',
    description:
      'Our AI capabilities are connected directly to the underlying data platform — not separate tools. Predictive models for readmission risk, denial prediction, and vitals anomaly detection are integrated into the same data environment your teams use daily.',
  },
  {
    icon: BarChart2,
    title: 'Enterprise-Grade Infrastructure',
    description:
      'Datacules HealthData 97 is built for enterprise healthcare systems — with 354+ API endpoints, 23 integrated modules, and a governance framework designed for complex organizational structures.',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0D2137] min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="section-eyebrow mb-5">About Datacules LLC</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-7 leading-tight">
            Building Enterprise Healthcare Data Infrastructure
          </h1>
          <p className="text-xl text-[#A8BFCC] leading-relaxed">
            Datacules LLC develops enterprise healthcare data technology. Datacules HealthData 97 is our flagship platform — purpose-built to unify, govern, analyze, and operationalize healthcare data across complex organizational environments.
          </p>
        </div>
      </section>

      {/* What we build */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                What We Build
              </h2>
              <p className="text-[#A8BFCC] mb-5 leading-relaxed">
                Healthcare data is fragmented across clinical systems, billing platforms, lab information systems, telehealth tools, pharmacy systems, and IoT devices. Each system holds a piece of the patient record — but none of them talk to each other.
              </p>
              <p className="text-[#A8BFCC] mb-5 leading-relaxed">
                Datacules HealthData 97 is designed to solve that problem. It connects those data sources, normalizes and validates the data, applies governance and access controls, and surfaces it through analytics, AI-driven intelligence, and a comprehensive API.
              </p>
              <p className="text-[#A8BFCC] leading-relaxed">
                The result is a single, governed healthcare data environment that clinical teams, data engineers, financial operations teams, and executives can all rely on.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card-base p-5 text-center">
                <div className="text-3xl font-bold text-white mb-1">354+</div>
                <div className="text-xs text-[#A8BFCC]">REST API Endpoints</div>
              </div>
              <div className="card-base p-5 text-center">
                <div className="text-3xl font-bold text-white mb-1">23</div>
                <div className="text-xs text-[#A8BFCC]">Integrated Modules</div>
              </div>
              <div className="card-base p-5 text-center">
                <div className="text-3xl font-bold text-white mb-1">240+</div>
                <div className="text-xs text-[#A8BFCC]">Database Tables</div>
              </div>
              <div className="card-base p-5 text-center">
                <div className="text-3xl font-bold text-white mb-1">PHI</div>
                <div className="text-xs text-[#A8BFCC]">Encrypted at Rest &amp; Transit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="py-20 border-t border-white/[0.06] bg-[#112744]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 max-w-2xl">
            Our Approach to Healthcare Data
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="card-base p-7">
                  <div className="w-11 h-11 rounded-xl bg-[#3B82F6]/15 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#3B82F6]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-[#A8BFCC] leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">See Datacules HealthData 97 in Action</h2>
          <p className="text-[#A8BFCC] mb-8 max-w-xl mx-auto">
            Request a demo to explore how the platform handles your healthcare data environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-colors"
            >
              Request a Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 hover:border-white/40 rounded-xl transition-all"
            >
              Contact Datacules
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
