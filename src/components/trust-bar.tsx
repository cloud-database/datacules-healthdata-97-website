'use client'

import { useRef } from 'react'
import Image from 'next/image'

const PARTNER_LOGOS = [
  { name: 'Epic Systems', src: '/logos/epic.png', fallback: 'Epic Systems' },
  { name: 'Cerner', src: '/logos/cerner.png', fallback: 'Cerner' },
  { name: 'Allscripts', src: '/logos/allscripts.png', fallback: 'Allscripts' },
  { name: 'athenahealth', src: '/logos/athenahealth.png', fallback: 'athenahealth' },
  { name: 'Meditech', src: '/logos/meditech.png', fallback: 'Meditech' },
  { name: 'Change Healthcare', src: '/logos/change-healthcare.png', fallback: 'Change Healthcare' },
  { name: 'HL7 FHIR', src: '/logos/hl7-fhir.png', fallback: 'HL7 FHIR' },
  { name: 'AWS Health', src: '/logos/aws-health.png', fallback: 'AWS Health' },
  { name: 'Microsoft Health', src: '/logos/microsoft-health.png', fallback: 'Microsoft Health' },
  { name: 'Google Health', src: '/logos/google-health.png', fallback: 'Google Health' },
]

const COMPLIANCE_BADGES = [
  {
    name: 'HIPAA',
    src: '/images/brand/hipaa-badge.png',
    fallback: 'HIPAA',
  },
  {
    name: 'GDPR',
    src: '/images/brand/gdpr-badge.png',
    fallback: 'GDPR',
  },
  {
    name: 'HL7',
    src: '/images/brand/hl7-badge.png',
    fallback: 'HL7',
  },
  {
    name: 'FHIR',
    src: '/images/brand/fhir-badge.png',
    fallback: 'FHIR',
  },
]

function BadgeItem({ badge }: { badge: (typeof COMPLIANCE_BADGES)[0] }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center gap-2 w-20 p-3 border border-white/10 rounded-lg"
      aria-label={badge.name}
    >
      <BadgeContent badge={badge} />
    </div>
  )
}

function BadgeContent({ badge }: { badge: (typeof COMPLIANCE_BADGES)[0] }) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <div className="relative w-full flex items-center justify-center" style={{ height: '32px' }}>
        <Image
          src={badge.src}
          alt={badge.name}
          width={48}
          height={32}
          className="object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          sizes="48px"
          onError={(e) => {
            // Hide the image and show fallback text on error
            const target = e.currentTarget as HTMLImageElement
            target.style.display = 'none'
            const fallback = target.nextElementSibling as HTMLElement | null
            if (fallback) fallback.style.display = 'block'
          }}
        />
        <span
          className="trust-bar-badge-fallback hidden whitespace-nowrap select-none text-center"
          style={{
            fontFamily: 'Inter, "Plus Jakarta Sans", sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#ffffff',
            opacity: 0.75,
            lineHeight: 1,
          }}
        >
          {badge.fallback}
        </span>
      </div>
      <span
        style={{
          fontFamily: 'Inter, "Plus Jakarta Sans", sans-serif',
          fontSize: '9px',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(168, 191, 204, 0.7)',
          lineHeight: 1,
          marginTop: '4px',
        }}
      >
        {badge.name}
      </span>
    </div>
  )
}

function LogoItem({
  logo,
  index,
  setPrefix,
}: {
  logo: (typeof PARTNER_LOGOS)[0]
  index: number
  setPrefix: string
}) {
  return (
    <div
      className="trust-bar-logo-item group flex-shrink-0 flex items-center justify-center"
      style={{
        height: '36px',
        paddingLeft: '40px',
        paddingRight: '40px',
      }}
      aria-label={logo.name}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ height: '36px', maxWidth: '140px' }}
      >
        <LogoContent logo={logo} />
      </div>
    </div>
  )
}

