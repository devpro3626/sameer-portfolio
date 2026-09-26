import { Reveal } from "@/components/ui/Reveal";
import { ScrubText } from "@/components/ui/ScrubText";
import type { Project } from "@/types/content";

export function ProjectOverview({ project }: { project: Project }) {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-12">
          <p className="text-sm font-medium text-accent lg:col-span-3">Overview</p>
          <div className="flex flex-col gap-8 lg:col-span-9">
            <ScrubText
              text={project.summary}
              className="text-2xl leading-snug font-medium text-balance md:text-[2.1rem] md:leading-[1.3]"
            />
            <Reveal stagger className="grid gap-6 md:grid-cols-2">
              {project.overview.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-12">
          <p className="text-sm font-medium text-accent lg:col-span-3">Key features</p>
          <Reveal as="ol" stagger className="grid gap-x-10 sm:grid-cols-2 lg:col-span-9">
            {project.highlights.map((highlight, index) => (
              <li key={highlight} className="group relative flex gap-5 border-t border-border py-6">
                <span
                  aria-hidden
                  className="absolute -top-px left-0 h-px w-0 bg-accent transition-[width] duration-700 ease-out-expo group-hover:w-full"
                />
                <span className="font-display text-sm font-semibold text-subtle tabular-nums transition-colors group-hover:text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
