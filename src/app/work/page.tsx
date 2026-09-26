import type { Metadata } from "next";
import { ProjectsIndex } from "@/components/work/ProjectsIndex";
import { WorkHeader } from "@/components/work/WorkHeader";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "All projects",
  description: "SaaS platforms, AI products, systems, interfaces and games built by Sameer Babar.",
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <>
      <WorkHeader projects={projects} />
      <ProjectsIndex projects={projects} />
    </>
  );
}
