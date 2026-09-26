"use client";

import { useLenis } from "lenis/react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  FolderKanban,
  Layers,
  LayoutGrid,
  MessageSquareQuote,
  UserRound,
  X,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion, type PanInfo } from "motion/react";
import Link from "next/link";
import { useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Logo } from "@/components/ui/Logo";
import { navigation } from "@/content/navigation";
import { profile } from "@/content/profile";
import { cn } from "@/lib/cn";
import type { NavIcon, NavItem } from "@/types/content";

const navIcons: Record<NavIcon, LucideIcon> = {
  about: UserRound,
  services: Layers,
  work: FolderKanban,
  experience: BriefcaseBusiness,
  reviews: MessageSquareQuote,
  projects: LayoutGrid,
};

const socialIcons = { LinkedIn: FaLinkedinIn, GitHub: FaGithub } as const;

const DISMISS_OFFSET = 120;
const DISMISS_VELOCITY = 600;

interface MobileMenuProps {
  isOpen: boolean;
  isActive: (item: NavItem) => boolean;
  onSelect: (item: NavItem) => void;
  onContact: () => void;
  onClose: () => void;
}

export function MobileMenu({ isOpen, isActive, onSelect, onContact, onClose }: MobileMenuProps) {
  const lenis = useLenis();

  useEffect(() => {
    if (!isOpen) return;
    lenis?.stop();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      lenis?.start();
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, lenis, onClose]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.y > DISMISS_OFFSET || info.velocity.y > DISMISS_VELOCITY) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.nav
            aria-label="Mobile"
            role="dialog"
            aria-modal="true"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 38 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={handleDragEnd}
            className="absolute inset-x-0 bottom-0 max-h-[88svh] overflow-y-auto rounded-t-[1.75rem] border-t border-border-strong bg-surface px-5 pt-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-[0_-20px_60px_-10px_rgb(0_0_0/0.8)]"
          >
            <span aria-hidden className="mx-auto block h-1.5 w-11 rounded-full bg-border-strong" />

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Logo />
                <div>
                  <p className="font-display text-sm font-semibold">{profile.name}</p>
                  <p className="flex items-center gap-1.5 text-xs text-muted">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    Available for projects
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid size-9 place-items-center rounded-full border border-border text-muted"
              >
                <X className="size-4" />
              </button>
            </div>

            <ul className="mt-5 divide-y divide-border border-y border-border">
              {navigation.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <MenuRow item={item} index={index} isActive={isActive(item)} onSelect={onSelect} />
                </motion.li>
              ))}
            </ul>

            <div className="mt-5 flex items-center gap-2.5">
              <button
                type="button"
                onClick={onContact}
                className="h-12 flex-1 rounded-2xl bg-foreground text-sm font-semibold text-background"
              >
                Let&apos;s talk
              </button>
              {profile.socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid size-12 place-items-center rounded-2xl border border-border bg-background/60 text-muted"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </motion.nav>
        </div>
      )}
    </AnimatePresence>
  );
}

interface MenuRowProps {
  item: NavItem;
  index: number;
  isActive: boolean;
  onSelect: (item: NavItem) => void;
}

function MenuRow({ item, index, isActive, onSelect }: MenuRowProps) {
  const Icon = navIcons[item.icon];
  const className = cn(
    "group flex w-full items-center gap-4 py-3.5 text-left transition-colors",
    isActive ? "text-foreground" : "text-muted active:text-foreground",
  );
  const content = (
    <>
      <span className="w-5 font-display text-xs text-subtle tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      <Icon className={cn("size-4.5", isActive ? "text-accent" : "text-subtle")} />
      <span className="flex-1 font-display text-lg font-medium">{item.label}</span>
      {isActive && <span className="size-1.5 rounded-full bg-accent" aria-hidden />}
      <ArrowUpRight
        className={cn(
          "size-4 transition-transform group-active:translate-x-0.5",
          isActive ? "text-accent" : "text-subtle",
        )}
      />
    </>
  );

  if (item.href) {
    return (
      <Link href={item.href} onClick={() => onSelect(item)} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      aria-current={isActive ? "location" : undefined}
      className={className}
    >
      {content}
    </button>
  );
}
