export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Cookie used to remember the visitor's explicit language choice
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Prefix an internal path with the locale: ("es", "/blog") → "/es/blog".
// Hash-only and external links are returned untouched.
export function localizeHref(lang: Locale, href: string): string {
  if (!href.startsWith("/")) return href;
  return href === "/" ? `/${lang}` : `/${lang}${href}`;
}

// Swap the locale segment of a pathname: ("/en/blog", "es") → "/es/blog"
export function switchLocalePath(pathname: string, lang: Locale): string {
  const segments = pathname.split("/");
  if (hasLocale(segments[1] ?? "")) {
    segments[1] = lang;
    return segments.join("/") || `/${lang}`;
  }
  return localizeHref(lang, pathname);
}

// hreflang alternates for a locale-less path, used in page metadata
export function languageAlternates(path: string) {
  const suffix = path === "/" ? "" : path;
  return {
    languages: Object.fromEntries(locales.map((l) => [l, `/${l}${suffix}`])),
  };
}
