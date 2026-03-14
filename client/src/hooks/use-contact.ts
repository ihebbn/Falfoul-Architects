import { useState } from "react";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-form";

export function useContactMutation() {
  const [isPending, setIsPending] = useState(false);

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
        const validated = contactFormSchema.parse(data);

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
          throw new Error("Impossible d'envoyer le message pour le moment.");
        }

        options?.onSuccess?.();
      } catch (error) {
        options?.onError?.(
          error instanceof Error ? error : new Error("Une erreur est survenue.")
        );
      } finally {
        setIsPending(false);
      }
    },
  };
}
