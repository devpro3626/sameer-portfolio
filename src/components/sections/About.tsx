import { Check } from "lucide-react";
import { AboutPortrait } from "@/components/ui/AboutPortrait";
import { Reveal } from "@/components/ui/Reveal";
import { ResumeCard } from "@/components/ui/ResumeCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

const focusAreas = [
  "Multi-tenant SaaS with RBAC",
  "LLMs, RAG pipelines & AI agents",
  "Payments, telephony & third-party APIs",
  "Production deployment & clear hand-over",
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <AboutPortrait name={profile.name} />
        </Reveal>

        <div className="flex flex-col gap-8 lg:col-span-7">
          <SectionHeading
            eyebrow="About me"
            title="Engineering products end to end, from the first schema to the final deploy"
          />

          <Reveal stagger className="flex flex-col gap-4 text-base leading-relaxed text-muted md:text-lg">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal as="ul" stagger className="grid gap-3 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <li key={area} className="flex items-center gap-3 text-sm">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <Check className="size-3.5" />
                </span>
                {area}
              </li>
            ))}
          </Reveal>

          <Reveal>
            <ResumeCard href={profile.resume} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
