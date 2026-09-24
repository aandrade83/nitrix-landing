"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { localizeHref } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "Our Guarantee",
    titleA: "The NitricX",
    titleB: "standard.",
    guarantees: [
      { icon: "🔬", title: "Clinically Researched", body: "The S7® Blend is backed by peer-reviewed, double-blind clinical research, not marketing copy." },
      { icon: "📋", title: "Full Label Disclosure", body: "Every ingredient listed with its exact dose. No 'proprietary blend' hiding underdosed actives." },
      { icon: "🌿", title: "Plant-Based Only", body: "Zero synthetic stimulants. Zero artificial colors or dyes. 100% plant-derived active ingredients." },
      { icon: "✅", title: "Trademarked Formula", body: "NITRIC X™ is a USPTO-registered trademark. The formula is protected intellectual property." },
    ],
    waitlist: "Join the Waitlist →",
    performance: "See Performance Benefits",
    legal: "S7® is a registered trademark of VDF FutureCeuticals, Inc. and is protected by US Patent Nos. 9,615,596 and 10,080,375. NITRIC X™ and related marks are trademarks of Palumbo Arosemena Holdings LLC. All formulation data is provided for informational purposes. These statements have not been evaluated by the Food and Drug Administration.",
  },
  es: {
    eyebrow: "Nuestra Garantía",
    titleA: "El estándar",
    titleB: "NitricX.",
    guarantees: [
      { icon: "🔬", title: "Clínicamente Investigado", body: "El S7® Blend está respaldado por investigación clínica doble ciego y revisada por pares, no por textos de marketing." },
      { icon: "📋", title: "Etiqueta Completa", body: "Cada ingrediente listado con su dosis exacta. Sin \"mezclas patentadas\" que oculten activos subdosificados." },
      { icon: "🌿", title: "Solo a Base de Plantas", body: "Cero estimulantes sintéticos. Cero colorantes artificiales. 100% ingredientes activos de origen vegetal." },
      { icon: "✅", title: "Fórmula Registrada", body: "NITRIC X™ es una marca registrada ante la USPTO. La fórmula es propiedad intelectual protegida." },
    ],
    waitlist: "Únete a la Lista de Espera →",
    performance: "Ver Beneficios de Rendimiento",
    legal: "S7® es una marca registrada de VDF FutureCeuticals, Inc. y está protegida por las patentes estadounidenses N.º 9,615,596 y 10,080,375. NITRIC X™ y las marcas relacionadas son marcas comerciales de Palumbo Arosemena Holdings LLC. Todos los datos de formulación se ofrecen con fines informativos. Estas declaraciones no han sido evaluadas por la Administración de Alimentos y Medicamentos (FDA).",
  },
};

export default function TransparencySection() {
  const lang = useLocale();
  const t = content[lang];

  return (
    <section className="py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-eyebrow flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-crimson" /> {t.eyebrow}
          </div>
          <h2 className="text-display text-5xl md:text-6xl">
            {t.titleA}<br />
            <span className="metallic">{t.titleB}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {t.guarantees.map((g, i) => (
            <motion.div
              key={g.icon}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-3xl mb-4" aria-hidden>{g.icon}</div>
              <h3 className="font-bold text-base mb-2">{g.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{g.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href={`/${lang}#waitlist`} className="btn-primary">{t.waitlist}</a>
          <Link href={localizeHref(lang, "/performance")} className="btn-ghost">{t.performance}</Link>
        </motion.div>

        <p className="mt-12 text-center text-xs text-white/25 max-w-2xl mx-auto leading-relaxed">
          {t.legal}
        </p>
      </div>
    </section>
  );
}
