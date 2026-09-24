import type { Locale } from "@/lib/i18n/config";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
}

type LocalizedFields = Pick<BlogPost, "title" | "excerpt" | "category" | "readTime" | "imageAlt">;

const postData: (Pick<BlogPost, "slug" | "date" | "image"> & Record<Locale, LocalizedFields>)[] = [
  {
    slug: "why-s7-works",
    date: "2026-06-02",
    image: "/images/s7_works.png",
    en: {
      title: "Why S7® Works: The Science Behind NitricX's Core Formula",
      excerpt:
        "A patented blend of 7 plant-based ingredients that increases nitric oxide by 40%. Here's the clinical evidence and why it matters for your performance.",
      category: "Science",
      readTime: "6 min read",
      imageAlt: "Why S7 Works — S7 Nitric Oxide Booster",
    },
    es: {
      title: "Por Qué Funciona el S7®: La Ciencia Detrás de la Fórmula Central de NitricX",
      excerpt:
        "Un blend patentado de 7 ingredientes vegetales que aumenta el óxido nítrico en un 40%. Esta es la evidencia clínica y por qué importa para tu rendimiento.",
      category: "Ciencia",
      readTime: "6 min de lectura",
      imageAlt: "Por qué funciona el S7 — Potenciador de óxido nítrico S7",
    },
  },
  {
    slug: "functional-beverage-market",
    date: "2026-06-02",
    image: "/images/market_berverage.png",
    en: {
      title: "Why the Functional Beverage Market Keeps Growing",
      excerpt:
        "A $275 billion market expanding at 7.9% annually. The numbers are compelling, but the real story is in the behavioral, scientific, and economic forces driving the shift.",
      category: "Market",
      readTime: "7 min read",
      imageAlt: "Why the Functional Beverage Market Keeps Growing",
    },
    es: {
      title: "Por Qué el Mercado de Bebidas Funcionales Sigue Creciendo",
      excerpt:
        "Un mercado de $275 mil millones que crece un 7.9% anual. Las cifras son contundentes, pero la verdadera historia está en las fuerzas conductuales, científicas y económicas que impulsan el cambio.",
      category: "Mercado",
      readTime: "7 min de lectura",
      imageAlt: "Por qué el mercado de bebidas funcionales sigue creciendo",
    },
  },
];

export const postSlugs = postData.map((p) => p.slug);

export function getPosts(lang: Locale): BlogPost[] {
  return postData.map(({ slug, date, image, [lang]: fields }) => ({ slug, date, image, ...fields }));
}

export function getPostBySlug(slug: string, lang: Locale): BlogPost | undefined {
  return getPosts(lang).find((p) => p.slug === slug);
}

export function formatDate(dateStr: string, lang: Locale): string {
  return new Date(dateStr).toLocaleDateString(lang === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC", // dates are stored as plain YYYY-MM-DD
  });
}
