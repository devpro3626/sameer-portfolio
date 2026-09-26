import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import { SiFiverr, SiNextdotjs, SiPython } from "react-icons/si";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { HeroPortrait } from "@/components/ui/HeroPortrait";
import { Reveal } from "@/components/ui/Reveal";
import { TextMorph } from "@/components/ui/TextMorph";
import { ScrollButton } from "@/components/ui/ScrollButton";
import { profile } from "@/content/profile";

const socialIcons = { LinkedIn: FaLinkedinIn, GitHub: FaGithub } as const;
const buildWords = ["SaaS platforms", "AI agents", "RAG pipelines", "voice AI systems", "trading platforms"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-1 items-center overflow-hidden pt-28 pb-12 md:pt-36 md:pb-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />

      <div className="container-page relative grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal stagger immediate className="flex flex-col items-start gap-6 lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative size-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
          </span>

          <h1 className="text-[clamp(1.85rem,8.6vw,2.35rem)] leading-[1.1] font-semibold sm:text-5xl lg:text-[3.3rem]">
            I build <br className="sm:hidden" />
            <TextMorph words={buildWords} className="text-accent" />
            <br />
            that hold up in production.
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-pretty text-muted">{profile.intro}</p>

          <div className="flex flex-wrap gap-3">
            <ScrollButton target="work" icon={<ArrowRight className="size-4" />}>
              View my work
            </ScrollButton>
            <Button href={profile.resume} download variant="secondary" icon={<Download className="size-4" />}>
              Download résumé
            </Button>
          </div>

          <div className="mt-1 grid w-full max-w-lg grid-cols-3 items-center gap-x-4 gap-y-5 border-t border-border pt-6 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-4">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-xl font-semibold">
                  <Counter value={stat.value} />
                  <span className="text-accent">{stat.suffix}</span>
                </p>
                <p className="text-xs text-muted">{stat.label}</p>
              </div>
            ))}
            <div className="col-span-3 flex gap-2 sm:ml-auto">
              {profile.socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid size-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
                  >
                    <Icon className="size-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal
          immediate
          delay={0.2}
          className="relative mx-auto hidden w-full max-w-[22rem] lg:col-span-5 lg:mr-0 lg:block lg:max-w-[24rem]"
        >
          <HeroPortrait name={profile.name} location={profile.location} />

          <div className="absolute top-8 -left-6 hidden animate-float items-center gap-3 rounded-2xl border border-border-strong bg-surface/90 p-2.5 pr-4 shadow-xl shadow-black/40 backdrop-blur-md sm:flex lg:-left-16">
            <span className="grid size-9 place-items-center rounded-xl bg-[#1dbf73]/15 text-[#1dbf73]">
              <SiFiverr className="size-5" />
            </span>
            <div>
              <p className="text-sm font-medium">Independent consultant</p>
              <p className="text-xs text-muted">150+ projects since 2023</p>
            </div>
          </div>

          <div className="absolute -right-4 bottom-20 hidden animate-float flex-col gap-2 rounded-2xl border border-border-strong bg-surface/90 p-2.5 shadow-xl shadow-black/40 backdrop-blur-md [animation-delay:-3s] sm:flex lg:-right-10">
            <p className="px-0.5 text-xs text-muted">Full-stack + AI</p>
            <div className="flex gap-1.5 text-foreground">
              {[SiNextdotjs, SiPython, RiOpenaiFill].map((Icon, index) => (
                <span key={index} className="grid size-8 place-items-center rounded-lg bg-white/5">
                  <Icon className="size-4" />
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
