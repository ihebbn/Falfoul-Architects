import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-foreground pt-12 pb-8 text-white md:pt-16 md:pb-10">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 md:h-32"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(58% 90% at 50% 100%, rgba(229, 169, 10, 0.20) 0%, rgba(245, 226, 178, 0.09) 26%, rgba(255, 255, 255, 0.05) 40%, rgba(74, 74, 74, 0) 88%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-16">
        <div className="max-w-md">
          <h2 className="font-display text-2xl font-semibold tracking-[0.012em] md:text-[1.7rem]">
            FALFOUL <span className="font-normal text-primary">Architecture</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Agence d'architecture contemporaine axee sur des espaces epures, durables et intemporels.
          </p>

          <div className="mt-6 flex items-center gap-3.5">
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:text-primary"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="md:border-l md:border-white/15 md:pl-12">
          <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-primary">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/65">
            <li>123 Avenue Habib Bourguiba, 1000 Tunis, Tunisie</li>
            <li>+216 71 123 456</li>
            <li>contact@falfoul-archi.com</li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 flex max-w-7xl items-center justify-center border-t border-white/10 px-6 pt-5 text-xs text-white/45 md:mt-12 md:justify-start">
        <p>&copy; 2024 FALFOUL Architecture. Tous droits reserves.</p>
      </div>
    </footer>
  );
}
