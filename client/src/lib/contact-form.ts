import { z } from "zod";
import type { TranslationKey } from "@/i18n/translations";

type Translate = (key: TranslationKey) => string;

export function createContactFormSchema(t: Translate) {
  return z.object({
    name: z.string().trim().min(2, t("contact.errorName")),
    email: z.string().trim().email(t("contact.errorEmail")),
    subject: z.string().trim().min(3, t("contact.errorSubject")),
    message: z.string().trim().min(10, t("contact.errorMessage")),
  });
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactFormSchema>>;
