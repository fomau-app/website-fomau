import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supprimer mon compte — fomau",
  description: "Comment supprimer définitivement votre compte fomau et toutes vos données personnelles.",
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-12"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Retour à l&apos;accueil
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-brand-lighter uppercase tracking-widest mb-4">Compte</p>
          <h1 className="text-4xl font-bold text-white mb-4">Supprimer mon compte</h1>
          <p className="text-white/50 text-lg leading-relaxed">
            La suppression de votre compte est définitive et irréversible. Toutes vos données seront effacées.
          </p>
        </div>

        {/* Procedure */}
        <section className="glass-card rounded-2xl p-8 mb-8">
          <h2 className="text-lg font-semibold text-white mb-6">Procédure de suppression</h2>
          <ol className="space-y-5">
            {[
              { step: "1", text: "Ouvrez l'application fomau sur votre téléphone" },
              { step: "2", text: "Accédez à votre Profil depuis le menu principal" },
              { step: "3", text: "Appuyez sur Paramètres" },
              { step: "4", text: "Faites défiler vers le bas et appuyez sur Supprimer mon compte" },
              { step: "5", text: "Confirmez la suppression — cette action est irréversible" },
            ].map(({ step, text }) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center text-xs font-bold text-brand-lighter">
                  {step}
                </span>
                <span className="text-white/70 pt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* What gets deleted */}
        <section className="glass-card rounded-2xl p-8 mb-8">
          <h2 className="text-lg font-semibold text-white mb-6">Ce qui sera supprimé</h2>
          <ul className="space-y-3">
            {[
              "Votre profil et photo de profil",
              "Vos informations personnelles (nom, email, etc.)",
              "Vos événements créés",
              "Vos participations et historique",
              "Vos préférences et paramètres",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/60">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#8B35F1" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Warning */}
        <div className="border border-amber-500/20 bg-amber-500/5 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#F59E0B" strokeWidth="2" className="flex-shrink-0 mt-0.5">
              <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <p className="text-amber-400 font-semibold text-sm mb-1">Action irréversible</p>
              <p className="text-white/50 text-sm leading-relaxed">
                Une fois votre compte supprimé, il est impossible de le récupérer. Si vous souhaitez simplement faire une pause, vous pouvez vous déconnecter et revenir plus tard.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <section className="glass-card rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-white mb-2">Un problème ?</h2>
          <p className="text-white/50 text-sm leading-relaxed mb-4">
            Si vous ne parvenez pas à supprimer votre compte depuis l&apos;application ou si vous souhaitez faire une demande de suppression manuelle, contactez-nous directement.
          </p>
          <a
            href="mailto:contact@fomau.com"
            className="inline-flex items-center gap-2 text-sm text-brand-lighter hover:text-white transition-colors font-medium"
          >
            contact@fomau.com
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </section>

      </div>
    </main>
  );
}
