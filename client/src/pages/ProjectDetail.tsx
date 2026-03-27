import { useProject } from "@/hooks/use-projects";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ProjectDetail() {
  const [match, params] = useRoute("/projects/:id");
  const id = parseInt(params?.id || "0");
  const { data: project, isLoading } = useProject(id);

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  
  if (!project) return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-display mb-4">Projet introuvable</h1>
      <Link href="/projects" className="text-primary hover:underline">Retour aux projets</Link>
    </div>
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Image */}
      <div className="h-[60vh] md:h-[80vh] w-full relative overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={project.coverImage} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-7xl mx-auto w-full">
          <Link href="/projects" className="text-white/70 hover:text-white flex items-center mb-6 transition-colors text-sm uppercase tracking-widest font-bold w-fit">
            <ArrowLeft className="mr-2 w-4 h-4" /> Retour
          </Link>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block"
          >
            {project.category} - {project.year}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4"
          >
            {project.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl"
          >
            {project.location}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <div className="prose prose-lg prose-gray max-w-none">
            <h3 className="font-display text-3xl mb-6">Le Concept</h3>
            <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 gap-8 mt-12">
            {project.images?.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 space-y-8">
            <div className="bg-muted/30 p-8 border border-border">
              <h3 className="font-display text-xl font-bold mb-6">Détails du Projet</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <span className="block text-muted-foreground uppercase text-xs tracking-widest mb-1">Client</span>
                  <span className="font-medium text-foreground">{project.client || "Privé"}</span>
                </div>
                {project.landSurface ? (
                  <>
                    <div>
                      <span className="block text-muted-foreground uppercase text-xs tracking-widest mb-1">Surface terrain</span>
                      <span className="font-medium text-foreground">{project.landSurface}</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground uppercase text-xs tracking-widest mb-1">Surface couverte</span>
                      <span className="font-medium text-foreground">{project.coveredSurface}</span>
                    </div>
                  </>
                ) : (
                  <div>
                    <span className="block text-muted-foreground uppercase text-xs tracking-widest mb-1">Surface</span>
                    <span className="font-medium text-foreground whitespace-pre-line">{project.surface}</span>
                  </div>
                )}
                <div>
                  <span className="block text-muted-foreground uppercase text-xs tracking-widest mb-1">Architectes</span>
                  <span className="font-medium text-foreground">{project.architects || "Falfoul Architecture"}</span>
                </div>
                <div>
                  <span className="block text-muted-foreground uppercase text-xs tracking-widest mb-1">Statut</span>
                  <span className="font-medium text-foreground">{project.status || "Livré"}</span>
                </div>
              </div>

              {project.distinctions && project.distinctions.length > 0 && (
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-display text-lg font-bold mb-4">Distinctions</h4>
                  <ul className="space-y-2">
                    {project.distinctions.map((d, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <span className="text-primary mr-2">•</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-display">Spécifications Techniques</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Informations complémentaires sur les matériaux, la structure et les aspects techniques spécifiques à ce projet.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

