import EyebrowLabel from "@/components/ui/EyebrowLabel";
import SectionReveal from "@/components/ui/SectionReveal";

const ingredients = [
  {
    name: "Green Coffee Bean",
    dose: "150 mg",
    benefit: "Clean, sustained energy without the crash of synthetic caffeine.",
    icon: "◆",
  },
  {
    name: "Turmeric Root",
    dose: "200 mg",
    benefit: "Reduces exercise-induced inflammation and speeds recovery.",
    icon: "◆",
  },
  {
    name: "Tart Cherry",
    dose: "250 mg",
    benefit: "Antioxidant power that protects muscles during intense output.",
    icon: "◆",
  },
  {
    name: "Beet Root",
    dose: "300 mg",
    benefit: "Boosts nitric oxide production for superior blood flow and pump.",
    icon: "◆",
  },
  {
    name: "Kale Extract",
    dose: "100 mg",
    benefit: "Dense micronutrient support for cellular energy and oxygen use.",
    icon: "◆",
  },
  {
    name: "Broccoli Sprout",
    dose: "100 mg",
    benefit: "Sulforaphane activates the body's own antioxidant defense network.",
    icon: "◆",
  },
  {
    name: "Blueberry Extract",
    dose: "100 mg",
    benefit: "Enhances cognitive focus and reduces oxidative stress under load.",
    icon: "◆",
  },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-28 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <SectionReveal>
          <div className="max-w-2xl mb-16">
            <EyebrowLabel withLine color="crimson" className="mb-5">
              The S7® Blend
            </EyebrowLabel>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
              Seven Plants.
              <br />
              <span className="text-crimson">One Formula.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Every ingredient in NitricX was selected because the science
              is unambiguous. No proprietary blends that hide underdosed
              ingredients — full label transparency, always.
            </p>
          </div>
        </SectionReveal>

        {/* Ingredient grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ingredients.map((ing, i) => (
            <SectionReveal key={ing.name} delay={i * 0.07}>
              <article className="group relative p-6 rounded-2xl border border-white/5 bg-ink-soft hover:border-crimson/30 hover:bg-white/[0.03] transition-all duration-300">
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-crimson text-xs"
                    aria-hidden="true"
                  >
                    {ing.icon}
                  </span>
                  <span className="text-zinc-600 text-xs font-mono tracking-wide">
                    {ing.dose}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-foreground font-semibold text-base mb-2 leading-snug">
                  {ing.name}
                </h3>

                {/* Benefit */}
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {ing.benefit}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </article>
            </SectionReveal>
          ))}

          {/* Badge card */}
          <SectionReveal delay={ingredients.length * 0.07}>
            <div className="relative p-6 rounded-2xl border border-crimson/20 bg-crimson/5 flex flex-col items-center justify-center text-center gap-3 min-h-[160px]">
              <span className="text-4xl font-bold text-crimson">S7®</span>
              <p className="text-zinc-400 text-xs leading-relaxed max-w-[14ch]">
                Patented. Peer-reviewed. Proven.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
