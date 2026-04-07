import { useProjects } from "@/hooks/use-projects";
import { PROJECT_CATEGORIES } from "@/data/site-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "wouter";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
type CardVariant = "standard" | "medium" | "tall";

const CARD_VARIANT_CLASSES: Record<CardVariant, string> = {
  standard: "aspect-[4/3]",
  medium: "aspect-[6/5]",
  tall: "aspect-square",
};

const getCardVariantFromSeed = (seed: number): CardVariant => {
  // Stable pseudo-random distribution for an editorial rhythm.
  let hash = (seed ^ 0x9e3779b9) >>> 0;
  hash = Math.imul(hash ^ (hash >>> 16), 0x85ebca6b) >>> 0;
  hash = Math.imul(hash ^ (hash >>> 13), 0xc2b2ae35) >>> 0;
  hash = (hash ^ (hash >>> 16)) >>> 0;

  const normalized = hash / 4294967295;
  if (normalized < 0.62) return "standard";
  if (normalized < 0.9) return "medium";
  return "tall";
};

const getProjectCardVariant = (
  projectId: number,
  index: number,
  totalCards: number
): CardVariant => {
  const seed = projectId * 101 + index * 37 + 17;
  const baseVariant = getCardVariantFromSeed(seed);

  const mdSecondStart = Math.ceil(totalCards / 2);
  const lgSecondStart = Math.ceil(totalCards / 3);
  const lgThirdStart = Math.ceil((totalCards * 2) / 3);
  const starterBucket = getCardOffsetFromSeed(seed + 11);

  // Curate starter cards so the first visual line does not read as a flat grid.
  if (totalCards > 2 && index === lgSecondStart) {
    return starterBucket < 35 ? "tall" : "medium";
  }
  if (totalCards > 2 && index === lgThirdStart) {
    return starterBucket < 55 ? "medium" : "standard";
  }
  if (totalCards === 2 && index === mdSecondStart) {
    return "medium";
  }

  return baseVariant;
};

const getCardOffsetFromSeed = (seed: number): number => {
  let hash = (seed ^ 0x7f4a7c15) >>> 0;
  hash = Math.imul(hash ^ (hash >>> 15), 0x2c1b3c6d) >>> 0;
  hash = Math.imul(hash ^ (hash >>> 12), 0x297a2d39) >>> 0;
  hash = (hash ^ (hash >>> 15)) >>> 0;
  return hash % 100;
};

const getProjectCardOffsetClass = (
  projectId: number,
  index: number,
  totalCards: number
): string => {
  const classes: string[] = [];

  // In CSS multicolumn layouts, visible "row starts" are chunk starts.
  // Offset those starts to avoid a flat first line.
  const mdSecondStart = Math.ceil(totalCards / 2);
  const lgSecondStart = Math.ceil(totalCards / 3);
  const lgThirdStart = Math.ceil((totalCards * 2) / 3);

  if (totalCards > 1 && index === mdSecondStart) {
    classes.push("md:mt-4 lg:mt-0");
  }
  if (totalCards > 2 && index === lgSecondStart) {
    classes.push("lg:mt-9");
  }
  if (totalCards > 2 && index === lgThirdStart) {
    classes.push("lg:mt-4");
  }

  // Keep subtle occasional offsets elsewhere for editorial rhythm.
  if (classes.length === 0) {
    const randomBucket = getCardOffsetFromSeed(projectId * 67 + index * 41 + 29);
    if (randomBucket < 12) classes.push("md:mt-1 lg:mt-2");
    else if (randomBucket < 20) classes.push("lg:mt-3");
  }

  return classes.join(" ");
};

