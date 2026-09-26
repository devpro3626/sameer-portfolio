import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { CircularText } from "@/components/ui/CircularText";
import { cn } from "@/lib/cn";
import type { Project, ProjectImage } from "@/types/content";

interface ProjectsWallProps {
  projects: Project[];
}

export function ProjectsWall({ projects }: ProjectsWallProps) {
  const covers = projects.flatMap((project) => (project.images[0] ? [project.images[0]] : []));
  const rows = [covers.filter((_, index) => index % 2 === 0), covers.filter((_, index) => index % 2 === 1)];

  return (
    <section aria-labelledby="wall-title" className="relative py-16 md:py-24">
      <Link href="/work" className="group relative block overflow-hidden">
        <div className="md:fade-edges-y md:py-6">
          <div className="fade-edges-x flex flex-col gap-3 opacity-80 transition-opacity duration-700 group-hover:opacity-80 md:-rotate-3 md:scale-110 md:gap-4 md:py-10 md:opacity-60">
            {rows.map((row, index) => (
              <WallRow key={index} images={row} reverse={index === 1} />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_45%_60%_at_50%_50%,var(--background)_35%,transparent_100%)] md:block" />

        <div className="container-page mt-8 flex items-center gap-5 md:absolute md:inset-0 md:mt-0 md:flex-col md:justify-center md:gap-6 md:text-center">
          <div className="relative grid size-32 shrink-0 place-items-center md:size-48">
            <CircularText
              text="Explore all projects • Explore all projects • "
              className="absolute inset-0 text-foreground/80"
            />
            <span className="grid size-12 place-items-center rounded-full bg-accent text-white shadow-[0_0_40px_rgb(107_140_255/0.5)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45 md:size-20">
              <ArrowUpRight className="size-6 md:size-7" />
            </span>
          </div>
          <div>
            <h2 id="wall-title" className="text-2xl font-semibold md:text-4xl">
              {projects.length} projects and counting
            </h2>
            <p className="mt-2 text-sm text-muted md:text-base">
              SaaS, AI, systems, interfaces and published games
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}

function WallRow({ images, reverse }: { images: ProjectImage[]; reverse: boolean }) {
  return (
    <div className="flex">
      <div
        style={{ "--marquee-duration": `${images.length * 5}s` } as CSSProperties}
        className={cn("flex w-max shrink-0 animate-marquee-x", reverse && "[animation-direction:reverse]")}
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative mr-3 aspect-[16/10] w-48 shrink-0 md:mr-4 overflow-hidden rounded-xl border border-border-strong bg-surface md:w-80"
          >
            <Image src={image.src} alt="" fill sizes="20rem" className="object-cover object-top" />
          </div>
        ))}
      </div>
    </div>
  );
}
