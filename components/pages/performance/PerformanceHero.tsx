"use client";

import { motion } from "framer-motion";

export default function PerformanceHero() {
  return (
    <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden pt-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(225,10,30,0.20),transparent_65%)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Product image full bleed */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent z-10" />
          <img
            src="/images/IMG_3188_edited.jpg"
            alt="NitricX athlete performance"
            className="w-full h-full object-cover object-center opacity-50"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-eyebrow flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-crimson" />
          Performance Science
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-display text-6xl md:text-8xl lg:text-[9vw] max-w-4xl"
        >
          Your body.<br />
          <span className="metallic">Unleashed.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 max-w-xl text-white/60 text-lg leading-relaxed"
        >
          NitricX works at the cellular level, elevating nitric oxide production,
          improving oxygen delivery, and priming your muscles for peak output.
          No synthetic stimulants. No shortcuts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex gap-10"
        >
          {[
            { value: "40%", label: "More Nitric Oxide*" },
            { value: "0", label: "Synthetic Stimulants" },
            { value: "S7®", label: "Clinically Researched" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-black tracking-tight text-white">{stat.value}</div>
              <div className="text-xs tracking-widest text-white/40 uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
