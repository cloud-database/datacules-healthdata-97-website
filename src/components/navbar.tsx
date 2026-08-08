'use client';
import Link from 'next/link';
import { useState } from 'react';
import { BRAND } from '@/lib/brand';

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-4 mt-4">
        <nav className="max-w-6xl mx-auto rounded-2xl bg-gray-950/80 backdrop-blur-xl border border-white/10 px-6 h-16 flex items-center justify-between shadow-lg shadow-black/20">
          <Link href="/" className="flex items-center gap-3 font-bold text-xl text-white hover:opacity-90 transition-opacity">
            <span className="text-2xl font-black gradient-text">{BRAND.name}</span>
          </Link>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
            <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">Docs</Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
            <Link href={BRAND.auth.login} className="text-gray-400 hover:text-white transition-colors">Log in</Link>
            <Link
              href={BRAND.auth.register}
              className="px-5 py-2 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 hover:scale-105 active:scale-95"
              style={{ background: `linear-gradient(135deg, var(--brand-primary), var(--brand-accent))` }}
            >
              {BRAND.messaging.cta}
            </Link>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
            </svg>
          </button>
        </nav>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-gray-950/95 backdrop-blur-xl border border-white/10 p-4 flex flex-col gap-3">
            <Link href="/features" className="py-2 px-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors" onClick={() => setOpen(false)}>Features</Link>
            <Link href="/blog" className="py-2 px-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors" onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/docs" className="py-2 px-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors" onClick={() => setOpen(false)}>Docs</Link>
            <Link href="/about" className="py-2 px-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors" onClick={() => setOpen(false)}>About</Link>
            <Link href={BRAND.auth.login} className="py-2 px-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors" onClick={() => setOpen(false)}>Log in</Link>
            <Link
              href={BRAND.auth.register}
              className="py-2 px-4 rounded-xl text-white font-semibold text-center"
              style={{ background: `linear-gradient(135deg, var(--brand-primary), var(--brand-accent))` }}
              onClick={() => setOpen(false)}
            >
              {BRAND.messaging.cta}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
