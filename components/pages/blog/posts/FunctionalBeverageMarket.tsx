const stats = [
  { value: "$275B+", label: "Projected global market value by 2030" },
  { value: "+7.9%", label: "CAGR from 2024 to 2030" },
  { value: "All-time high", label: "Consumer health awareness, 2024" },
  { value: "68%", label: "U.S. adults actively seeking functional beverages" },
];

const drivers = [
  {
    number: "01",
    title: "The Post-Pandemic Health Shift",
    body: "The COVID-19 pandemic fundamentally changed how consumers think about their bodies. A 2021 McKinsey Global Wellness Survey found that 79% of respondents considered wellness a top priority, a 10-point jump from pre-pandemic levels. That attitudinal shift did not fade with the news cycle. It became structural. Consumers began scrutinizing ingredient labels, seeking products that offered measurable physiological benefits rather than marketing promises. Functional beverages, with their ingredient transparency and targeted formulations, were positioned perfectly to capture that demand.",
  },
  {
    number: "02",
    title: "The Collapse of the Synthetic Stimulant Model",
    body: "The traditional energy drink category built its first decade on a simple formula: high-dose caffeine, artificial sweeteners, synthetic B vitamins, and aggressive marketing toward young men. That model is eroding. A 2023 SPINS retail data analysis showed the conventional energy drink segment growing at 3.1% annually while the functional and natural performance beverage segment grew at 14.7% over the same period. Consumers are not drinking less. They are drinking differently. The shift is from stimulation to optimization.",
  },
  {
    number: "03",
    title: "Clinical Ingredients Are Entering the Mainstream",
    body: "Five years ago, ingredients like ashwagandha, lion's mane, and nitric oxide boosters were found primarily in specialty supplement stores. Today, they appear on shelves at Target, Whole Foods, and Costco. A 2022 report by the International Food Information Council (IFIC) found that 59% of consumers actively look for functional benefits when purchasing beverages. The market is not just growing in volume; it is growing in ingredient sophistication. Consumers can now identify and demand specific compounds, which raises the bar for every brand in the category.",
  },
  {
    number: "04",
    title: "Retail Expansion Removing Friction",
    body: "Distribution has historically been the ceiling for functional beverage brands. That ceiling is rising. E-commerce now accounts for approximately 22% of functional beverage sales globally, according to a 2023 Grand View Research report, removing geographic barriers that once limited the segment's reach. Simultaneously, major retail chains have expanded dedicated functional beverage sections in response to consumer pull. Wider access directly correlates with category growth, and the infrastructure is being built now.",
  },
];

const references = [
  {
    label: "McKinsey & Company",
    title: "Feeling good: The future of the $1.5 trillion wellness market",
    year: "2021",
    note: "Global consumer wellness priority survey, N=7,500 across six countries.",
  },
  {
    label: "Grand View Research",
    title: "Functional Beverage Market Size, Share & Trends Analysis Report",
    year: "2023",
    note: "Market sizing, CAGR projections, and e-commerce share by segment through 2030.",
  },
  {
    label: "International Food Information Council (IFIC)",
    title: "2022 Food & Health Survey",
    year: "2022",
    note: "Consumer attitudes toward functional ingredients in food and beverage products.",
  },
  {
    label: "SPINS LLC",
    title: "Natural Products Industry Retail Tracking Data",
    year: "2023",
    note: "Conventional vs. natural energy drink segment growth rates, U.S. retail channels.",
  },
  {
    label: "Mordor Intelligence",
    title: "Functional Beverages Market: Growth, Trends, and Forecasts (2024–2029)",
    year: "2024",
    note: "Compound annual growth analysis and regional breakdown of the global functional beverage sector.",
  },
  {
    label: "Statista",
    title: "Global functional food and beverage market revenue 2020–2030",
    year: "2024",
    note: "Revenue projections and consumer segmentation data across North America, Europe, and Asia-Pacific.",
  },
];

