"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PerformanceCTA() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-crimson/10 blur-[120px]" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-display text-5xl md:text-7xl mb-6">
            Ready to feel<br />
            <span className="metallic">the difference?</span>
          </h2>
          <p className="text-white/55 max-w-xl mx-auto mb-10 leading-relaxed">
            Join the waitlist for exclusive early access to NitricX. Be first to experience the S7® difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#waitlist" className="btn-primary">
              Join the Waitlist →
            </a>
            <Link href="/ingredients" className="btn-ghost">
              See Full Ingredient List
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
