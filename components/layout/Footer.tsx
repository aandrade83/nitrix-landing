import Link from "next/link";
import { localizeHref, type Locale } from "@/lib/i18n/config";

const content = {
  en: {
    links: [
      { label: "Performance", href: "/performance" },
      { label: "Ingredients", href: "/ingredients" },
      { label: "Investors", href: "/investors" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    home: "NitricX home",
    rights: "All rights reserved.",
  },
  es: {
    links: [
      { label: "Rendimiento", href: "/performance" },
      { label: "Ingredientes", href: "/ingredients" },
      { label: "Inversionistas", href: "/investors" },
      { label: "Nosotros", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contacto", href: "/contact" },
    ],
    home: "Inicio de NitricX",
    rights: "Todos los derechos reservados.",
  },
};

export default function Footer({ lang }: { lang: Locale }) {
  const year = new Date().getFullYear();
  const t = content[lang];

  return (
    <footer
      className="border-t border-white/5 bg-ink-soft py-12 px-6"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <Link
          href={localizeHref(lang, "/")}
          className="text-lg font-semibold tracking-widest text-foreground hover:text-crimson transition-colors duration-200"
          aria-label={t.home}
        >
          NITRIC<span className="text-crimson">X</span>
        </Link>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6" role="list">
            {t.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizeHref(lang, link.href)}
                  className="text-xs tracking-wide text-zinc-600 hover:text-zinc-400 transition-colors duration-200 uppercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal */}
        <p className="text-xs text-zinc-600 tracking-wide">
          &copy; {year} NitricX. {t.rights}
        </p>
      </div>
    </footer>
  );
}
