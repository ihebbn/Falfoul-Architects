import { EVENTS } from "@/data/site-data";

export function useEvents() {
  return {
    data: EVENTS,
    isLoading: false,
  };
}
