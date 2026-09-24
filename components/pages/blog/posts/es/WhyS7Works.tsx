const ingredients = [
  {
    name: "Grano de Café Verde",
    dose: "50 mg",
    role: "Energía Limpia",
    body: "A diferencia de la cafeína anhidra sintética, el grano de café verde aporta ácidos clorogénicos junto con su cafeína natural. El resultado es una curva de energía más suave y sostenida, sin picos ni bajones. Los ácidos clorogénicos también ralentizan la absorción de glucosa, manteniendo estable el azúcar en sangre durante el entrenamiento intenso.",
  },
  {
    name: "Extracto de Té Verde",
    dose: "50 mg",
    role: "Enfoque + Antioxidantes",
    body: "Rico en EGCG (galato de epigalocatequina), el extracto de té verde actúa en sinergia con las fuentes de cafeína del blend mediante el conocido mecanismo L-teanina-cafeína, agudizando el enfoque cognitivo y atenuando el nerviosismo. Sus catequinas también neutralizan los radicales libres generados durante el ejercicio de alta intensidad.",
  },
  {
    name: "Raíz de Cúrcuma",
    dose: "50 mg",
    role: "Antiinflamatorio",
    body: "La curcumina, el compuesto activo de la cúrcuma, inhibe la señalización NF-κB, la principal vía inflamatoria que activa el entrenamiento duro. Menos inflamación sistémica significa una recuperación más rápida entre sesiones y menos molestias articulares con el tiempo. No es un complemento post-entreno añadido; está integrado en cada porción.",
  },
  {
    name: "Cereza Ácida",
    dose: "50 mg",
    role: "Recuperación + Dolor Muscular",
    body: "La investigación clínica muestra que las antocianinas de la cereza ácida reducen el dolor muscular de aparición tardía (DOMS) hasta en un 22% frente a placebo. Una recuperación más rápida permite sesiones de entrenamiento más frecuentes y de mayor calidad. También favorece la regulación natural de la melatonina, un beneficio para la calidad del sueño que la mayoría de los atletas pasa por alto.",
  },
  {
    name: "Extracto de Arándano",
    dose: "50 mg",
    role: "Cognitivo + Vascular",
    body: "El pterostilbeno, el polifenol más biodisponible del arándano, atraviesa la barrera hematoencefálica y mejora el flujo sanguíneo cerebral. Mayor enfoque, mejor tiempo de reacción y una conexión mente-músculo que dura toda la sesión. Los beneficios vasculares se suman al efecto del óxido nítrico del blend en su conjunto.",
  },
  {
    name: "Brote de Brócoli",
    dose: "50 mg",
    role: "Defensa Celular",
    body: "El sulforafano, concentrado en el extracto de brote de brócoli, activa la vía Nrf2, el interruptor antioxidante maestro del cuerpo. Esto desencadena la producción de enzimas antioxidantes endógenas (glutatión, SOD, catalasa), protegiendo a las mitocondrias del estrés oxidativo durante el máximo esfuerzo.",
  },
  {
    name: "Kale",
    dose: "50 mg",
    role: "Densidad de Micronutrientes",
    body: "Denso en vitaminas K, C, B6 y minerales como calcio y manganeso, el kale aporta la matriz de micronutrientes que sustenta cada proceso metabólico del blend. El rendimiento depende de la nutrición, y el kale cierra las brechas.",
  },
];

