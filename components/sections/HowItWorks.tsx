import EyebrowLabel from "@/components/ui/EyebrowLabel";
import SectionReveal from "@/components/ui/SectionReveal";

const steps = [
  {
    number: "01",
    title: "Mix & Activate",
    description:
      "Add one scoop to 12–16 oz of cold water. The S7® Blend dissolves instantly with no clumping and no chalky residue.",
  },
  {
    number: "02",
    title: "Feel the Surge",
    description:
      "Within 30 minutes, elevated nitric oxide levels increase blood flow to working muscles. Clean energy, zero jitters.",
  },
  {
    number: "03",
    title: "Perform & Recover",
    description:
      "Train harder. Recover faster. NitricX's antioxidant stack continues working post-session to reduce soreness.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 bg-ink-soft border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <EyebrowLabel color="crimson" withLine className="mb-5 justify-center">
              How It Works
            </EyebrowLabel>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Simple Protocol.
              <br />
              <span className="text-crimson">Elite Results.</span>
            </h2>
          </div>
        </SectionReveal>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Connector line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />

          {steps.map((step, i) => (
            <SectionReveal key={step.number} delay={i * 0.12}>
              <article className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
                {/* Number badge */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full border border-white/10 bg-ink">
                  <span className="text-crimson font-bold text-lg font-mono tracking-tight">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-foreground font-semibold text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
