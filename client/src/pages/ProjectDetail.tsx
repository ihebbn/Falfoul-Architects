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
import { cloudinaryImage } from "@/lib/utils";
import { useLanguage } from "@/i18n/language-context";
import {
  localizeCategory,
  localizeClient,
  localizePhrase,
  localizeProject,
  localizeStatus,
} from "@/i18n/localize";

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:id");
  const id = parseInt(params?.id || "0");
  const { data: project, isLoading } = useProject(id);
  const { t, language } = useLanguage();

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;

  if (!project) return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-display mb-4">{t("project.notFound")}</h1>
      <Link href="/projects" className="text-primary hover:underline">{t("project.backToList")}</Link>
    </div>
  );

  const localized = localizeProject(project, language);

  return (
    <div className="bg-background min-h-screen">
      <div className="h-[60vh] md:h-[80vh] w-full relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={cloudinaryImage(project.coverImage, 1920)}
            alt={localized.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-7xl mx-auto w-full">
          <Link href="/projects" className="text-white/70 hover:text-white flex items-center mb-6 transition-colors text-sm uppercase tracking-widest font-bold w-fit">
            <ArrowLeft className="mr-2 w-4 h-4" /> {t("project.back")}
          </Link>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block"
          >
            {localizeCategory(project.category, language)} - {project.year}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4"
          >
            {localized.title}
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
        <div className="lg:col-span-2 space-y-12">
          <div className="prose prose-lg prose-gray max-w-none">
            <h3 className="font-display text-3xl mb-6">{t("project.concept")}</h3>
            <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
              {localized.description}
            </p>
          </div>

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
                  src={cloudinaryImage(img, 1400)}
                  alt={`${t("project.galleryAlt")} ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-32 space-y-8">
            <div className="bg-muted/30 p-8 border border-border">
              <h3 className="font-display text-xl font-bold mb-6">{t("project.details")}</h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="block text-muted-foreground uppercase text-xs tracking-widest mb-1">{t("project.client")}</span>
                  <span className="font-medium text-foreground">
                    {localizeClient(project.client, language, t("project.private"))}
                  </span>
                </div>
                {localized.landSurface || localized.coveredSurface ? (
                  <>
                    {localized.landSurface ? (
                      <div>
                        <span className="block text-muted-foreground uppercase text-xs tracking-widest mb-1">{t("project.landSurface")}</span>
                        <span className="font-medium text-foreground">{localized.landSurface}</span>
                      </div>
                    ) : null}
                    {localized.coveredSurface ? (
                      <div>
                        <span className="block text-muted-foreground uppercase text-xs tracking-widest mb-1">{t("project.coveredSurface")}</span>
                        <span className="font-medium text-foreground">{localized.coveredSurface}</span>
                      </div>
                    ) : null}
                  </>
                ) : (
                  <div>
                    <span className="block text-muted-foreground uppercase text-xs tracking-widest mb-1">{t("project.surface")}</span>
                    <span className="font-medium text-foreground whitespace-pre-line">{localized.surface}</span>
                  </div>
                )}
                <div>
                  <span className="block text-muted-foreground uppercase text-xs tracking-widest mb-1">{t("project.architects")}</span>
                  <span className="font-medium text-foreground">
                    {project.architects
                      ? localizePhrase(project.architects, language) ?? project.architects
                      : "Falfoul Architecture"}
                  </span>
                </div>
                <div>
                  <span className="block text-muted-foreground uppercase text-xs tracking-widest mb-1">{t("project.status")}</span>
                  <span className="font-medium text-foreground">
                    {localizeStatus(project.status, language, t("project.delivered"))}
                  </span>
                </div>
              </div>

              {project.distinctions && project.distinctions.length > 0 && (
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-display text-lg font-bold mb-4">{t("project.distinctions")}</h4>
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
                <AccordionTrigger className="font-display">{t("project.techSpecs")}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t("project.techSpecsBody")}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
