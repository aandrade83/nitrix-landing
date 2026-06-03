"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    icon: "⚡",
    title: "Clean Energy Surge",
    body: "Green Coffee Bean and Green Tea deliver a smooth, sustained energy boost with no adrenal crash and no jitter. Just clean, focused power from the first sip.",
    metric: "~150 mg natural caffeine per serving",
  },
  {
    icon: "🫀",
    title: "Superior Blood Flow",
    body: "Beet Root and the full S7® blend drive a clinically documented 40% increase in nitric oxide output, expanding blood vessels for massive muscle pump and oxygen delivery.",
    metric: "+40% Nitric Oxide vs. placebo*",
  },
  {
    icon: "🔥",
    title: "Accelerated Recovery",
    body: "Tart Cherry and Turmeric combat exercise-induced inflammation at the source. Less soreness. Faster adaptation. Train again sooner.",
    metric: "Anti-inflammatory antioxidant stack",
  },
  {
    icon: "🧠",
    title: "Cognitive Focus",
    body: "Blueberry Extract enhances cerebral blood flow and reduces oxidative stress under load, keeping your mind as sharp as your muscles are primed.",
    metric: "Anthocyanin-rich cognitive support",
  },
  {
    icon: "🌿",
    title: "Cellular Defense",
    body: "Kale and Broccoli Sprout provide dense micronutrients and sulforaphane, activating your body's own antioxidant defenses at a genetic level.",
    metric: "Nrf2 pathway activation",
  },
  {
    icon: "✓",
    title: "Zero Synthetic Fillers",
    body: "Full label transparency. Every ingredient is declared with its exact dose. No proprietary blends masking underdosed actives. What you see is what you get.",
    metric: "100% label transparency",
  },
];

export default function BenefitsGrid() {
  return (
    <section className="py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-eyebrow flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-crimson" /> Benefits
          </div>
          <h2 className="text-display text-5xl md:text-7xl">
            Six ways NitricX<br />
            <span className="metallic">changes the game.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              className="group glass rounded-2xl p-7 hover:border-crimson/30 transition-all duration-400"
            >
              <div className="text-3xl mb-5" aria-hidden>{b.icon}</div>
              <h3 className="text-xl font-bold tracking-tight mb-3">{b.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6">{b.body}</p>
              <div className="pt-4 border-t border-white/8 text-[11px] tracking-wide text-crimson font-medium">
                {b.metric}
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 text-xs text-white/30 leading-relaxed max-w-xl">
          *Compared to placebo in a peer-reviewed, double-blind clinical study on the S7® Blend. Individual results may vary.
        </p>
      </div>
    </section>
  );
}
