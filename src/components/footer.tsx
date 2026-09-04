'use client';
import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/lib/brand';

/* ── ECG Waveform SVG Divider ─────────────────────────────────────────────
   Renders a full-width heartbeat / ECG path at the very top of the footer.
   Two layers: a dim static baseline + a brighter animated stroke that traces
   the path continuously for a "living system" effect.
────────────────────────────────────────────────────────────────────────── */
function EcgWaveformDivider() {
  const ecgPath = `
    M0,30 L60,30
    L80,30 L90,14 L100,46 L108,6 L116,54 L124,30 L144,30
    L200,30 L220,30 L230,14 L240,46 L248,6 L256,54 L264,30 L284,30
    L340,30 L360,30 L370,14 L380,46 L388,6 L396,54 L404,30 L424,30
    L480,30 L500,30 L510,14 L520,46 L528,6 L536,54 L544,30 L564,30
    L620,30 L640,30 L650,14 L660,46 L668,6 L676,54 L684,30 L704,30
    L760,30 L780,30 L790,14 L800,46 L808,6 L816,54 L824,30 L844,30
    L900,30 L920,30 L930,14 L940,46 L948,6 L956,54 L964,30 L984,30
    L1040,30 L1060,30 L1070,14 L1080,46 L1088,6 L1096,54 L1104,30 L1124,30
    L1180,30 L1200,30 L1210,14 L1220,46 L1228,6 L1236,54 L1244,30 L1264,30
    L1320,30 L1340,30 L1350,14 L1360,46 L1368,6 L1376,54 L1384,30 L1404,30
    L1440,30
  `;

  return (
    <div className="w-full overflow-hidden" style={{ lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: '56px' }}
        aria-hidden="true"
      >
        <style>{`
          @keyframes ecg-divider-scroll {
            0%   { stroke-dashoffset: 2880; }
            100% { stroke-dashoffset: 0; }
          }
          .ecg-divider-base {
            stroke-dasharray: none;
          }
          .ecg-divider-animated {
            stroke-dasharray: 220 2660;
            stroke-dashoffset: 2880;
            animation: ecg-divider-scroll 6s linear infinite;
          }
        `}</style>

        {/* Dim static baseline — always visible */}
        <path
          className="ecg-divider-base"
          d={ecgPath}
          fill="none"
          stroke="rgba(59,130,246,0.05)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bright travelling pulse on top */}
        <path
          className="ecg-divider-animated"
          d={ecgPath}
          fill="none"
          stroke="rgba(59,130,246,0.55)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ── Pulsing Teal Dot ─────────────────────────────────────────────────────
   A small dot with an expanding ring animation — used in the compliance
   badge in the bottom bar to signal an "active, living" certified status.
────────────────────────────────────────────────────────────────────────── */
function PulsingDot() {
  return (
    <span
      className="relative inline-flex items-center justify-center flex-shrink-0"
      style={{ width: '10px', height: '10px', marginRight: '7px' }}
    >
      <style>{`
        @keyframes pulse-ring-footer {
          0%   { transform: scale(1);   opacity: 0.8; }
          70%  { transform: scale(2.6); opacity: 0;   }
          100% { transform: scale(2.6); opacity: 0;   }
        }
        .footer-pulse-ring {
          animation: pulse-ring-footer 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
      {/* Expanding ring */}
      <span
        className="footer-pulse-ring absolute inline-flex w-full h-full rounded-full"
        style={{ backgroundColor: 'rgba(59,130,246,0.4)' }}
      />
      {/* Solid core */}
      <span
        className="relative inline-flex rounded-full"
        style={{ width: '8px', height: '8px', backgroundColor: '#3B82F6', flexShrink: 0 }}
      />
    </span>
  );
}

/* ── Footer Logo — next/image light variant at 48px height ──────────────
   Attempts to load the white/light logo from /public/images/brand/.
   Falls back gracefully to the inline SVG wordmark if the file is absent.
────────────────────────────────────────────────────────────────────────── */
function FooterLogo() {
  /* Aspect ratio ≈ 5.5 : 1  →  width = 48 × 5.5 = 264 */
  const logoHeight = 48;
  const logoWidth = 264;

  return (
    <div
      className="relative flex-shrink-0"
      style={{ width: logoWidth, height: logoHeight, opacity: 0.8 }}
    >
      <Image
        src="/1207x302.png"
        alt="Datacules HealthData 97"
        width={logoWidth}
        height={logoHeight}
        sizes="264px"
        className="object-contain object-left"
        style={{ width: '100%', height: '100%' }}
        priority={false}
        onError={(e) => {
          /* Hide the broken image element; the fallback SVG below becomes visible */
          (e.currentTarget as HTMLImageElement).style.display = 'none';
          const fallback = (e.currentTarget as HTMLImageElement)
            .nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = 'flex';
        }}
      />

      {/* ── Inline-SVG fallback — hidden until onError fires ── */}
      <span
        aria-hidden="true"
        style={{
          display: 'none',
          position: 'absolute',
          inset: 0,
          alignItems: 'center',
        }}
      >
        <svg
          width={logoWidth}
          height={logoHeight}
          viewBox="0 0 264 48"
          fill="none"
          aria-label="Datacules LLC — HealthData 97 logo"
          role="img"
        >
          <defs>
            <linearGradient
              id="ftLogoIconGradFallback"
              x1="0"
              y1="0"
              x2="48"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>

          {/* Icon mark */}
          <rect width="48" height="48" rx="10" fill="url(#ftLogoIconGradFallback)" />
          <path
            d="M24 10 L24 38 M10 24 L38 24"
            stroke="#061422"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="24" cy="24" r="5" fill="#061422" />

          {/* Separator */}
          <line
            x1="55"
            y1="10"
            x2="55"
            y2="38"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />

          {/* Wordmark */}
          <text
            x="62"
            y="20"
            fontFamily="'Inter', 'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="800"
            fontSize="17"
            fill="#FFFFFF"
            letterSpacing="-0.5"
          >
            Datacules
          </text>
          <text
            x="62"
            y="37"
            fontFamily="'Inter', 'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="500"
            fontSize="11"
            fill="#3B82F6"
            letterSpacing="0.8"
          >
            HEALTHDATA 97
          </text>
        </svg>
      </span>
    </div>
  );
}

/* ── Footer Column Heading ───────────────────────────────────────────────── */
function FooterColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4
      className="text-sm font-semibold mb-5 tracking-wide uppercase"
      style={{ color: '#FFFFFF', letterSpacing: '0.08em' }}
    >
      {children}
    </h4>
  );
}

/* ── Footer Link ─────────────────────────────────────────────────────────── */
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith('http');

  const baseClass = 'text-sm transition-colors duration-200';
  const baseStyle: React.CSSProperties = { color: '#A8BFCC' };

  const onEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#3B82F6';
  };
  const onLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#A8BFCC';
  };

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        style={baseStyle}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={baseClass}
      style={baseStyle}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {children}
    </Link>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   FOOTER — Main Export
   ══════════════════════════════════════════════════════════════════════════
   Structure:
     1. ECG Waveform SVG Divider  — full-width animated heartbeat line
     2. Main footer body (4-column grid)
        Col 1: Logo + tagline + company link
        Col 2: Product links
        Col 3: Compliance links
        Col 4: Company links
     3. Bottom divider hairline
     4. Copyright bar — copyright left | HIPAA pulsing dot + compliance right
   ══════════════════════════════════════════════════════════════════════════ */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#061422',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* ── 1. ECG Waveform Divider ──────────────────────────────────── */}
      <EcgWaveformDivider />

      {/* ── 2. Main Footer Body ──────────────────────────────────────── */}
      <div
        className="max-w-[1280px] mx-auto px-6"
        style={{ paddingTop: '72px', paddingBottom: '56px' }}
      >
        {/* 4-column grid — collapses to 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Column 1 — Brand ─────────────────────────────────────── */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            {/* Light/white logo via next/image at 48px height, opacity-80 */}
            <FooterLogo />

            {/* Tagline — specified verbatim in the brief */}
            <p
              className="text-sm"
              style={{
                color: '#A8BFCC',
                maxWidth: '252px',
                lineHeight: '1.75',
              }}
            >
              Intelligent Healthcare Data Management with AI-Powered Insights
            </p>

            {/* Visit Datacules LLC */}
            <a
              href={BRAND.company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium w-fit transition-colors duration-200"
              style={{ color: '#A8BFCC' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#3B82F6')}
              onMouseLeave={e => (e.currentTarget.style.color = '#A8BFCC')}
            >
              {/* Small arrow icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 7h12M8 3l5 4-5 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Visit {BRAND.company.name}
            </a>
          </div>

          {/* ── Column 2 — Product ───────────────────────────────────── */}
          <div>
            <FooterColumnHeading>Product</FooterColumnHeading>
            <ul className="space-y-3">
              {[
                { label: 'Features',          href: '/features' },
                { label: 'Platform Overview', href: '/features' },
                { label: 'Documentation',     href: BRAND.auth.login },
                { label: 'Pricing',           href: BRAND.auth.login },
                { label: 'Blog',              href: '/blog' },
                { label: 'API Reference',     href: BRAND.auth.login },
              ].map(({ label, href }) => (
                <li key={label}>
                  <FooterLink href={href}>{label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3 — Compliance ────────────────────────────────── */}
          <div>
            <FooterColumnHeading>Compliance</FooterColumnHeading>
            <ul className="space-y-3">
              {[
                { label: 'HIPAA Compliance',  href: '/about' },
                { label: 'GDPR Policy',       href: '/about' },
                { label: 'HL7 FHIR Support',  href: '/features' },
                { label: 'SOC 2 Type II',     href: '/about' },
                { label: 'Security Overview', href: '/about' },
                { label: 'Privacy Policy',    href: '/about' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <FooterLink href={href}>{label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4 — Company ───────────────────────────────────── */}
          <div>
            <FooterColumnHeading>Company</FooterColumnHeading>
            <ul className="space-y-3">
              {[
                { label: 'About Us',  href: '/about' },
                { label: 'Sign Up',   href: BRAND.auth.register },
                { label: 'Log In',    href: BRAND.auth.login },
                { label: 'Dashboard', href: BRAND.auth.dashboard },
              ].map(({ label, href }) => (
                <li key={label}>
                  <FooterLink href={href}>{label}</FooterLink>
                </li>
              ))}
              {/* External company link */}
              <li>
                <a
                  href={BRAND.company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200"
                  style={{ color: '#A8BFCC' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#3B82F6')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#A8BFCC')}
                >
                  {BRAND.company.name}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── 3. Bottom Divider ────────────────────────────────────────── */}
        <div
          className="mt-14"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        />

        {/* ── 4. Copyright Bar ─────────────────────────────────────────── */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">

          {/* Copyright — left on desktop */}
          <span
            className="text-xs order-2 sm:order-1"
            style={{ color: 'rgba(168,191,204,0.55)' }}
          >
            © {year} {BRAND.name} by {BRAND.company.name}. All rights reserved.
          </span>

          {/* Compliance badges — right on desktop */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 order-1 sm:order-2">

            {/* Pulsing dot + HIPAA label */}
            <div
              className="flex items-center text-xs font-semibold"
              style={{ color: '#A8BFCC' }}
            >
              <PulsingDot />
              <span>HIPAA Compliant Platform</span>
            </div>

            {/* Vertical pipe separator */}
            <span
              className="hidden sm:inline-block select-none"
              style={{ color: 'rgba(255,255,255,0.12)', fontSize: '12px' }}
              aria-hidden="true"
            >
              |
            </span>

            {/* Additional compliance labels */}
            <span
              className="text-xs"
              style={{ color: 'rgba(168,191,204,0.5)' }}
            >
              SOC&nbsp;2&nbsp;Type&nbsp;II&nbsp;&nbsp;·&nbsp;&nbsp;GDPR&nbsp;&nbsp;·&nbsp;&nbsp;HL7&nbsp;FHIR
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}