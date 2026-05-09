"use client";
import { motion } from "framer-motion";

const flavors = [
  {
    name: "Coconut",
    note: "Tropical · Smooth",
    accent: "from-white via-zinc-200 to-zinc-400",
    glow: "rgba(255,255,255,0.35)",
    canBg: "linear-gradient(180deg, #f4f4f6 0%, #cfcfd4 100%)",
    text: "text-black",
  },
  {
    name: "Blue Raspberry",
    note: "Sharp · Electric",
    accent: "from-blue-500 via-indigo-600 to-blue-900",
    glow: "rgba(40,80,255,0.45)",
    canBg: "linear-gradient(180deg, #1d3aa8 0%, #0a153f 100%)",
    text: "text-white",
  },
  {
    name: "Black Cherry",
    note: "Deep · Bold",
    accent: "from-zinc-700 via-zinc-900 to-black",
    glow: "rgba(225,10,30,0.55)",
    canBg: "linear-gradient(180deg, #1a1a1f 0%, #050507 100%)",
    text: "text-white",
  },
  {
    name: "Grape",
    note: "Rich · Modern",
    accent: "from-purple-500 via-purple-800 to-fuchsia-900",
    glow: "rgba(140,40,220,0.45)",
    canBg: "linear-gradient(180deg, #6a26b8 0%, #2a0a55 100%)",
    text: "text-white",
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
              <div className="relative glass rounded-3xl p-6 pb-10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/15">
                <div
                  className="pointer-events-none absolute -inset-12 opacity-40 group-hover:opacity-80 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(60% 50% at 50% 100%, ${f.glow}, transparent 70%)`,
                  }}
                />

                <div className="relative flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase">
                    0{i + 1}
                  </span>
                  <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
                    12 oz
                  </span>
                </div>

                {/* Stylized can */}
                <div className="relative my-8 flex justify-center can-shadow animate-floatY" style={{ animationDelay: `${i * 0.4}s` }}>
                  <div
                    className="relative w-[110px] h-[280px] rounded-[18px] overflow-hidden"
                    style={{ background: f.canBg }}
                  >
                    {/* metallic top */}
                    <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-600" />
                    <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600" />

                    {/* condensation dots */}
                    {Array.from({ length: 14 }).map((_, k) => (
                      <span
                        key={k}
                        className="absolute rounded-full bg-white/40"
                        style={{
                          width: `${2 + (k % 3)}px`,
                          height: `${2 + (k % 3)}px`,
                          left: `${(k * 17) % 90 + 5}%`,
                          top: `${(k * 23) % 80 + 10}%`,
                          filter: "blur(0.5px)",
                        }}
                      />
                    ))}

                    {/* big red X */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[140px] font-black text-crimson leading-none select-none" style={{ textShadow: "0 0 30px rgba(225,10,30,0.6)" }}>
                        X
                      </span>
                    </div>

                    {/* wordmark */}
                    <div className={`absolute inset-x-0 bottom-12 text-center ${f.text}`}>
                      <div className="text-xs font-extrabold tracking-[0.18em] rotate-[-90deg] origin-center inline-block">
                        NITRIC<span className="text-crimson">X</span>
                      </div>
                    </div>

                    {/* highlight */}
                    <div className="absolute inset-y-0 left-2 w-2 bg-gradient-to-r from-white/30 to-transparent" />
                    <div className="absolute inset-y-0 right-2 w-2 bg-gradient-to-l from-black/40 to-transparent" />
                  </div>
                </div>

                <div className="relative">
                  <div className="text-[11px] tracking-[0.3em] text-white/40 uppercase mb-2">
                    {f.note}
                  </div>
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
