import { getProjectById, PROJECTS } from "@/data/site-data";

export function useProjects() {
  return {
    data: PROJECTS,
    isLoading: false,
  };
}

export function useProject(id: number) {
  return {
    data: Number.isFinite(id) ? getProjectById(id) : null,
    isLoading: false,
  };
}
