"use client";

import { motion } from "framer-motion";

export default function IngredientsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end pb-20 pt-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(225,10,30,0.18),transparent_65%)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-eyebrow flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-crimson" /> Full Label Transparency
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-display text-6xl md:text-8xl lg:text-[9vw] max-w-4xl"
        >
          Nothing hidden.<br />
          <span className="metallic">Everything declared.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 max-w-xl text-white/60 text-lg leading-relaxed"
        >
          NitricX contains 13 carefully selected ingredients, each chosen for a specific, documented purpose. No fillers. No proprietary blend cover-ups.
          Every dose shown exactly as it is.
        </motion.p>
      </div>
    </section>
  );
}
