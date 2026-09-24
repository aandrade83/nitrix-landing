import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "Our Mission",
    title: "Why NitricX Exists.",
    pillars: [
      {
        number: "01",
        title: "Science-First Formula",
        body: "Every ingredient in NitricX is chosen for clinical relevance. No fillers. No proprietary blend smoke screens. Just performance, transparent and measurable.",
      },
      {
        number: "02",
        title: "Institutional-Grade Vision",
        body: "With a background in IPOs, private placements, and corporate strategy, Giovanni built NitricX to scale, engineered for retail, distribution, and international markets from day one.",
      },
      {
        number: "03",
        title: "It Works. Period.",
        body: "He's seen the market. He's tested the competition. NitricX was built because the category needed a product that could back its claims with real ingredients and real results.",
      },
    ],
    operatedUnder: "Operated under",
    location: "Wyoming, United States · Company No. 307-667-1455",
    entity: "Private holding and corporate strategy entity specializing in institutional investment, business development, and strategic consulting.",
  },
  es: {
    eyebrow: "Nuestra Misión",
    title: "Por Qué Existe NitricX.",
    pillars: [
      {
        number: "01",
        title: "Fórmula Basada en Ciencia",
        body: "Cada ingrediente de NitricX se elige por su relevancia clínica. Sin rellenos. Sin cortinas de humo de mezclas patentadas. Solo rendimiento, transparente y medible.",
      },
      {
        number: "02",
        title: "Visión de Nivel Institucional",
        body: "Con experiencia en salidas a bolsa, colocaciones privadas y estrategia corporativa, Giovanni creó NitricX para escalar, diseñada desde el primer día para el retail, la distribución y los mercados internacionales.",
      },
      {
        number: "03",
        title: "Funciona. Punto.",
        body: "Conoce el mercado. Ha probado a la competencia. NitricX se creó porque la categoría necesitaba un producto capaz de respaldar lo que promete con ingredientes reales y resultados reales.",
      },
    ],
    operatedUnder: "Operado por",
    location: "Wyoming, Estados Unidos · Compañía No. 307-667-1455",
    entity: "Entidad privada de holding y estrategia corporativa especializada en inversión institucional, desarrollo de negocios y consultoría estratégica.",
  },
};

export default function MissionSection({ lang }: { lang: Locale }) {
  const t = content[lang];

  return (
    <section className="py-24 px-6 lg:px-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-xs tracking-[0.3em] text-crimson uppercase mb-4 font-semibold">
            {t.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {t.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group relative p-8 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-crimson/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <p
                className="text-6xl font-extrabold text-white/5 group-hover:text-crimson/15 transition-colors duration-300 mb-6 leading-none select-none"
                aria-hidden="true"
              >
                {pillar.number}
              </p>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        {/* Holding company note */}
        <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div>
            <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-1">
              {t.operatedUnder}
            </p>
            <p className="text-white/70 font-semibold">
              Palumbo Arosemena Holdings LLC
            </p>
            <p className="text-white/30 text-sm mt-0.5">
              {t.location}
            </p>
          </div>
          <p className="text-white/20 text-xs max-w-sm text-right hidden md:block leading-relaxed">
            {t.entity}
          </p>
        </div>
      </div>
    </section>
  );
}
