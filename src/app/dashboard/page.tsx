import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutDashboard, BookOpen, Settings, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dashboard | Datacules HealthData 97',
  description: 'Your Datacules HealthData 97 dashboard overview.',
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#06487A] pt-24">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="section-eyebrow mb-4">Dashboard</div>
          <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-[#A8BFCC]">Your Datacules HealthData 97 overview.</p>
        </div>

        {/* Product access card */}
        <div
          className="rounded-2xl p-8 mb-8 relative overflow-hidden border border-[#3B82F6]/20"
          style={{ background: 'linear-gradient(135deg, #06487A 0%, #0B5A94 100%)' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(59,130,246,0.12) 0%, transparent 70%)' }} />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <Image src="/331x89.png" alt="Datacules HealthData 97" width={150} height={40} className="object-contain mb-4" />
              <p className="text-[#A8BFCC] text-sm max-w-md">
                Enterprise healthcare data management, analytics, and AI intelligence — unified in one platform.
              </p>
            </div>
            <Link
              href="/"
              className="flex-shrink-0 px-6 py-3 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-sm transition-colors"
            >
              Explore the Platform →
            </Link>
          </div>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { href: '/docs', icon: BookOpen, title: 'Documentation', desc: 'API reference and integration guides.' },
            { href: '/security', icon: Shield, title: 'Security Overview', desc: 'Platform security and compliance architecture.' },
            { href: '/contact', icon: Settings, title: 'Account & Support', desc: 'Contact the Datacules team for assistance.' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.title} href={item.href} className="card-base p-6 block">
                <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/15 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#3B82F6]" />
                </div>
                <h3 className="text-white font-semibold mb-1 text-sm">{item.title}</h3>
                <p className="text-[#A8BFCC] text-xs">{item.desc}</p>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <div className="flex items-center gap-2">
            <LayoutDashboard size={14} className="text-[#4A6080]" />
            <p className="text-xs text-[#4A6080]">
              Datacules HealthData 97 · © 2026 Datacules LLC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
