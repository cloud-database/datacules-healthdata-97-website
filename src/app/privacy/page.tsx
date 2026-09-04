import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Datacules HealthData 97, a product of Datacules LLC.',
};

const sections = [
  {
    title: '1. Introduction',
    content: `This Privacy Policy describes how Datacules LLC ("Datacules," "we," "us," or "our") collects, uses, and shares information in connection with the Datacules HealthData 97 platform and this website. By using our services, you agree to the collection and use of information in accordance with this policy.`,
  },
  {
    title: '2. Information We Collect',
    content: `We may collect information you provide directly to us, including when you request a demo, contact us, or register for access to the platform. This may include your name, email address, organization name, job title, and other professional information. We may also collect information automatically when you visit our website, including usage data, device information, and cookies.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information we collect to: (a) respond to your inquiries and provide requested services; (b) send you information about Datacules HealthData 97; (c) improve our website and platform; (d) comply with legal obligations; and (e) protect the rights and safety of Datacules and our users.`,
  },
  {
    title: '4. Healthcare Data',
    content: `Datacules HealthData 97 is designed for use with healthcare data subject to regulatory requirements including HIPAA. Organizations using the platform to process Protected Health Information (PHI) are responsible for ensuring appropriate data processing agreements are in place. Datacules processes PHI only as directed by covered entities and business associates in accordance with applicable agreements and law.`,
  },
  {
    title: '5. Information Sharing',
    content: `We do not sell your personal information. We may share your information with service providers who assist us in operating our business, subject to confidentiality obligations. We may also disclose information when required by law or to protect our legal rights.`,
  },
  {
    title: '6. Data Security',
    content: `We implement reasonable technical and organizational measures to protect information against unauthorized access, disclosure, alteration, or destruction. For the Datacules HealthData 97 platform, these measures include encryption at rest and in transit, role-based access controls, and comprehensive audit logging.`,
  },
  {
    title: '7. Your Rights',
    content: `Depending on your jurisdiction, you may have rights regarding your personal information, including the right to access, correct, or request deletion of your data. To exercise these rights, please contact us at the information below.`,
  },
  {
    title: '8. Cookies',
    content: `Our website may use cookies and similar tracking technologies to improve your browsing experience. You can control cookies through your browser settings.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page with an updated date.`,
  },
  {
    title: '10. Contact Us',
    content: `If you have questions about this Privacy Policy or our data practices, please contact Datacules LLC through the contact information available on our website.`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-[#06487A] min-h-screen">
      <section className="pt-40 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-eyebrow mb-5">Legal</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
        <p className="text-sm text-[#4A6080] mb-12">Last updated: September 2026</p>

        <div className="space-y-10">
          {sections.map((sec) => (
            <div key={sec.title}>
              <h2 className="text-lg font-semibold text-white mb-3">{sec.title}</h2>
              <p className="text-[#A8BFCC] leading-relaxed text-sm">{sec.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <p className="text-xs text-[#4A6080]">
            © 2026 Datacules LLC. All rights reserved. Datacules HealthData 97 is a product developed by Datacules LLC.
          </p>
        </div>
      </section>
    </main>
  );
}
