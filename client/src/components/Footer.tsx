import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 md:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-display font-bold mb-6">
            FALFOUL <span className="text-primary font-normal">Architecture</span>
          </h2>
          <p className="text-white/60 max-w-sm leading-relaxed">
            Une agence d'architecture contemporaine dédiée à la création d'espaces intemporels, 
            alliant fonctionnalité et esthétique épurée.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-6 text-primary">Navigation</h3>
          <ul className="space-y-3">
            <li><Link href="/"><span className="text-white/60 hover:text-white cursor-pointer transition-colors">Accueil</span></Link></li>
            <li><Link href="/projects"><span className="text-white/60 hover:text-white cursor-pointer transition-colors">Projets</span></Link></li>
            <li><Link href="/events"><span className="text-white/60 hover:text-white cursor-pointer transition-colors">Événements</span></Link></li>
            <li><Link href="/contact"><span className="text-white/60 hover:text-white cursor-pointer transition-colors">Contact</span></Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-6 text-primary">Contact</h3>
          <ul className="space-y-3 text-white/60">
            <li>123 Avenue de l'Architecture</li>
            <li>75000 Paris, France</li>
            <li className="pt-2">+33 1 23 45 67 89</li>
            <li>contact@falfoul-archi.com</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
        <p>© 2024 FALFOUL Architecture. Tous droits réservés.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  );
}
