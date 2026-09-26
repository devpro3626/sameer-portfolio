"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import type { Project } from "@/types/content";
import { ProjectCover } from "./ProjectCover";

interface NextProjectProps {
  project: Project;
  position: number;
  total: number;
}

export function NextProject({ project, position, total }: NextProjectProps) {
  const bannerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.fromTo(
          bannerRef.current,
          { clipPath: "inset(12% 10% 0% 10% round 1.5rem)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 1.5rem)",
            ease: "none",
            scrollTrigger: { trigger: bannerRef.current, start: "top bottom", end: "top 45%", scrub: true },
          },
        );
      });
    },
    { scope: bannerRef },
  );

  return (
    <section className="border-t border-border pt-16 md:pt-24">
      <Link href={`/work/${project.slug}`} className="group container-page block">
        <div className="flex items-end justify-between gap-6">
          <div className="min-w-0">
            <p className="flex items-center gap-3 text-sm text-muted">
              Up next
              <span className="h-px w-8 bg-border-strong" aria-hidden />
              <span className="tabular-nums">
                {String(position).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </p>
            <h2 className="mt-4 text-4xl leading-[1.05] font-semibold transition-colors duration-500 group-hover:text-accent md:text-7xl">
              {project.title}
            </h2>
            <p className="mt-3 text-muted md:text-lg">{project.tagline}</p>
          </div>
          <span className="grid size-14 shrink-0 place-items-center rounded-full border border-border-strong text-foreground transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-white md:size-20">
            <ArrowUpRight className="size-6 md:size-7" />
          </span>
        </div>

        <div
          ref={bannerRef}
          className="relative mt-10 h-64 overflow-hidden rounded-3xl bg-surface md:mt-14 md:h-[26rem]"
        >
          <div className="absolute inset-0 scale-105 transition-transform duration-1000 ease-out-expo group-hover:scale-100">
            <ProjectCover project={project} sizes="(min-width: 1280px) 1200px, 100vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
      </Link>
    </section>
  );
}
