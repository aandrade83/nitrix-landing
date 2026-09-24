"use client";

import { useState } from "react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import Button from "@/components/ui/Button";
import { useLocale } from "@/components/i18n/LocaleProvider";

const content = {
  en: {
    eyebrow: "Early Access",
    titleA: "Be First.",
    titleB: "Train First.",
    body: "Join the NitricX waitlist and get exclusive early-bird pricing, launch-day access, and a behind-the-scenes look at the science.",
    successTitle: "You're on the list.",
    successBody: "We'll notify you the moment NitricX is available.",
    formLabel: "Join the waitlist",
    emailLabel: "Email address",
    placeholder: "your@email.com",
    joining: "Joining…",
    join: "Join Waitlist",
    noSpam: "No spam. Unsubscribe anytime.",
  },
  es: {
    eyebrow: "Acceso Anticipado",
    titleA: "Sé el Primero.",
    titleB: "Entrena Primero.",
    body: "Únete a la lista de espera de NitricX y obtén precios exclusivos de lanzamiento, acceso el día del lanzamiento y una mirada detrás de escena a la ciencia.",
    successTitle: "Ya estás en la lista.",
    successBody: "Te avisaremos en cuanto NitricX esté disponible.",
    formLabel: "Unirse a la lista de espera",
    emailLabel: "Correo electrónico",
    placeholder: "tu@correo.com",
    joining: "Uniéndote…",
    join: "Unirme",
    noSpam: "Sin spam. Cancela cuando quieras.",
  },
};

export default function Waitlist() {
  const t = content[useLocale()];
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Simulate API call — replace with real endpoint
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    setEmail("");
  }

  return (
    <section
      id="waitlist"
      className="relative py-32 bg-ink overflow-hidden border-t border-white/5"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <SectionReveal>
          <EyebrowLabel color="crimson" withLine className="mb-6 justify-center">
            {t.eyebrow}
          </EyebrowLabel>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            {t.titleA}
            <br />
            <span className="text-crimson">{t.titleB}</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            {t.body}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.12}>
          {status === "success" ? (
            <div className="flex flex-col items-center gap-3 py-6">
              <span className="text-crimson text-4xl" aria-hidden="true">✓</span>
              <p className="text-foreground font-semibold text-lg">
                {t.successTitle}
              </p>
              <p className="text-zinc-500 text-sm">
                {t.successBody}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              aria-label={t.formLabel}
            >
              <label htmlFor="waitlist-email" className="sr-only">
                {t.emailLabel}
              </label>
              <input
                id="waitlist-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.placeholder}
                required
                className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-foreground placeholder:text-zinc-600 text-sm focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/30 transition-all duration-200"
              />
              <Button
                type="submit"
                size="md"
                disabled={status === "loading"}
              >
                {status === "loading" ? t.joining : t.join}
              </Button>
            </form>
          )}
          <p className="text-zinc-700 text-xs tracking-wide mt-4">
            {t.noSpam}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
