import { useState } from "react";
import { useLanguage } from "@/i18n/language-context";
import {
  createContactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-form";

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

        if (import.meta.env.DEV) {
          await new Promise((resolve) => window.setTimeout(resolve, 300));
          options?.onSuccess?.();
          return;
        }

        const body = new URLSearchParams({
          "form-name": "contact",
          ...validated,
        }).toString();

        const res = await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body,
        });

        if (!res.ok) {
          throw new Error(t("contact.sendFailed"));
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
