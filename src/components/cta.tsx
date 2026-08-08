'use client';
import { BRAND } from '@/lib/brand';

export function Cta() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: '#0D2137' }}
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,201,177,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(168,191,204,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.5,
        }}
      />

      {/* Ambient orb — teal bottom-left */}
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,201,177,0.09) 0%, transparent 70%)',
          filter: 'blur(56px)',
        }}
      />

      {/* Ambient orb — lavender top-right */}
      <div
        className="absolute top-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(123,140,222,0.08) 0%, transparent 70%)',
          filter: 'blur(56px)',
        }}
      />

      {/* ECG waveform — subtle footer divider echo */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden" style={{ height: '40px', opacity: 0.06 }}>
        <svg
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          <polyline
            points="0,20 120,20 160,20 180,4 200,36 220,4 240,36 260,20 360,20 400,20 420,12 440,28 460,12 480,20 600,20 640,20 660,6 680,34 700,6 720,34 740,20 840,20 880,20 900,14 920,26 940,14 960,20 1080,20 1120,20 1140,8 1160,32 1180,8 1200,20 1320,20 1440,20"
            fill="none"
            stroke="#00C9B1"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {/* Healthcare cross micro-decoration */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="5" y="0" width="4" height="14" rx="1" fill="#00C9B1" />
            <rect x="0" y="5" width="14" height="4" rx="1" fill="#00C9B1" />
          </svg>
          <span
            className="uppercase font-semibold"
            style={{ color: '#00C9B1', fontSize: '11px', letterSpacing: '0.2em' }}
          >
            Get Started Today
          </span>
        </div>

        {/* H2 Headline */}
        <h2
          className="font-black text-white mb-6"
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
          }}
        >
          Transform Your Healthcare{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #00C9B1 0%, #7B8CDE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Data Operations
          </span>
        </h2>

        {/* Subtext */}
        <p
          className="mx-auto mb-12"
          style={{
            color: '#A8BFCC',
            fontSize: '18px',
            lineHeight: '1.75',
            maxWidth: '560px',
          }}
        >
          Join leading healthcare systems using Datacules HealthData 97 to unify patient
          records, automate compliance, and unlock AI-powered clinical intelligence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          {/* Primary — pulsing Electric Teal */}
          <a
            href={BRAND.auth.register}
            className="cta-primary-btn relative inline-flex items-center justify-center font-bold rounded-xl"
            style={{
              background: '#00C9B1',
              color: '#0D2137',
              height: '64px',
              minWidth: '280px',
              padding: '0 32px',
              fontSize: '16px',
              fontWeight: '700',
              borderRadius: '12px',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            Request a Platform Demo
          </a>

          {/* Secondary — ghost */}
          <a
            href={BRAND.auth.login}
            className="cta-ghost-btn inline-flex items-center justify-center font-semibold rounded-xl"
            style={{
              background: 'transparent',
              color: '#FFFFFF',
              height: '64px',
              minWidth: '240px',
              padding: '0 32px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.2)',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, border-color 0.2s ease, background 0.2s ease',
            }}
          >
            Schedule a Technical Review
          </a>
        </div>

        {/* Compliance badge strip */}
        <div
          className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-6 py-3 rounded-full mx-auto"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          {/* Shield icon */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00C9B1"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0 }}
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>

          {[
            'SOC 2 Type II',
            'HIPAA',
            'GDPR',
            'HL7 FHIR Compliant',
          ].map((badge, i, arr) => (
            <span key={badge} className="inline-flex items-center gap-3">
              <span style={{ color: '#A8BFCC', fontSize: '12px', fontWeight: '500' }}>
                {badge}
              </span>
              {i < arr.length - 1 && (
                <span
                  style={{
                    display: 'inline-block',
                    width: '1px',
                    height: '12px',
                    background: 'rgba(168,191,204,0.3)',
                  }}
                />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Keyframes + hover styles */}
      <style>{`
        @keyframes pulse-teal {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 201, 177, 0.55);
          }
          60% {
            box-shadow: 0 0 0 18px rgba(0, 201, 177, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 201, 177, 0);
          }
        }

        .cta-primary-btn {
          animation: pulse-teal 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .cta-primary-btn:hover {
          transform: scale(1.03);
          box-shadow: 0 0 36px rgba(0, 201, 177, 0.5), 0 8px 24px rgba(0, 0, 0, 0.3) !important;
          animation: none;
        }

        .cta-ghost-btn:hover {
          transform: scale(1.03);
          border-color: rgba(0, 201, 177, 0.45) !important;
          background: rgba(0, 201, 177, 0.06) !important;
        }
      `}</style>
    </section>
  );
}