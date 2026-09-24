const stats = [
  { value: "$275B+", label: "Valor proyectado del mercado global para 2030" },
  { value: "+7.9%", label: "TCAC de 2024 a 2030" },
  { value: "Máximo histórico", label: "Conciencia de salud del consumidor, 2024" },
  { value: "68%", label: "Adultos en EE. UU. que buscan bebidas funcionales" },
];

const drivers = [
  {
    number: "01",
    title: "El Cambio de Salud Pospandemia",
    body: "La pandemia de COVID-19 cambió de raíz la forma en que los consumidores piensan en su cuerpo. La Encuesta Global de Bienestar de McKinsey de 2021 encontró que el 79% de los encuestados consideraba el bienestar una prioridad principal, un salto de 10 puntos respecto a los niveles prepandemia. Ese cambio de actitud no se desvaneció con el ciclo de noticias. Se volvió estructural. Los consumidores empezaron a examinar las etiquetas y a buscar productos con beneficios fisiológicos medibles en lugar de promesas de marketing. Las bebidas funcionales, con su transparencia de ingredientes y fórmulas específicas, estaban perfectamente posicionadas para captar esa demanda.",
  },
  {
    number: "02",
    title: "El Colapso del Modelo de Estimulantes Sintéticos",
    body: "La categoría tradicional de bebidas energéticas construyó su primera década sobre una fórmula simple: cafeína en dosis altas, edulcorantes artificiales, vitaminas B sintéticas y marketing agresivo dirigido a hombres jóvenes. Ese modelo se está erosionando. Un análisis de datos minoristas de SPINS de 2023 mostró que el segmento convencional de bebidas energéticas crecía un 3.1% anual, mientras que el segmento de bebidas funcionales y de rendimiento natural crecía un 14.7% en el mismo periodo. Los consumidores no están bebiendo menos. Están bebiendo diferente. El cambio va de la estimulación a la optimización.",
  },
  {
    number: "03",
    title: "Los Ingredientes Clínicos Llegan al Mercado Masivo",
    body: "Hace cinco años, ingredientes como la ashwagandha, la melena de león y los potenciadores de óxido nítrico se encontraban principalmente en tiendas especializadas de suplementos. Hoy aparecen en los estantes de Target, Whole Foods y Costco. Un informe de 2022 del International Food Information Council (IFIC) encontró que el 59% de los consumidores busca activamente beneficios funcionales al comprar bebidas. El mercado no solo crece en volumen; crece en sofisticación de ingredientes. Los consumidores ahora pueden identificar y exigir compuestos específicos, lo que eleva el listón para todas las marcas de la categoría.",
  },
  {
    number: "04",
    title: "La Expansión Minorista Elimina Fricciones",
    body: "Históricamente, la distribución ha sido el techo de las marcas de bebidas funcionales. Ese techo está subiendo. El comercio electrónico representa ya aproximadamente el 22% de las ventas globales de bebidas funcionales, según un informe de Grand View Research de 2023, eliminando las barreras geográficas que antes limitaban el alcance del segmento. Al mismo tiempo, las grandes cadenas minoristas han ampliado sus secciones dedicadas a bebidas funcionales en respuesta a la demanda. Un mayor acceso se correlaciona directamente con el crecimiento de la categoría, y esa infraestructura se está construyendo ahora.",
  },
];

const references = [
  {
    label: "McKinsey & Company",
    title: "Feeling good: The future of the $1.5 trillion wellness market",
    year: "2021",
    note: "Encuesta global sobre la prioridad del bienestar en el consumidor, N=7,500 en seis países.",
  },
  {
    label: "Grand View Research",
    title: "Functional Beverage Market Size, Share & Trends Analysis Report",
    year: "2023",
    note: "Tamaño de mercado, proyecciones de TCAC y participación del comercio electrónico por segmento hasta 2030.",
  },
  {
    label: "International Food Information Council (IFIC)",
    title: "2022 Food & Health Survey",
    year: "2022",
    note: "Actitudes del consumidor hacia los ingredientes funcionales en alimentos y bebidas.",
  },
  {
    label: "SPINS LLC",
    title: "Natural Products Industry Retail Tracking Data",
    year: "2023",
    note: "Tasas de crecimiento de bebidas energéticas convencionales vs. naturales en canales minoristas de EE. UU.",
  },
  {
    label: "Mordor Intelligence",
    title: "Functional Beverages Market: Growth, Trends, and Forecasts (2024–2029)",
    year: "2024",
    note: "Análisis de crecimiento anual compuesto y desglose regional del sector global de bebidas funcionales.",
  },
  {
    label: "Statista",
    title: "Global functional food and beverage market revenue 2020–2030",
    year: "2024",
    note: "Proyecciones de ingresos y segmentación de consumidores en Norteamérica, Europa y Asia-Pacífico.",
  },
];

