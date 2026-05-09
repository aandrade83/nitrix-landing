"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const s7 = [
  "Green Coffee Bean",
  "Green Tea",
  "Turmeric",
  "Tart Cherry",
  "Blueberry",
  "Broccoli",
  "Kale",
];

const supporting = [
  { k: "Magnesium Taurate", v: "1.12 g" },
  { k: "Bluava® Agave", v: "33.17 g" },
  { k: "Evaporated Coconut Water", v: "5.26 g" },
  { k: "L-Malic Acid", v: "0.18 g" },
  { k: "Citric Acid", v: "0.50 g" },
  { k: "S7® Blend", v: "50 mg" },
];

export default function FormulaSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yCan = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section id="formula" ref={ref} className="relative py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-crimson/15 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
        {/* Can */}
        <motion.div
          style={{ y: yCan, rotate }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="relative w-[260px] md:w-[320px] aspect-[1/2.6] can-shadow animate-floatY">
            <div className="absolute inset-0 rounded-[28px] overflow-hidden" style={{ background: "linear-gradient(180deg,#0a0a0d 0%, #050507 100%)" }}>
              <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700" />
              <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-zinc-300 via-zinc-500 to-zinc-700" />

              {/* condensation */}
              {Array.from({ length: 28 }).map((_, k) => (
                <span
                  key={k}
                  className="absolute rounded-full bg-white/30"
                  style={{
                    width: `${2 + (k % 4)}px`,
                    height: `${2 + (k % 4)}px`,
                    left: `${(k * 13) % 92 + 4}%`,
                    top: `${(k * 19) % 88 + 6}%`,
                    filter: "blur(0.6px)",
                  }}
                />
              ))}

              {/* X */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[260px] font-black text-crimson leading-none select-none" style={{ textShadow: "0 0 60px rgba(225,10,30,0.7)" }}>
                  X
                </span>
              </div>

              {/* wordmark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-2xl font-extrabold tracking-[0.15em]">
                  NITRIC<span className="text-crimson">X</span>
                </div>
              </div>

              <div className="absolute inset-y-0 left-2 w-3 bg-gradient-to-r from-white/25 to-transparent" />
              <div className="absolute inset-y-0 right-2 w-3 bg-gradient-to-l from-black/60 to-transparent" />

              <div className="absolute bottom-12 left-0 right-0 text-center">
                <div className="text-[10px] tracking-[0.4em] text-white/70">PREMIUM</div>
                <div className="text-[10px] tracking-[0.4em] text-white/50">ATHLETIC FORMULATION</div>
              </div>
            </div>

            {/* glow ring */}
            <div className="absolute -inset-10 rounded-full bg-crimson/20 blur-3xl -z-10 animate-glowPulse" />
          </div>
        </motion.div>

        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
          >
            <div className="text-eyebrow mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-crimson" /> The Formula
            </div>
            <h2 className="text-display text-5xl md:text-7xl">
              Plant-powered.<br />
              <span className="metallic">Performance-forward.</span>
            </h2>
            <p className="mt-6 text-white/60 max-w-xl leading-relaxed">
              The S7® core — a clinically researched blend of seven plant-based
              ingredients — sits at the heart of NitricX. Supported by Magnesium
              Taurate, Bluava® agave, and evaporated coconut water for a clean,
              natural athletic profile.
            </p>
          </motion.div>

          {/* S7 chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10"
          >
            <div className="text-[11px] tracking-[0.4em] text-crimson uppercase mb-4">
              S7® Blend
            </div>
            <div className="flex flex-wrap gap-2">
              {s7.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="glass px-4 py-2 rounded-full text-xs tracking-wide text-white/80 hover:border-crimson/50 hover:text-white transition-colors"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Stat lines */}
          <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-5">
            {supporting.map((row, i) => (
              <motion.div
                key={row.k}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3"
              >
                <span className="text-sm text-white/65">{row.k}</span>
                <span className="font-semibold tracking-tight">{row.v}</span>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-xs text-white/35 max-w-md leading-relaxed">
            S7® is a registered trademark of VDF FutureCeuticals, Inc. NitricX®
            and the X mark are trademarks of Palumbo Arosemena Holdings LLC.
          </p>
        </div>
      </div>
    </section>
  );
}
