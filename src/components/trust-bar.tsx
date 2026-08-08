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
        /* Hairline divider above — separates from hero */
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
          {/* Teal cross/plus micro-decoration */}
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
        {/*
         * Marquee track — logos duplicated for seamless infinite loop.
         * The animation translates the track by exactly -50% of its own width,
         * which is the width of one full set (Set A + separator), causing a
         * perfectly seamless loop back to the start.
         */}
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
            /* Translate exactly half the total track width — the width of one
               full set — for a pixel-perfect seamless loop. */
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