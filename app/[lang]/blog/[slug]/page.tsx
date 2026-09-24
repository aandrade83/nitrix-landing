import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { postSlugs, getPostBySlug, formatDate } from "@/lib/blog";
import { languageAlternates, localizeHref, type Locale } from "@/lib/i18n/config";
import { resolveLocale } from "@/lib/i18n/server";
import WhyS7Works from "@/components/pages/blog/posts/WhyS7Works";
import WhyS7WorksEs from "@/components/pages/blog/posts/es/WhyS7Works";
import FunctionalBeverageMarket from "@/components/pages/blog/posts/FunctionalBeverageMarket";
import FunctionalBeverageMarketEs from "@/components/pages/blog/posts/es/FunctionalBeverageMarket";

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const { slug } = await params;
  const post = getPostBySlug(slug, lang);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/${lang}/blog/${slug}`, ...languageAlternates(`/blog/${slug}`) },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
    },
  };
}

const contentMap: Record<string, Record<Locale, React.ComponentType>> = {
  "why-s7-works": { en: WhyS7Works, es: WhyS7WorksEs },
  "functional-beverage-market": { en: FunctionalBeverageMarket, es: FunctionalBeverageMarketEs },
};

const backToBlog: Record<Locale, string> = { en: "Back to Blog", es: "Volver al Blog" };

export default async function BlogPostPage({ params }: PageProps<"/[lang]/blog/[slug]">) {
  const lang = await resolveLocale(params);
  const { slug } = await params;
  const post = getPostBySlug(slug, lang);
  if (!post) notFound();

  const Content = contentMap[slug]?.[lang];
  if (!Content) notFound();

  return (
    <>
      <div className="noise" aria-hidden="true" />

      {/* Hero image */}
      <div className="relative w-full aspect-[16/9] max-h-[540px] overflow-hidden mt-16 bg-ink">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(5,5,7,0.95) 100%)",
          }}
        />
      </div>

      {/* Post header */}
      <div className="px-6 lg:px-10 pt-12 pb-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-crimson text-white text-xs font-semibold tracking-wide">
              {post.category}
            </span>
            <span className="text-white/30 text-xs">{formatDate(post.date, lang)}</span>
            <span className="text-white/30 text-xs" aria-hidden="true">·</span>
            <span className="text-white/30 text-xs">{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-white/50 text-lg leading-relaxed border-b border-white/8 pb-10">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="px-6 lg:px-10 pb-32">
        <Content />

        {/* Back link */}
        <div className="max-w-3xl mx-auto mt-20 pt-10 border-t border-white/8">
          <Link
            href={localizeHref(lang, "/blog")}
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {backToBlog[lang]}
          </Link>
        </div>
      </div>
    </>
  );
}
