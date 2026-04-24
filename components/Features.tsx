"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Camera, Car, Wallet, Bell, Gift, CalendarCheck, Vote } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Sous-groupes & organisation",
    description: "Crée des sous-groupes au sein de ton événement — VIP, bénévoles, logistique. Chacun voit ce dont il a besoin.",
    color: "from-brand/20 to-transparent",
    iconColor: "text-brand-lighter",
    delay: 0,
  },
  {
    icon: Vote,
    title: "Sondages intégrés",
    description: "Choix du lieu, du thème, de la date — laisse tes invités voter directement depuis l'app. Décisions rapides, tout le monde content.",
    color: "from-purple-500/20 to-transparent",
    iconColor: "text-purple-400",
    delay: 0.1,
  },
  {
    icon: Car,
    title: "Covoiturage simplifié",
    description: "Propose ou rejoins un trajet en quelques clics. Tes invités arrivent ensemble, l'événement commence déjà dans la voiture.",
    color: "from-violet-500/20 to-transparent",
    iconColor: "text-violet-400",
    delay: 0.2,
  },
  {
    icon: Camera,
    title: "Album photo collaboratif",
    description: "Tous les participants contribuent à un album partagé. Tes souvenirs centralisés, accessibles à vie depuis l'app.",
    color: "from-fuchsia-500/20 to-transparent",
    iconColor: "text-fuchsia-400",
    delay: 0.3,
  },
  {
    icon: Wallet,
    title: "Gestion des dépenses",
    description: "Qui a payé quoi ? fomau calcule et répartit les frais automatiquement. Fini les disputes en fin de soirée.",
    color: "from-emerald-500/20 to-transparent",
    iconColor: "text-emerald-400",
    delay: 0.4,
  },
  {
    icon: Bell,
    title: "Rappels intelligents",
    description: "Rappels automatiques pour l'événement, le covoiturage, les paiements. Plus personne n'oublie — y compris toi.",
    color: "from-sky-500/20 to-transparent",
    iconColor: "text-sky-400",
    delay: 0.5,
  },
  {
    icon: Gift,
    title: "Anniversaires de tes potes",
    description: "fomau te rappelle les anniversaires de tes amis avant qu'il soit trop tard. Un événement créé en un tap, l'anniversaire réussi.",
    color: "from-pink-500/20 to-transparent",
    iconColor: "text-pink-400",
    delay: 0.6,
  },
  {
    icon: CalendarCheck,
    title: "Tout en un seul endroit",
    description: "Invitations, billetterie, logistique, souvenirs. fomau remplace 5 applications par une seule expérience fluide.",
    color: "from-amber-500/20 to-transparent",
    iconColor: "text-amber-400",
    delay: 0.7,
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projet" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium tracking-[0.3em] text-brand-lighter uppercase mb-4">Fonctionnalités</p>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-tight">
            Tout pour tes{" "}
            <span className="gradient-text">événements</span>
          </h2>
          <p className="text-white/50 text-lg mt-5 max-w-xl mx-auto font-light">
            Une seule app pour organiser, découvrir et vivre des moments exceptionnels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: f.delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              className="glass-card rounded-3xl p-6 group hover:border-brand/30 transition-all duration-500 hover:scale-[1.03] relative overflow-hidden cursor-default"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

              <div className="relative z-10">
                <div className={`w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${f.iconColor}`}>
                  <f.icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 leading-snug">{f.title}</h3>
                <p className="text-white/45 leading-relaxed text-sm font-light">{f.description}</p>
              </div>

              <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${f.color} opacity-20 rounded-full translate-x-8 translate-y-8 group-hover:opacity-50 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
