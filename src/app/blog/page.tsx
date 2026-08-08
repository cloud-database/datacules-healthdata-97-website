'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BRAND } from '@/lib/brand'

const CATEGORIES = [
  { id: 'all', label: 'All Articles' },
  { id: 'clinical', label: 'Clinical Analytics' },
  { id: 'revenue', label: 'Revenue Cycle & Billing' },
  { id: 'compliance', label: 'Compliance & Privacy' },
  { id: 'interop', label: 'Interoperability & EHR' },
  { id: 'iot', label: 'IoT & Remote Monitoring' },
  { id: 'operations', label: 'Healthcare Operations' },
]

const ARTICLES = [
  {
    id: 1,
    category: 'clinical',
    categoryLabel: 'Clinical Analytics',
    title: 'Reducing 30-Day Readmissions with XGBoost Risk Scoring Across Multi-Site Hospital Networks',
    excerpt: 'How predictive models trained on unified EHR, labs, and social determinants data are enabling care teams to intervene before discharge — and what the data architecture behind it looks like.',
    readTime: '9 min read',
    date: 'Jan 14, 2025',
    featured: false,
  },
  {
    id: 2,
    category: 'revenue',
    categoryLabel: 'Revenue Cycle & Billing',
    title: 'Claim Denial Prediction: Using Random Forest Models to Catch Rejections Before Submission',
    excerpt: 'A deep dive into how AI-driven claims scrubbing and ICD code mapping assistance can reduce denial rates and accelerate reimbursement cycles for health systems.',
    readTime: '7 min read',
    date: 'Jan 9, 2025',
    featured: false,
  },
  {
    id: 3,
    category: 'interop',
    categoryLabel: 'Interoperability & EHR',
    title: 'FHIR R4 Adoption in 2025: What Health Systems Need to Know About REST API Integration',
    excerpt: 'From HL7 v2 migration to FHIR R4 endpoints, this guide covers the technical and operational considerations for connecting disparate EHR systems into a unified patient repository.',
    readTime: '11 min read',
    date: 'Jan 6, 2025',
    featured: false,
  },
  {
    id: 4,
    category: 'iot',
    categoryLabel: 'IoT & Remote Monitoring',
    title: 'Vitals Anomaly Detection at Scale: Isolation Forest Models on Continuous IoT Device Streams',
    excerpt: 'Real-time monitoring of patient vitals across distributed IoT devices requires more than threshold alerts. Learn how unsupervised anomaly detection changes the clinical picture.',
    readTime: '8 min read',
    date: 'Dec 30, 2024',
    featured: false,
  },
  {
    id: 5,
    category: 'operations',
    categoryLabel: 'Healthcare Operations',
    title: 'No-Show Forecasting: How Predictive Scheduling Reduces Appointment Waste by Double Digits',
    excerpt: 'Missed appointments cost health systems billions annually. Predictive models using historical scheduling, demographics, and weather data are changing the calculus.',
    readTime: '6 min read',
    date: 'Dec 23, 2024',
    featured: false,
  },
  {
    id: 6,
    category: 'compliance',
    categoryLabel: 'Compliance & Privacy',
    title: 'HIPAA Audit Trails in 2025: What Automated Logging Must Capture and Why It Matters',
    excerpt: 'With OCR enforcement intensifying, health systems need more than checkbox compliance. This article outlines what a defensible audit trail architecture looks like in practice.',
    readTime: '10 min read',
    date: 'Dec 18, 2024',
    featured: false,
  },
  {
    id: 7,
    category: 'clinical',
    categoryLabel: 'Clinical Analytics',
    title: 'Chronic Condition Progression Modeling: Early Signals in Lab Trends and Prescription Patterns',
    excerpt: 'Aggregating longitudinal lab results, prescription histories, and appointment data reveals progression signals months before clinical thresholds are crossed.',
    readTime: '12 min read',
    date: 'Dec 12, 2024',
    featured: false,
  },
  {
    id: 8,
    category: 'revenue',
    categoryLabel: 'Revenue Cycle & Billing',
    title: 'ICD-10 Code Mapping Assistance: How AI Reduces Upcoding Risk and Documentation Gaps',
    excerpt: 'Intelligent billing platforms that surface ICD code suggestions from clinical notes are reducing both undercoding revenue loss and compliance exposure simultaneously.',
    readTime: '7 min read',
    date: 'Dec 5, 2024',
    featured: false,
  },
  {
    id: 9,
    category: 'interop',
    categoryLabel: 'Interoperability & EHR',
    title: 'MQTT and SFTP in Healthcare: Protocol Selection for Lab System and Device Connectivity',
    excerpt: 'Not every healthcare data source speaks REST. Understanding when to use MQTT for real-time device telemetry versus SFTP for batch lab results is foundational to integration architecture.',
    readTime: '8 min read',
    date: 'Nov 28, 2024',
    featured: false,
  },
]

