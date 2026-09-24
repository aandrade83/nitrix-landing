"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/i18n/LocaleProvider";

const statuses = ["done", "active", "upcoming", "upcoming"] as const;

const content = {
  en: {
    eyebrow: "Roadmap",
    titleA: "From launch",
    titleB: "to category leader.",
    statusLabels: { done: "Complete", active: "In Progress", upcoming: "Planned" },
    milestones: [
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
      },
    ],
  },
  es: {
    eyebrow: "Hoja de Ruta",
    titleA: "Del lanzamiento",
    titleB: "al liderazgo de la categoría.",
    statusLabels: { done: "Completado", active: "En Progreso", upcoming: "Planificado" },
    milestones: [
      {
        phase: "Fase 1",
        period: "2025 — Completada",
        title: "Fundación",
        items: [
          "Marca USPTO presentada y registrada (№99382778)",
          "Acuerdo de licencia S7® asegurado con VDF FutureCeuticals",
          "Alianza establecida con Power Brands (Van Nuys, CA)",
          "Formulación finalizada con Flavorman (Louisville, KY)",
          "Línea de 4 sabores (SKU) desarrollada",
        ],
      },
      {
        phase: "Fase 2",
        period: "T1–T2 2026",
        title: "Lanzamiento",
        items: [
          "Primera producción (100 mil unidades)",
          "Financiamiento de Republic Bank asegurado",
          "Acuerdos de distribución regional firmados",
          "Campaña de marketing digital — lanzamiento de NitricX.com",
          "Programa de alianzas con atletas influencers",
        ],
      },
      {
        phase: "Fase 3",
        period: "T3–T4 2026",
        title: "Despliegue Minorista",
        items: [
          "Presencia en cadenas nacionales de supermercados (Whole Foods, Albertsons)",
          "Canal de conveniencia (7-Eleven, AMPM, Walgreens)",
          "Expansión internacional — Reino Unido / Tesco",
          "Introducción de SKU a granel en Costco",
          "Ronda Serie A",
        ],
      },
      {
        phase: "Fase 4",
        period: "2027+",
        title: "Escala",
        items: [
          "Walmart y Costco a nivel nacional",
          "Mercados internacionales — LATAM, UE",
          "Extensión de marca (NitricX Recovery, NitricX Focus)",
          "Ronda de inversionistas institucionales",
          "Preparación para salida a bolsa (IPO)",
        ],
      },
    ],
  },
};

export default function RoadmapSection() {
  const t = content[useLocale()];
  const milestones = t.milestones.map((m, i) => ({ ...m, status: statuses[i] }));

  return (
    <section className="py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16">
          <div className="text-eyebrow flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-crimson" /> {t.eyebrow}
          </div>
          <h2 className="text-display text-5xl md:text-6xl">
            {t.titleA}<br />
            <span className="metallic">{t.titleB}</span>
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
                  {t.statusLabels[m.status]}
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
