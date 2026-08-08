import type { Metadata } from 'next';
import { BRAND } from '@/lib/brand';

export const metadata: Metadata = {
  title: `Create Account | ${BRAND.name}`,
  description: `Create your free ${BRAND.name} account`,
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="text-center mb-10">
          <a href="/" className="text-3xl font-black gradient-text">{BRAND.name}</a>
          <p className="text-gray-500 text-sm mt-2">Create your free account and get started in minutes</p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h1 className="text-2xl font-black text-white mb-2">Create account</h1>
          <p className="text-gray-500 text-sm mb-8">No credit card required.</p>

          {/* Auth form placeholder — wire up your provider */}
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full name</label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Jane Smith"
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email address</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">Password</label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="Min. 8 characters"
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-white font-bold text-base transition-all hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]"
              style={{ background: `linear-gradient(135deg, var(--brand-primary), var(--brand-accent))` }}
            >
              {BRAND.messaging.cta}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-500 text-sm">
              Already have an account?{' '}
              <a href={BRAND.auth.login} className="font-semibold hover:text-white transition-colors" style={{ color: 'var(--brand-primary)' }}>
                Log in →
              </a>
            </p>
          </div>
        </div>

        <p className="text-center text-gray-700 text-xs mt-6">
          By signing up, you agree to {BRAND.company.name}&apos;s Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
