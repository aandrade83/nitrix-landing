"use client";

import { motion } from "framer-motion";

const s7 = [
  {
    name: "Green Coffee Bean",
    dose: "Part of S7® 50 mg",
    role: "Clean Energy",
    description:
      "Unroasted coffee beans deliver natural chlorogenic acids for smooth, sustained energy without the spike-and-crash of synthetic caffeine.",
    color: "from-green-900/40 to-transparent",
  },
  {
    name: "Green Tea Extract",
    dose: "Part of S7® 50 mg",
    role: "Focus + Antioxidants",
    description:
      "EGCG-rich green tea supports cognitive clarity, fat metabolism, and provides a dense antioxidant layer to protect cells under exercise stress.",
    color: "from-emerald-900/40 to-transparent",
  },
  {
    name: "Turmeric Root",
    dose: "Part of S7® 50 mg",
    role: "Anti-Inflammation",
    description:
      "Curcumin in turmeric blocks NF-κB signaling, the primary inflammatory pathway activated during intense training, for faster inter-session recovery.",
    color: "from-yellow-900/40 to-transparent",
  },
  {
    name: "Tart Cherry",
    dose: "Part of S7® 50 mg",
    role: "Recovery + Soreness",
    description:
      "Anthocyanins in tart cherry have been shown to reduce post-exercise muscle soreness by up to 22% in peer-reviewed trials. Recover harder, perform sooner.",
    color: "from-red-900/40 to-transparent",
  },
  {
    name: "Blueberry Extract",
    dose: "Part of S7® 50 mg",
    role: "Cognitive + Vascular",
    description:
      "Rich in pterostilbene and anthocyanins, blueberry extract improves cerebral blood flow and reduces oxidative stress in neurons under high-output load.",
    color: "from-blue-900/40 to-transparent",
  },
  {
    name: "Broccoli Sprout",
    dose: "Part of S7® 50 mg",
    role: "Cellular Defense",
    description:
      "Sulforaphane from broccoli sprout activates Nrf2, the master antioxidant switch, triggering your body's own internal defense system for cellular protection.",
    color: "from-green-800/40 to-transparent",
  },
  {
    name: "Kale",
    dose: "Part of S7® 50 mg",
    role: "Micronutrient Density",
    description:
      "A complete micronutrient matrix of Vitamins K, A, C, B6, calcium, iron, copper, and manganese, supporting energy metabolism and oxygen utilization at the cellular level.",
    color: "from-lime-900/40 to-transparent",
  },
];

export default function S7BlendSection() {
  return (
    <section className="py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="text-[10px] tracking-[0.45em] text-crimson font-semibold uppercase">Core Formula</span>
            </div>
            <h2 className="text-display text-5xl md:text-7xl">
              The S7®<br />
              <span className="metallic">Blend.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <div className="glass rounded-2xl p-6 border-crimson/20 border">
              <div className="text-5xl font-black text-crimson mb-2">S7®</div>
              <p className="text-white/55 text-sm leading-relaxed">
                A patented, peer-reviewed combination of 7 plant-based ingredients shown to increase nitric oxide levels by 40% versus placebo.
                Winner of the 2019 Best New Ingredient award at Food Matters Live.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-[11px] tracking-widest text-white/35 uppercase">
                VDF FutureCeuticals, Inc. · 50 mg per serving
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ingredient cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {s7.map((ing, i) => (
            <motion.article
              key={ing.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              className="group relative glass rounded-2xl p-7 overflow-hidden hover:border-white/15 transition-all duration-400"
            >
              {/* Color tint */}
              <div className={`absolute inset-0 bg-gradient-to-br ${ing.color} opacity-60 group-hover:opacity-100 transition-opacity duration-400`} />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[10px] tracking-[0.4em] text-crimson font-semibold uppercase">{ing.role}</span>
                  <span className="text-[10px] tracking-wide text-white/30 font-mono">{ing.dose}</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3">{ing.name}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{ing.description}</p>
              </div>
            </motion.article>
          ))}

          {/* Blend total badge */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: s7.length * 0.07 }}
            className="flex flex-col items-center justify-center text-center glass rounded-2xl p-7 border-crimson/20"
          >
            <span className="text-6xl font-black text-crimson">7</span>
            <span className="text-white font-bold tracking-tight text-lg mt-2">Plants</span>
            <span className="text-white/40 text-xs tracking-widest uppercase mt-1">One Blend · 50 mg</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
