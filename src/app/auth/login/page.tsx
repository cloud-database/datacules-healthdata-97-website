import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Log In | Datacules HealthData 97',
  description: 'Log in to your Datacules HealthData 97 account.',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#06487A] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="text-center mb-10">
          <Link href="/" aria-label="Datacules HealthData 97 — Home">
            <Image
              src="/331x89.png"
              alt="Datacules HealthData 97"
              width={180}
              height={48}
              className="object-contain mx-auto"
            />
          </Link>
          <p className="text-[#A8BFCC] text-sm mt-4">Welcome back — log in to your account</p>
        </div>

        {/* Card */}
        <div className="card-base p-8">
          <h1 className="text-2xl font-bold text-white mb-8">Log in</h1>
          <form className="space-y-5" noValidate>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-[#A8BFCC] mb-1.5">
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@organization.com"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.09] text-white placeholder-[#4A6080] focus:outline-none focus:border-[#3B82F6]/50 transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs font-medium text-[#A8BFCC] mb-1.5">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.09] text-white placeholder-[#4A6080] focus:outline-none focus:border-[#3B82F6]/50 transition-colors text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-white font-semibold text-sm bg-[#3B82F6] hover:bg-[#2563EB] transition-colors"
            >
              Log in
            </button>
          </form>
          <div className="mt-8 pt-6 border-t border-white/[0.06] text-center">
            <p className="text-[#A8BFCC] text-sm">
              Need access?{' '}
              <Link href="/demo" className="font-semibold text-[#3B82F6] hover:text-[#60A5FA] transition-colors">
                Request a Demo →
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-[#4A6080] text-xs mt-6">
          By continuing, you agree to Datacules LLC&apos;s{' '}
          <Link href="/terms" className="hover:text-[#A8BFCC] transition-colors">Terms of Use</Link>
          {' '}and{' '}
          <Link href="/privacy" className="hover:text-[#A8BFCC] transition-colors">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
