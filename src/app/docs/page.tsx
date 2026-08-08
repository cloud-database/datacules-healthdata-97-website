import type { Metadata } from 'next';
import { BRAND } from '@/lib/brand';

export const metadata: Metadata = {
  title: `Documentation | ${BRAND.name}`,
  description: `Full documentation for ${BRAND.name}`,
};

export default function DocsPage() {
  return (
    <div className="bg-gray-950 min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 border border-white/10 bg-white/5 text-gray-400">
            Documentation
          </div>
          <h1 className="text-5xl font-black text-white mb-4">
            {BRAND.name} <span className="gradient-text">Docs</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">{BRAND.messaging.subheadline}</p>

          {/* Docs gate — account required */}
          <div
            className="rounded-2xl border border-white/10 p-8 text-left"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(var(--brand-primary-rgb), 0.15)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="var(--brand-primary)" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">Sign in to access documentation</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Developer documentation, API reference, and integration guides are available to registered users.
                  Create your free account to get instant access.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={BRAND.auth.register}
                    className="px-6 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90"
                    style={{ background: `linear-gradient(135deg, var(--brand-primary), var(--brand-accent))` }}
                  >
                    Create free account →
                  </a>
                  <a
                    href={BRAND.auth.login}
                    className="px-6 py-2.5 rounded-xl border border-white/20 text-gray-300 text-sm font-semibold hover:bg-white/10 transition-all"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Public doc previews — teaser only */}
        <h2 className="text-xl font-bold text-white mb-5 mt-10">What&apos;s inside</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 opacity-60 pointer-events-none select-none">
          
        <a
          href="#"
          className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all block"
        >
          <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-colors">
            Getting Started
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">Install and set up Datacules-HealthData-97 in minutes. No complex configuration required.</p>
          <span className="inline-block mt-4 text-sm font-semibold" style={{ color: 'var(--brand-primary)' }}>
            Read more →
          </span>
        </a>
        <a
          href="#"
          className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all block"
        >
          <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-colors">
            Core Concepts
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">Understand how Datacules-HealthData-97 works under the hood and the key abstractions it uses.</p>
          <span className="inline-block mt-4 text-sm font-semibold" style={{ color: 'var(--brand-primary)' }}>
            Read more →
          </span>
        </a>
        <a
          href="#"
          className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all block"
        >
          <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-colors">
            Configuration
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">Customize Datacules-HealthData-97 for your specific workflow and environment.</p>
          <span className="inline-block mt-4 text-sm font-semibold" style={{ color: 'var(--brand-primary)' }}>
            Read more →
          </span>
        </a>
        <a
          href="#"
          className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all block"
        >
          <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-colors">
            API Reference
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">Full REST API documentation with request/response schemas and authentication guides.</p>
          <span className="inline-block mt-4 text-sm font-semibold" style={{ color: 'var(--brand-primary)' }}>
            Read more →
          </span>
        </a>
        <a
          href="#"
          className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all block"
        >
          <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-colors">
            Integrations
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">Connect Datacules-HealthData-97 to your existing tools — Express, React and more.</p>
          <span className="inline-block mt-4 text-sm font-semibold" style={{ color: 'var(--brand-primary)' }}>
            Read more →
          </span>
        </a>
        <a
          href="#"
          className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all block"
        >
          <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-colors">
            FAQ
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">Common questions and troubleshooting guides for Datacules-HealthData-97.</p>
          <span className="inline-block mt-4 text-sm font-semibold" style={{ color: 'var(--brand-primary)' }}>
            Read more →
          </span>
        </a>
        </div>
        <p className="text-center text-gray-600 text-sm mt-6">
          <a href={BRAND.auth.register} className="hover:text-white transition-colors pointer-events-auto" style={{ color: 'var(--brand-primary)' }}>
            Sign up free
          </a>{' '}to unlock full access to all documentation sections.
        </p>
      </div>
    </div>
  );
}
