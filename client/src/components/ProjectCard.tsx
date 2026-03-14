import { Link } from "wouter";
import type { Project } from "@/data/site-data";
import { motion } from "framer-motion";

export function ProjectCard({ project, className }: { project: Project, className?: string }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`group cursor-pointer block h-full flex flex-col ${className}`}
      >
        <div className="relative flex-1 overflow-hidden bg-muted mb-4">
          <img
            src={project.coverImage}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

          {/* Gold Accent Line Reveal */}
          <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />

          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-widest text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            {project.category}
          </div>
        </div>

        <h3 className="text-xl font-display font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mt-1">{project.location} — {project.year}</p>
      </motion.div>
    </Link>
  );
}
