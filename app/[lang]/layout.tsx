import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { languageAlternates, locales, type Locale } from "@/lib/i18n/config";
import { resolveLocale } from "@/lib/i18n/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Only the locales above are valid; anything else 404s
export const dynamicParams = false;

const content: Record<Locale, { title: string; description: string; ogDescription: string; twitterDescription: string; ogAlt: string; ogLocale: string }> = {
  en: {
    title: "NitricX™ — Premium Natural Performance Drink",
    description:
      "NitricX is a premium plant-powered pre-workout drink engineered for peak athletic performance. Built on the clinically researched S7® Blend. No synthetic stimulants.",
    ogDescription: "Plant-powered pre-workout engineered for peak athletic performance. Powered by the S7® Blend.",
    twitterDescription: "Plant-powered pre-workout engineered for peak athletic performance.",
    ogAlt: "NitricX Performance Drink",
    ogLocale: "en_US",
  },
  es: {
    title: "NitricX™ — Bebida Premium de Rendimiento Natural",
    description:
      "NitricX es una bebida pre-entreno premium a base de plantas, diseñada para el máximo rendimiento deportivo. Creada sobre el S7® Blend, clínicamente investigado. Sin estimulantes sintéticos.",
    ogDescription: "Pre-entreno a base de plantas diseñado para el máximo rendimiento deportivo. Impulsado por el S7® Blend.",
    twitterDescription: "Pre-entreno a base de plantas diseñado para el máximo rendimiento deportivo.",
    ogAlt: "Bebida de rendimiento NitricX",
    ogLocale: "es_ES",
  },
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const t = content[lang];
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nitricx.com"
    ),
    title: {
      default: t.title,
      template: "%s | NitricX",
    },
    description: t.description,
    keywords: [
      "NitricX", "pre-workout", "natural performance drink", "S7 blend",
      "plant-based pre-workout", "nitric oxide", "athletic performance drink",
      "natural energy drink", "S7 blend benefits",
      "pre-entreno", "bebida de rendimiento natural", "óxido nítrico",
    ],
    alternates: { canonical: `/${lang}`, ...languageAlternates("/") },
    openGraph: {
      type: "website",
      siteName: "NitricX",
      locale: t.ogLocale,
      title: t.title,
      description: t.ogDescription,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: t.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.twitterDescription,
      images: ["/og-image.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const lang = await resolveLocale(params);

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-ink text-foreground antialiased">
        <LocaleProvider lang={lang}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer lang={lang} />
        </LocaleProvider>
      </body>
    </html>
  );
}
