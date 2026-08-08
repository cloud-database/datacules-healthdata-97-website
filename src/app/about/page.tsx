import type { Metadata } from 'next';
import { Cta } from '@/components/cta';
import { BRAND } from '@/lib/brand';

export const metadata: Metadata = {
  title: `About | ${BRAND.name}`,
  description: `About ${BRAND.name} — ${BRAND.tagline}`,
};

export default function AboutPage() {
  return (
    <div className="bg-gray-950 min-h-screen pt-24">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 border border-white/10 bg-white/5 text-gray-400">
            Our Story
          </div>
          <h1 className="text-5xl font-black text-white mb-6">
            About <span className="gradient-text">{BRAND.name}</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">{BRAND.description}</p>
        </div>

        {/* Tagline callout */}
        <div
          className="rounded-2xl p-8 mb-14 border border-white/10"
          style={{ background: `rgba(var(--brand-primary-rgb), 0.08)` }}
        >
          <p className="text-2xl font-bold text-white leading-snug">
            &ldquo;{BRAND.tagline}&rdquo;
          </p>
        </div>

        {/* Value props */}
        <h2 className="text-2xl font-black text-white mb-8">Why {BRAND.name}?</h2>
        <div className="space-y-5 mb-14">
          
          <div key={0} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-bold text-white mb-2">Enterprise-Wide Data Unification</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Connect EHR, billing, telehealth, labs, prescriptions, and IoT into 23 integrated modules via 354+ API endpoints.</p>
          </div>
          <div key={1} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-bold text-white mb-2">AI That Works When It Matters</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Dual AI architecture delivers readmission risk, denial prediction, and vitals anomaly detection with statistical fallback coverage.</p>
          </div>
          <div key={2} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-bold text-white mb-2">Compliance Built Into the Foundation</h3>
            <p className="text-gray-500 text-sm leading-relaxed">HIPAA and GDPR controls, PHI encryption, configurable audit log retention, and dedicated compliance tables — by design, not as an add-on.</p>
          </div>
        </div>

        {/* Company card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-bold text-white mb-3">Built by {BRAND.company.name}</h3>
          <p className="text-gray-500 text-sm mb-4">
            {BRAND.name} is designed and maintained by {BRAND.company.name} — {BRAND.company.tagline}.
          </p>
          <a
            href={BRAND.company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: `var(--brand-primary)` }}
          >
            Visit {BRAND.company.name} →
          </a>
        </div>

        {/* Auth CTA */}
        <div className="mt-10 text-center">
          <a
            href={BRAND.auth.register}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 glow-primary"
            style={{ background: `linear-gradient(135deg, var(--brand-primary), var(--brand-accent))` }}
          >
            {BRAND.messaging.cta} →
          </a>
          <p className="text-gray-600 text-sm mt-3">
            Already have an account?{' '}
            <a href={BRAND.auth.login} className="hover:text-white transition-colors" style={{ color: `var(--brand-primary)` }}>Log in</a>
          </p>
        </div>
      </div>
      <Cta />
    </div>
  );
}
