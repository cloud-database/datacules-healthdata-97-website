import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Request Access | Datacules HealthData 97',
  description: 'Request access to Datacules HealthData 97.',
};

export default function RegisterPage() {
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
          <p className="text-[#A8BFCC] text-sm mt-4">Request access to the platform</p>
        </div>

        {/* Card */}
        <div className="card-base p-8">
          <h1 className="text-2xl font-bold text-white mb-2">Request Access</h1>
          <p className="text-[#A8BFCC] text-sm mb-8">
            Datacules HealthData 97 is provisioned for enterprise healthcare organizations.{' '}
            <Link href="/demo" className="text-[#3B82F6] hover:text-[#60A5FA] transition-colors">Request a demo</Link> to get started.
          </p>
          <form className="space-y-5" noValidate>
            <div>
              <label htmlFor="reg-name" className="block text-xs font-medium text-[#A8BFCC] mb-1.5">
                Full name
              </label>
              <input
                id="reg-name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.09] text-white placeholder-[#4A6080] focus:outline-none focus:border-[#3B82F6]/50 transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="reg-email" className="block text-xs font-medium text-[#A8BFCC] mb-1.5">
                Work email
              </label>
              <input
                id="reg-email"
                type="email"
                autoComplete="email"
                placeholder="you@organization.com"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.09] text-white placeholder-[#4A6080] focus:outline-none focus:border-[#3B82F6]/50 transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="reg-org" className="block text-xs font-medium text-[#A8BFCC] mb-1.5">
                Organization
              </label>
              <input
                id="reg-org"
                type="text"
                placeholder="Your organization"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.09] text-white placeholder-[#4A6080] focus:outline-none focus:border-[#3B82F6]/50 transition-colors text-sm"
              />
            </div>
            <Link
              href="/demo"
              className="block w-full py-3.5 rounded-xl text-center text-white font-semibold text-sm bg-[#3B82F6] hover:bg-[#2563EB] transition-colors"
            >
              Request a Demo
            </Link>
          </form>
          <div className="mt-8 pt-6 border-t border-white/[0.06] text-center">
            <p className="text-[#A8BFCC] text-sm">
              Already have access?{' '}
              <Link href="/auth/login" className="font-semibold text-[#3B82F6] hover:text-[#60A5FA] transition-colors">
                Log in →
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
