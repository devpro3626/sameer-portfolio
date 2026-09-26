import { Compass, Hammer, Rocket, Sparkles, Workflow, type LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps, type ProcessStep } from "@/content/process";

const PULSE_SECONDS = 10;
const GLOW_LEAD = 0.03;

const stepIcons: Record<ProcessStep["icon"], LucideIcon> = {
  discover: Compass,
  architect: Workflow,
  build: Hammer,
  ai: Sparkles,
  launch: Rocket,
};

function glowDelay(index: number, total: number) {
  const position = index / (total - 1);
  return `${(position - GLOW_LEAD) * PULSE_SECONDS}s`;
}

export function Process() {
  const total = processSteps.length;

  return (
    <section
      id="process"
      className="py-16 md:py-32"
      style={{ "--pulse-duration": `${PULSE_SECONDS}s` } as CSSProperties}
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="How I work"
          title="A calm, predictable path from idea to production"
          description="Every engagement follows the same rhythm, so you always know what is happening and what comes next."
        />

        <Reveal className="relative mt-16">
          <div
            aria-hidden
            className="absolute top-7 right-[10%] left-[10%] hidden h-px bg-border-strong lg:block"
          >
            <span className="absolute top-1/2 h-px w-40 -translate-x-full -translate-y-1/2 animate-pulse-x bg-gradient-to-r from-transparent to-accent" />
            <span className="absolute top-1/2 size-2.5 -translate-1/2 animate-pulse-x rounded-full bg-accent shadow-[0_0_16px_4px_rgb(107_140_255/0.6)]" />
          </div>
          <div aria-hidden className="absolute top-7 bottom-7 left-7 w-px bg-border-strong lg:hidden">
            <span className="absolute left-1/2 size-2.5 -translate-1/2 animate-pulse-y rounded-full bg-accent shadow-[0_0_16px_4px_rgb(107_140_255/0.6)]" />
          </div>

          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[step.icon];
              return (
                <li
                  key={step.title}
                  className="flex gap-5 lg:flex-col lg:items-center lg:gap-6 lg:text-center"
                >
                  <span
                    style={{ animationDelay: glowDelay(index, total) }}
                    className="relative z-10 grid size-14 shrink-0 animate-node-glow place-items-center rounded-2xl border border-border-strong bg-surface text-muted"
                  >
                    <Icon className="size-5" />
                  </span>
                  <div className="flex flex-col gap-2 pt-1 lg:pt-0">
                    <p className="text-xs font-medium text-accent">Step {index + 1}</p>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
