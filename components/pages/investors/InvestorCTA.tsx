"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/i18n/LocaleProvider";

const content = {
  en: {
    eyebrow: "Get in Touch",
    titleA: "Ready to be part",
    titleB: "of what's next?",
    body: "NitricX is seeking strategic investment partners to accelerate our retail launch and international expansion. Request our full investor memorandum and financial projections below.",
    deck: "Request Investor Deck →",
    call: "Schedule a Call",
    contact: "Contact",
    ir: "Investor Relations",
    entity: "Legal Entity",
    production: "Production Partner",
  },
  es: {
    eyebrow: "Contáctanos",
    titleA: "¿Listo para ser parte",
    titleB: "de lo que viene?",
    body: "NitricX busca socios de inversión estratégicos para acelerar nuestro lanzamiento minorista y nuestra expansión internacional. Solicita a continuación nuestro memorando completo para inversionistas y las proyecciones financieras.",
    deck: "Solicitar Presentación para Inversionistas →",
    call: "Agendar una Llamada",
    contact: "Contacto",
    ir: "Relación con Inversionistas",
    entity: "Entidad Legal",
    production: "Socio de Producción",
  },
};

export default function InvestorCTA() {
  const t = content[useLocale()];

  return (
    <section className="relative py-32 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-crimson/10 blur-[140px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="text-eyebrow flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-crimson" /> {t.eyebrow}
          </div>
          <h2 className="text-display text-5xl md:text-7xl mb-6">
            {t.titleA}<br />
            <span className="metallic">{t.titleB}</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-xl">
            {t.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="mailto:management@nitricx.com"
              className="btn-primary"
            >
              {t.deck}
            </a>
            <a
              href="mailto:management@nitricx.com"
              className="btn-ghost"
            >
              {t.call}
            </a>
          </div>

          {/* Contact block */}
          <div className="glass rounded-2xl p-8 max-w-lg">
            <div className="text-[11px] tracking-[0.4em] text-white/40 uppercase mb-4">{t.contact}</div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-white/35 mb-1">{t.ir}</div>
                <a href="mailto:management@nitricx.com" className="text-white hover:text-crimson transition-colors font-medium">
                  management@nitricx.com
                </a>
              </div>
              <div className="pt-3 border-t border-white/5">
                <div className="text-xs text-white/35 mb-1">{t.entity}</div>
                <div className="text-white/70 text-sm">Palumbo Arosemena Holdings LLC</div>
              </div>
              <div className="pt-3 border-t border-white/5">
                <div className="text-xs text-white/35 mb-1">{t.production}</div>
                <div className="text-white/70 text-sm">Power Brands — Van Nuys, CA</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
