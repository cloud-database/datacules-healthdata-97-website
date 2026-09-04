import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: {
    default: 'Datacules HealthData 97 — Enterprise Healthcare Data Platform',
    template: '%s | Datacules HealthData 97',
  },
  description:
    'Datacules HealthData 97 is an enterprise healthcare data management, analytics, and AI intelligence platform. 354+ API endpoints, 23 integrated modules, HIPAA-aligned architecture.',
  keywords: [
    'healthcare data platform',
    'healthcare analytics',
    'FHIR API',
    'HL7 FHIR',
    'HIPAA aligned',
    'clinical data management',
    'healthcare AI',
    'Datacules',
    'HealthData 97',
  ],
  authors: [{ name: 'Datacules LLC' }],
  creator: 'Datacules LLC',
  publisher: 'Datacules LLC',
  metadataBase: new URL('https://datacules-healthdata-97-website.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://datacules-healthdata-97-website.vercel.app',
    siteName: 'Datacules HealthData 97',
    title: 'Datacules HealthData 97 — Enterprise Healthcare Data Platform',
    description:
      'Enterprise healthcare data management, analytics, and AI intelligence. 354+ API endpoints, 23 integrated modules, HIPAA-aligned architecture.',
    images: [
      {
        url: '/1207x302.png',
        width: 1207,
        height: 302,
        alt: 'Datacules HealthData 97',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Datacules HealthData 97 — Enterprise Healthcare Data Platform',
    description:
      'Enterprise healthcare data management, analytics, and AI intelligence. 354+ API endpoints, 23 integrated modules, HIPAA-aligned architecture.',
    images: ['/1207x302.png'],
    creator: '@datacules',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0D2137',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-brand-primary text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
