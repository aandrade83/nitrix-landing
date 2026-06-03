import SectionReveal from "@/components/ui/SectionReveal";

const stats = [
  { value: "7", unit: "Plants", label: "in the S7® Blend" },
  { value: "40%", unit: "More", label: "Nitric Oxide output*" },
  { value: "0", unit: "Synthetic", label: "Fillers or dyes" },
  { value: "1", unit: "Scoop", label: "Per session" },
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-white/5 bg-ink-soft">
      <div className="max-w-7xl mx-auto px-6">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/5">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.08} className="md:px-10 first:pl-0 last:pr-0">
              <div className="flex flex-col items-center text-center gap-1">
                <dt className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  {stat.value}
                  <span className="text-crimson ml-1 text-2xl md:text-3xl font-semibold">
                    {stat.unit}
                  </span>
                </dt>
                <dd className="text-xs text-zinc-500 tracking-widest uppercase mt-1">
                  {stat.label}
                </dd>
              </div>
            </SectionReveal>
          ))}
        </dl>
        <p className="text-center text-zinc-700 text-[10px] tracking-wide mt-8">
          *Compared to a placebo in a double-blind, peer-reviewed study.
        </p>
      </div>
    </section>
  );
}
