import { useProjects } from "@/hooks/use-projects";
import { PROJECT_CATEGORIES } from "@/data/site-data";
import { ProjectCard } from "@/components/ProjectCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();
  const [activeCategory, setActiveCategory] = useState("TOUS");

  const filteredProjects = projects?.filter(p => 
    activeCategory === "TOUS" ? true : p.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mx-auto mb-6 max-w-[900px] font-['Montserrat'] text-[clamp(1.9rem,3.8vw,2.625rem)] font-medium tracking-[0.02em] text-[#3a3a3a] leading-[1.1]">Nos Projets</h1>
          <p className="mx-auto max-w-[680px] font-['Montserrat'] text-[16px] text-foreground/85 leading-[1.75]">
            Une collection de nos réalisations les plus marquantes, témoignant de notre engagement 
            envers l'excellence architecturale et l'innovation durable.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "text-[12px] md:text-[13px] font-medium uppercase tracking-[0.11em] transition-all duration-300 border border-transparent rounded-none",
                activeCategory === cat 
                  ? "px-2.5 py-1.5 border-primary text-primary bg-primary/5" 
                  : "px-3.5 py-1.5 text-muted-foreground hover:text-foreground hover:border-foreground/20"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="aspect-[4/3] bg-muted animate-pulse" />
            ))
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredProjects?.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}
