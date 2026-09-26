import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";
import { fitToViewport, isMobileShot } from "@/lib/media";
import { getCategoryLabel } from "@/lib/projects";
import type { Project } from "@/types/content";
import { CoverReveal } from "./CoverReveal";
import { PhoneShowcase } from "./PhoneShowcase";
import { ProjectCover } from "./ProjectCover";

interface ProjectHeaderProps {
  project: Project;
  position: number;
  total: number;
}

export function ProjectHeader({ project, position, total }: ProjectHeaderProps) {
  const facts = [
    { label: "Discipline", value: getCategoryLabel(project.category) },
    { label: "Key features", value: `${project.highlights.length} delivered` },
    { label: "Screens", value: project.images.length ? `${project.images.length} in gallery` : "On request" },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgb(107_140_255/0.14),transparent_70%)]"
      />
      <div className="container-page relative">
        <Reveal immediate className="flex items-center justify-between text-sm text-muted">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" /> All projects
          </Link>
          <span className="tabular-nums">
            {String(position).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
          <Reveal stagger immediate className="flex flex-col items-start gap-5 lg:col-span-7">
            <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
              {getCategoryLabel(project.category)}
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold text-balance md:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">{project.tagline}</p>
          </Reveal>

          <Reveal
            immediate
            delay={0.15}
            className="rounded-3xl border border-border bg-surface/80 p-6 backdrop-blur lg:col-span-5"
          >
            <p className="text-sm font-medium">At a glance</p>
            <dl className="mt-4 grid grid-cols-3 gap-4">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs text-subtle">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border pt-5">
              {project.stack.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  title={tech}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-muted"
                >
                  <TechIcon name={tech} className="size-3.5" />
                  {tech}
                </span>
              ))}
            </div>
            {project.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group mt-5 flex items-center justify-between rounded-2xl bg-foreground px-4 py-3 text-sm font-medium text-background transition-colors hover:bg-white"
              >
                {link.label}
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </a>
            ))}
          </Reveal>
        </div>

        <div className="mt-14">
          <CoverReveal>
            <ProjectHero project={project} />
          </CoverReveal>
        </div>
      </div>
    </section>
  );
}

function ProjectHero({ project }: { project: Project }) {
  const [cover] = project.images;

  if (!cover) {
    return (
      <div className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-border-strong bg-surface">
        <ProjectCover project={project} sizes="100vw" />
      </div>
    );
  }

  if (isMobileShot(cover)) {
    return <PhoneShowcase images={project.images.filter(isMobileShot).slice(0, 3)} />;
  }

  return (
    <div className="mx-auto" style={{ maxWidth: fitToViewport(cover, "76svh") }}>
      <BrowserFrame image={cover} label={project.title} sizes="(min-width: 1280px) 1200px, 100vw" priority />
    </div>
  );
}
