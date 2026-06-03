"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const phases = [
  { n: "01", t: "Activation", d: "Within 15–30 minutes, elevated nitric oxide levels begin expanding blood vessels. Vasodilation is measurable before you touch a weight." },
  { n: "02", t: "Peak Output", d: "At full effect, oxygen and nutrient delivery to working muscles is optimized. Strength, endurance, and power output all improve simultaneously." },
  { n: "03", t: "Sustained Flow", d: "Unlike synthetic stimulants that spike and crash, the S7® effect builds gradually and holds. Your performance window extends, not compresses." },
  { n: "04", t: "Recovery Mode", d: "Post-session, the antioxidant and anti-inflammatory stack (Tart Cherry, Turmeric, Blueberry) continues working — reducing soreness, accelerating repair." },
];

export default function ScienceSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={ref} className="relative py-28 lg:py-40 overflow-hidden bg-ink-soft border-y border-white/5">
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-crimson/10 blur-[140px]" />
      </motion.div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-2xl mb-20">
          <div className="text-eyebrow flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-crimson" /> How It Works
          </div>
          <h2 className="text-display text-5xl md:text-7xl">
            The science<br />
            <span className="metallic">behind the flow.</span>
          </h2>
          <p className="mt-6 text-white/55 leading-relaxed">
            NitricX works in four distinct phases — from first sip to final rep and beyond. Understanding the timeline is understanding the edge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {phases.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative ${i % 2 ? "md:translate-y-16" : ""}`}
            >
              <div className="text-[10px] tracking-[0.45em] text-crimson font-medium mb-4">PHASE {p.n}</div>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">{p.t}</h3>
              <p className="text-white/55 leading-relaxed">{p.d}</p>
              <div className="divider-line mt-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
