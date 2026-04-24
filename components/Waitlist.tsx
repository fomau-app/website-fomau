"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

export default function Waitlist() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  return (
    <section id="waitlist" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-brand/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium tracking-[0.3em] text-brand-lighter uppercase mb-4">Accès anticipé</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight">
            Sois parmi les{" "}
            <span className="gradient-text">premiers</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 font-light">
            Inscris-toi sur la waitlist et accède à fomau en avant-première, avec des avantages exclusifs à vie.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 border border-brand/20"
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <CheckCircle size={48} className="text-brand-lighter mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Tu es sur la liste !</h3>
              <p className="text-white/50">On te contacte dès que l&apos;accès est disponible dans ta ville. 🚀</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-widest mb-2 font-medium">Prénom</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nicolas"
                    required
                    className="w-full bg-white/5 border border-white/10 focus:border-brand/50 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-widest mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nicolas@fomau.com"
                    required
                    className="w-full bg-white/5 border border-white/10 focus:border-brand/50 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/40 uppercase tracking-widest mb-2 font-medium">Ta ville</label>
                <input
                  type="text"
                  placeholder="Paris, Lyon, Bordeaux..."
                  className="w-full bg-white/5 border border-white/10 focus:border-brand/50 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full shimmer-btn text-white font-semibold px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {status === "loading" ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <>
                    Rejoindre la waitlist
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-white/25">
                Pas de spam. Juste l&apos;essentiel.
              </p>
            </form>
          )}
        </motion.div>

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-white/40"
        >
          {["Accès prioritaire", "Badge fondateur", "Premium gratuit 3 mois"].map((p) => (
            <span key={p} className="flex items-center gap-2">
              <CheckCircle size={14} className="text-brand-lighter" />
              {p}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
