"use client";

import { motion } from "framer-motion";

export default function InvestorsHero() {
  return (
    <section className="relative min-h-[75vh] flex items-end pb-20 pt-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(225,10,30,0.15),transparent_65%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-eyebrow flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-crimson" /> Investor Relations
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-display text-6xl md:text-8xl lg:text-[8vw] max-w-5xl"
        >
          The next category<br />
          <span className="metallic">leader is here.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 max-w-2xl text-white/60 text-lg leading-relaxed"
        >
          NitricX enters a $24 billion global energy drink market with a clinically differentiated, plant-powered formula, a trademarked brand, and a full retail distribution pipeline already in development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "$24B", label: "Global Market Size" },
            { value: "10+", label: "Target Retail Chains" },
            { value: "USPTO", label: "Registered Trademark" },
            { value: "S7®", label: "Patented Core Ingredient" },
          ].map((stat) => (
            <div key={stat.label} className="border-l border-white/10 pl-6">
              <div className="text-3xl md:text-4xl font-black tracking-tight text-white">{stat.value}</div>
              <div className="text-xs tracking-widest text-white/40 uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
