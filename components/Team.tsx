"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LinkedinIcon = ({ size = 14, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const team = [
  {
    name: "Nicolas",
    role: "CEO",
    initials: "N",
    gradient: "from-brand to-violet-600",
    linkedin: "https://www.linkedin.com/in/nico-bonnet/",
    delay: 0,
  },
  {
    name: "Erwann",
    role: "COO",
    initials: "E",
    gradient: "from-violet-500 to-fuchsia-600",
    linkedin: "https://www.linkedin.com/in/erwanndelabrosse/",
    delay: 0.1,
  },
  {
    name: "Guilhem",
    role: "CTO",
    initials: "G",
    gradient: "from-fuchsia-500 to-pink-600",
    linkedin: "https://www.linkedin.com/in/guilhem-de-la-brosse-78b1711b0/",
    delay: 0.2,
  },
];

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="equipe" ref={ref} className="py-16 md:py-32 px-6 relative">
      <div className="orb w-[400px] h-[400px] bg-brand/10 top-0 right-0" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium tracking-[0.3em] text-brand-lighter uppercase mb-4">L&apos;équipe</p>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-tight">
            Construits par des{" "}
            <span className="gradient-text">passionnés</span>
          </h2>
          <p className="text-white/50 text-lg mt-5 max-w-xl mx-auto font-light">
            Trois fondateurs, une vision commune : rendre chaque moment inoubliable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: member.delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              className="glass-card rounded-3xl p-8 group hover:border-brand/30 transition-all duration-500 hover:scale-[1.03] relative overflow-hidden text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 mb-6">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto text-2xl font-bold text-white shadow-lg`}>
                  {member.initials}
                </div>
                <div className={`absolute -inset-2 rounded-full bg-gradient-to-br ${member.gradient} opacity-10 blur-xl group-hover:opacity-30 transition-opacity`} />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-brand-lighter font-medium mb-6">{member.role}</p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-9 h-9 rounded-full bg-white/5 hover:bg-brand/20 justify-center transition-colors border border-white/5 hover:border-brand/30 mx-auto"
                >
                  <LinkedinIcon size={14} className="text-white/50 group-hover:text-brand-lighter" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
