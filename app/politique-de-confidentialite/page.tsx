import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — fomau",
  description: "Comment fomau collecte, utilise et protège vos données personnelles.",
};

export default function PolitiqueConfidentialitePage() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Politique de confidentialité</h1>
          <p className="text-white/40 text-sm">Dernière mise à jour : avril 2025</p>
        </div>

        <div className="space-y-10 text-white/60 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-base mb-3">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement de vos données est <strong className="text-white/80">FOMAU</strong>, éditeur de l&apos;application fomau, joignable à <a href="mailto:contact@fomau.com" className="text-brand-lighter hover:text-white transition-colors">contact@fomau.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">2. Données collectées</h2>
            <p className="mb-3">Lors de l&apos;utilisation de l&apos;application fomau, nous collectons les données suivantes :</p>
            <ul className="space-y-2">
              {[
                "Informations de compte : nom, adresse e-mail, photo de profil",
                "Données d'usage : événements créés, participations, interactions",
                "Données techniques : type d'appareil, système d'exploitation, logs d'erreurs",
                "Données de localisation : uniquement si vous y consentez explicitement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">3. Finalités du traitement</h2>
            <p className="mb-3">Vos données sont utilisées pour :</p>
            <ul className="space-y-2">
              {[
                "Créer et gérer votre compte utilisateur",
                "Vous permettre de créer et rejoindre des événements",
                "Améliorer l'expérience et les fonctionnalités de l'application",
                "Vous envoyer des notifications relatives à vos événements (avec votre accord)",
                "Assurer la sécurité et prévenir les abus",
                "Respecter nos obligations légales",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">4. Base légale</h2>
            <p>
              Le traitement de vos données repose sur votre <strong className="text-white/80">consentement</strong> lors de la création de votre compte, sur l&apos;<strong className="text-white/80">exécution du contrat</strong> vous liant à fomau, et sur notre <strong className="text-white/80">intérêt légitime</strong> à améliorer nos services.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">5. Durée de conservation</h2>
            <p>
              Vos données sont conservées pendant toute la durée de votre utilisation de l&apos;application, puis supprimées dans un délai de <strong className="text-white/80">30 jours</strong> suivant la suppression de votre compte, sauf obligation légale contraire.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">6. Partage des données</h2>
            <p className="mb-3">Nous ne vendons jamais vos données. Elles peuvent être partagées avec :</p>
            <ul className="space-y-2">
              {[
                "Nos prestataires techniques (hébergement, base de données) dans le cadre strict de leurs missions",
                "Les autorités compétentes si la loi l'exige",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">7. Vos droits (RGPD)</h2>
            <p className="mb-3">Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
            <ul className="space-y-2">
              {[
                "Droit d'accès à vos données",
                "Droit de rectification de vos données",
                "Droit à l'effacement (« droit à l'oubli »)",
                "Droit à la portabilité de vos données",
                "Droit d'opposition au traitement",
                "Droit à la limitation du traitement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:contact@fomau.com" className="text-brand-lighter hover:text-white transition-colors">contact@fomau.com</a>.
              Vous pouvez également introduire une réclamation auprès de la{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-lighter hover:text-white transition-colors">CNIL</a>.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">8. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">9. Suppression du compte</h2>
            <p>
              Vous pouvez supprimer votre compte et l&apos;ensemble de vos données à tout moment depuis l&apos;application. Consultez notre{" "}
              <Link href="/deleteaccount" className="text-brand-lighter hover:text-white transition-colors">
                guide de suppression de compte
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">10. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique à tout moment. En cas de changement substantiel, vous en serez informé via l&apos;application ou par e-mail.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
