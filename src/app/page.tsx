import type { Metadata } from 'next';
import { PageLoader } from '@/components/page-loader';
import Hero from '@/components/hero';
import { TrustBar } from '@/components/trust-bar';
import { PlatformOverview } from '@/components/platform-overview';
import { Features } from '@/components/features';
import { AIInsights } from '@/components/ai-insights';
import { ModulesGrid } from '@/components/modules-grid';
import { Compliance } from '@/components/compliance';
import { ApiSection } from '@/components/api-section';
import { ValueProps } from '@/components/value-props';
import { Cta } from '@/components/cta';

export const metadata: Metadata = {
  title: 'Datacules HealthData 97 | Healthcare Data, Intelligence & AI Platform',
  description:
    'Datacules HealthData 97 is an enterprise healthcare data platform that unifies clinical, operational, financial, and population data — with AI-driven intelligence, governance, and security built into every layer.',
  openGraph: {
    title: 'Datacules HealthData 97 | Healthcare Data, Intelligence & AI Platform',
    description:
      'One platform for healthcare data, intelligence, and action. Connect, manage, govern, analyze, and operationalize clinical and operational data across your entire organization.',
  },
};

export default function HomePage() {
  return (
    <>
      <PageLoader />
      <Hero />
      <TrustBar />
      <PlatformOverview />
      <Features />
      <AIInsights />
      <ModulesGrid />
      <Compliance />
      <ApiSection />
      <ValueProps />
      <Cta />
    </>
  );
}
