"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { localizeHref } from "@/lib/i18n/config";

const content = {
  en: {
    titleA: "Ready to feel",
    titleB: "the difference?",
    body: "Join the waitlist for exclusive early access to NitricX. Be first to experience the S7® difference.",
    waitlist: "Join the Waitlist →",
    ingredients: "See Full Ingredient List",
  },
  es: {
    titleA: "¿Listo para sentir",
    titleB: "la diferencia?",
    body: "Únete a la lista de espera para obtener acceso anticipado exclusivo a NitricX. Sé el primero en experimentar la diferencia S7®.",
    waitlist: "Únete a la Lista de Espera →",
    ingredients: "Ver Lista Completa de Ingredientes",
  },
};

export default function PerformanceCTA() {
  const lang = useLocale();
  const t = content[lang];

  return (
    <section className="relative py-32 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-crimson/10 blur-[120px]" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-display text-5xl md:text-7xl mb-6">
            {t.titleA}<br />
            <span className="metallic">{t.titleB}</span>
          </h2>
          <p className="text-white/55 max-w-xl mx-auto mb-10 leading-relaxed">
            {t.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`/${lang}#waitlist`} className="btn-primary">
              {t.waitlist}
            </a>
            <Link href={localizeHref(lang, "/ingredients")} className="btn-ghost">
              {t.ingredients}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
