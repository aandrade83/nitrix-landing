"use client";

import { motion } from "framer-motion";

export default function InvestorCTA() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-crimson/10 blur-[140px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="text-eyebrow flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-crimson" /> Get in Touch
          </div>
          <h2 className="text-display text-5xl md:text-7xl mb-6">
            Ready to be part<br />
            <span className="metallic">of what's next?</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-xl">
            NitricX is seeking strategic investment partners to accelerate our
            retail launch and international expansion. Request our full investor
            memorandum and financial projections below.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="mailto:management@nitricx.com"
              className="btn-primary"
            >
              Request Investor Deck →
            </a>
            <a
              href="mailto:management@nitricx.com"
              className="btn-ghost"
            >
              Schedule a Call
            </a>
          </div>

          {/* Contact block */}
          <div className="glass rounded-2xl p-8 max-w-lg">
            <div className="text-[11px] tracking-[0.4em] text-white/40 uppercase mb-4">Contact</div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-white/35 mb-1">Investor Relations</div>
                <a href="mailto:management@nitricx.com" className="text-white hover:text-crimson transition-colors font-medium">
                  management@nitricx.com
                </a>
              </div>
              <div className="pt-3 border-t border-white/5">
                <div className="text-xs text-white/35 mb-1">Legal Entity</div>
                <div className="text-white/70 text-sm">Palumbo Arosemena Holdings LLC</div>
              </div>
              <div className="pt-3 border-t border-white/5">
                <div className="text-xs text-white/35 mb-1">Production Partner</div>
                <div className="text-white/70 text-sm">Power Brands — Van Nuys, CA</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
