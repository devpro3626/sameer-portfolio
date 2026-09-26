import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollLine } from "@/components/ui/ScrollLine";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, education, experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Experience"
            title="Where I have been building"
            description="Independent client work, product engineering inside an agile team, and a foundation in enterprise systems."
          />

          <div className="relative mt-12">
            <ScrollLine className="top-2 bottom-2 left-[19px]" />
            <ol className="flex flex-col gap-5">
              {experience.map((role, index) => (
                <Reveal as="li" key={`${role.company}-${role.period}`} className="relative flex gap-5">
                  <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border border-border-strong bg-surface text-accent">
                    <BriefcaseBusiness className="size-4" />
                  </span>
                  <div className="flex-1 rounded-3xl border border-border bg-surface p-6 md:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                      <div>
                        <h3 className="text-lg font-semibold">{role.role}</h3>
                        <p className="text-sm text-muted">
                          {role.company} · {role.context}
                        </p>
                      </div>
                      <span
                        className={
                          index === 0
                            ? "rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
                            : "rounded-full border border-border px-3 py-1 text-xs text-muted"
                        }
                      >
                        {role.period}
                      </span>
                    </div>
                    <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-muted">
                      {role.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-subtle" aria-hidden />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Reveal className="flex flex-col gap-4 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-border bg-surface p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                  <GraduationCap className="size-5" />
                </span>
                <h3 className="font-semibold">Education</h3>
              </div>
              <p className="mt-5 font-medium">{education.title}</p>
              <p className="mt-1 text-sm text-muted">{education.issuer}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Data structures & algorithms, OOP, databases, software engineering, operating systems and
                networks.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-surface p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Award className="size-5" />
                </span>
                <h3 className="font-semibold">Certifications</h3>
              </div>
              <ul className="mt-5 flex flex-col divide-y divide-border">
                {certifications.map((certification) => (
                  <li key={certification.title} className="flex items-start justify-between gap-4 py-3.5">
                    <div>
                      <p className="text-sm font-medium">{certification.title}</p>
                      <p className="mt-0.5 text-xs text-muted">{certification.issuer}</p>
                    </div>
                    <span className="text-xs text-subtle">{certification.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
