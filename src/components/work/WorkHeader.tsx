import { ArrowDown } from "lucide-react";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollButton } from "@/components/ui/ScrollButton";
import { getCategories } from "@/lib/projects";
import type { Project } from "@/types/content";
import { ProjectMosaic } from "./ProjectMosaic";

export function WorkHeader({ projects }: { projects: Project[] }) {
  const covers = projects.flatMap((project) => (project.images[0] ? [project.images[0]] : []));
  const stats = [
    { value: projects.length, label: "Projects" },
    { value: getCategories(projects).length, label: "Disciplines" },
    { value: projects.filter((project) => project.featured).length, label: "Case studies" },
  ];

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_70%_at_30%_40%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -left-40 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="container-page relative grid w-full items-center gap-12 lg:grid-cols-12">
        <Reveal stagger immediate className="flex flex-col items-start gap-6 lg:col-span-6">
          <p className="flex items-center gap-2 text-sm font-medium text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            Project archive
          </p>
          <h1 className="text-4xl leading-[1.08] font-semibold text-balance md:text-6xl">
            Everything I have built, in one place
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Production SaaS, AI and machine learning, systems engineering, web interfaces and published games.
            Search by name or technology.
          </p>

          <dl className="flex gap-10 border-t border-border pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-3xl font-semibold">
                  <Counter value={stat.value} />
                </dd>
                <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>

          <ScrollButton target="archive" variant="secondary" icon={<ArrowDown className="size-4" />}>
            Browse the archive
          </ScrollButton>
        </Reveal>

        <Reveal immediate delay={0.2} className="lg:col-span-6">
          <ProjectMosaic images={covers} className="h-80 sm:h-[26rem] lg:h-[38rem]" />
        </Reveal>
      </div>
    </section>
  );
}
