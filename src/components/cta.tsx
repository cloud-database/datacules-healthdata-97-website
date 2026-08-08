import { BRAND } from '@/lib/brand';

export function Cta() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="relative rounded-3xl p-12 sm:p-16 overflow-hidden text-center"
          style={{ background: `linear-gradient(135deg, var(--brand-primary), var(--brand-accent))` }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
              Ready to get started?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              {BRAND.description.slice(0, 160)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BRAND.auth.register}
                className="px-8 py-4 rounded-xl bg-white font-bold text-lg transition-all hover:scale-105 active:scale-95"
                style={{ color: `var(--brand-primary)` }}
              >
                {BRAND.messaging.cta}
              </a>
              <a
                href={BRAND.auth.login}
                className="px-8 py-4 rounded-xl border border-white/40 text-white font-bold text-lg hover:bg-white/10 transition-all"
              >
                Log in
              </a>
            </div>
            <p className="text-white/50 text-sm mt-5">No credit card required to get started.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
