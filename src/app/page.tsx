import type { Metadata } from 'next';
import { PageLoader } from '@/components/loader';
import Hero from '@/components/hero';
import { TrustBar } from '@/components/trust-bar';
import { PlatformOverview } from '@/components/platform-overview';
import { AIInsights } from '@/components/ai-insights';
import { ModulesGrid } from '@/components/modules-grid';
import { Compliance } from '@/components/compliance';
import { ApiSection } from '@/components/api-section';
import { Cta } from '@/components/cta-section';
import { Features } from '@/components/features';
import { BRAND } from '@/lib/brand';

export const metadata: Metadata = {
  title: BRAND.name,
  description: BRAND.tagline,
};

export default function HomePage() {
  return (
    <>
      <PageLoader />
      <Hero />
      <TrustBar />
      <PlatformOverview />
      <AIInsights />
      <ModulesGrid />
      <Compliance />
      <ApiSection />
      <Cta />
      <Features />
    </>
  );
}