"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function AmazonBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-10 border border-brand/20 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="orb w-48 h-48 bg-brand/10 -top-10 -right-10" />

          <div className="relative z-10 text-center sm:text-left">
            <p className="text-sm text-brand-lighter font-medium uppercase tracking-widest mb-2">Disponible sur</p>
            <h3 className="text-2xl font-bold text-white mb-2">Amazon Appstore</h3>
            <p className="text-white/45 font-light">Retrouve aussi fomau sur l&apos;Amazon Appstore pour les appareils Fire.</p>
          </div>

          <a
            href="https://www.amazon.com/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex-shrink-0 shimmer-btn text-white font-semibold px-7 py-3.5 rounded-2xl flex items-center gap-2 hover:scale-105 transition-transform"
          >
            Découvrir
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
