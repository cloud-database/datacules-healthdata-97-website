'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Shield } from 'lucide-react';

const roles = [
  'Healthcare Executive / Leadership',
  'Clinical Operations',
  'Data Engineering / Analytics',
  'Revenue Cycle / Finance',
  'IT / Security',
  'Population Health',
  'Other',
];

const sizes = [
  'Under 100 beds',
  '100–500 beds',
  '500–1,000 beds',
  '1,000+ beds / Health System',
  'Healthcare Technology Company',
  'Other',
];

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#0D2137] min-h-screen">
      <section className="pt-40 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="section-eyebrow mb-5">Request a Demo</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              See Datacules HealthData 97 in Action
            </h1>
            <p className="text-xl text-[#A8BFCC] mb-8 leading-relaxed">
              Request a personalized demo to explore how Datacules HealthData 97 handles your specific healthcare data workflows.
            </p>
            <div className="space-y-4 mb-8">
              {[
                'Platform walkthrough tailored to your use case',
                'Data integration and API overview',
                'Security and governance architecture review',
                'AI and analytics capability demonstration',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#3B82F6] flex-shrink-0" />
                  <span className="text-sm text-[#A8BFCC]">{item}</span>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/[0.04]">
              <Shield size={12} className="text-[#3B82F6]" />
              <span className="text-[11px] font-medium text-[#A8BFCC]">Designed for healthcare security and compliance requirements</span>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div className="card-base p-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#3B82F6]/15 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={28} className="text-[#3B82F6]" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-3">Demo Request Received</h2>
                <p className="text-[#A8BFCC] text-sm leading-relaxed mb-6">
                  Thank you for your interest in Datacules HealthData 97. A member of our team will be in touch within one business day to schedule your personalized demo.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border border-white/20 hover:border-white/40 rounded-xl transition-all"
                >
                  Explore the Platform
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-base p-8 space-y-5" noValidate>
                <h2 className="text-lg font-semibold text-white mb-2">Demo Request</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-[#A8BFCC] mb-1.5">
                      Contact Name
                    </label>
                    <input
                      id="contact-name"
                      name="contactName"
                      type="text"
                      required
                      className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A6080] focus:outline-none focus:border-[#3B82F6]/50 focus:bg-white/[0.06] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="demo-email" className="block text-xs font-medium text-[#A8BFCC] mb-1.5">
                      Work Email
                    </label>
                    <input
                      id="demo-email"
                      name="email"
                      type="email"
                      required
                      className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A6080] focus:outline-none focus:border-[#3B82F6]/50 focus:bg-white/[0.06] transition-colors"
                      placeholder="you@organization.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="org-name" className="block text-xs font-medium text-[#A8BFCC] mb-1.5">
                    Organization Name
                  </label>
                  <input
                    id="org-name"
                    name="organizationName"
                    type="text"
                    required
                    className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A6080] focus:outline-none focus:border-[#3B82F6]/50 focus:bg-white/[0.06] transition-colors"
                    placeholder="Your organization"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="role" className="block text-xs font-medium text-[#A8BFCC] mb-1.5">
                      Your Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      className="w-full bg-[#0D2137] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3B82F6]/50 transition-colors"
                    >
                      <option value="" disabled>Select role</option>
                      {roles.map((r) => (
                        <option key={r} value={r} className="bg-[#0D2137]">{r}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="org-size" className="block text-xs font-medium text-[#A8BFCC] mb-1.5">
                      Organization Size
                    </label>
                    <select
                      id="org-size"
                      name="organizationSize"
                      className="w-full bg-[#0D2137] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3B82F6]/50 transition-colors"
                    >
                      <option value="" disabled>Select size</option>
                      {sizes.map((s) => (
                        <option key={s} value={s} className="bg-[#0D2137]">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-4 text-base font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-colors"
                >
                  Request My Demo
                </button>
                <p className="text-xs text-[#4A6080] text-center">
                  By submitting, you agree to our{' '}
                  <Link href="/privacy" className="text-[#3B82F6] hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
