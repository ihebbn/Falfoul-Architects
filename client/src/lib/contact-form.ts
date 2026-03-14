import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Veuillez renseigner votre nom."),
  email: z.string().trim().email("Veuillez renseigner un email valide."),
  subject: z.string().trim().min(3, "Veuillez preciser le sujet."),
  message: z.string().trim().min(10, "Veuillez decrire votre demande."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
