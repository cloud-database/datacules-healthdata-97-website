import type { Metadata } from 'next';
// NOTE: dashboard/ marker — do not overwrite with generated content
import { BRAND } from '@/lib/brand';

export const metadata: Metadata = {
  title: `Dashboard | ${BRAND.name}`,
  description: `Your ${BRAND.name} dashboard`,
};

// TODO: Protect this route with your auth provider (middleware.ts or a session check)
export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-950 pt-24">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-white mb-2">Dashboard</h1>
          <p className="text-gray-500">Welcome back. Here&apos;s your {BRAND.name} overview.</p>
        </div>

        {/* Product access card */}
        <div
          className="rounded-3xl p-8 mb-8 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, var(--brand-primary), var(--brand-accent))` }}
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-black text-white mb-2">Access {BRAND.name}</h2>
              <p className="text-white/80 text-sm max-w-md">
                {BRAND.tagline}
              </p>
            </div>
            <a
              href="#"
              className="flex-shrink-0 px-6 py-3 rounded-xl bg-white font-bold text-sm transition-all hover:scale-105 active:scale-95"
              style={{ color: 'var(--brand-primary)' }}
            >
              Open {BRAND.name} →
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <a href={BRAND.auth.login} className="group rounded-2xl border border-white/10 bg-white/5 p-6 card-hover block">
            <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center" style={{ background: 'rgba(var(--brand-primary-rgb), 0.15)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-white font-bold mb-1">Documentation</h3>
            <p className="text-gray-500 text-sm">Browse all guides and API references.</p>
          </a>
          <a href="#" className="group rounded-2xl border border-white/10 bg-white/5 p-6 card-hover block">
            <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center" style={{ background: 'rgba(var(--brand-primary-rgb), 0.15)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="var(--brand-primary)"/>
              </svg>
            </div>
            <h3 className="text-white font-bold mb-1">Subscription</h3>
            <p className="text-gray-500 text-sm">Manage your plan and billing.</p>
          </a>
          <a href="#" className="group rounded-2xl border border-white/10 bg-white/5 p-6 card-hover block">
            <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center" style={{ background: 'rgba(var(--brand-primary-rgb), 0.15)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="var(--brand-primary)" strokeWidth="2"/>
                <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-white font-bold mb-1">Account Settings</h3>
            <p className="text-gray-500 text-sm">Update your profile and preferences.</p>
          </a>
        </div>
      </div>
    </div>
  );
}
