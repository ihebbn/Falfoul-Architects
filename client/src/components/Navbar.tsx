import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out px-6 py-4 md:py-6",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border/40 py-3 md:py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <span className={cn(
            "text-xl md:text-2xl font-bold font-display tracking-tight cursor-pointer transition-colors duration-300",
            scrolled ? "text-foreground" : "text-foreground md:text-white mix-blend-difference"
          )}>
            FALFOUL <span className="text-primary font-normal">Architecture</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={cn(
                "relative text-sm font-medium tracking-wide uppercase cursor-pointer group py-2 transition-colors",
                location === link.href 
                  ? "text-primary" 
                  : scrolled ? "text-foreground hover:text-primary" : "text-white mix-blend-difference hover:text-primary"
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
          className="md:hidden text-foreground p-2"
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
                    "block text-lg font-display cursor-pointer",
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
