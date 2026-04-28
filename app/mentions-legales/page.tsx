import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — fomau",
  description: "Mentions légales du site fomau.com et de l'application fomau.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto">

        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-12">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Retour à l&apos;accueil
        </Link>

        <div className="mb-12">
          <p className="text-xs font-semibold text-brand-lighter uppercase tracking-widest mb-4">Légal</p>
          <h1 className="text-4xl font-bold text-white mb-4">Mentions légales</h1>
          <p className="text-white/40 text-sm">Dernière mise à jour : avril 2025</p>
        </div>

        <div className="space-y-10 text-white/60 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-base mb-3">1. Éditeur du site</h2>
            <p>Le site <strong className="text-white/80">fomau.com</strong> et l&apos;application <strong className="text-white/80">fomau</strong> sont édités par :</p>
            <div className="mt-3 glass-card rounded-xl p-5 space-y-1">
              <p><span className="text-white/40">Entité :</span> <span className="text-white/80">The Aha Company</span></p>
              <p><span className="text-white/40">Responsable de publication :</span> <span className="text-white/80">Nicolas Bonnet</span></p>
              <p><span className="text-white/40">Email :</span> <a href="mailto:contact@fomau.com" className="text-brand-lighter hover:text-white transition-colors">contact@fomau.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">2. Hébergement</h2>
            <div className="glass-card rounded-xl p-5 space-y-1">
              <p><span className="text-white/40">Hébergeur :</span> <span className="text-white/80">Vercel Inc.</span></p>
              <p><span className="text-white/40">Adresse :</span> <span className="text-white/80">340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</span></p>
              <p><span className="text-white/40">Site :</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand-lighter hover:text-white transition-colors">vercel.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site et de l&apos;application (textes, images, logos, icônes, interface) est protégé par le droit d&apos;auteur et appartient à fomau / The Aha Company, sauf mentions contraires. Toute reproduction ou diffusion non autorisée est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">4. Données personnelles</h2>
            <p>
              La collecte et le traitement des données personnelles sont décrits dans notre{" "}
              <Link href="/politique-de-confidentialite" className="text-brand-lighter hover:text-white transition-colors">
                Politique de confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">5. Limitation de responsabilité</h2>
            <p>
              fomau s&apos;efforce de maintenir les informations publiées à jour et exactes, mais ne saurait être tenu responsable des erreurs ou omissions, ni des dommages directs ou indirects résultant de l&apos;utilisation du site ou de l&apos;application.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">6. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
