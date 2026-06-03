import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BlogHero from "@/components/pages/blog/BlogHero";
import { posts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — NitricX",
  description:
    "Science-backed deep dives into the ingredients, mechanisms, and research behind NitricX. Understand what you put in your body.",
  openGraph: {
    title: "NitricX Blog — Science. Performance. No Fluff.",
    description:
      "Deep dives into the ingredients, mechanisms, and research behind NitricX.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "NitricX Blog" }],
  },
};

export default function BlogPage() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <BlogHero />

      <section className="pb-32 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden border border-white/8 bg-white/[0.02] hover:border-crimson/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-crimson text-white text-xs font-semibold tracking-wide">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-white/30 text-xs mb-3">
                    <span>{formatDate(post.date)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-crimson transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-5 text-crimson text-sm font-medium">
                    Read article
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
