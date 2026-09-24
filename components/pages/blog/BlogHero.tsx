import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "The NitricX Blog",
    titleA: "Science. Performance.",
    titleB: "No Fluff.",
    body: "Deep dives into the ingredients, mechanisms, and research behind NitricX. Written for athletes who want to understand what they're putting in their body.",
  },
  es: {
    eyebrow: "El Blog de NitricX",
    titleA: "Ciencia. Rendimiento.",
    titleB: "Sin Relleno.",
    body: "Análisis a fondo de los ingredientes, mecanismos e investigación detrás de NitricX. Escrito para atletas que quieren entender lo que ponen en su cuerpo.",
  },
};

export default function BlogHero({ lang }: { lang: Locale }) {
  const t = content[lang];

  return (
    <section className="relative pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(225,10,30,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <p className="text-xs tracking-[0.3em] text-crimson uppercase mb-4 font-semibold">
          {t.eyebrow}
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none mb-4">
          {t.titleA}
          <br />
          <span className="text-white/30">{t.titleB}</span>
        </h1>
        <p className="text-white/50 text-lg max-w-xl mt-4">
          {t.body}
        </p>
      </div>
    </section>
  );
}
