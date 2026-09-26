import { Bot, Code2, Layers, ScanEye, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Spotlight } from "@/components/ui/Spotlight";
import { TechBadge } from "@/components/ui/TechBadge";
import { services, skillGroups } from "@/content/expertise";
import type { ServiceIcon } from "@/types/content";

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  platform: Layers,
  agent: Bot,
  code: Code2,
  vision: ScanEye,
};

export function Services() {
  return (
    <section id="services" className="py-16 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="How I help teams ship"
          description="From a first prototype to a production platform, I cover architecture, interfaces, AI integration and deployment."
        />

        <Reveal stagger className="mt-14 grid gap-4 md:grid-cols-2">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Spotlight
                key={service.title}
                className="rounded-3xl border border-border bg-surface transition-colors duration-300 hover:border-border-strong"
              >
                <article className="relative flex h-full flex-col gap-5 p-7 md:p-9">
                  <span className="grid size-12 place-items-center rounded-2xl border border-border bg-accent-soft text-accent transition-transform duration-500 group-hover/spot:-rotate-6 group-hover/spot:scale-110">
                    <Icon className="size-5.5" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold md:text-2xl">{service.title}</h3>
                    <p className="leading-relaxed text-muted">{service.description}</p>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <TechBadge key={tag} name={tag} />
                    ))}
                  </div>
                </article>
              </Spotlight>
            );
          })}
        </Reveal>

        <Reveal
          stagger
          className="mt-4 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillGroups.map((group) => (
            <div key={group.label} className="bg-surface p-6">
              <h3 className="text-sm font-semibold">{group.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{group.items.join(", ")}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
