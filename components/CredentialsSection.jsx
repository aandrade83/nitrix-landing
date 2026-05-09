"use client";
import { motion } from "framer-motion";

const badges = [
  {
    tag: "USPTO",
    title: "NITRIC X™",
    sub: "Registered Trademark",
    detail: "License №99382778 · Filed 09 / 09 / 2025",
  },
  {
    tag: "S7®",
    title: "Best New Ingredient",
    sub: "Food Matters Live Awards",
    detail: "2019 Winner · Sponsored by AB Mauri",
  },
  {
    tag: "NIE",
    title: "Awards Winner",
    sub: "Nutrition Industry Executive",
    detail: "2019 · Plant-based performance category",
  },
  {
    tag: "FDA",
    title: "Plant-Powered",
    sub: "Non-Nitrate · Stimulant-Free",
    detail: "Clinically researched S7® formulation",
  },
];

const partners = [
  "POWER BRANDS",
  "FLAVORMAN",
  "FUTURECEUTICALS",
  "REPUBLIC BANK",
];

const retailers = [
  "WALMART",
  "COSTCO",
  "WHOLE FOODS",
  "TRADER JOE'S",
  "ALBERTSONS",
  "SAFEWAY",
  "WALGREENS",
  "7-ELEVEN",
  "TESCO",
  "AMPM",
];

export default function CredentialsSection() {
  return (
    <section id="credentials" className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-crimson/[0.06] blur-[140px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-eyebrow mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-crimson" /> Credentials
            </div>
            <h2 className="text-display text-5xl md:text-7xl">
              Built on<br />
              <span className="metallic">verified ground.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/55 leading-relaxed">
            Trademarked. Award-winning ingredients. Backed by industry-leading
            beverage partners and a full retail distribution stack.
          </p>
        </div>

        {/* Badges grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {badges.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative glass rounded-2xl p-6 hover:border-crimson/40 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-[10px] tracking-[0.4em] text-crimson font-semibold">
                  {b.tag}
                </span>
                {/* seal */}
                <div className="relative w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:border-crimson/60 transition-colors">
                  <div className="absolute inset-1 rounded-full border border-white/10 group-hover:border-crimson/30 transition-colors" />
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold tracking-tight">{b.title}</h3>
              <div className="mt-1 text-sm text-white/65">{b.sub}</div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] tracking-wide text-white/40 leading-relaxed">
                {b.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <div className="mt-20">
          <div className="text-[11px] tracking-[0.4em] text-white/40 uppercase mb-6">
            Production & Partners
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden">
            {partners.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="bg-ink py-8 px-4 flex items-center justify-center text-center text-white/55 hover:text-white hover:bg-char transition-all duration-300"
              >
                <span className="font-extrabold tracking-[0.2em] text-sm">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Retailers marquee */}
        <div className="mt-16">
          <div className="text-[11px] tracking-[0.4em] text-white/40 uppercase mb-6">
            Targeted Retail Distribution
          </div>
          <div className="relative overflow-hidden reveal-mask">
            <div className="flex whitespace-nowrap animate-marquee gap-12 py-4">
              {[...retailers, ...retailers].map((r, i) => (
                <span
                  key={i}
                  className="text-2xl md:text-3xl font-extrabold tracking-[0.18em] text-white/20 hover:text-white/60 transition-colors"
                >
                  {r}
                  <span className="mx-12 text-crimson/50">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-14 text-xs text-white/35 max-w-2xl leading-relaxed">
          NITRIC X™ is a trademark of Palumbo Arosemena Holdings LLC, registered
          before the United States Patent and Trademark Office. S7® is a
          registered trademark of VDF FutureCeuticals, Inc. Production and
          distribution managed in partnership with Power Brands Beverage
          Specialists (Van Nuys, CA) and formulation services by Pro-Liquitech /
          Flavorman (Louisville, KY).
        </p>
      </div>
    </section>
  );
}
