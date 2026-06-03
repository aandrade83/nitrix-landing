"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "Power Brands",
    role: "Production & Commercialization",
    detail: "Van Nuys, CA. Beverage specialists with 200+ brand launches and established retail relationships with every major US chain.",
  },
  {
    name: "Flavorman",
    role: "Formulation & R&D",
    detail: "Louisville, KY. Award-winning beverage R&D company with over 30 years of expertise in functional drink formulation.",
  },
  {
    name: "VDF FutureCeuticals",
    role: "S7® Ingredient Partner",
    detail: "Proprietary holder of the S7® patent. Exclusive licensing agreement for NitricX ensures a protected, defensible competitive moat.",
  },
  {
    name: "Republic Bank",
    role: "Financial Partner",
    detail: "Banking and financing relationship established to support initial production and early commercial operations.",
  },
];

const retailers = ["WALMART", "COSTCO", "WHOLE FOODS", "TRADER JOE'S", "ALBERTSONS", "SAFEWAY", "WALGREENS", "7-ELEVEN", "TESCO", "AMPM"];

export default function PartnersSection() {
  return (
    <section className="py-24 lg:py-32 bg-ink-soft border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Partners */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12">
          <div className="text-eyebrow flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-crimson" /> Strategic Partners
          </div>
          <h2 className="text-display text-5xl md:text-6xl">
            Built with the<br />
            <span className="metallic">best in the business.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass rounded-2xl p-7 hover:border-white/15 transition-colors duration-300"
            >
              <div className="text-[10px] tracking-[0.4em] text-crimson font-semibold uppercase mb-3">{p.role}</div>
              <h3 className="text-2xl font-extrabold tracking-tight mb-3">{p.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Retail pipeline */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-8">
          <div className="text-eyebrow flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-crimson" /> Retail Distribution Pipeline
          </div>
          <p className="text-white/50 text-sm max-w-xl">
            Power Brands has established commercial relationships with the following retail chains. NitricX is positioned for placement across all of them upon launch.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-white/5 rounded-xl overflow-hidden">
          {retailers.map((r, i) => (
            <motion.div
              key={r}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="bg-ink py-6 px-4 flex items-center justify-center text-center text-white/40 hover:text-white hover:bg-char transition-all duration-300"
            >
              <span className="font-extrabold tracking-[0.15em] text-xs">{r}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