const TRENDING = [
  {
    id: 1,
    title: 'AI Readmission Risk: The Architecture Behind the Model',
    stat: '30-day readmission risk scoring',
    category: 'Clinical Analytics',
    readTime: '9 min',
  },
  {
    id: 2,
    title: 'Denial Prediction Reduces Rework Across Billing Teams',
    stat: 'Claims scrubbing before submission',
    category: 'Revenue Cycle',
    readTime: '7 min',
  },
  {
    id: 3,
    title: 'FHIR R4 REST Integration: A Technical Primer',
    stat: 'HL7 + FHIR + REST + MQTT + SFTP',
    category: 'Interoperability',
    readTime: '11 min',
  },
  {
    id: 4,
    title: 'PHI Encryption at Rest and In Transit: A Compliance Checklist',
    stat: 'Full audit trail + privacy request tracking',
    category: 'Compliance',
    readTime: '10 min',
  },
  {
    id: 5,
    title: 'IoT Vitals Monitoring: Configuring Critical Threshold Alerts',
    stat: 'Real-time anomaly detection on device streams',
    category: 'IoT & Remote Monitoring',
    readTime: '8 min',
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  clinical: 'bg-blue-900/60 text-blue-200 border border-blue-700/40',
  revenue: 'bg-emerald-900/60 text-emerald-200 border border-emerald-700/40',
  compliance: 'bg-amber-900/60 text-amber-200 border border-amber-700/40',
  interop: 'bg-violet-900/60 text-violet-200 border border-violet-700/40',
  iot: 'bg-cyan-900/60 text-cyan-200 border border-cyan-700/40',
  operations: 'bg-rose-900/60 text-rose-200 border border-rose-700/40',
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filtered = activeCategory === 'all'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory)

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <main className="min-h-screen bg-[#070E1A] text-white">

      {/* ── NAV BREADCRUMB ── */}
      <div className="border-b border-white/5 bg-[#0A1628]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-white/40">
          <Link href="/" className="hover:text-white/70 transition-colors">{BRAND.name}</Link>
          <span>/</span>
          <span className="text-white/70">Healthcare Data Insights</span>
        </div>
      </div>

      {/* ── PAGE HEADER ── */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 noise opacity-30" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 60% at 50% -10%, rgba(var(--brand-primary-rgb),0.6), transparent)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A3A5C]/40 border border-[#1A3A5C]/60 text-xs font-medium text-[#00C2A8] mb-5 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C2A8] animate-pulse-slow" />
            Healthcare Data Insights Blog
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Clinical Intelligence.</span>
            <br />
            <span className="text-white/90">Operational Clarity.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/55 text-lg leading-relaxed">
            Expert articles on healthcare data unification, AI-powered analytics, revenue cycle optimization, HIPAA compliance, and interoperability — written for clinical and operational leaders.
          </p>
        </div>
      </section>

      {/* ── FEATURED HERO ARTICLE ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-2xl overflow-hidden border border-white/8 group card-hover">
          {/* Clinical photography backdrop simulation */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, #0A1E35 0%, #0D2640 40%, #0A2030 70%, #061520 100%)`,
            }}
          />
          {/* Medical grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,194,168,0.4) 39px, rgba(0,194,168,0.4) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,194,168,0.4) 39px, rgba(0,194,168,0.4) 40px)`,
            }}
          />
          <div className="relative grid lg:grid-cols-2 gap-0">
            {/* Left: content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[#00C2A8]/15 text-[#00C2A8] border border-[#00C2A8]/25 uppercase tracking-wider">
                  Featured
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-900/60 text-blue-200 border border-blue-700/40">
                  Clinical Analytics
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-4 group-hover:text-[#00C2A8] transition-colors">
                Unifying EHR, Claims, Labs & IoT Data: The Architecture Powering Modern Health Systems
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-6">
                Health systems sitting on fragmented data from Epic, Cerner, HL7 feeds, and IoT devices are leaving clinical and operational intelligence on the table. This article walks through how a unified health data platform changes the equation — from real-time anomaly detection to population health dashboards.
              </p>
              <div className="flex items-center gap-4 text-sm text-white/40 mb-6">
                <span>Jan 20, 2025</span>
                <span>·</span>
                <span>14 min read</span>
              </div>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00C2A8]/10 border border-[#00C2A8]/30 text-[#00C2A8] text-sm font-medium hover:bg-[#00C2A8]/20 transition-colors w-fit"
              >
                Read Article
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right: visual */}
            <div className="relative hidden lg:flex items-center justify-center p-12">
              <div className="relative w-full max-w-sm">
                {/* Simulated dashboard card */}
                <div className="rounded-xl bg-[#0A1E35]/80 border border-white/10 p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-white/40 uppercase tracking-wider">Readmission Risk Score</span>
                    <span className="text-xs text-[#00C2A8]">Live</span>
                  </div>
                  <div className="flex items-end gap-1 h-20 mb-4">
                    {[40, 55, 35, 70, 50, 85, 60, 45, 78, 55, 90, 65].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: h > 75
                            ? 'rgba(239,68,68,0.7)'
                            : h > 55
                            ? 'rgba(251,191,36,0.6)'
                            : 'rgba(0,194,168,0.5)',
                        }}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'High Risk', val: '127', color: 'text-red-400' },
                      { label: 'Med Risk', val: '843', color: 'text-amber-400' },
                      { label: 'Low Risk', val: '3.2K', color: 'text-[#00C2A8]' },
                    ].map(s => (
                      <div key={s.label} className="text-center">
                        <div className={`text-lg font-bold ${s.color}`}>{s.val}</div>
                        <div className="text-xs text-white/30">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-lg bg-[#00C2A8]/15 border border-[#00C2A8]/30 text-xs text-[#00C2A8] font-medium whitespace-nowrap">
                  AI Risk Stratification
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex items-center gap-2 flex-wrap">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#00C2A8] text-[#070E1A]'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80 border border-white/8'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── MAIN CONTENT GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Article Grid — 2/3 width */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-5">
              {filtered.map(article => (
                <Link
                  key={article.id}
                  href="#"
                  className="group block rounded-xl bg-[#0A1628]/60 border border-white/7 p-5 hover:border-[#00C2A8]/30 hover:bg-[#0A1628]/80 transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${CATEGORY_COLORS[article.category] ?? 'bg-white/10 text-white/60'}`}>
                      {article.categoryLabel}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-white/90 leading-snug mb-2 group-hover:text-[#00C2A8] transition-colors line-clamp-3">
                    {article.title}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-white/30">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-white/30">
                No articles in this category yet.
              </div>
            )}
          </div>

          {/* Sidebar — 1/3 width */}
          <div className="space-y-6">

            {/* Trending */}
            <div className="rounded-xl bg-[#0A1628]/60 border border-white/7 p-5">
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">Trending Articles</h3>
              <div className="space-y-4">
                {TRENDING.map((item, i) => (
                  <Link key={item.id} href="#" className="group flex gap-3 items-start">
                    <span className="text-2xl font-bold text-white/10 leading-none tabular-nums w-6 shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <div className="text-xs text-[#00C2A8]/70 mb-0.5">{item.category}</div>
                      <div className="text-sm text-white/70 font-medium group-hover:text-white transition-colors leading-snug">
                        {item.title}
                      </div>
                      <div className="text-xs text-white/30 mt-1">{item.readTime} read</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="rounded-xl bg-gradient-to-br from-[#0A2035] to-[#0A1628] border border-[#00C2A8]/20 p-5">
              <div className="w-8 h-8 rounded-lg bg-[#00C2A8]/15 flex items-center justify-center mb-3">
                <svg className="w-4 h-4 text-[#00C2A8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Healthcare Data Digest</h3>
              <p className="text-xs text-white/40 mb-4 leading-relaxed">
                Weekly roundup of clinical analytics, compliance updates, and interoperability news — no fluff.
              </p>
              {subscribed ? (
                <div className="text-xs text-[#00C2A8] py-2">
                  ✓ You&apos;re subscribed. Watch your inbox.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@health-system.org"
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#00C2A8]/40"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 rounded-lg bg-[#00C2A8] text-[#070E1A] text-sm font-semibold hover:bg-[#00C2A8]/90 transition-colors"
                  >
                    Subscribe Free
                  </button>
                </form>
              )}
            </div>

            {/* Topics cloud */}
            <div className="rounded-xl bg-[#0A1628]/60 border border-white/7 p-5">
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">Browse Topics</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'FHIR R4', 'HL7 v2', 'Epic Integration', 'Cerner', 'ICD-10', 'CPT Codes',
                  'HIPAA', 'PHI Encryption', 'Audit Trails', 'XGBoost', 'Random Forest',
                  'IoT Vitals', 'MQTT', 'Claims Scrubbing', 'Population Health', 'SDOH',
                ].map(tag => (
                  <button
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs text-white/40 bg-white/4 border border-white/6 hover:text-white/70 hover:border-white/15 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="border-t border-white/5 bg-[#0A1628]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            See the Platform Behind the Insights
          </h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">
            {BRAND.name} unifies your clinical, billing, and operational data into a single analytics layer — with AI built in.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#waitlist"
              className="px-6 py-3 rounded-xl bg-[#00C2A8] text-[#070E1A] font-semibold hover:bg-[#00C2A8]/90 transition-colors"
            >
              Request Early Access
            </Link>
            <Link
              href="/#features"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}