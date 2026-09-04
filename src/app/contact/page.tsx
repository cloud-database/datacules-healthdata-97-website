'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#0D2137] min-h-screen">
      <section className="pt-40 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="section-eyebrow mb-5">Contact</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Get in Touch with Datacules
            </h1>
            <p className="text-xl text-[#A8BFCC] mb-8 leading-relaxed">
              Have questions about Datacules HealthData 97? Our team is ready to discuss your healthcare data challenges and how the platform can help.
            </p>
            <div className="space-y-4">
              <Link
                href="/demo"
                className="flex items-center gap-4 p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-[#3B82F6]/30 hover:bg-white/[0.04] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/15 flex items-center justify-center">
                  <Send size={16} className="text-[#3B82F6]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-white">Request a Demo</div>
                  <div className="text-xs text-[#A8BFCC]">See Datacules HealthData 97 in action</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div className="card-base p-10 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#3B82F6]/15 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={24} className="text-[#3B82F6]" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-3">Message Received</h2>
                <p className="text-[#A8BFCC] text-sm leading-relaxed">
                  Thank you for reaching out. A member of the Datacules team will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-base p-8 space-y-5" noValidate>
                <h2 className="text-lg font-semibold text-white mb-2">Send Us a Message</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-[#A8BFCC] mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A6080] focus:outline-none focus:border-[#3B82F6]/50 focus:bg-white/[0.06] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[#A8BFCC] mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A6080] focus:outline-none focus:border-[#3B82F6]/50 focus:bg-white/[0.06] transition-colors"
                      placeholder="you@organization.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="organization" className="block text-xs font-medium text-[#A8BFCC] mb-1.5">
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A6080] focus:outline-none focus:border-[#3B82F6]/50 focus:bg-white/[0.06] transition-colors"
                    placeholder="Your organization"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-[#A8BFCC] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A6080] focus:outline-none focus:border-[#3B82F6]/50 focus:bg-white/[0.06] transition-colors resize-none"
                    placeholder="Tell us about your healthcare data challenges..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-colors"
                >
                  Send Message
                  <Send size={14} />
                </button>
                <p className="text-xs text-[#4A6080] text-center">
                  By submitting, you agree to our{' '}
                  <Link href="/privacy" className="text-[#3B82F6] hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
