"use client";
import FomauLogo from "./FomauLogo";

type LinkItem = { label: string; href: string; external?: boolean };

const links: Record<string, LinkItem[]> = {
  Produit: [
    { label: "Le projet", href: "#projet" },
    { label: "L'application", href: "#" },
  ],
  Contact: [
    { label: "contact@fomau.com", href: "mailto:contact@fomau.com" },
    { label: "Instagram", href: "https://www.instagram.com/fomau.app/", external: true },
    { label: "TikTok", href: "https://www.tiktok.com/@fomau.app", external: true },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <FomauLogo size={24} className="mb-4" />
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-[200px]">
              Organise et participe aux évènements qui te ressemblent.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-white/20">© 2025 fomau. Tous droits réservés.</p>
          <p className="text-xs text-white/20">Fait avec ❤️ en France</p>
        </div>
      </div>
    </footer>
  );
}
