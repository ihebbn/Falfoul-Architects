import { useState } from "react";
import { useLanguage } from "@/i18n/language-context";
import {
  createContactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-form";

/** Inbox that receives contact form submissions. */
export const CONTACT_INBOX_EMAIL = "architecturefalfoul@gmail.com";

export function useContactMutation() {
  const [isPending, setIsPending] = useState(false);
  const { t } = useLanguage();

  return {
    isPending,
    mutate: async (
      data: ContactFormValues,
      options?: {
        onSuccess?: () => void;
        onError?: (error: Error) => void;
      }
    ) => {
      try {
        setIsPending(true);
        const validated = createContactFormSchema(t).parse(data);

        const res = await fetch(
          `https://formsubmit.co/ajax/${CONTACT_INBOX_EMAIL}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: validated.name,
              email: validated.email,
              subject: validated.subject,
              message: validated.message,
              _replyto: validated.email,
              _subject: `[Falfoul Architecture] ${validated.subject}`,
              _template: "table",
              _captcha: "false",
              _honey: "",
            }),
          }
        );

        const payload = (await res.json().catch(() => null)) as {
          success?: string | boolean;
          message?: string;
        } | null;

        const ok =
          res.ok &&
          (payload?.success === true ||
            payload?.success === "true" ||
            payload == null);

        if (!ok) {
          throw new Error(payload?.message || t("contact.sendFailed"));
        }

        options?.onSuccess?.();
      } catch (error) {
        options?.onError?.(
          error instanceof Error ? error : new Error(t("contact.genericError"))
        );
      } finally {
        setIsPending(false);
      }
    },
  };
}
