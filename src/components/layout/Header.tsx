"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { navigation } from "@/content/navigation";
import { profile } from "@/content/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import { cn } from "@/lib/cn";
import { useHeaderVisibility } from "@/providers/HeaderVisibilityProvider";
import type { NavItem } from "@/types/content";

const sectionIds = navigation.flatMap((item) => (item.id ? [item.id] : []));
const COMPACT_AFTER = 80;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const activeSection = useActiveSection(sectionIds);
  const navigate = useSectionNavigation();
  const { isHidden } = useHeaderVisibility();
  const [isCompact, setIsCompact] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);

  useLenis((lenis) => {
    const compact = lenis.scroll > COMPACT_AFTER;
    setIsCompact((current) => (current === compact ? current : compact));
    if (progressRef.current) progressRef.current.style.transform = `scaleX(${lenis.progress})`;
  });

  const isActive = (item: NavItem) =>
    item.href ? pathname.startsWith(item.href) : activeSection === item.id;

  const go = (id: string) => {
    setIsOpen(false);
    navigate(id);
  };

  const select = (item: NavItem) => {
    setIsOpen(false);
    if (item.id) navigate(item.id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-4 z-50 px-4 transition-[translate,opacity] duration-500 ease-out-expo",
        isHidden && !isOpen && "pointer-events-none -translate-y-[150%] opacity-0",
      )}
    >
      <div
        className={cn(
          "relative mx-auto flex max-w-5xl items-center justify-between overflow-hidden rounded-full border py-1.5 pr-1.5 pl-2 backdrop-blur-xl transition-[max-width,background-color,border-color,box-shadow] duration-700 ease-out-expo",
          isCompact
            ? "border-border-strong bg-surface/80 shadow-[0_10px_40px_-10px_rgb(0_0_0/0.7)] lg:max-w-[52rem]"
            : "border-border bg-background/75",
        )}
      >
        <span
          aria-hidden
          className={cn(
            "absolute inset-x-6 bottom-0 h-px transition-opacity duration-500",
            isCompact ? "opacity-100" : "opacity-0",
          )}
        >
          <span
            ref={progressRef}
            className="block h-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-accent to-accent"
          />
        </span>
        <Link
          href="/"
          onClick={(event) => {
            if (pathname !== "/") return;
            event.preventDefault();
            go("top");
          }}
          aria-label={profile.name}
          className="flex items-center"
        >
          <Logo />
          <span
            className={cn(
              "overflow-hidden font-display text-sm font-semibold whitespace-nowrap transition-[max-width,opacity,margin] duration-500 ease-out-expo",
              isCompact ? "ml-2.5 max-w-40 lg:ml-0 lg:max-w-0 lg:opacity-0" : "ml-2.5 max-w-40 opacity-100",
            )}
          >
            {profile.name}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {navigation.map((item) => (
              <li key={item.label}>
                <NavLink item={item} isActive={isActive(item)} onSelect={select} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go("contact")}
            className="hidden h-9 items-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-white sm:flex"
          >
            Let&apos;s talk
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-full border border-border lg:hidden"
          >
            {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 flex max-w-5xl flex-col rounded-2xl border border-border bg-surface p-2 lg:hidden"
          >
            {[...navigation, { label: "Contact", id: "contact" } as NavItem].map((item) => (
              <NavLink key={item.label} item={item} isActive={isActive(item)} onSelect={select} mobile />
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
  onSelect: (item: NavItem) => void;
  mobile?: boolean;
}

function NavLink({ item, isActive, onSelect, mobile = false }: NavLinkProps) {
  const className = mobile
    ? "block w-full rounded-xl px-4 py-3 text-left text-sm text-muted hover:bg-white/5 hover:text-foreground"
    : cn(
        "relative block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300",
        isActive ? "text-foreground" : "text-muted hover:text-foreground",
      );

  const content = (
    <>
      {isActive && !mobile && (
        <motion.span
          layoutId="nav-active"
          className="absolute inset-0 rounded-full bg-white/[0.07]"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}
      <span className="relative">{item.label}</span>
    </>
  );

  if (item.href) {
    return (
      <Link href={item.href} className={className} onClick={() => onSelect(item)}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={() => onSelect(item)} className={className}>
      {content}
    </button>
  );
}
