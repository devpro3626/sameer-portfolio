import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextProject } from "@/components/project/NextProject";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { ProjectOverview } from "@/components/project/ProjectOverview";
import { ReadingProgress } from "@/components/project/ReadingProgress";
import { getAllProjects, getNextProject, getProjectBySlug, getProjectIndex } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.images[0] ? [project.images[0].src] : undefined,
    },
  };
}

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const nextProject = getNextProject(slug);

  return (
    <>
      <ReadingProgress />
      <ProjectHeader project={project} position={getProjectIndex(slug)} total={getAllProjects().length} />
      <ProjectOverview project={project} />
      <ProjectGallery images={project.images.length > 1 ? project.images : []} />
      <NextProject
        project={nextProject}
        position={getProjectIndex(nextProject.slug)}
        total={getAllProjects().length}
      />
    </>
  );
}
