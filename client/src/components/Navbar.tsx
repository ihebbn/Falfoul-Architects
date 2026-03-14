import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
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
    { href: "/", label: "Accueil" },
    { href: "/projects", label: "Projets" },
    { href: "/events", label: "Événements" },
    { href: "/contact", label: "Contact" },
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

        {/* Desktop Menu */}
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
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
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
