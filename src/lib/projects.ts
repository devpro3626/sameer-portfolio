import { categoryLabels, projects } from "@/content/projects";
import type { Project, ProjectCategory } from "@/types/content";

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}

export function getProjectIndex(slug: string): number {
  return projects.findIndex((project) => project.slug === slug) + 1;
}

export function getCategoryLabel(category: ProjectCategory): string {
  return categoryLabels[category];
}

export function getCategories(list: Project[]): ProjectCategory[] {
  return [...new Set(list.map((project) => project.category))];
}
