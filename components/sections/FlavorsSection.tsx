"use client";

import { motion } from "framer-motion";

const flavors = [
  {
    name: "Coconut",
    note: "Tropical · Smooth",
    glow: "rgba(255,255,255,0.35)",
    image: "/images/coco.png",
  },
  {
    name: "Blue Raspberry",
    note: "Sharp · Electric",
    glow: "rgba(40,80,255,0.45)",
    image: "/images/blue.png",
  },
  {
    name: "Black Cherry",
    note: "Deep · Bold",
    glow: "rgba(225,10,30,0.55)",
    image: "/images/black.png",
  },
  {
    name: "Grape",
    note: "Rich · Modern",
    glow: "rgba(140,40,220,0.45)",
    image: "/images/grape.png",
  },
];

export default function FlavorsSection() {
  return (
    <section id="flavors" className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-crimson/[0.07] blur-[140px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-eyebrow mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-crimson" /> Four Flavors. One Standard.
            </div>
            <h2 className="text-display text-5xl md:text-7xl">
              The <span className="metallic">collection.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/55 leading-relaxed">
            Crafted with evaporated coconut water, Bluava® agave, and the S7® plant
            blend. 12 oz slim cans. Carbonated. Premium athletic formulation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flavors.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              className="group relative"
            >
              <div className="relative rounded-3xl p-6 pb-10 overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-white/[0.06]" style={{ background: "linear-gradient(140deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))" }}>
                <div
                  className="pointer-events-none absolute -inset-12 opacity-40 group-hover:opacity-80 transition-opacity duration-700"
                  style={{ background: `radial-gradient(60% 50% at 50% 100%, ${f.glow}, transparent 70%)` }}
                />

                <div className="relative flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase">0{i + 1}</span>
                  <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">12 oz</span>
                </div>

                {/* Can image */}
                <div
                  className="relative my-4 animate-floatY"
                  style={{
                    width: "100%",
                    height: "260px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "transparent",
                    animationDelay: `${i * 0.4}s`,
                  }}
                >
                  <img
                    src={f.image}
                    alt={`NitricX ${f.name}`}
                    style={{
                      height: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      maxWidth: "95%",
                      objectFit: "contain",
                      display: "block",
                      background: "transparent",
                    }}
                  />
                </div>

                <div className="relative">
                  <div className="text-[11px] tracking-[0.3em] text-white/40 uppercase mb-2">{f.note}</div>
                  <div className="flex items-end justify-between">
                    <h3 className="text-2xl font-bold tracking-tight">{f.name}</h3>
                    <span className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center group-hover:border-crimson group-hover:bg-crimson transition-all duration-300">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
