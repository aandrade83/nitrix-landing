"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "$24B", label: "Global energy drink market (2024)", sub: "Projected to reach $67B by 2032 at 13.8% CAGR" },
  { value: "$8.2B", label: "US market alone (2024)", sub: "Fastest growing functional beverage segment" },
  { value: "72%", label: "Consumers prefer natural", sub: "Over synthetic stimulant products (IFIC 2024)" },
  { value: "3.4x", label: "Premium segment growth", sub: "vs. value tier in the last 3 years" },
];

const whitespace = [
  { title: "No synthetic stimulants", description: "Every major competitor uses synthetic caffeine or taurine. NitricX is the only carbonated RTD built entirely on the S7® plant platform." },
  { title: "Clinically differentiated", description: "The S7® Blend is the only pre-workout ingredient with a peer-reviewed, published study showing 40% nitric oxide increase at 50 mg dose." },
  { title: "Premium positioning", description: "The 'natural performance' segment is under-served at the premium price point. NitricX targets the athlete consumer, not the casual energy drink buyer." },
  { title: "Full label transparency", description: "The supplement industry's trust deficit creates a massive opportunity for a brand that declares every ingredient and every dose. NitricX does this." },
];

export default function MarketOpportunity() {
  return (
    <section className="py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16">
          <div className="text-eyebrow flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-crimson" /> Market Opportunity
          </div>
          <h2 className="text-display text-5xl md:text-7xl max-w-3xl">
            Entering a market<br />
            <span className="metallic">at its inflection point.</span>
          </h2>
        </motion.div>

        {/* Market metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="glass rounded-2xl p-7"
            >
              <div className="text-4xl font-black text-crimson mb-3">{m.value}</div>
              <div className="text-sm font-semibold text-white mb-2">{m.label}</div>
              <div className="text-xs text-white/40 leading-relaxed">{m.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Whitespace analysis */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-10">
          <h3 className="text-3xl font-bold tracking-tight mb-8">The whitespace NitricX owns</h3>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {whitespace.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="glass rounded-2xl p-7 hover:border-crimson/25 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-crimson flex-shrink-0" />
                <h4 className="font-bold text-lg">{w.title}</h4>
              </div>
              <p className="text-white/55 text-sm leading-relaxed">{w.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
