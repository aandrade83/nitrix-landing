"use client";
import { motion } from "framer-motion";

const moments = [
  { tag: "Run", title: "Trail · 6:42 AM", grad: "from-zinc-700 via-zinc-900 to-black" },
  { tag: "Lift", title: "Iron · Block 4", grad: "from-red-900 via-zinc-900 to-black" },
  { tag: "Climb", title: "Vertical · Crux", grad: "from-stone-700 via-stone-900 to-black" },
  { tag: "Sprint", title: "Track · Lane 3", grad: "from-zinc-800 via-black to-red-950" },
  { tag: "Cycle", title: "Saddle · Hour 2", grad: "from-neutral-700 via-neutral-900 to-black" },
  { tag: "Recover", title: "After · The Work", grad: "from-zinc-900 via-black to-zinc-900" },
];

export default function LifestyleSection() {
  return (
    <section id="performance" className="relative py-32 lg:py-44 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-eyebrow mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-crimson" /> Performance Lifestyle
            </div>
            <h2 className="text-display text-5xl md:text-7xl">
              Movement is<br />
              <span className="metallic">the message.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/55 leading-relaxed">
            Built for the disciplined. The early hour. The last rep. The next mile.
          </p>
        </div>
      </div>

      {/* Horizontal cinematic strip */}
      <div className="relative">
        <div className="overflow-x-auto no-scrollbar reveal-mask">
          <div className="flex gap-5 px-6 lg:px-10 pb-6 min-w-max">
            {moments.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.07 }}
                className={`relative w-[300px] md:w-[380px] aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br ${m.grad} group cursor-pointer`}
              >
                {/* texture grid */}
                <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_100%,rgba(225,10,30,0.35),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* abstract athlete silhouette */}
                <svg viewBox="0 0 200 260" className="absolute inset-0 w-full h-full opacity-25 group-hover:opacity-40 transition-opacity duration-700" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id={`g${i}`} x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
                      <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={`M${20 + i * 5},240 Q60,150 ${100 + i * 3},120 T180,40`} stroke={`url(#g${i})`} strokeWidth="1" fill="none" />
                  <path d={`M${10 + i * 7},250 Q80,170 ${110 + i * 2},130 T190,50`} stroke={`url(#g${i})`} strokeWidth="1" fill="none" />
                </svg>

                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white/70">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[10px] tracking-[0.4em] uppercase text-crimson">{m.tag}</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-2xl font-bold tracking-tight">{m.title}</div>
                  <div className="mt-2 h-px w-10 bg-crimson group-hover:w-20 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>
    </section>
  );
}
