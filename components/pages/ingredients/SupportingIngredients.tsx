"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/i18n/LocaleProvider";

const content = {
  en: {
    eyebrow: "Supporting Formula",
    titleA: "Every ingredient.",
    titleB: "Every purpose.",
    supporting: [
      {
        name: "Magnesium Taurate",
        dose: "1.12 g",
        role: "Muscle Function & Recovery",
        description: "Magnesium is essential for ATP synthesis, the energy currency of every muscle contraction. Taurate form ensures superior absorption and bioavailability versus oxide or citrate forms.",
      },
      {
        name: "Bluava® Agave",
        dose: "33.17 g",
        role: "Natural Sweetener & Electrolyte",
        description: "Organic blue agave nectar from Jalisco, Mexico. Low glycemic index. Provides clean sweetness without blood sugar spikes, plus prebiotic inulin for gut health.",
      },
      {
        name: "Evaporated Coconut Water",
        dose: "5.26 g",
        role: "Electrolyte Hydration",
        description: "Nature's sports drink. Rich in potassium, sodium, and magnesium, the three electrolytes most depleted during intense exercise. Replenishes without artificial additives.",
      },
      {
        name: "L-Malic Acid",
        dose: "0.18 g",
        role: "Energy Metabolism",
        description: "An intermediate in the Krebs cycle, the biochemical pathway that converts nutrients into ATP. Supports energy production efficiency during sustained output.",
      },
      {
        name: "Citric Acid",
        dose: "0.50 g",
        role: "pH Balance & Flavor",
        description: "Natural citric acid from citrus fruits. Maintains optimal pH, enhances flavor profile, and acts as a natural preservative with zero synthetic alternatives needed.",
      },
      {
        name: "Carbonated Water",
        dose: "to volume",
        role: "Delivery & Absorption",
        description: "Light carbonation enhances palatability and may improve gastric emptying rate, meaning the formula reaches your bloodstream faster after consumption.",
      },
    ],
  },
  es: {
    eyebrow: "Fórmula de Apoyo",
    titleA: "Cada ingrediente.",
    titleB: "Cada propósito.",
    supporting: [
      {
        name: "Taurato de Magnesio",
        dose: "1.12 g",
        role: "Función Muscular y Recuperación",
        description: "El magnesio es esencial para la síntesis de ATP, la moneda energética de cada contracción muscular. La forma de taurato garantiza una absorción y biodisponibilidad superiores frente a las formas de óxido o citrato.",
      },
      {
        name: "Agave Bluava®",
        dose: "33.17 g",
        role: "Endulzante Natural y Electrolito",
        description: "Néctar orgánico de agave azul de Jalisco, México. Bajo índice glucémico. Aporta un dulzor limpio sin picos de azúcar en sangre, además de inulina prebiótica para la salud intestinal.",
      },
      {
        name: "Agua de Coco Evaporada",
        dose: "5.26 g",
        role: "Hidratación con Electrolitos",
        description: "La bebida deportiva de la naturaleza. Rica en potasio, sodio y magnesio, los tres electrolitos que más se agotan durante el ejercicio intenso. Repone sin aditivos artificiales.",
      },
      {
        name: "Ácido L-Málico",
        dose: "0.18 g",
        role: "Metabolismo Energético",
        description: "Un intermediario del ciclo de Krebs, la vía bioquímica que convierte los nutrientes en ATP. Favorece la eficiencia en la producción de energía durante esfuerzos sostenidos.",
      },
      {
        name: "Ácido Cítrico",
        dose: "0.50 g",
        role: "Equilibrio de pH y Sabor",
        description: "Ácido cítrico natural de frutas cítricas. Mantiene un pH óptimo, realza el perfil de sabor y actúa como conservante natural sin necesidad de alternativas sintéticas.",
      },
      {
        name: "Agua Carbonatada",
        dose: "c.s.p.",
        role: "Administración y Absorción",
        description: "Una carbonatación ligera mejora la palatabilidad y puede acelerar el vaciado gástrico, lo que significa que la fórmula llega antes a tu torrente sanguíneo tras consumirla.",
      },
    ],
  },
};

export default function SupportingIngredients() {
  const t = content[useLocale()];

  return (
    <section className="py-24 lg:py-32 bg-ink-soft border-t border-white/5">
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

        <div className="divide-y divide-white/5">
          {t.supporting.map((ing, i) => (
            <motion.article
              key={ing.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 hover:bg-white/[0.015] transition-colors duration-300 px-4 -mx-4 rounded-xl"
            >
              <div className="md:col-span-3">
                <div className="text-[10px] tracking-[0.4em] text-crimson font-semibold uppercase mb-1">{ing.role}</div>
                <h3 className="text-lg font-bold tracking-tight">{ing.name}</h3>
              </div>
              <div className="md:col-span-1 flex items-center">
                <span className="font-mono text-sm text-white/40">{ing.dose}</span>
              </div>
              <div className="md:col-span-8 flex items-center">
                <p className="text-white/55 text-sm leading-relaxed">{ing.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
