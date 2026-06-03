const ingredients = [
  {
    name: "Green Coffee Bean",
    dose: "50 mg",
    role: "Clean Energy",
    body: "Unlike synthetic caffeine anhydrous, green coffee bean delivers chlorogenic acids alongside its natural caffeine. The result is a smoother, more sustained energy curve with no spike and no crash. Chlorogenic acids also slow glucose absorption, keeping blood sugar stable during intense training.",
  },
  {
    name: "Green Tea Extract",
    dose: "50 mg",
    role: "Focus + Antioxidants",
    body: "Rich in EGCG (epigallocatechin gallate), green tea extract works in synergy with the blend's caffeine sources via the well-documented L-theanine-caffeine mechanism, sharpening cognitive focus while blunting jitteriness. The catechins also scavenge free radicals generated during high-intensity exercise.",
  },
  {
    name: "Turmeric Root",
    dose: "50 mg",
    role: "Anti-Inflammation",
    body: "Curcumin, turmeric's active compound, inhibits NF-κB signaling, the primary inflammatory pathway activated by hard training. Less systemic inflammation means faster recovery between sessions and reduced joint discomfort over time. This is not a post-workout supplement add-on; it's built into every serving.",
  },
  {
    name: "Tart Cherry",
    dose: "50 mg",
    role: "Recovery + Soreness",
    body: "Clinical research shows tart cherry anthocyanins reduce delayed onset muscle soreness (DOMS) by up to 22% versus placebo. Faster recovery means more frequent, higher-quality training sessions. It also supports natural melatonin regulation, a sleep quality benefit most athletes overlook.",
  },
  {
    name: "Blueberry Extract",
    dose: "50 mg",
    role: "Cognitive + Vascular",
    body: "Pterostilbene, blueberry's most bioavailable polyphenol, crosses the blood-brain barrier and improves cerebral blood flow. Sharper focus, better reaction time, and a mind-muscle connection that lasts the entire session. Vascular benefits compound with the nitric oxide effect of the blend as a whole.",
  },
  {
    name: "Broccoli Sprout",
    dose: "50 mg",
    role: "Cellular Defense",
    body: "Sulforaphane, concentrated in broccoli sprout extract, activates the Nrf2 pathway, the body's master antioxidant switch. This triggers production of endogenous antioxidant enzymes (glutathione, SOD, catalase), protecting mitochondria from oxidative stress during peak output.",
  },
  {
    name: "Kale",
    dose: "50 mg",
    role: "Micronutrient Density",
    body: "Dense in vitamins K, C, B6, and minerals including calcium and manganese, kale provides the micronutrient matrix that underpins every metabolic process in the blend. Performance is downstream of nutrition and kale closes the gaps.",
  },
];

