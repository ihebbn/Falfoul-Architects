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
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-form";

export default function Contact() {
  const { toast } = useToast();
  const mutation = useContactMutation();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message envoye",
          description:
            "Merci. Votre message a bien ete transmis et nous reviendrons vers vous rapidement.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: error.message,
        });
      },
    });
  };

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
              Contact
            </h1>
            <p className="mb-12 max-w-[680px] text-[16px] text-foreground/85 leading-[1.75]">
              Vous avez un projet ? Une question ? <br />
              N'hesitez pas a nous ecrire ou a venir nous rencontrer a l'agence.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-muted rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-[12px] md:text-[13px] font-medium uppercase tracking-[0.11em] text-foreground">
                    Notre Agence
                  </h3>
                  <p className="text-[16px] text-foreground/85 leading-[1.75]">
                    123 Avenue Habib Bourguiba
                    <br />
                    1000 Tunis, Tunisie
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-muted rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-[12px] md:text-[13px] font-medium uppercase tracking-[0.11em] text-foreground">
                    Email
                  </h3>
                  <a
                    href="mailto:contact@falfoul-archi.com"
                    className="text-[16px] text-foreground/85 hover:text-primary transition-colors"
                  >
                    contact@falfoul-archi.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-muted rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-[12px] md:text-[13px] font-medium uppercase tracking-[0.11em] text-foreground">
                    Telephone
                  </h3>
                  <p className="text-[16px] text-foreground/85 leading-[1.75]">
                    +216 71 123 456
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 w-full h-64 bg-muted grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                alt="Map"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://maps.google.com/?q=123+Avenue+Habib+Bourguiba+Tunis"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline" className="bg-white/80 backdrop-blur">
                    Voir sur Google Maps
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 shadow-lg shadow-black/5 border border-border"
          >
            <h2 className="mb-8 text-[clamp(1.35rem,2.2vw,1.8rem)] font-medium tracking-[0.02em] text-[#3a3a3a] leading-[1.15]">
              Envoyez-nous un message
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
                  Nom complet
                </label>
                <Input
                  {...form.register("name")}
                  className="bg-background border-border focus:border-primary rounded-none h-12"
                  placeholder="Jean Dupont"
                />
                {form.formState.errors.name && (
                  <p className="text-destructive text-sm">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.11em] text-muted-foreground">
                  Email
                </label>
                <Input
                  {...form.register("email")}
                  type="email"
                  className="bg-background border-border focus:border-primary rounded-none h-12"
                  placeholder="jean@exemple.com"
                />
                {form.formState.errors.email && (
                  <p className="text-destructive text-sm">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.11em] text-muted-foreground">
                  Sujet
                </label>
                <Input
                  {...form.register("subject")}
                  className="bg-background border-border focus:border-primary rounded-none h-12"
                  placeholder="Demande de devis"
                />
                {form.formState.errors.subject && (
                  <p className="text-destructive text-sm">
                    {form.formState.errors.subject.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.11em] text-muted-foreground">
                  Message
                </label>
                <Textarea
                  {...form.register("message")}
                  className="bg-background border-border focus:border-primary rounded-none min-h-[150px] resize-none"
                  placeholder="Parlez-nous de votre projet..."
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
                {mutation.isPending ? "Envoi..." : "Envoyer le message"}
                {!mutation.isPending && <ArrowRight className="ml-2 w-4 h-4" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
