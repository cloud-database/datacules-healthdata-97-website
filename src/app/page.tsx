import type { Metadata } from 'next';
import Hero from '@/components/hero';
import { Features } from '@/components/features';
import { ValueProps } from '@/components/value-props';
import { Cta } from '@/components/cta';
import { BRAND } from '@/lib/brand';

export const metadata: Metadata = {
  title: BRAND.name,
  description: BRAND.tagline,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ValueProps />
      <Cta />
    </>
  );
}