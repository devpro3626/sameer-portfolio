import { Heart } from "lucide-react";
import { LiveClock } from "@/components/ui/LiveClock";
import { Logo } from "@/components/ui/Logo";
import { ScrollTopButton } from "@/components/ui/ScrollTopButton";
import { profile } from "@/content/profile";
import { CURRENT_YEAR } from "@/lib/date";

export function Footer() {
  return (
    <footer className="relative mt-8">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px overflow-hidden bg-border">
        <span className="absolute inset-y-0 w-1/3 animate-beam bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>

      <div className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Logo className="size-10" />
          <div>
            <p className="font-display font-semibold">{profile.name}</p>
            <p className="text-sm text-muted">Building SaaS and AI products that ship.</p>
          </div>
        </div>

        <LiveClock city="Lahore" timeZone={profile.timeZone} />

        <div className="flex items-center justify-between gap-6 md:justify-end">
          <div className="text-right text-xs leading-relaxed text-subtle">
            <p>
              © {CURRENT_YEAR} {profile.name}
            </p>
            <p className="mt-1 inline-flex items-center gap-1.5">
              Built with
              <Heart aria-label="love" className="size-3.5 animate-heartbeat fill-rose-500 text-rose-500" />
              in Lahore
            </p>
          </div>
          <ScrollTopButton />
        </div>
      </div>
    </footer>
  );
}
