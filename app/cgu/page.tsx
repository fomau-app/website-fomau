import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — fomau",
  description: "Conditions générales d'utilisation de l'application et du site fomau.",
};

export default function CguPage() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Conditions Générales d&apos;Utilisation</h1>
          <p className="text-white/40 text-sm">Dernière mise à jour : avril 2025</p>
        </div>

        <div className="space-y-10 text-white/60 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-base mb-3">1. Objet</h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et l&apos;utilisation de l&apos;application mobile et du site internet <strong className="text-white/80">fomau</strong>, édités par The Aha Company. En utilisant fomau, vous acceptez ces CGU sans réserve.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">2. Accès au service</h2>
            <p className="mb-3">
              L&apos;application fomau est accessible gratuitement à toute personne disposant d&apos;un accès à internet. L&apos;utilisation de certaines fonctionnalités nécessite la création d&apos;un compte.
            </p>
            <p>
              Vous devez avoir au minimum <strong className="text-white/80">16 ans</strong> pour créer un compte et utiliser fomau. En cas de doute sur l&apos;âge d&apos;un utilisateur, fomau se réserve le droit de suspendre le compte concerné.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">3. Création de compte</h2>
            <p className="mb-3">Lors de l&apos;inscription, vous vous engagez à :</p>
            <ul className="space-y-2">
              {[
                "Fournir des informations exactes et à jour",
                "Maintenir la confidentialité de vos identifiants",
                "Ne pas créer plusieurs comptes",
                "Notifier fomau en cas d'utilisation non autorisée de votre compte",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">4. Utilisation du service</h2>
            <p className="mb-3">En utilisant fomau, vous vous engagez à ne pas :</p>
            <ul className="space-y-2">
              {[
                "Publier des contenus illicites, haineux, diffamatoires ou offensants",
                "Usurper l'identité d'un tiers",
                "Utiliser le service à des fins commerciales non autorisées",
                "Tenter de compromettre la sécurité ou l'intégrité de l'application",
                "Harceler ou intimider d'autres utilisateurs",
                "Contourner les mesures de sécurité mises en place",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">5. Contenu utilisateur</h2>
            <p>
              Vous restez propriétaire des contenus que vous publiez sur fomau. En les partageant, vous accordez à fomau une licence non exclusive, mondiale et gratuite pour les afficher, reproduire et distribuer dans le cadre du fonctionnement normal du service. fomau se réserve le droit de supprimer tout contenu contraire aux présentes CGU.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">6. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des éléments de l&apos;application (design, logo, code, textes) est la propriété exclusive de fomau / The Aha Company et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction non autorisée est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">7. Disponibilité du service</h2>
            <p>
              fomau s&apos;efforce d&apos;assurer la disponibilité du service 24h/24, 7j/7. Toutefois, des interruptions pour maintenance ou en cas de force majeure peuvent survenir. fomau ne saurait être tenu responsable des dommages résultant d&apos;une indisponibilité temporaire.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">8. Suspension et résiliation</h2>
            <p>
              fomau se réserve le droit de suspendre ou supprimer tout compte en cas de violation des présentes CGU, sans préavis ni indemnité. Vous pouvez supprimer votre compte à tout moment depuis les paramètres de l&apos;application. Consultez notre{" "}
              <Link href="/deleteaccount" className="text-brand-lighter hover:text-white transition-colors">
                guide de suppression
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">9. Responsabilité</h2>
            <p>
              fomau est un outil de mise en relation pour des événements. fomau n&apos;est pas responsable du déroulement des événements organisés via l&apos;application, ni des contenus publiés par les utilisateurs. L&apos;utilisation du service se fait sous votre entière responsabilité.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">10. Données personnelles</h2>
            <p>
              Le traitement de vos données personnelles est régi par notre{" "}
              <Link href="/politique-de-confidentialite" className="text-brand-lighter hover:text-white transition-colors">
                Politique de confidentialité
              </Link>, conforme au RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">11. Modification des CGU</h2>
            <p>
              fomau se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés des modifications substantielles via l&apos;application ou par e-mail. La poursuite de l&apos;utilisation du service vaut acceptation des nouvelles CGU.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">12. Droit applicable et litiges</h2>
            <p>
              Les présentes CGU sont soumises au droit français. Tout litige relatif à leur interprétation ou exécution relève de la compétence exclusive des tribunaux français. En cas de différend, une solution amiable sera recherchée en priorité via{" "}
              <a href="mailto:contact@fomau.com" className="text-brand-lighter hover:text-white transition-colors">contact@fomau.com</a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
