"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, Star } from "lucide-react";

const words = ["Crée.", "Planifie.", "Profite."];

export default function Hero() {
  const cursorRef = useRef<HTMLSpanElement>(null);
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(cursorRef.current, { opacity: 0, duration: 0.5, ease: "steps(1)" })
      .to(cursorRef.current, { opacity: 1, duration: 0.5, ease: "steps(1)" });

    gsap.to(orb1.current, {
      x: 60, y: -40, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut",
    });
    gsap.to(orb2.current, {
      x: -50, y: 60, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut",
    });

    return () => { tl.kill(); };
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { y: 60, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24">
      {/* Background orbs */}
      <div ref={orb1} className="orb w-[900px] h-[900px] bg-brand/10 top-[-300px] right-[-400px]" />
      <div className="orb w-[300px] h-[300px] bg-brand/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(139,53,241,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,53,241,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 glass-card px-5 py-2.5 rounded-full mb-8 text-xs text-white/70 mx-auto text-center"
      >
        <span className="flex items-center gap-1 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponible maintenant
        </span>
        <span className="hidden sm:block w-px h-3 bg-white/20" />
        <span className="flex items-center gap-1">
          Télécharge l&apos;app gratuitement
          <ArrowRight size={12} className="text-brand-lighter" />
        </span>
      </motion.div>

      {/* Main headline */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-5xl relative z-10"
      >
        <div className="overflow-hidden mb-3">
          <motion.p variants={item} className="text-sm font-medium tracking-[0.3em] text-brand-lighter uppercase mb-6">
            Une seule app pour tous tes évènements
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            variants={item}
            className="text-[clamp(3rem,9vw,8rem)] font-bold leading-[1.05] tracking-tight"
          >
            {[
              { word: "Crée.", from: "#ffffff", to: "#E9D5FF", extra: "mr-6" },
              { word: "Planifie.", from: "#E9D5FF", to: "#C084FC" },
              { word: "Profite.", from: "#C084FC", to: "#8B35F1" },
            ].map(({ word, from, to, extra = "" }) => (
              <span
                key={word}
                className={extra}
                style={{
                  background: `linear-gradient(90deg, ${from} 0%, ${to} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                }}
              >
                {word}{" "}
              </span>
            ))}
            <span ref={cursorRef} className="text-brand">|</span>
          </motion.h1>
        </div>

        <div className="overflow-hidden mt-6">
          <motion.p
            variants={item}
            className="text-[clamp(1rem,2.5vw,1.35rem)] text-white/50 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Organise et participe aux évènements qui{" "}
            <span className="text-white/80">te ressemblent</span>. Des soirées entre amis aux grand rassemblements : tout en un.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full max-w-sm mx-auto sm:max-w-none"
        >
          <a
            href="https://apps.apple.com/fr/app/fomau/id6743503835"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn text-white font-semibold w-full sm:w-52 py-4 rounded-2xl text-base flex items-center justify-center gap-3 hover:scale-105 transition-transform"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.fomau"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn-light font-semibold w-full sm:w-52 py-4 rounded-2xl text-base flex items-center justify-center gap-3 hover:scale-105 transition-transform"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M3.18 23.76c.31.17.66.22 1.01.14l12.2-7.04-2.72-2.72-10.49 9.62zm-1.14-20.5C2.02 3.56 2 3.88 2 4.2v15.6c0 .32.02.64.04.94l10.12-10.12-10.12-10.36zM20.55 10.3l-2.68-1.55-3.1 3.1 3.1 3.1 2.72-1.57c.78-.45.78-1.63-.04-2.08zM4.19.1C3.84.02 3.49.07 3.18.24L13.7 10.76l2.72-2.72L4.19.1z"/>
            </svg>
            Google Play
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
