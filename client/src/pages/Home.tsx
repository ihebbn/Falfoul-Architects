import { useProjects } from "@/hooks/use-projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";

import aboutBg from "@assets/5ef71572da6e9dc716e27f5c_Our_Story_Graph_(1)_1771601338215.png";

export default function Home() {
  const { data: projects, isLoading } = useProjects();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          {/* Modern architecture hero - minimal concrete */}
          <img 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
            alt="Falfoul Architecture Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight"
          >
            FALFOUL <br/>
            <span className="text-primary font-light italic">Architecture</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Agence spécialisée en architecture contemporaine et design.
            <br />Créons ensemble des espaces qui respirent.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown className="w-8 h-8 opacity-70" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-center bg-no-repeat bg-cover opacity-10"
          style={{ backgroundImage: `url(${aboutBg})` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Introduction</span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground mb-8 leading-tight">
            Histoire de FALFOUL Architecture
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Fondée sur une vision de pureté structurelle, FALFOUL Architecture est née de la volonté 
              de redéfinir le paysage urbain à travers le prisme de la modernité et de la durabilité. 
              Notre histoire est celle d'une quête incessante de l'harmonie entre l'homme et son environnement.
            </p>
            <p>
              Depuis nos débuts, nous avons privilégié une approche minimaliste où chaque ligne, chaque 
              matériau et chaque source de lumière naturelle est méticuleusement orchestré pour créer 
              des espaces qui respirent et inspirent.
            </p>
          </div>
          <div className="mt-12">
            <Link href="/contact" className="inline-block">
              <Button variant="outline" className="px-8 py-6 rounded-none border-foreground text-foreground hover:bg-foreground hover:text-white transition-all uppercase tracking-widest text-xs font-bold">
                Démarrer un projet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-muted/30 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Portfolio</span>
              <h2 className="text-4xl font-display font-medium text-foreground">Projets Récents</h2>
            </div>
            <Link href="/projects" className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
              Voir tout <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {isLoading ? (
              // Loading skeleton
              Array(3).fill(0).map((_, i) => (
                <div key={i} className="aspect-[4/3] bg-muted animate-pulse" />
              ))
            ) : (
              projects?.slice(0, 3).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            )}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/projects">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Voir tous les projets <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-8">
            Prêt à concrétiser votre vision ?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Discutons de votre projet autour d'un café ou en visio. 
            La première consultation est l'occasion de définir les contours de vos ambitions.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg rounded-none uppercase tracking-widest font-bold shadow-lg shadow-primary/20">
              Prendre rendez-vous
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
