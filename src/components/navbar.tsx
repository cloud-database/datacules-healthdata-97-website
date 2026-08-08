'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BRAND } from '@/lib/brand';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    // Check on mount in case page is already scrolled
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        /* ── Nav link hover underline — teal slide-in from left ── */
        .nav-link {
          position: relative;
          color: #A8BFCC;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          padding-bottom: 3px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0%;
          height: 1.5px;
          background: linear-gradient(90deg, #00C9B1 0%, #7B8CDE 100%);
          border-radius: 2px;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link:hover {
          color: #ffffff;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        /* ── Navbar entrance animation ── */
        @keyframes navFadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .navbar-animate-in {
          animation: navFadeIn 0.55s cubic-bezier(0.4, 0, 0.2, 1) both;
        }

        /* ── Mobile menu slide-down ── */
        @keyframes mobileMenuSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .mobile-menu-enter {
          animation: mobileMenuSlide 0.24s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* ── CTA button pulse on hover ── */
        @keyframes ctaPulse {
          0%   { box-shadow: 0 2px 12px rgba(0,201,177,0.28), 0 0 0 0   rgba(0,201,177,0.38); }
          65%  { box-shadow: 0 4px 22px rgba(0,201,177,0.42), 0 0 0 9px rgba(0,201,177,0);    }
          100% { box-shadow: 0 4px 22px rgba(0,201,177,0.42), 0 0 0 0   rgba(0,201,177,0);    }
        }
        .cta-btn:hover {
          animation: ctaPulse 0.65s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* ── Logo hover brightness ── */
        .logo-img {
          transition: opacity 0.22s ease, filter 0.22s ease;
        }
        .logo-img:hover {
          opacity: 0.85;
          filter: brightness(1.08);
        }

        /* ── Mobile nav item hover ── */
        .mobile-nav-link {
          color: #A8BFCC;
          transition: color 0.2s ease, background 0.2s ease;
          min-height: 48px;
          display: flex;
          align-items: center;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          text-decoration: none;
        }
        .mobile-nav-link:hover {
          color: #ffffff;
          background: rgba(0, 201, 177, 0.07);
        }

        /* ── Glassmorphism navbar background transitions ── */
        .navbar-surface {
          background-color: rgba(13, 33, 55, 0.72);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          box-shadow: none;
          transition:
            background-color 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            border-color    0.45s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow      0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .navbar-surface.is-scrolled {
          background-color: rgba(13, 33, 55, 0.97);
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
          box-shadow:
            0 4px 40px rgba(0, 0, 0, 0.38),
            0 1px 0 rgba(255, 255, 255, 0.04) inset;
        }
      `}</style>

      <header
        className={`fixed top-0 inset-x-0 z-50 navbar-animate-in navbar-surface${scrolled ? ' is-scrolled' : ''}`}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <nav
          className="mx-auto px-6 h-16 flex items-center justify-between"
          style={{ maxWidth: '1280px' }}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0"
            aria-label="Datacules LLC — Home"
          >
            <Image
              src="/images/brand/331x89.png"
              alt={BRAND.name}
              width={148}
              height={40}
              priority
              className="logo-img"
              style={{
                height: '40px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </Link>

          {/* ── Desktop nav links ── */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="nav-link">Features</Link>
            <Link href="/blog"     className="nav-link">Blog</Link>
            <Link href="/docs"     className="nav-link">Docs</Link>
            <Link href="/about"    className="nav-link">About</Link>
            <Link href={BRAND.auth.login} className="nav-link">Log in</Link>

            {/* Primary CTA */}
            <Link
              href={BRAND.auth.register}
              className="cta-btn flex items-center justify-center px-6 rounded-xl text-sm font-semibold select-none"
              style={{
                background: 'linear-gradient(135deg, #00C9B1 0%, #00B09E 100%)',
                color: '#0D2137',
                height: '40px',
                minWidth: '160px',
                letterSpacing: '0.01em',
                boxShadow: '0 2px 12px rgba(0,201,177,0.28)',
                transition: 'transform 0.2s cubic-bezier(0.4,0,0.2,1), background 0.2s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'scale(1.03)';
                el.style.background = 'linear-gradient(135deg, #00DBC3 0%, #00C9B1 100%)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'scale(1)';
                el.style.background = 'linear-gradient(135deg, #00C9B1 0%, #00B09E 100%)';
              }}
            >
              {BRAND.messaging.cta}
            </Link>
          </div>

          {/* ── Mobile hamburger toggle ── */}
          <button
            className="md:hidden rounded-xl"
            style={{
              color: '#A8BFCC',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              minWidth: '48px',
              minHeight: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.2s ease, background 0.2s ease',
              borderRadius: '12px',
              padding: '8px',
            }}
            onClick={() => setOpen(prev => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = '#ffffff';
              el.style.background = 'rgba(255,255,255,0.07)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = '#A8BFCC';
              el.style.background = 'transparent';
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{
                transition: 'transform 0.22s cubic-bezier(0.4,0,0.2,1)',
                transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
              }}
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6"  x2="21" y2="6"  />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* ── Mobile dropdown menu ── */}
        {open && (
          <div
            className="md:hidden px-4 pb-6 pt-2 flex flex-col gap-1 mobile-menu-enter"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(9, 24, 42, 0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            {[
              { href: '/features',          label: 'Features' },
              { href: '/blog',              label: 'Blog'     },
              { href: '/docs',              label: 'Docs'     },
              { href: '/about',             label: 'About'    },
              { href: BRAND.auth.login,     label: 'Log in'   },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="mobile-nav-link"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}

            {/* Divider */}
            <div
              style={{
                height: '1px',
                background: 'rgba(255,255,255,0.06)',
                margin: '8px 0',
                borderRadius: '1px',
              }}
            />

            {/* Mobile CTA */}
            <Link
              href={BRAND.auth.register}
              className="rounded-xl text-center text-sm font-semibold"
              style={{
                background: 'linear-gradient(135deg, #00C9B1 0%, #00B09E 100%)',
                color: '#0D2137',
                minHeight: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 16px rgba(0,201,177,0.30)',
                transition: 'opacity 0.2s ease, transform 0.2s cubic-bezier(0.4,0,0.2,1)',
                letterSpacing: '0.01em',
                textDecoration: 'none',
                padding: '0 1.5rem',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.opacity = '0.9';
                el.style.transform = 'scale(1.015)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.opacity = '1';
                el.style.transform = 'scale(1)';
              }}
              onClick={() => setOpen(false)}
            >
              {BRAND.messaging.cta}
            </Link>
          </div>
        )}
      </header>
    </>
  );
}