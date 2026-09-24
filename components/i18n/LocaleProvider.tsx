"use client";

import { createContext, useContext } from "react";
import { defaultLocale, type Locale } from "@/lib/i18n/config";

const LocaleContext = createContext<Locale>(defaultLocale);

export function LocaleProvider({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  return <LocaleContext.Provider value={lang}>{children}</LocaleContext.Provider>;
}

// Current locale for Client Components. Server Components receive `lang` as a prop.
export function useLocale(): Locale {
  return useContext(LocaleContext);
}
