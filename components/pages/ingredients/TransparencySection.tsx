"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const guarantees = [
  { icon: "🔬", title: "Clinically Researched", body: "The S7® Blend is backed by peer-reviewed, double-blind clinical research, not marketing copy." },
  { icon: "📋", title: "Full Label Disclosure", body: "Every ingredient listed with its exact dose. No 'proprietary blend' hiding underdosed actives." },
  { icon: "🌿", title: "Plant-Based Only", body: "Zero synthetic stimulants. Zero artificial colors or dyes. 100% plant-derived active ingredients." },
  { icon: "✅", title: "Trademarked Formula", body: "NITRIC X™ is a USPTO-registered trademark. The formula is protected intellectual property." },
];

export default function TransparencySection() {
  return (
    <section className="py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-eyebrow flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-crimson" /> Our Guarantee
          </div>
          <h2 className="text-display text-5xl md:text-6xl">
            The NitricX<br />
            <span className="metallic">standard.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-3xl mb-4" aria-hidden>{g.icon}</div>
              <h3 className="font-bold text-base mb-2">{g.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{g.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="/#waitlist" className="btn-primary">Join the Waitlist →</a>
          <Link href="/performance" className="btn-ghost">See Performance Benefits</Link>
        </motion.div>

        <p className="mt-12 text-center text-xs text-white/25 max-w-2xl mx-auto leading-relaxed">
          S7® is a registered trademark of VDF FutureCeuticals, Inc. and is protected by US Patent Nos. 9,615,596 and 10,080,375.
          NITRIC X™ and related marks are trademarks of Palumbo Arosemena Holdings LLC. All formulation data is provided for informational purposes.
          These statements have not been evaluated by the Food and Drug Administration.
        </p>
      </div>
    </section>
  );
}
