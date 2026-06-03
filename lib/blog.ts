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

export const posts: BlogPost[] = [
  {
    slug: "why-s7-works",
    title: "Why S7® Works: The Science Behind NitricX's Core Formula",
    excerpt:
      "A patented blend of 7 plant-based ingredients that increases nitric oxide by 40%. Here's the clinical evidence and why it matters for your performance.",
    date: "2026-06-02",
    category: "Science",
    readTime: "6 min read",
    image: "/images/s7_works.png",
    imageAlt: "Why S7 Works — S7 Nitric Oxide Booster",
  },
  {
    slug: "functional-beverage-market",
    title: "Why the Functional Beverage Market Keeps Growing",
    excerpt:
      "A $275 billion market expanding at 7.9% annually. The numbers are compelling, but the real story is in the behavioral, scientific, and economic forces driving the shift.",
    date: "2026-06-02",
    category: "Market",
    readTime: "7 min read",
    image: "/images/market_berverage.png",
    imageAlt: "Why the Functional Beverage Market Keeps Growing",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
