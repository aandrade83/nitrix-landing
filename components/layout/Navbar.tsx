"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Performance", href: "/performance" },
  { label: "Ingredients", href: "/ingredients" },
  { label: "Investors", href: "/investors" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30" : "bg-transparent"
      }`}>
        <nav aria-label="Main navigation" className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-extrabold tracking-[0.15em] text-white hover:text-crimson transition-colors duration-200" aria-label="NitricX home">
            NITRIC<span className="text-crimson">X</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors duration-200 ${
                    pathname === link.href ? "text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="#waitlist"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-crimson text-white text-sm font-semibold tracking-wide hover:bg-crimson-dark transition-colors duration-200"
          >
            Get Early Access
          </Link>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white/60 hover:text-white transition-colors p-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <rect y="3" width="20" height="2" rx="1" />
                <rect y="9" width="20" height="2" rx="1" />
                <rect y="15" width="20" height="2" rx="1" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-lg flex flex-col items-center justify-center gap-10 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-3xl font-extrabold tracking-tight text-white hover:text-crimson transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            className="mt-4 px-8 py-3 rounded-full bg-crimson text-white font-semibold tracking-wide hover:bg-crimson-dark transition-colors"
          >
            Get Early Access
          </Link>
        </div>
      )}
    </>
  );
}
