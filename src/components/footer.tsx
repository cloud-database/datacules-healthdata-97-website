'use client';

import Link from 'next/link';
import { Shield } from 'lucide-react';

const footerLinks = {
  product: {
    label: 'Product',
    links: [
      { label: 'Platform Overview', href: '/#platform' },
      { label: 'AI Intelligence', href: '/#ai' },
      { label: '23 Integrated Modules', href: '/#modules' },
      { label: 'REST API', href: '/#architecture' },
      { label: 'Security & Governance', href: '/#security' },
    ],
  },
  solutions: {
    label: 'Solutions',
    links: [
      { label: 'Care Management', href: '/#use-cases' },
      { label: 'Population Health', href: '/#use-cases' },
      { label: 'Revenue Cycle', href: '/#use-cases' },
      { label: 'Clinical Operations', href: '/#use-cases' },
      { label: 'Data Engineering', href: '/#use-cases' },
    ],
  },
  company: {
    label: 'Company',
    links: [
      { label: 'About Datacules', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Contact', href: '/contact' },
      { label: 'Request a Demo', href: '/demo' },
    ],
  },
  legal: {
    label: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Security Overview', href: '/security' },
    ],
  },
};

export function Footer() {
  return (
    <footer
      className="relative border-t border-white/[0.06] overflow-hidden"
      style={{ background: '#043A62' }}
    >
      {/* ECG waveform */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '60px', opacity: 0.04 }}
      >
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full" fill="none">
          <path
            d="M0,30 L200,30 L220,30 L230,8 L240,52 L245,3 L250,57 L255,30 L280,30 L400,30 L420,30 L430,12 L440,48 L445,5 L450,55 L455,30 L480,30 L600,30 L620,30 L630,10 L640,50 L645,4 L650,56 L655,30 L680,30 L800,30 L820,30 L830,14 L840,46 L845,6 L850,54 L855,30 L880,30 L1000,30 L1020,30 L1030,9 L1040,51 L1045,3 L1050,57 L1055,30 L1080,30 L1200,30 L1220,30 L1230,11 L1240,49 L1245,4 L1250,56 L1255,30 L1280,30 L1440,30"
            stroke="#3B82F6"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5" aria-label="Datacules HealthData 97 — Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt="Datacules HealthData 97"
                width={220}
                height={55}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-[#A8BFCC] leading-relaxed mb-5">
              Enterprise healthcare data management, analytics, and AI intelligence — unified in one platform.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/05">
              <Shield size={12} className="text-[#3B82F6]" />
              <span className="text-[10px] font-semibold text-[#A8BFCC] tracking-wider uppercase">HIPAA-Aligned Platform</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((col) => (
            <div key={col.label}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-[#4A6080] mb-5">
                {col.label}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#A8BFCC] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#4A6080] text-center sm:text-left">
              © 2026 Datacules LLC. All rights reserved.{' '}
              Datacules HealthData 97 is a product developed by Datacules LLC.
            </p>
            <p className="text-xs text-[#4A6080]">
              Designed with healthcare security and compliance requirements in mind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