export default function WhyS7Works() {
  return (
    <article className="max-w-3xl mx-auto">
      {/* Intro */}
      <p className="text-xl text-white/70 leading-relaxed mb-8">
        Most pre-workout formulas are built around a single premise: dump enough stimulants in a can and call it performance. NitricX takes a fundamentally different approach, and the S7® Blend is why.
      </p>

      <p className="text-white/60 leading-relaxed mb-8">
        S7® is a patented, peer-reviewed combination of seven plant-based ingredients developed by{" "}
        <strong className="text-white">VDF FutureCeuticals</strong> and backed by clinical research showing a{" "}
        <strong className="text-crimson">40% increase in nitric oxide production</strong> versus placebo. It won the{" "}
        <strong className="text-white">Best New Ingredient award at Food Matters Live 2019</strong>. It is protected by two
        U.S. patents (9,615,596 and 10,080,375). And it is the core of every can of NitricX.
      </p>

      <p className="text-white/60 leading-relaxed mb-16">
        But what does a 40% increase in nitric oxide actually mean for your training, and why do seven specific plants
        achieve something that isolated stimulants cannot? Here is the complete breakdown.
      </p>

      {/* Section 1 */}
      <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
        First: Why Nitric Oxide?
      </h2>
      <p className="text-white/60 leading-relaxed mb-6">
        Nitric oxide (NO) is a signaling molecule your body produces naturally. When its production is elevated,
        blood vessels dilate in a process called vasodilation. More dilation means more blood flow, which means
        more oxygen and more nutrients delivered to working muscles at precisely the moment they need them most.
      </p>
      <p className="text-white/60 leading-relaxed mb-6">
        The downstream effects are measurable: greater endurance capacity, improved power output, accelerated
        waste product clearance (lactic acid, CO₂), and a sustained performance window that extends well past
        the typical synthetic pre-workout crash.
      </p>
      <p className="text-white/60 leading-relaxed mb-16">
        Synthetic pre-workouts force this effect through megadose stimulants, primarily caffeine anhydrous and
        beta-alanine, that trigger vascular responses by stressing the cardiovascular system. S7® achieves the
        same outcome differently. It works{" "}
        <em className="text-white not-italic font-medium">with</em> the body's own NO-producing enzymes (eNOS), amplifying
        what is already there rather than bypassing it entirely.
      </p>

      {/* Section 2 */}
      <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
        The 7 Ingredients. The Mechanisms.
      </h2>
      <p className="text-white/60 leading-relaxed mb-10">
        Each of the seven plant-based components in S7® contributes a distinct biological function. Together,
        they form a synergistic system, not a random cocktail of trendy extracts.
      </p>

      <div className="space-y-6 mb-16">
        {ingredients.map((ing) => (
          <div
            key={ing.name}
            className="rounded-xl border border-white/8 bg-white/[0.02] p-6"
          >
            <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
              <div>
                <h3 className="text-white font-bold text-lg">{ing.name}</h3>
                <p className="text-crimson text-xs tracking-widest uppercase font-medium mt-0.5">
                  {ing.role}
                </p>
              </div>
              <span className="text-white/30 text-sm font-mono bg-white/5 px-3 py-1 rounded-full flex-shrink-0">
                {ing.dose}
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed">{ing.body}</p>
          </div>
        ))}
      </div>

      {/* Section 3 */}
      <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
        Why the Combination Matters More Than Any Single Ingredient
      </h2>
      <p className="text-white/60 leading-relaxed mb-6">
        None of these seven ingredients, taken in isolation at 50 mg, would produce the effect S7® delivers.
        That is the point. The blend was engineered for{" "}
        <strong className="text-white">polyphenol synergy</strong>, a principle where plant compounds from
        different botanical families modulate overlapping biological pathways in a way that amplifies each
        other's effects.
      </p>
      <p className="text-white/60 leading-relaxed mb-6">
        Green coffee and green tea target energy and focus from two different angles. Turmeric and tart cherry
        address inflammation and recovery simultaneously. Blueberry and broccoli sprout protect cells, one at
        the vascular level, the other at the mitochondrial level. Kale closes micronutrient gaps that would
        otherwise limit any of these processes upstream.
      </p>
      <p className="text-white/60 leading-relaxed mb-16">
        The result is a formula where{" "}
        <strong className="text-white">the whole significantly exceeds the sum of its parts</strong>, and
        where peer-reviewed clinical data confirms that the specific combination produces a 40% NO increase that
        no single component achieves alone.
      </p>

      {/* Section 4 */}
      <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
        Transparency as a Performance Feature
      </h2>
      <p className="text-white/60 leading-relaxed mb-6">
        NitricX publishes every ingredient, every dose, every patent. There are no proprietary blends,
        the industry's favorite mechanism for hiding under-dosed ingredients behind legal protection. When you read
        the NitricX label, you are reading the entire formula.
      </p>
      <p className="text-white/60 leading-relaxed mb-6">
        This matters because transparency is not just an ethical choice. It is a signal about confidence. A
        formula you need to hide is a formula that cannot withstand scrutiny. A formula you declare in full is
        one that has nothing to prove except results.
      </p>

      {/* Closing */}
      <div className="mt-12 p-8 rounded-2xl border border-crimson/20 bg-crimson/5">
        <p className="text-white font-bold text-lg mb-2">The Bottom Line</p>
        <p className="text-white/65 leading-relaxed">
          S7® works because it was designed around a biological mechanism, nitric oxide amplification, and
          built with ingredients that are clinically validated to achieve it. NitricX chose S7® because it is
          the highest-integrity NO-boosting ingredient available. No synthetic shortcuts. No proprietary
          blend smoke screens. Just seven plants, two patents, and a 40% performance edge.
        </p>
      </div>
    </article>
  );
}
