import { useEvents } from "@/hooks/use-events";
import { format } from "date-fns";
import { enUS, fr } from "date-fns/locale";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/language-context";
import { localizeEvent } from "@/i18n/localize";

export default function Events() {
  const { data: events, isLoading } = useEvents();
  const { t, language } = useLanguage();
  const dateLocale = language === "en" ? enUS : fr;

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-foreground">{t("events.title")}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("events.intro")}
          </p>
        </div>

        <div className="relative border-l border-border ml-4 md:ml-0 md:pl-0 space-y-16">
          {isLoading ? (
            <div className="p-8 text-center text-muted-foreground">{t("events.loading")}</div>
          ) : (
            events?.map((event, index) => {
              const localized = localizeEvent(event, language);

              return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-0 md:flex md:gap-12 group"
              >
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background md:hidden" />

                <div className="hidden md:block md:w-1/4 text-right pt-2 relative">
                  <div className="absolute right-[-29px] top-4 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10" />
                  <span className="block text-3xl font-display font-bold text-foreground">
                    {format(new Date(event.date), "d MMM", { locale: dateLocale })}
                  </span>
                  <span className="block text-muted-foreground font-medium">
                    {format(new Date(event.date), "yyyy")}
                  </span>
                </div>

                <div className="md:w-3/4 md:border-l md:border-border md:pl-12 pb-8 md:pb-0">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 rounded-sm">
                    {event.type}
                  </span>

                  <div className="md:hidden text-sm text-muted-foreground mb-2 font-bold uppercase tracking-wide">
                    {format(new Date(event.date), "d MMMM yyyy", { locale: dateLocale })}
                  </div>

                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {localized.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {localized.description}
                  </p>

                  {event.externalLink && (
                    <a
                      href={event.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors border-b border-foreground hover:border-primary pb-0.5"
                    >
                      {t("events.readMore")}
                    </a>
                  )}
                </div>
              </motion.div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
