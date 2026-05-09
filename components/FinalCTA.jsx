"use client";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative min-h-screen flex items-center overflow-hidden">
      {/* moving gradient bg */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,rgba(225,10,30,0.35),transparent_70%)]" />
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-1/4 opacity-40"
          style={{
            background: "conic-gradient(from 0deg, rgba(225,10,30,0.3), transparent 30%, rgba(255,255,255,0.06) 60%, transparent 80%, rgba(225,10,30,0.3))",
            filter: "blur(80px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
      </div>

      {/* marquee */}
      <div className="absolute top-12 inset-x-0 overflow-hidden opacity-30">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10 px-5 text-display text-7xl md:text-9xl text-white/10">
              {Array.from({ length: 6 }).map((__, i) => (
                <span key={i} className="flex items-center gap-10">
                  NITRIC<span className="text-crimson/50">X</span>
                  <span className="w-3 h-3 rounded-full bg-crimson/40" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 w-full text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <div className="text-eyebrow mb-8 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-crimson" />
            Natural Performance Drink
            <span className="w-8 h-px bg-crimson" />
          </div>
          <h2 className="text-display text-[14vw] md:text-[10vw] lg:text-[7.5vw] leading-[0.9]">
            FEEL IT.<br />
            <span className="metallic">BUILD IT.</span><br />
            RIDE IT.
          </h2>
          <p className="mt-10 max-w-xl mx-auto text-white/60 leading-relaxed">
            NitricX launches in 2026. Engineered with Power Brands. Distributed at
            scale across the U.S. retail market.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#" className="btn-primary">
              Experience NitricX
              <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
            </a>
            <a href="mailto:management@palumbocorporatestrategies.tech" className="btn-ghost">
              Contact
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
