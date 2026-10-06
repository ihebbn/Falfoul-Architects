import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContactMutation } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import {
  createContactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-form";
import { useLanguage } from "@/i18n/language-context";
import { useEffect, useMemo, useRef } from "react";

export default function Contact() {
  const { toast } = useToast();
  const mutation = useContactMutation();
  const { t, language } = useLanguage();
  const tRef = useRef(t);
  tRef.current = t;
  const officeAddress = t("footer.address");
  const mapQuery = encodeURIComponent(officeAddress);
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&z=17&output=embed`;

  const resolver = useMemo(
    () =>
      zodResolver(
        createContactFormSchema((key) => tRef.current(key))
      ),
    []
  );

  const form = useForm<ContactFormValues>({
    resolver,
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    form.clearErrors();
  }, [language, form]);

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: t("contact.successTitle"),
          description: t("contact.successBody"),
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: t("contact.errorTitle"),
          description: error.message,
        });
      },
    });
  };

  const introLines = t("contact.intro").split("\n");

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6 font-['Montserrat']">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-8 max-w-[900px] text-[clamp(1.9rem,3.8vw,2.625rem)] font-medium tracking-[0.02em] text-[#3a3a3a] leading-[1.1]">
              {t("contact.title")}
            </h1>
            <p className="mb-12 max-w-[680px] text-[16px] text-foreground/85 leading-[1.75]">
              {introLines[0]} <br />
              {introLines[1]}
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-muted rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-[12px] md:text-[13px] font-medium uppercase tracking-[0.11em] text-foreground">
                    {t("contact.office")}
                  </h3>
                  <p className="text-[16px] text-foreground/85 leading-[1.75]">
                    {officeAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-muted rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-[12px] md:text-[13px] font-medium uppercase tracking-[0.11em] text-foreground">
                    {t("contact.email")}
                  </h3>
                  <a
                    href={`mailto:${t("footer.email")}`}
                    className="text-[16px] text-foreground/85 hover:text-primary transition-colors"
                  >
                    {t("footer.email")}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-muted rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-[12px] md:text-[13px] font-medium uppercase tracking-[0.11em] text-foreground">
                    {t("contact.phone")}
                  </h3>
                  <p className="text-[16px] text-foreground/85 leading-[1.75]">
                    <a
                      href="tel:+21623311064"
                      className="transition-colors hover:text-primary"
                    >
                      {t("footer.phone")}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <a
              href={mapHref}
              target="_blank"
              rel="noreferrer"
              className="group relative mt-12 block h-[350px] overflow-hidden border border-black/10 bg-[#d7d7d7] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
              aria-label={t("contact.mapAria", { address: officeAddress })}
            >
              <iframe
                src={mapEmbedSrc}
                title={t("contact.mapTitle", { address: officeAddress })}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none absolute -left-[170px] -top-[96px] h-[calc(100%+96px)] w-[calc(100%+170px)] border-0 transition-[filter,transform] duration-700 ease-out grayscale-0 md:grayscale md:group-hover:grayscale-0 group-hover:scale-[1.02]"
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_42%,rgba(248,246,242,0.86)_100%)] transition-opacity duration-500 group-hover:opacity-40" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.10)_52%,rgba(255,255,255,0.18)_100%)] transition-opacity duration-500 group-hover:opacity-30" />

              <div className="pointer-events-none absolute bottom-6 left-6 max-w-[255px] border border-white/70 bg-white/88 px-6 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.08)] backdrop-blur-sm">
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  {t("contact.visitUs")}
                </p>
                <p className="mt-3 text-[15px] leading-[1.7] text-foreground/80">
                  {t("contact.mapHint")}
                </p>
              </div>

              <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-white/82 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground shadow-[0_10px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                {t("contact.viewOnMaps")}
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 shadow-lg shadow-black/5 border border-border"
          >
            <h2 className="mb-8 text-[clamp(1.35rem,2.2vw,1.8rem)] font-medium tracking-[0.02em] text-[#3a3a3a] leading-[1.15]">
              {t("contact.formTitle")}
            </h2>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="space-y-2">
                <label className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.11em] text-muted-foreground">
                  {t("contact.name")}
                </label>
                <Input
                  {...form.register("name")}
                  className="bg-background border-border focus:border-primary rounded-none h-12"
                  placeholder={t("contact.namePlaceholder")}
                />
                {form.formState.errors.name && (
                  <p className="text-destructive text-sm">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.11em] text-muted-foreground">
                  {t("contact.email")}
                </label>
                <Input
                  {...form.register("email")}
                  type="email"
                  className="bg-background border-border focus:border-primary rounded-none h-12"
                  placeholder={t("contact.emailPlaceholder")}
                />
                {form.formState.errors.email && (
                  <p className="text-destructive text-sm">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.11em] text-muted-foreground">
                  {t("contact.subject")}
                </label>
                <Input
                  {...form.register("subject")}
                  className="bg-background border-border focus:border-primary rounded-none h-12"
                  placeholder={t("contact.subjectPlaceholder")}
                />
                {form.formState.errors.subject && (
                  <p className="text-destructive text-sm">
                    {form.formState.errors.subject.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.11em] text-muted-foreground">
                  {t("contact.message")}
                </label>
                <Textarea
                  {...form.register("message")}
                  className="bg-background border-border focus:border-primary rounded-none min-h-[150px] resize-none"
                  placeholder={t("contact.messagePlaceholder")}
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-primary hover:bg-primary/90 text-white h-14 rounded-none uppercase tracking-widest font-bold text-sm shadow-md"
              >
                {mutation.isPending ? t("contact.sending") : t("contact.submit")}
                {!mutation.isPending && <ArrowRight className="ml-2 w-4 h-4" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
