import type { Project, ProjectCategory } from "@/types/content";
import { featuredProjects } from "./featured";
import { gameProjects } from "./games";
import { intelligenceProjects } from "./intelligence";
import { interfaceProjects } from "./interfaces";
import { platformProjects } from "./platforms";
import { systemsProjects } from "./systems";
import type { ProjectEntry } from "./types";

export const categoryLabels: Record<ProjectCategory, string> = {
  saas: "SaaS Platforms",
  ai: "AI & Data",
  systems: "Systems",
  web: "Web & Interfaces",
  games: "Games",
};

function toProject({ shots, ...entry }: ProjectEntry): Project {
  return {
    ...entry,
    images: shots.map(([width, height], index) => ({
      src: `/projects/${entry.slug}/${String(index + 1).padStart(2, "0")}.webp`,
      width,
      height,
      alt: `${entry.title} — screen ${index + 1}`,
    })),
  };
}

export const projects: Project[] = [
  ...featuredProjects,
  ...platformProjects,
  ...intelligenceProjects,
  ...systemsProjects,
  ...interfaceProjects,
  ...gameProjects,
].map(toProject);
