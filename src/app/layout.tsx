import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BRAND } from '@/lib/brand';

export const metadata: Metadata = {
  title: { template: `%s | ${BRAND.name}`, default: BRAND.name },
  description: BRAND.tagline,
  keywords: ["healthcare data management platform","enterprise EHR data unification","HIPAA compliant healthcare analytics","AI predictive analytics healthcare","revenue cycle management software","real-time patient vitals monitoring","FHIR HL7 interoperability platform","clinical data insights hospital"],
  openGraph: {
    title: BRAND.name,
    description: BRAND.tagline,
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-950 text-gray-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