export default function Home() {
  const { data: projects, isLoading } = useProjects();
  const [activeCategory, setActiveCategory] = useState("TOUS");
  const [showHeroTitle, setShowHeroTitle] = useState(true);
  const [showHeroDescription, setShowHeroDescription] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const filteredProjects = projects?.filter((p) =>
    activeCategory === "TOUS" ? true : p.category === activeCategory
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowHeroTitle(false);
      setShowHeroDescription(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0 overflow-hidden bg-black"
        >
          <iframe
            src="https://www.youtube.com/embed/q8ayAG2hvjg?autoplay=1&mute=1&loop=1&playlist=q8ayAG2hvjg&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1"
            title="Falfoul Architecture Hero Background"
            className="absolute top-1/2 left-1/2 h-[56.25vw] w-[177.78vh] min-h-full min-w-full max-w-none -translate-x-1/2 -translate-y-1/2 scale-[1.16] md:scale-[1.12] pointer-events-none"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <AnimatePresence>
            {showHeroTitle && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.65, ease: "easeInOut" }}
                className="mb-6"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight">
                  FALFOUL <br />
                  <span className="text-primary font-light italic">Architecture</span>
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showHeroDescription && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.35, ease: "easeOut" } }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed"
              >
                Agence spécialisée en architecture contemporaine et design.
                <br />Créons ensemble des espaces qui respirent.
              </motion.p>
            )}
          </AnimatePresence>
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
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-fixed bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/images/Story Graph.png')" }}
        />
        <div className="absolute inset-0 z-0 bg-white/52" />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(112deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.88)_45%,rgba(255,255,255,0.72)_74%,rgba(255,255,255,0.56)_100%)]" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/82 via-white/68 to-white/34" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-28 md:h-36 bg-gradient-to-b from-transparent via-white/45 to-[#f6f6f6]" />
        <div className="relative z-10 mx-auto max-w-[1160px] px-6 md:px-10 lg:px-14 text-center font-['Montserrat']">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-[900px] text-[clamp(2.2rem,5.2vw,3.4rem)] font-medium tracking-[0.012em] text-foreground mb-10 md:mb-12 leading-[1.1]"
          >
            Histoire de FALFOUL Architecture
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-[680px] space-y-6 text-[16px] text-foreground/85 leading-[1.75]"
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 md:mt-16"
          >
            <Link href="/contact" className="inline-block">
              <Button variant="outline" className="rounded-none border border-foreground/75 px-7 md:px-8 py-3.5 md:py-4 text-[11px] md:text-xs font-medium tracking-[1.9px] uppercase text-foreground transition-colors duration-300 ease-out hover:bg-foreground hover:text-background">
                Démarrer un projet
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pt-32 md:pt-40 pb-28 md:pb-32 bg-muted/30">
        <div className="max-w-[2400px] mx-auto px-2 sm:px-3 lg:px-4 xl:px-5">

          <div className="text-center mb-6 md:mb-7">
            <h2 className="relative -top-[7px] mx-auto max-w-[900px] font-['Montserrat'] text-[clamp(1.9rem,3.8vw,2.625rem)] font-medium tracking-[0.02em] text-[#3a3a3a] leading-[1.1]">Projets Récents</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-14">
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

          <div className="w-full">
            {isLoading ? (
              <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-5">
                {Array(6).fill(0).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "mb-4 md:mb-5 break-inside-avoid",
                      getProjectCardOffsetClass(i + 1, i, 6)
                    )}
                  >
                    <div
                      className={cn(
                        "w-full bg-[#DCDCDC] animate-pulse",
                        CARD_VARIANT_CLASSES[getProjectCardVariant(i + 1, i, 6)]
                      )}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.045,
                        delayChildren: 0.03,
                      },
                    },
                    exit: {
                      transition: {
                        staggerChildren: 0.02,
                        staggerDirection: -1,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-5"
                >
                  {filteredProjects?.map((project, index) => {
                    const cardVariant = getProjectCardVariant(
                      project.id,
                      index,
                      filteredProjects.length
                    );
                    const offsetClass = getProjectCardOffsetClass(
                      project.id,
                      index,
                      filteredProjects.length
                    );

                    return (
                      <motion.div
                        key={project.id}
                        variants={{
                          hidden: {
                            clipPath: "inset(100% 0% 0% 0%)",
                            y: 18,
                          },
                          visible: {
                            clipPath: "inset(0% 0% 0% 0%)",
                            y: 0,
                            transition: {
                              duration: 0.5,
                              ease: [0.2, 0.8, 0.2, 1],
                            },
                          },
                          exit: {
                            clipPath: "inset(0% 0% 100% 0%)",
                            y: -10,
                            transition: {
                              duration: 0.28,
                              ease: [0.4, 0, 1, 1],
                            },
                          },
                        }}
                        className={cn(
                          "mb-4 md:mb-5 break-inside-avoid overflow-hidden",
                          offsetClass
                        )}
                      >
                        <Link href={`/projects/${project.id}`}>
                          <article className="group cursor-pointer overflow-hidden border border-[#DCDCDC] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_14px_28px_rgba(0,0,0,0.1)]">
                            <div
                              className={cn(
                                "relative overflow-hidden",
                                CARD_VARIANT_CLASSES[cardVariant]
                              )}
                            >
                              <img
                                src={project.coverImage}
                                alt={project.title}
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                              />
                              <div className="absolute inset-0 bg-[#4A4A4A]/0 transition-colors duration-300 group-hover:bg-[#4A4A4A]/40" />
                              <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                <h3 className="text-white font-display text-2xl leading-tight">{project.title}</h3>
                                <p className="mt-2 text-sm text-white/90 tracking-wide">
                                  {project.location} <span className="text-[#E5A90A]">•</span> {project.year}
                                </p>
                              </div>
                            </div>
                          </article>
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          <div className="mt-12 text-center">
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
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-4xl mx-auto text-center relative z-10 font-['Montserrat']">
          <h2 className="text-3xl md:text-5xl font-medium tracking-[0.012em] mb-8">
            Prêt à concrétiser votre vision ?
          </h2>
          <p className="text-white/60 text-lg font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
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