export default function FunctionalBeverageMarket() {
  return (
    <article className="max-w-3xl mx-auto">
      {/* Intro */}
      <p className="text-xl text-white/70 leading-relaxed mb-8">
        The functional beverage market is not experiencing a trend. It is experiencing a structural transformation in how consumers relate to what they drink. Understanding why it keeps growing requires looking past the surface numbers and into the behavioral, scientific, and economic forces that are reshaping the entire category.
      </p>

      <p className="text-white/60 leading-relaxed mb-16">
        According to Grand View Research, the global functional beverage market is projected to reach $275 billion by 2030, expanding at a compound annual growth rate of 7.9% from 2024 onward. These are not speculative projections built on optimistic assumptions. They reflect a convergence of documented consumer behavior shifts, ingredient science coming of age, and retail infrastructure finally catching up with demand.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((s) => (
          <div
            key={s.value}
            className="rounded-xl border border-white/8 bg-white/[0.02] p-5 text-center"
          >
            <p className="text-crimson font-extrabold text-2xl mb-1">{s.value}</p>
            <p className="text-white/40 text-xs leading-snug">{s.label}</p>
          </div>
        ))}
      </div>

      {/* What is a functional beverage */}
      <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
        What Qualifies as a Functional Beverage
      </h2>
      <p className="text-white/60 leading-relaxed mb-6">
        The term covers a broad spectrum: sports and performance drinks, enhanced waters, plant-based energy beverages, adaptogenic teas, probiotic sodas, and nootropic shots. What connects them is the presence of bioactive ingredients formulated to produce a specific, measurable physiological outcome beyond basic hydration or caloric intake.
      </p>
      <p className="text-white/60 leading-relaxed mb-16">
        This is a meaningful distinction from conventional beverages. A standard energy drink delivers caffeine and sugar. A functional beverage delivers a targeted ingredient stack, often with clinical backing, designed to improve a specific dimension of health or performance. The IFIC's 2022 Food and Health Survey found that 59% of U.S. consumers actively seek out these functional benefits when making beverage decisions, a figure that has grown every year since 2018.
      </p>

      {/* Main drivers */}
      <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
        Four Forces Driving Category Growth
      </h2>
      <p className="text-white/60 leading-relaxed mb-10">
        No single factor explains why this market keeps growing. The expansion is the result of four forces reinforcing each other simultaneously.
      </p>

      <div className="space-y-6 mb-16">
        {drivers.map((d) => (
          <div
            key={d.number}
            className="rounded-xl border border-white/8 bg-white/[0.02] p-6"
          >
            <div className="flex items-center gap-4 mb-3">
              <span
                className="text-4xl font-extrabold text-white/5 leading-none select-none flex-shrink-0"
                aria-hidden="true"
              >
                {d.number}
              </span>
              <h3 className="text-white font-bold text-lg leading-snug">{d.title}</h3>
            </div>
            <p className="text-white/55 text-sm leading-relaxed">{d.body}</p>
          </div>
        ))}
      </div>

      {/* Performance subcategory */}
      <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
        The Performance Subcategory Is Outpacing the Broader Market
      </h2>
      <p className="text-white/60 leading-relaxed mb-6">
        Within functional beverages, performance-focused products, those targeting energy, endurance, recovery, and cognitive output, are growing faster than any other subcategory. Mordor Intelligence's 2024 analysis identified sports and performance beverages as the highest-growth segment within functional drinks, driven by the convergence of mainstream fitness culture and ingredient science reaching commercial viability.
      </p>
      <p className="text-white/60 leading-relaxed mb-6">
        This growth is not limited to professional athletes. The largest consumer segment in performance beverages is now working professionals between 25 and 45 years old who train recreationally and expect their pre-workout, recovery, or focus beverage to contain ingredients with documented mechanisms of action. They are willing to pay a premium for that, and market data confirms they are doing exactly that.
      </p>
      <p className="text-white/60 leading-relaxed mb-16">
        The defining products in this segment share two characteristics: transparent labeling with full ingredient disclosure and the use of patented or clinically researched compounds rather than generic commodity inputs. Consumers have learned to read labels. Brands that cannot justify their formulas are being displaced by those that can.
      </p>

      {/* Where NitricX fits */}
      <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
        Where NitricX Fits in This Market
      </h2>
      <p className="text-white/60 leading-relaxed mb-6">
        NitricX was engineered at the intersection of the two strongest currents in this market: plant-based formulation and performance-level efficacy. The S7® Blend, a patented combination of seven plant-based ingredients clinically demonstrated to increase nitric oxide production by 40%, places NitricX in the premium tier of the performance beverage segment, a tier where consumer willingness to pay is highest and loyalty is strongest.
      </p>
      <p className="text-white/60 leading-relaxed mb-16">
        The market is expanding. The consumer is more educated than at any prior point in the category's history. And the gap between products built on marketing and products built on science is becoming visible to buyers at the shelf level. That gap is where NitricX competes, and where the highest-value segment of a $275 billion market is being contested.
      </p>

      {/* References */}
      <div className="mt-16 pt-10 border-t border-white/8">
        <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-6 font-medium">
          References
        </p>
        <ol className="space-y-4">
          {references.map((ref, i) => (
            <li key={i} className="flex gap-4">
              <span className="text-white/20 text-xs font-mono flex-shrink-0 mt-0.5">
                [{i + 1}]
              </span>
              <div>
                <p className="text-white/50 text-sm">
                  <span className="text-white/70 font-medium">{ref.label}.</span>{" "}
                  <em>{ref.title}</em>. {ref.year}.
                </p>
                <p className="text-white/25 text-xs mt-0.5">{ref.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}
