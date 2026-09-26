import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import { ProjectCover } from "@/components/project/ProjectCover";
import { TechIcon } from "@/components/ui/TechIcon";
import type { Project } from "@/types/content";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <li className="border-b border-border">
      <Link
        href={`/work/${project.slug}`}
        className="group relative -mx-3 flex items-center gap-5 rounded-2xl px-3 py-4 transition-colors duration-300 hover:bg-surface md:gap-7"
      >
        <div className="relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-xl border border-border bg-surface-raised sm:w-40 md:w-52">
          <div className="absolute inset-0 transition-transform duration-700 ease-out-expo group-hover:scale-110">
            <ProjectCover project={project} sizes="13rem" />
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-lg font-semibold transition-colors group-hover:text-accent md:text-xl">
              {project.title}
            </h3>
            {project.featured && (
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent">
                <Star className="size-3" /> Featured
              </span>
            )}
          </div>
          <p className="line-clamp-1 text-sm text-muted">{project.tagline}</p>
          <div className="mt-1 hidden flex-wrap items-center gap-x-3 gap-y-1 text-xs text-subtle sm:flex">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech} className="inline-flex items-center gap-1.5">
                <TechIcon name={tech} className="size-3.5" />
                {tech}
              </span>
            ))}
          </div>
        </div>

        <span className="hidden size-10 shrink-0 place-items-center rounded-full border border-border text-muted transition-all duration-300 group-hover:rotate-45 sm:grid group-hover:border-accent group-hover:bg-accent group-hover:text-white">
          <ArrowUpRight className="size-4" />
        </span>
      </Link>
    </li>
  );
}
