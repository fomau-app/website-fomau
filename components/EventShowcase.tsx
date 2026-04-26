"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function EventShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="pt-8 pb-16 md:py-32 px-6 relative overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-brand/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.3em] text-brand-lighter uppercase mb-4">Dans l&apos;app</p>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-tight">
            Ton évent,{" "}
            <span className="gradient-text">ton orga</span>
          </h2>
          <p className="text-white/50 text-lg mt-5 max-w-xl mx-auto font-light">
            Chaque événement devient un espace complet avec tous les outils dont ton groupe a besoin.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          className="flex justify-center"
        >
          <Image
            src="/mockup-outils.png"
            alt="Fonctionnalités fomau — covoiturages, sondages, photos, listes, rappels..."
            width={700}
            height={840}
            className="w-full max-w-[600px] drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
