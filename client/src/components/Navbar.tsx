import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import type { Language } from "@/i18n/translations";

const SHOW_EVENTS_IN_NAV = false;

function LanguageToggle({
  language,
  setLanguage,
  isSolidNavbar,
  className,
  label,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  isSolidNavbar: boolean;
  className?: string;
  label: string;
}) {
  return (
    <div
      className={cn("flex items-center gap-1.5", className)}
      role="group"
      aria-label={label}
    >
      {(["fr", "en"] as const).map((code, index) => (
        <span key={code} className="flex items-center gap-1.5">
          {index > 0 && (
            <span
              className={cn(
                "text-[11px]",
                isSolidNavbar ? "text-foreground/30" : "text-white/40"
              )}
            >
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => setLanguage(code)}
            className={cn(
              "font-['Montserrat'] text-[11px] font-medium tracking-[1.5px] uppercase transition-colors",
              language === code
                ? "text-primary"
                : isSolidNavbar
                  ? "text-foreground/55 hover:text-foreground"
                  : "text-white/70 hover:text-white"
            )}
            aria-pressed={language === code}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const forceSolidNavbar =
    location === "/projects" || location === "/events" || location === "/contact";
  const isSolidNavbar = forceSolidNavbar || scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/projects", label: t("nav.projects") },
    ...(SHOW_EVENTS_IN_NAV ? [{ href: "/events", label: t("nav.events") }] : []),
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[64px] md:h-[70px] px-6 transition-all duration-300 ease-out",
        isSolidNavbar ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border/40" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <img
            src="/images/falfoul_logo-removebg-copie-1-1.png"
            alt="Falfoul Architecture"
            className={cn(
              "h-10 md:h-10 w-auto cursor-pointer transition-opacity duration-300",
              isSolidNavbar ? "opacity-100" : "opacity-100 md:invert md:brightness-0 md:mix-blend-difference"
            )}
          />
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={cn(
                "relative font-['Montserrat'] text-[13px] font-medium tracking-[1.5px] uppercase cursor-pointer group py-1 transition-colors",
                location === link.href
                  ? "text-primary"
                  : isSolidNavbar ? "text-foreground hover:text-primary" : "text-white mix-blend-difference hover:text-primary"
              )}>
                {link.label}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100",
                  location === link.href && "scale-x-100"
                )} />
              </span>
            </Link>
          ))}
          <LanguageToggle
            language={language}
            setLanguage={setLanguage}
            isSolidNavbar={isSolidNavbar}
            label={t("nav.language")}
          />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageToggle
            language={language}
            setLanguage={setLanguage}
            isSolidNavbar={isSolidNavbar}
            label={t("nav.language")}
          />
          <button
            className={cn(
              "p-1.5",
              isSolidNavbar ? "text-foreground" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 md:hidden shadow-xl"
        >
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={cn(
                    "block font-['Montserrat'] text-[13px] font-medium tracking-[1.5px] uppercase cursor-pointer",
                    location === link.href ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
