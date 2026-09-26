"use client";

import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { DESKTOP, gsap, useGSAP } from "@/lib/gsap";
import { getCategoryLabel } from "@/lib/projects";
import type { Project } from "@/types/content";

const STACK_OFFSET = 96;
const STACK_STEP = 16;

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(DESKTOP, () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-stack-card]");

        cards.forEach((card, index) => {
          gsap.fromTo(
            card.querySelector("[data-shot-main]"),
            { y: 50 },
            {
              y: -10,
              ease: "none",
              scrollTrigger: { trigger: card, start: "top bottom", end: "top top", scrub: true },
            },
          );

          const next = cards[index + 1];
          if (!next) return;

          const scrollTrigger = {
            trigger: next,
            start: "top bottom",
            end: `top ${STACK_OFFSET + (index + 1) * STACK_STEP}px`,
            scrub: true,
          };
          gsap.to(card.querySelector("[data-stack-inner]"), { scale: 0.94, ease: "none", scrollTrigger });
          gsap.to(card.querySelector("[data-stack-dim]"), { opacity: 0.65, ease: "none", scrollTrigger });
        });
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} id="work" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured work"
          title="Case studies from production"
          description="A selection of platforms I have architected and shipped, from multi-tenant SaaS to real-time trading and video intelligence."
        />

        <div className="mt-14 flex flex-col gap-6">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              data-stack-card
              className="lg:sticky"
              style={{ top: STACK_OFFSET + index * STACK_STEP }}
            >
              <div data-stack-inner className="relative origin-top">
                <FeaturedCard project={project} index={index} />
                <div
                  data-stack-dim
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[2rem] bg-background opacity-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const [main, secondary] = project.images;
  const link = project.links?.[0];

  return (
    <article className="grid overflow-hidden rounded-[2rem] border border-border-strong bg-surface lg:h-[min(44rem,calc(100svh-7.5rem))] lg:grid-cols-12">
      <div className="flex flex-col gap-5 p-7 md:p-9 lg:col-span-5">
        <p className="flex items-center gap-3 text-sm text-muted">
          <span className="font-display font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-6 bg-border-strong" aria-hidden />
          {getCategoryLabel(project.category)}
        </p>

        <div>
          <h3 className="text-3xl font-semibold md:text-4xl">{project.title}</h3>
          <p className="mt-2 text-lg text-muted">{project.tagline}</p>
        </div>

        <p className="leading-relaxed text-muted">{project.summary}</p>

        <ul className="flex flex-col gap-2.5">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-accent" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={`/work/${project.slug}`} icon={<ArrowRight className="size-4" />}>
              View case study
            </Button>
            {link && (
              <Button
                href={link.href}
                external
                variant="secondary"
                icon={<ArrowUpRight className="size-4" />}
              >
                {link.label}
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="relative min-h-72 overflow-hidden border-t border-border bg-[radial-gradient(ellipse_at_top_right,rgb(107_140_255/0.16),transparent_60%)] sm:min-h-96 lg:col-span-7 lg:border-t-0 lg:border-l">
        {main && (
          <div data-shot-main className="absolute top-[9%] left-[7%] w-[108%]">
            <BrowserFrame image={main} label={project.title} sizes="(min-width: 1024px) 55vw, 100vw" />
          </div>
        )}
        {secondary && (
          <div className="absolute bottom-[-4%] left-[4%] hidden w-[48%] sm:block">
            <BrowserFrame image={secondary} sizes="(min-width: 1024px) 26vw, 50vw" />
          </div>
        )}
      </div>
    </article>
  );
}
