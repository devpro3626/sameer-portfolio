"use client";

import { Check, Copy, Mail, Phone } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/content/profile";
import { cn } from "@/lib/cn";

const socialIcons = { LinkedIn: FaLinkedinIn, GitHub: FaGithub } as const;

export function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;
    const id = window.setTimeout(() => setIsCopied(false), 1800);
    return () => window.clearTimeout(id);
  }, [isCopied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setIsCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-border-strong bg-surface">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_0%,rgb(107_140_255/0.18),transparent_70%)]"
          />
          <div className="relative grid gap-12 p-8 md:p-14 lg:grid-cols-12">
            <div className="flex flex-col items-start gap-6 lg:col-span-7">
              <p className="flex items-center gap-2 text-sm font-medium text-accent">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                Contact
              </p>
              <h2 className="max-w-xl text-3xl leading-tight font-semibold text-balance md:text-5xl">
                Have a project in mind? Let&apos;s build it together.
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-muted md:text-lg">
                Tell me about your product, timeline and goals. I usually reply within 24 hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href={`mailto:${profile.email}`} icon={<Mail className="size-4" />}>
                  Email me
                </Button>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border-strong bg-surface px-5 text-sm font-medium transition-colors hover:bg-surface-raised"
                >
                  {isCopied ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
                  {isCopied ? "Copied" : "Copy email"}
                </button>
              </div>
            </div>

            <ul className="flex flex-col gap-3 lg:col-span-5">
              <ContactRow
                icon={<Mail className="size-4" />}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactRow
                icon={<Phone className="size-4" />}
                label="Phone / WhatsApp"
                value={profile.phone}
                href={`tel:${profile.phone.replaceAll(" ", "")}`}
              />
              {profile.socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <ContactRow
                    key={social.label}
                    icon={<Icon className="size-4" />}
                    label={social.label}
                    value={social.handle}
                    href={social.href}
                    external
                  />
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

interface ContactRowProps {
  icon: ReactNode;
  label: string;
  value: ReactNode;
  href?: string;
  external?: boolean;
}

function ContactRow({ icon, label, value, href, external }: ContactRowProps) {
  const content = (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-background/60 text-muted">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-muted">{label}</span>
        <span className="block truncate text-sm font-medium">{value}</span>
      </span>
    </>
  );

  const className =
    "flex items-center gap-4 rounded-2xl border border-border bg-background/40 p-3 transition-colors";

  return (
    <li>
      {href ? (
        <a
          href={href}
          {...(external && { target: "_blank", rel: "noreferrer" })}
          className={cn(className, "hover:border-border-strong")}
        >
          {content}
        </a>
      ) : (
        <div className={className}>{content}</div>
      )}
    </li>
  );
}
