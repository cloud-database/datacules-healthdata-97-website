import Link from 'next/link';
import { BRAND } from '@/lib/brand';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <span className="text-xl font-black gradient-text">{BRAND.name}</span>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">{BRAND.tagline}</p>
            <p className="text-gray-700 text-xs mt-4 leading-relaxed">
              A product by{' '}
              <a href={BRAND.company.url} target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors">
                {BRAND.company.name}
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2.5">
                <li><Link href="/features" className="text-gray-500 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/blog" className="text-gray-500 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href={BRAND.auth.login} className="text-gray-500 hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href={BRAND.auth.login} className="text-gray-500 hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2.5">
                <li><Link href="/about" className="text-gray-500 hover:text-white transition-colors">About</Link></li>
                <li>
                  <a href={BRAND.company.url} target="_blank" rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors">
                    {BRAND.company.name}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Account</h4>
              <ul className="space-y-2.5">
                <li><Link href={BRAND.auth.register} className="text-gray-500 hover:text-white transition-colors">Sign Up</Link></li>
                <li><Link href={BRAND.auth.login} className="text-gray-500 hover:text-white transition-colors">Log In</Link></li>
                <li><Link href={BRAND.auth.dashboard} className="text-gray-500 hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <span>© {year} {BRAND.name} by {BRAND.company.name}. All rights reserved.</span>
          <Link href={BRAND.auth.register}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white transition-colors"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            Get started free →
          </Link>
        </div>
      </div>
    </footer>
  );
}
