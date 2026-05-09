"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const phases = [
  { n: "01", t: "Performance isn't instant.", d: "It begins quietly — circulation, oxygen, intent." },
  { n: "02", t: "It builds.", d: "Plant-powered S7® primes the body to do what it does best." },
  { n: "03", t: "You feel it.", d: "A clean activation. No jitter. No crash. Just signal." },
  { n: "04", t: "Then you ride it.", d: "Flow state, sustained. Pure, natural performance." },
];

export default function FlowSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="flow" ref={ref} className="relative py-32 lg:py-48 overflow-hidden">
      {/* Animated background lines */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute top-1/4 left-0 right-0 h-px flow-line opacity-40" />
        <div className="absolute top-1/2 left-0 right-0 h-px flow-line opacity-25" />
        <div className="absolute top-3/4 left-0 right-0 h-px flow-line opacity-30" />
        <div className="absolute -top-20 -right-40 w-[600px] h-[600px] rounded-full bg-crimson/15 blur-[120px]" />
        <div className="absolute -bottom-20 -left-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px]" />
      </motion.div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >
          <div className="text-eyebrow mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-crimson" /> The Flow Experience
          </div>
          <h2 className="text-display text-5xl md:text-7xl lg:text-8xl">
            Built for the<br />
            <span className="metallic">athlete in motion.</span>
          </h2>
        </motion.div>

        <div className="mt-20 lg:mt-28 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {phases.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative ${i % 2 ? "md:translate-y-24" : ""}`}
            >
              <div className="text-[10px] tracking-[0.45em] text-crimson font-medium mb-4">
                PHASE {p.n}
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[0.95]">
                {p.t}
              </h3>
              <p className="mt-5 text-white/55 max-w-md leading-relaxed">{p.d}</p>
              <div className="divider-line mt-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
