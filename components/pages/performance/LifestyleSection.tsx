"use client";

import { motion } from "framer-motion";

const images = [
  { src: "/images/IMG_3256.jpeg", alt: "NitricX athlete", className: "col-span-1 row-span-2" },
  { src: "/images/PHOTO-2026-04-10-09-57-35.jpg", alt: "NitricX product", className: "col-span-1 row-span-1" },
  { src: "/images/IMG_3259.jpeg", alt: "NitricX lifestyle", className: "col-span-1 row-span-1" },
  { src: "/images/IMG_0541-1_JPG.jpg", alt: "NitricX performance", className: "col-span-1 row-span-1" },
  { src: "/images/IMG_4552-2_JPG.jpg", alt: "NitricX session", className: "col-span-1 row-span-1" },
];

export default function LifestyleSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="text-eyebrow flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-crimson" /> Real Athletes. Real Results.
            </div>
            <h2 className="text-display text-5xl md:text-6xl mb-6">
              Performance<br />
              <span className="metallic">looks like this.</span>
            </h2>
            <p className="text-white/55 leading-relaxed mb-6">
              NitricX is built for athletes who take their craft seriously. Whether you&apos;re training for a competition, a personal record, or just refusing to accept average, this formula was engineered for you.
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              12 oz slim can. Carbonated. No artificial dyes. No synthetic caffeine.
              Evaporated coconut water. Bluava® agave. The S7® Blend.
            </p>
          </motion.div>

          {/* Single image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden"
          >
            <img src="/images/performance.png" alt="NitricX performance" className="w-full h-auto object-contain" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
