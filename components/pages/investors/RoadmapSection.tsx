"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    phase: "Phase 1",
    period: "2025 — Completed",
    title: "Foundation",
    items: [
      "USPTO trademark filed & registered (№99382778)",
      "S7® licensing agreement secured with VDF FutureCeuticals",
      "Partnership established with Power Brands (Van Nuys, CA)",
      "Formulation finalized with Flavorman (Louisville, KY)",
      "4 SKU flavor lineup developed",
    ],
    status: "done",
  },
  {
    phase: "Phase 2",
    period: "Q1–Q2 2026",
    title: "Launch",
    items: [
      "Initial production run (100k units)",
      "Republic Bank financing secured",
      "Regional distribution agreements signed",
      "Digital marketing campaign — NitricX.com launch",
      "Influencer athlete partnership program",
    ],
    status: "active",
  },
  {
    phase: "Phase 3",
    period: "Q3–Q4 2026",
    title: "Retail Rollout",
    items: [
      "National grocery chain placement (Whole Foods, Albertsons)",
      "Convenience channel (7-Eleven, AMPM, Walgreens)",
      "International expansion — UK / Tesco",
      "Costco bulk SKU introduction",
      "Series A raise",
    ],
    status: "upcoming",
  },
  {
    phase: "Phase 4",
    period: "2027+",
    title: "Scale",
    items: [
      "Walmart & Costco national",
      "International markets — LATAM, EU",
      "Brand extension (NitricX Recovery, NitricX Focus)",
      "Institutional investor round",
      "IPO readiness preparation",
    ],
    status: "upcoming",
  },
];

export default function RoadmapSection() {
  return (
    <section className="py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16">
          <div className="text-eyebrow flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-crimson" /> Roadmap
          </div>
          <h2 className="text-display text-5xl md:text-6xl">
            From launch<br />
            <span className="metallic">to category leader.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {milestones.map((m, i) => (
            <motion.div
              key={m.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`glass rounded-2xl p-7 ${m.status === "active" ? "border-crimson/40" : m.status === "done" ? "border-white/10" : "border-white/5"}`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`text-[10px] tracking-[0.4em] font-semibold uppercase ${m.status === "active" ? "text-crimson" : m.status === "done" ? "text-white/60" : "text-white/25"}`}>
                  {m.phase}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  m.status === "done" ? "bg-white/10 text-white/50" :
                  m.status === "active" ? "bg-crimson/20 text-crimson" :
                  "bg-white/5 text-white/20"
                }`}>
                  {m.status === "done" ? "Complete" : m.status === "active" ? "In Progress" : "Planned"}
                </span>
              </div>

              <div className="text-xs text-white/30 mb-2">{m.period}</div>
              <h3 className="text-xl font-bold tracking-tight mb-5">{m.title}</h3>

              <ul className="space-y-3">
                {m.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${m.status === "done" ? "bg-white/40" : m.status === "active" ? "bg-crimson" : "bg-white/20"}`} />
                    <span className="text-xs text-white/50 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
