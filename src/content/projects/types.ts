import type { Project } from "@/types/content";

export type Shot = readonly [width: number, height: number];

export type ProjectEntry = Omit<Project, "images"> & { shots: Shot[] };
