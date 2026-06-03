"use client";

import { motion } from "framer-motion";

const comparison = [
  { category: "Core Ingredient", nitricx: "S7® Blend (patent-protected)", competition: "Synthetic caffeine / taurine" },
  { category: "Stimulant Profile", nitricx: "Zero synthetic stimulants", competition: "200-350mg synthetic caffeine" },
  { category: "Label Transparency", nitricx: "Full disclosure, every dose", competition: "Proprietary blends" },
  { category: "Clinical Research", nitricx: "Peer-reviewed S7® study", competition: "Internal / none" },
  { category: "Electrolyte Source", nitricx: "Evaporated coconut water", competition: "Synthetic sodium / potassium" },
  { category: "Sweetener", nitricx: "Bluava® organic agave", competition: "Sucralose / aspartame" },
  { category: "Target Positioning", nitricx: "Premium athletic performance", competition: "Mass market energy" },
  { category: "IP Protection", nitricx: "USPTO Trademark #99382778", competition: "Generic brand names" },
];

export default function DifferentiatorSection() {
  return (
    <section className="py-24 lg:py-32 bg-ink-soft border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16">
          <div className="text-eyebrow flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-crimson" /> Competitive Differentiation
          </div>
          <h2 className="text-display text-5xl md:text-6xl">
            NitricX vs. the<br />
            <span className="metallic">field.</span>
          </h2>
        </motion.div>

        {/* Comparison table */}
        <div className="overflow-hidden rounded-2xl border border-white/5">
          {/* Header */}
          <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/5 px-6 py-4">
            <div className="text-[11px] tracking-[0.3em] text-white/40 uppercase">Category</div>
            <div className="text-[11px] tracking-[0.3em] text-crimson uppercase font-semibold">NitricX</div>
            <div className="text-[11px] tracking-[0.3em] text-white/30 uppercase">Competition</div>
          </div>

          {comparison.map((row, i) => (
            <motion.div
              key={row.category}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`grid grid-cols-3 px-6 py-5 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}
            >
              <div className="text-sm text-white/50">{row.category}</div>
              <div className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                {row.nitricx}
              </div>
              <div className="text-sm text-white/30">{row.competition}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