function LogoContent({ logo }: { logo: (typeof PARTNER_LOGOS)[0] }) {
  return (
    <span
      className="trust-bar-logo-text whitespace-nowrap select-none"
      style={{
        fontFamily: 'Inter, "Plus Jakarta Sans", sans-serif',
        fontSize: '13px',
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: '#ffffff',
        filter: 'brightness(0) invert(1)',
        opacity: 0.55,
        transition: 'opacity 0.3s ease, filter 0.3s ease',
        display: 'block',
        lineHeight: 1,
      }}
    >
      {logo.fallback}
    </span>
  )
}

function DotSeparator() {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center"
      style={{ height: '36px', paddingLeft: '8px', paddingRight: '8px' }}
      aria-hidden="true"
    >
      <span
        style={{
          display: 'block',
          width: '3px',
          height: '3px',
          borderRadius: '50%',
          background: 'rgba(0, 201, 177, 0.35)',
        }}
      />
    </div>
  )
}

export function TrustBar() {
  const trackRef = useRef<HTMLDivElement>(null)

  return (
    <section
      className="relative w-full overflow-hidden trust-bar-section"
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        borderTop: '1px solid rgba(255, 255, 255, 0.07)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
      }}
      aria-label="Trusted by enterprise healthcare ecosystems"
    >
      {/* Section eyebrow label */}
      <div
        className="flex justify-center"
        style={{ paddingTop: '32px', paddingBottom: '24px' }}
      >
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            style={{
              color: '#00C9B1',
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: 1,
              userSelect: 'none',
              marginRight: '4px',
            }}
          >
            +
          </span>
          <span
            style={{
              fontFamily: 'Inter, "Plus Jakarta Sans", sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.2em',
              color: '#A8BFCC',
              textTransform: 'uppercase',
            }}
          >
            Built for Enterprise Healthcare Ecosystems
          </span>
        </div>
      </div>

      {/* Compliance badges — HIPAA / GDPR / HL7 / FHIR */}
      <div
        className="flex items-center justify-center gap-4 md:gap-6 flex-wrap md:flex-nowrap"
        style={{ paddingBottom: '28px', paddingLeft: '24px', paddingRight: '24px' }}
        aria-label="Compliance certifications"
      >
        {COMPLIANCE_BADGES.map((badge) => (
          <BadgeItem key={badge.name} badge={badge} />
        ))}
      </div>

      {/* Hairline divider between badges and marquee */}
      <div
        aria-hidden="true"
        style={{
          height: '1px',
          background: 'rgba(255,255,255,0.05)',
          marginBottom: '24px',
          marginLeft: '40px',
          marginRight: '40px',
        }}
      />

      {/* Marquee container with left/right fade masks */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          paddingBottom: '32px',
          maskImage:
            'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div
          ref={trackRef}
          className="trust-bar-track flex items-center"
          style={{
            width: 'max-content',
            willChange: 'transform',
          }}
          aria-hidden="true"
        >
          {/* Set A */}
          {PARTNER_LOGOS.map((logo, i) => (
            <LogoItem key={`a-${i}`} logo={logo} index={i} setPrefix="a" />
          ))}
          <DotSeparator />

          {/* Set B — exact duplicate for seamless loop */}
          {PARTNER_LOGOS.map((logo, i) => (
            <LogoItem key={`b-${i}`} logo={logo} index={i} setPrefix="b" />
          ))}
          <DotSeparator />
        </div>
      </div>

      <style jsx>{`
        /* ─── Core marquee keyframe ─────────────────────────────────────────── */
        @keyframes trustbar-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* ─── Apply animation to track ──────────────────────────────────────── */
        .trust-bar-track {
          animation: trustbar-marquee 38s linear infinite;
        }

        /* ─── Pause on hover over the whole section ──────────────────────────── */
        .trust-bar-section:hover .trust-bar-track {
          animation-play-state: paused;
        }

        /* ─── Individual logo hover — fade up to full white ─────────────────── */
        .trust-bar-logo-item:hover .trust-bar-logo-text {
          opacity: 1 !important;
          filter: brightness(0) invert(1) !important;
        }

        /* ─── Mobile: reduce speed by ~40% (38s → 63s) ──────────────────────── */
        @media (max-width: 768px) {
          .trust-bar-track {
            animation-duration: 63s;
          }
        }

        /* ─── Respect reduced-motion preference ─────────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .trust-bar-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}