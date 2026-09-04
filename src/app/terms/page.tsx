import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for the Datacules HealthData 97 website and platform, a product of Datacules LLC.',
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the Datacules HealthData 97 website and platform (the "Service"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Service.`,
  },
  {
    title: '2. Description of Service',
    content: `Datacules HealthData 97 is an enterprise healthcare data management and analytics platform developed by Datacules LLC. The Service is provided for the purposes described on this website and in applicable service agreements.`,
  },
  {
    title: '3. Use of the Service',
    content: `You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to: (a) use the Service in any way that violates applicable laws; (b) attempt to gain unauthorized access to any part of the Service; (c) transmit any malicious code or interfere with the Service; or (d) use the Service to infringe any intellectual property rights.`,
  },
  {
    title: '4. Intellectual Property',
    content: `The Service and its original content, features, and functionality are owned by Datacules LLC and are protected by applicable intellectual property laws. "Datacules," "HealthData 97," and associated logos are trademarks or service marks of Datacules LLC. Nothing in these Terms grants you any right to use Datacules trademarks without prior written permission.`,
  },
  {
    title: '5. Healthcare Data and Compliance',
    content: `Organizations using Datacules HealthData 97 to process healthcare data are responsible for compliance with applicable laws, including HIPAA, GDPR, and other relevant regulations. Use of the platform for regulated healthcare data requires a separate data processing agreement with Datacules LLC.`,
  },
  {
    title: '6. Disclaimer of Warranties',
    content: `The Service is provided "as is" and "as available" without warranties of any kind, express or implied. Datacules LLC does not warrant that the Service will be uninterrupted, error-free, or meet your specific requirements.`,
  },
  {
    title: '7. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, Datacules LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.`,
  },
  {
    title: '8. Changes to Terms',
    content: `We reserve the right to modify these Terms at any time. We will notify you of material changes by posting updated Terms on this page. Your continued use of the Service after such changes constitutes acceptance of the updated Terms.`,
  },
  {
    title: '9. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with applicable law. Any disputes shall be resolved in accordance with the governing law and jurisdiction specified in your service agreement with Datacules LLC.`,
  },
  {
    title: '10. Contact',
    content: `For questions about these Terms, please contact Datacules LLC through the contact information available on our website.`,
  },
];

export default function TermsPage() {
  return (
    <main className="bg-[#0D2137] min-h-screen">
      <section className="pt-40 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-eyebrow mb-5">Legal</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Terms of Use</h1>
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
