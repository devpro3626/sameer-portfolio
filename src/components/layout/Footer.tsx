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

      <div className="container-page grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-6 py-8 md:flex md:gap-6 md:py-10">
        <div className="col-span-2 flex items-center gap-3">
          <Logo className="size-10" />
          <div>
            <p className="font-display font-semibold">{profile.name}</p>
            <p className="text-sm text-muted">Building SaaS and AI products that ship.</p>
          </div>
        </div>

        <div className="md:mx-auto">
          <LiveClock city="Lahore" timeZone={profile.timeZone} />
        </div>

        <div className="justify-self-end md:order-last">
          <ScrollTopButton />
        </div>

        <div className="col-span-2 flex items-center justify-between border-t border-border pt-5 text-xs leading-relaxed text-subtle md:block md:border-0 md:pt-0 md:text-right">
          <p>
            © {CURRENT_YEAR} {profile.name}
          </p>
          <p className="inline-flex items-center gap-1.5 md:mt-1">
            Built with
            <Heart aria-label="love" className="size-3.5 animate-heartbeat fill-rose-500 text-rose-500" />
            in Lahore
          </p>
        </div>
      </div>
    </footer>
  );
}