export default function WhyS7Works() {
  return (
    <article className="max-w-3xl mx-auto">
      {/* Intro */}
      <p className="text-xl text-white/70 leading-relaxed mb-8">
        La mayoría de las fórmulas pre-entreno se basan en una sola premisa: meter suficientes estimulantes en una lata y llamarlo rendimiento. NitricX adopta un enfoque fundamentalmente distinto, y el S7® Blend es la razón.
      </p>

      <p className="text-white/60 leading-relaxed mb-8">
        S7® es una combinación patentada y revisada por pares de siete ingredientes vegetales desarrollada por{" "}
        <strong className="text-white">VDF FutureCeuticals</strong> y respaldada por investigación clínica que muestra un{" "}
        <strong className="text-crimson">aumento del 40% en la producción de óxido nítrico</strong> frente a placebo. Ganó el{" "}
        <strong className="text-white">premio al Mejor Ingrediente Nuevo en Food Matters Live 2019</strong>. Está protegido por dos
        patentes estadounidenses (9,615,596 y 10,080,375). Y es el núcleo de cada lata de NitricX.
      </p>

      <p className="text-white/60 leading-relaxed mb-16">
        Pero ¿qué significa realmente un aumento del 40% en óxido nítrico para tu entrenamiento, y por qué siete plantas
        específicas logran algo que los estimulantes aislados no pueden? Aquí está el análisis completo.
      </p>

      {/* Section 1 */}
      <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
        Primero: ¿Por Qué el Óxido Nítrico?
      </h2>
      <p className="text-white/60 leading-relaxed mb-6">
        El óxido nítrico (NO) es una molécula de señalización que tu cuerpo produce de forma natural. Cuando su producción
        aumenta, los vasos sanguíneos se dilatan en un proceso llamado vasodilatación. Más dilatación significa más flujo
        sanguíneo, lo que se traduce en más oxígeno y más nutrientes llegando a los músculos en trabajo justo cuando más los necesitan.
      </p>
      <p className="text-white/60 leading-relaxed mb-6">
        Los efectos son medibles: mayor capacidad de resistencia, más potencia, una eliminación más rápida de desechos
        (ácido láctico, CO₂) y una ventana de rendimiento sostenida que se extiende mucho más allá del típico bajón de un
        pre-entreno sintético.
      </p>
      <p className="text-white/60 leading-relaxed mb-16">
        Los pre-entrenos sintéticos fuerzan este efecto con megadosis de estimulantes, principalmente cafeína anhidra y
        beta-alanina, que provocan respuestas vasculares sometiendo a estrés al sistema cardiovascular. El S7® logra el
        mismo resultado de otra manera. Trabaja{" "}
        <em className="text-white not-italic font-medium">con</em> las enzimas productoras de NO del propio cuerpo (eNOS),
        amplificando lo que ya existe en lugar de saltárselo por completo.
      </p>

      {/* Section 2 */}
      <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
        Los 7 Ingredientes. Los Mecanismos.
      </h2>
      <p className="text-white/60 leading-relaxed mb-10">
        Cada uno de los siete componentes vegetales del S7® aporta una función biológica distinta. Juntos forman un
        sistema sinérgico, no un cóctel aleatorio de extractos de moda.
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
        Por Qué la Combinación Importa Más Que Cualquier Ingrediente Individual
      </h2>
      <p className="text-white/60 leading-relaxed mb-6">
        Ninguno de estos siete ingredientes, tomado de forma aislada a 50 mg, produciría el efecto que ofrece el S7®.
        Esa es precisamente la idea. El blend fue diseñado para la{" "}
        <strong className="text-white">sinergia de polifenoles</strong>, un principio según el cual compuestos vegetales
        de distintas familias botánicas modulan vías biológicas superpuestas de una forma que amplifica los efectos
        de cada uno.
      </p>
      <p className="text-white/60 leading-relaxed mb-6">
        El café verde y el té verde abordan la energía y el enfoque desde dos ángulos distintos. La cúrcuma y la cereza
        ácida atacan la inflamación y la recuperación simultáneamente. El arándano y el brote de brócoli protegen las
        células, uno a nivel vascular y el otro a nivel mitocondrial. El kale cierra las brechas de micronutrientes que,
        de otro modo, limitarían cualquiera de estos procesos desde su origen.
      </p>
      <p className="text-white/60 leading-relaxed mb-16">
        El resultado es una fórmula donde{" "}
        <strong className="text-white">el todo supera significativamente la suma de sus partes</strong>, y
        donde los datos clínicos revisados por pares confirman que esta combinación específica produce un aumento del 40%
        de NO que ningún componente logra por sí solo.
      </p>

      {/* Section 4 */}
      <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
        La Transparencia como Característica de Rendimiento
      </h2>
      <p className="text-white/60 leading-relaxed mb-6">
        NitricX publica cada ingrediente, cada dosis, cada patente. No hay mezclas patentadas, el mecanismo favorito de
        la industria para ocultar ingredientes subdosificados tras una protección legal. Cuando lees la etiqueta de
        NitricX, estás leyendo la fórmula completa.
      </p>
      <p className="text-white/60 leading-relaxed mb-6">
        Esto importa porque la transparencia no es solo una decisión ética. Es una señal de confianza. Una fórmula que
        necesitas ocultar es una fórmula que no resiste el escrutinio. Una fórmula que declaras por completo es una que
        no tiene nada que demostrar excepto resultados.
      </p>

      {/* Closing */}
      <div className="mt-12 p-8 rounded-2xl border border-crimson/20 bg-crimson/5">
        <p className="text-white font-bold text-lg mb-2">En Resumen</p>
        <p className="text-white/65 leading-relaxed">
          El S7® funciona porque fue diseñado en torno a un mecanismo biológico, la amplificación del óxido nítrico, y
          construido con ingredientes clínicamente validados para lograrlo. NitricX eligió el S7® porque es el ingrediente
          potenciador de NO de mayor integridad disponible. Sin atajos sintéticos. Sin cortinas de humo de mezclas
          patentadas. Solo siete plantas, dos patentes y una ventaja de rendimiento del 40%.
        </p>
      </div>
    </article>
  );
}