export default function FunctionalBeverageMarket() {
  return (
    <article className="max-w-3xl mx-auto">
      {/* Intro */}
      <p className="text-xl text-white/70 leading-relaxed mb-8">
        El mercado de bebidas funcionales no está viviendo una tendencia. Está viviendo una transformación estructural en la forma en que los consumidores se relacionan con lo que beben. Entender por qué sigue creciendo requiere mirar más allá de las cifras superficiales, hacia las fuerzas conductuales, científicas y económicas que están redefiniendo toda la categoría.
      </p>

      <p className="text-white/60 leading-relaxed mb-16">
        Según Grand View Research, se proyecta que el mercado global de bebidas funcionales alcance los $275 mil millones para 2030, con una tasa de crecimiento anual compuesta del 7.9% a partir de 2024. No son proyecciones especulativas basadas en supuestos optimistas. Reflejan la convergencia de cambios documentados en el comportamiento del consumidor, una ciencia de ingredientes que ha madurado y una infraestructura minorista que por fin se pone al día con la demanda.
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
        Qué Se Considera una Bebida Funcional
      </h2>
      <p className="text-white/60 leading-relaxed mb-6">
        El término abarca un amplio espectro: bebidas deportivas y de rendimiento, aguas enriquecidas, bebidas energéticas a base de plantas, tés adaptógenos, refrescos probióticos y shots nootrópicos. Lo que las une es la presencia de ingredientes bioactivos formulados para producir un resultado fisiológico específico y medible, más allá de la hidratación básica o el aporte calórico.
      </p>
      <p className="text-white/60 leading-relaxed mb-16">
        Es una distinción importante frente a las bebidas convencionales. Una bebida energética estándar aporta cafeína y azúcar. Una bebida funcional aporta un conjunto específico de ingredientes, a menudo con respaldo clínico, diseñado para mejorar una dimensión concreta de la salud o el rendimiento. La Encuesta de Alimentación y Salud 2022 del IFIC encontró que el 59% de los consumidores estadounidenses busca activamente estos beneficios funcionales al elegir bebidas, una cifra que ha crecido cada año desde 2018.
      </p>

      {/* Main drivers */}
      <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
        Cuatro Fuerzas que Impulsan el Crecimiento de la Categoría
      </h2>
      <p className="text-white/60 leading-relaxed mb-10">
        Ningún factor aislado explica por qué este mercado sigue creciendo. La expansión es el resultado de cuatro fuerzas que se refuerzan entre sí de manera simultánea.
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
        La Subcategoría de Rendimiento Supera al Mercado General
      </h2>
      <p className="text-white/60 leading-relaxed mb-6">
        Dentro de las bebidas funcionales, los productos enfocados en el rendimiento, es decir, los orientados a energía, resistencia, recuperación y desempeño cognitivo, crecen más rápido que cualquier otra subcategoría. El análisis de 2024 de Mordor Intelligence identificó las bebidas deportivas y de rendimiento como el segmento de mayor crecimiento dentro de las bebidas funcionales, impulsado por la convergencia de la cultura fitness masiva y una ciencia de ingredientes que alcanza viabilidad comercial.
      </p>
      <p className="text-white/60 leading-relaxed mb-6">
        Este crecimiento no se limita a los atletas profesionales. El mayor segmento de consumidores de bebidas de rendimiento son ahora profesionales de entre 25 y 45 años que entrenan de forma recreativa y esperan que su bebida pre-entreno, de recuperación o de enfoque contenga ingredientes con mecanismos de acción documentados. Están dispuestos a pagar más por ello, y los datos del mercado confirman que lo están haciendo.
      </p>
      <p className="text-white/60 leading-relaxed mb-16">
        Los productos que definen este segmento comparten dos características: etiquetado transparente con divulgación completa de ingredientes y el uso de compuestos patentados o clínicamente investigados en lugar de insumos genéricos. Los consumidores han aprendido a leer etiquetas. Las marcas que no pueden justificar sus fórmulas están siendo desplazadas por las que sí pueden.
      </p>

      {/* Where NitricX fits */}
      <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
        Dónde Encaja NitricX en Este Mercado
      </h2>
      <p className="text-white/60 leading-relaxed mb-6">
        NitricX fue diseñada en la intersección de las dos corrientes más fuertes de este mercado: la formulación a base de plantas y una eficacia a nivel de rendimiento. El S7® Blend, una combinación patentada de siete ingredientes vegetales que ha demostrado clínicamente aumentar la producción de óxido nítrico en un 40%, sitúa a NitricX en el nivel premium del segmento de bebidas de rendimiento, un nivel donde la disposición a pagar del consumidor es mayor y la lealtad es más fuerte.
      </p>
      <p className="text-white/60 leading-relaxed mb-16">
        El mercado se está expandiendo. El consumidor está más informado que en cualquier otro momento de la historia de la categoría. Y la brecha entre los productos construidos sobre marketing y los construidos sobre ciencia se vuelve visible para los compradores frente al estante. En esa brecha es donde compite NitricX, y donde se disputa el segmento de mayor valor de un mercado de $275 mil millones.
      </p>

      {/* References */}
      <div className="mt-16 pt-10 border-t border-white/8">
        <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-6 font-medium">
          Referencias
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
