import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nitricx.com"
  ),
  title: {
    default: "NitricX™ — Premium Natural Performance Drink",
    template: "%s | NitricX",
  },
  description:
    "NitricX is a premium plant-powered pre-workout drink engineered for peak athletic performance. Built on the clinically researched S7® Blend. No synthetic stimulants.",
  keywords: [
    "NitricX", "pre-workout", "natural performance drink", "S7 blend",
    "plant-based pre-workout", "nitric oxide", "athletic performance drink",
    "natural energy drink", "S7 blend benefits",
  ],
  openGraph: {
    type: "website",
    siteName: "NitricX",
    title: "NitricX™ — Premium Natural Performance Drink",
    description: "Plant-powered pre-workout engineered for peak athletic performance. Powered by the S7® Blend.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "NitricX Performance Drink" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NitricX™ — Premium Natural Performance Drink",
    description: "Plant-powered pre-workout engineered for peak athletic performance.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-ink text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
