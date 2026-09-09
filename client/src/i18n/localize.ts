import type { Event, Project } from "@/data/site-data";
import { PROJECT_EN } from "./project-en";
import {
  CATEGORY_LABELS,
  CLIENT_LABELS,
  STATUS_LABELS,
  type Language,
} from "./translations";

function normalizeLabel(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[''`´’]/g, "'")
    .toLowerCase()
    .trim();
}

export function localizeCategory(category: string, language: Language) {
  return CATEGORY_LABELS[language][category] ?? category;
}

export function localizeStatus(
  status: string | null,
  language: Language,
  fallback: string
) {
  if (!status) return fallback;
  const direct = STATUS_LABELS[status]?.[language];
  if (direct) return direct;
  const match = Object.entries(STATUS_LABELS).find(
    ([key]) => normalizeLabel(key) === normalizeLabel(status)
  );
  return match?.[1][language] ?? status;
}

export function localizeClient(
  client: string | null,
  language: Language,
  fallback: string
) {
  if (!client) return fallback;
  return localizePhrase(client, language) ?? client;
}

export function localizePhrase(value: string, language: Language) {
  const direct = CLIENT_LABELS[value]?.[language];
  if (direct) return direct;
  const match = Object.entries(CLIENT_LABELS).find(
    ([key]) => normalizeLabel(key) === normalizeLabel(value)
  );
  return match?.[1][language];
}

export function localizeSurface(value: string, language: Language) {
  if (language !== "en") return value;
  return value
    .replace(/Sous-sol/g, "Basement")
    .replace(/Rdc/g, "Ground floor")
    .replace(/RDC/g, "Ground floor");
}

export function localizeProject(project: Project, language: Language): Project {
  if (language !== "en") return project;
  const overlay = PROJECT_EN[project.id];
  return {
    ...project,
    title: overlay?.title ?? project.title,
    description: overlay?.description ?? project.descriptionEn ?? project.description,
    surface: localizeSurface(project.surface, language),
    landSurface: project.landSurface
      ? localizeSurface(project.landSurface, language)
      : project.landSurface,
    coveredSurface: project.coveredSurface
      ? localizeSurface(project.coveredSurface, language)
      : project.coveredSurface,
  };
}

export function localizeEvent(event: Event, language: Language): Event {
  if (language !== "en") return event;
  return {
    ...event,
    title: event.titleEn ?? event.title,
    description: event.descriptionEn ?? event.description,
  };
}
