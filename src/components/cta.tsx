'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export function Cta() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.2 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="demo"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-[#0D2137] relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
        <div className="section-eyebrow justify-center mb-6">Get Started</div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Explore{' '}
          <span className="text-accent-gradient">Datacules HealthData 97?</span>
        </h2>
        <p className="text-lg text-[#A8BFCC] mb-10 max-w-2xl mx-auto leading-relaxed">
          See how Datacules HealthData 97 consolidates your clinical, financial, and operational data into one intelligent platform — designed for enterprise healthcare organizations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {/* Primary CTA with pulse ring */}
          <div className="relative inline-flex">
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                border: '2px solid rgba(59,130,246,0.4)',
                animation: 'pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
              }}
              aria-hidden="true"
            />
            <Link
              href="/demo"
              className="relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-all duration-200 min-w-[220px]"
            >
              Request a Demo
            </Link>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-xl transition-all duration-200"
          >
            Talk to the Team
          </Link>
        </div>

        <p className="text-xs text-[#4A6080] tracking-wide">
          Designed for healthcare security and compliance requirements &nbsp;·&nbsp; Datacules LLC
        </p>
      </div>
    </section>
  );
}
