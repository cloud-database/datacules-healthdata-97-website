import type { Metadata } from 'next';
import { BRAND } from '@/lib/brand';

export const metadata: Metadata = {
  title: `Log In | ${BRAND.name}`,
  description: `Log in to your ${BRAND.name} account`,
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="text-center mb-10">
          <a href="/" className="text-3xl font-black gradient-text">{BRAND.name}</a>
          <p className="text-gray-500 text-sm mt-2">Welcome back — log in to your account</p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h1 className="text-2xl font-black text-white mb-8">Log in</h1>

          {/* Auth form placeholder — wire up your provider (Supabase, Clerk, NextAuth, etc.) */}
          <form className="space-y-5">
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
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div className="flex justify-end">
              <a href="/auth/forgot-password" className="text-xs text-gray-500 hover:text-white transition-colors">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-white font-bold text-base transition-all hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]"
              style={{ background: `linear-gradient(135deg, var(--brand-primary), var(--brand-accent))` }}
            >
              Log in
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-500 text-sm">
              Don&apos;t have an account?{' '}
              <a href={BRAND.auth.register} className="font-semibold hover:text-white transition-colors" style={{ color: 'var(--brand-primary)' }}>
                Sign up free →
              </a>
            </p>
          </div>
        </div>

        <p className="text-center text-gray-700 text-xs mt-6">
          By continuing, you agree to {BRAND.company.name}&apos;s Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
