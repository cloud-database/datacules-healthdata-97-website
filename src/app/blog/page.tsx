import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights & Resources',
  description:
    'Healthcare data insights, platform updates, and resources from the Datacules team.',
};

export default function BlogPage() {
  return (
    <main className="bg-[#06487A] min-h-screen">
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="section-eyebrow mb-5">Blog</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Insights &amp; Resources
          </h1>
          <p className="text-xl text-[#A8BFCC] leading-relaxed">
            Healthcare data insights, platform updates, and resources from the Datacules team.
          </p>
        </div>

        {/* Coming soon */}
        <div className="max-w-2xl">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-10 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#3B82F6]/15 flex items-center justify-center mx-auto mb-6">
              <BookOpen size={24} className="text-[#3B82F6]" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-3">Content Coming Soon</h2>
            <p className="text-[#A8BFCC] mb-8 leading-relaxed max-w-md mx-auto">
              The Datacules blog will cover healthcare data architecture, AI in clinical settings, governance best practices, and platform updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-colors"
              >
                Get Notified
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#A8BFCC] hover:text-white border border-white/15 hover:border-white/30 rounded-xl transition-all"
              >
                Explore the Platform
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
