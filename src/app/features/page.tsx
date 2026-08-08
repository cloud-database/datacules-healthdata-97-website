import type { Metadata } from 'next';
import { Features } from '@/components/features';
import { Cta } from '@/components/cta';
import { BRAND } from '@/lib/brand';

export const metadata: Metadata = {
  title: `Features | ${BRAND.name}`,
  description: `Explore all features of ${BRAND.name}`,
};

export default function FeaturesPage() {
  return (
    <div className="pt-24">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 border border-white/10 bg-white/5 text-gray-400">
          Everything you need
        </div>
        <h1 className="text-5xl font-black text-white mb-6">
          <span className="gradient-text">{BRAND.name}</span> Features
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">{BRAND.description.slice(0, 200)}</p>
      </div>
      <Features />
      <Cta />
    </div>
  );
}
