"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "@/components/i18n/LocaleProvider";
import {
  localeNames,
  locales,
  localizeHref,
  LOCALE_COOKIE,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n/config";

const content = {
  en: {
    links: [
      { label: "Performance", href: "/performance" },
      { label: "Ingredients", href: "/ingredients" },
      { label: "Investors", href: "/investors" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
    ],
    cta: "Get Early Access",
    home: "NitricX home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  es: {
    links: [
      { label: "Rendimiento", href: "/performance" },
      { label: "Ingredientes", href: "/ingredients" },
      { label: "Inversionistas", href: "/investors" },
      { label: "Blog", href: "/blog" },
      { label: "Nosotros", href: "/about" },
    ],
    cta: "Acceso Anticipado",
    home: "Inicio de NitricX",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
  },
};

// Remember an explicit choice so the proxy uses it on future visits
function rememberLocale(lang: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${lang}; path=/; max-age=31536000; samesite=lax`;
}

function LanguageSwitcher({
  pathname,
  lang,
  label,
  className = "",
  linkClassName = "",
  onNavigate,
}: {
  pathname: string;
  lang: Locale;
  label: string;
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
}) {
  return (
    <div role="group" aria-label={label} className={`flex items-center gap-2 font-semibold tracking-widest ${className}`}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && <span className="text-white/20" aria-hidden="true">/</span>}
          <Link
            href={switchLocalePath(pathname, l)}
            onClick={() => {
              rememberLocale(l);
              onNavigate?.();
            }}
            hrefLang={l}
            aria-label={localeNames[l]}
            aria-current={l === lang ? "true" : undefined}
            className={`uppercase transition-colors duration-200 ${linkClassName} ${
              l === lang ? "text-white" : "text-white/40 hover:text-white"
            }`}
          >
            {l}
          </Link>
        </span>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // The drawer is tied to the path it was opened on, so any navigation closes it
  const [openOn, setOpenOn] = useState<string | null>(null);
  const menuOpen = openOn === pathname;
  const closeMenu = () => setOpenOn(null);
  const lang = useLocale();
  const t = content[lang];
  const navLinks = t.links.map((link) => ({ ...link, href: localizeHref(lang, link.href) }));
  // Waitlist lives on the home page; a bare "#waitlist" did nothing on other pages
  const waitlistHref = `${localizeHref(lang, "/")}#waitlist`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // While the drawer is open: lock page scroll and close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenOn(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30" : "bg-transparent"
      }`}>
        <nav aria-label="Main navigation" className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href={localizeHref(lang, "/")} className="text-xl font-extrabold tracking-[0.15em] text-white hover:text-crimson transition-colors duration-200" aria-label={t.home}>
            NITRIC<span className="text-crimson">X</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8" role="list">
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

          {/* Language + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <LanguageSwitcher pathname={pathname} lang={lang} label={t.language} className="text-xs" />
            <Link
              href={waitlistHref}
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-crimson text-white text-sm font-semibold tracking-wide whitespace-nowrap hover:bg-crimson-dark transition-colors duration-200"
            >
              {t.cta}
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            className="md:hidden -mr-3 w-11 h-11 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label={menuOpen ? t.closeMenu : t.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setOpenOn(menuOpen ? null : pathname)}
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
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-lg md:hidden overflow-y-auto overscroll-contain"
          >
            {/* min-h + py keeps every link reachable on short / landscape screens */}
            <motion.nav
              aria-label="Mobile navigation"
              initial={{ y: -16 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              className="min-h-full flex flex-col items-center justify-center gap-6 pt-24 pb-12"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`px-4 py-2 text-3xl font-extrabold tracking-tight transition-colors ${
                    pathname === link.href ? "text-crimson" : "text-white hover:text-crimson"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={waitlistHref}
                onClick={closeMenu}
                className="mt-4 px-8 py-3.5 rounded-full bg-crimson text-white font-semibold tracking-wide hover:bg-crimson-dark transition-colors"
              >
                {t.cta}
              </Link>
              <LanguageSwitcher
                pathname={pathname}
                lang={lang}
                label={t.language}
                onNavigate={closeMenu}
                className="text-base"
                linkClassName="inline-flex items-center justify-center min-w-11 min-h-11"
              />
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
