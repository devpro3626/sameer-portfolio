import type { Metadata } from "next";
import { ProjectsIndex } from "@/components/work/ProjectsIndex";
import { WorkHeader } from "@/components/work/WorkHeader";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "All projects",
  description:
    "Browse 40+ projects by Sameer Babar: SaaS platforms, AI products, machine learning, systems engineering, web interfaces and published games.",
  alternates: { canonical: "/work" },
  openGraph: { url: "/work" },
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
