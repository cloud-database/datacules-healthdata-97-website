'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { CheckCircle2, ExternalLink } from 'lucide-react';

const capabilities = [
  '354+ RESTful endpoints across all 23 platform modules',
  'HL7 FHIR R4 compliant data exchange',
  'OAuth 2.0 and JWT authentication with role-based access control',
  'MQTT protocol support for real-time IoT vitals streaming',
  'SFTP integration for batch lab and billing data workflows',
  'Comprehensive Swagger / OpenAPI documentation',
  'Webhook support for real-time event-driven integrations',
  'Rate limiting, audit logging, and PHI access controls on every endpoint',
];

export function ApiSection() {
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
      id="architecture"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#043A62]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 animate-on-scroll">
          <div className="section-eyebrow mb-4">REST API & Technical Architecture</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Built for{' '}
            <span className="text-accent-gradient">Technical Teams</span>
          </h2>
          <p className="text-lg text-[#A8BFCC]">
            A comprehensive REST API covering every clinical, financial, and operational data domain — with HL7 FHIR compatibility, enterprise authentication, and developer-ready documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Capabilities list */}
          <div className="animate-on-scroll">
            <h3 className="text-xl font-semibold text-white mb-6">API Capabilities</h3>
            <ul className="space-y-3">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#3B82F6] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#A8BFCC] leading-relaxed">{cap}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-colors"
              >
                Developer Documentation
                <ExternalLink size={14} />
              </Link>
              <Link
                href="/#platform"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#A8BFCC] hover:text-white border border-white/15 hover:border-white/30 rounded-xl transition-all"
              >
                Explore the Architecture
              </Link>
            </div>
          </div>

          {/* Code block */}
          <div
            className="animate-on-scroll stagger-2 rounded-2xl overflow-hidden border border-white/[0.07]"
            style={{ background: '#043E68' }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07]">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
              <span className="ml-3 text-xs text-[#4A6080] font-mono">GET /api/v1/patients/{'{id}'}/risk-scores</span>
            </div>
            {/* Code content */}
            <div className="code-surface p-5 text-[12px] overflow-x-auto">
              <pre className="whitespace-pre">
{/* eslint-disable-next-line react/no-unescaped-entities */}
<span style={{ color: '#4A6080' }}>{'// Response — Patient Risk Intelligence'}</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'{'}</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'  '}</span><span style={{ color: '#60A5FA' }}>&quot;patient_id&quot;</span><span style={{ color: '#ffffff' }}>:</span> <span style={{ color: '#3B82F6' }}>&quot;pt_8a3f92c1&quot;</span><span style={{ color: '#A8BFCC' }}>,</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'  '}</span><span style={{ color: '#60A5FA' }}>&quot;risk_scores&quot;</span><span style={{ color: '#ffffff' }}>:</span> <span style={{ color: '#A8BFCC' }}>{'{'}</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'    '}</span><span style={{ color: '#60A5FA' }}>&quot;readmission_30d&quot;</span><span style={{ color: '#ffffff' }}>:</span> <span style={{ color: '#A8BFCC' }}>{'{'}</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'      '}</span><span style={{ color: '#60A5FA' }}>&quot;score&quot;</span><span style={{ color: '#ffffff' }}>:</span> <span style={{ color: '#3B82F6' }}>0.847</span><span style={{ color: '#A8BFCC' }}>,</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'      '}</span><span style={{ color: '#60A5FA' }}>&quot;tier&quot;</span><span style={{ color: '#ffffff' }}>:</span> <span style={{ color: '#3B82F6' }}>&quot;HIGH&quot;</span><span style={{ color: '#A8BFCC' }}>,</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'      '}</span><span style={{ color: '#60A5FA' }}>&quot;confidence&quot;</span><span style={{ color: '#ffffff' }}>:</span> <span style={{ color: '#3B82F6' }}>0.923</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'    }'}</span><span style={{ color: '#A8BFCC' }}>,</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'    '}</span><span style={{ color: '#60A5FA' }}>&quot;billing_denial&quot;</span><span style={{ color: '#ffffff' }}>:</span> <span style={{ color: '#A8BFCC' }}>{'{'}</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'      '}</span><span style={{ color: '#60A5FA' }}>&quot;score&quot;</span><span style={{ color: '#ffffff' }}>:</span> <span style={{ color: '#3B82F6' }}>0.312</span><span style={{ color: '#A8BFCC' }}>,</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'      '}</span><span style={{ color: '#60A5FA' }}>&quot;tier&quot;</span><span style={{ color: '#ffffff' }}>:</span> <span style={{ color: '#3B82F6' }}>&quot;LOW&quot;</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'    }'}</span><span style={{ color: '#A8BFCC' }}>,</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'    '}</span><span style={{ color: '#60A5FA' }}>&quot;vitals_anomaly&quot;</span><span style={{ color: '#ffffff' }}>:</span> <span style={{ color: '#A8BFCC' }}>{'{'}</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'      '}</span><span style={{ color: '#60A5FA' }}>&quot;detected&quot;</span><span style={{ color: '#ffffff' }}>:</span> <span style={{ color: '#60A5FA' }}>false</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'    }'}</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'  }'}</span><span style={{ color: '#A8BFCC' }}>,</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'  '}</span><span style={{ color: '#60A5FA' }}>&quot;model_version&quot;</span><span style={{ color: '#ffffff' }}>:</span> <span style={{ color: '#3B82F6' }}>&quot;v3.2.1&quot;</span><span style={{ color: '#A8BFCC' }}>,</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'  '}</span><span style={{ color: '#60A5FA' }}>&quot;generated_at&quot;</span><span style={{ color: '#ffffff' }}>:</span> <span style={{ color: '#3B82F6' }}>&quot;2024-01-15T14:32:07Z&quot;</span>{'\n'}
<span style={{ color: '#A8BFCC' }}>{'}'}</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
