"use client";

import { Menu } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useCallback, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { navigation } from "@/content/navigation";
import { profile } from "@/content/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import { cn } from "@/lib/cn";
import { MobileMenu } from "./MobileMenu";
import { useHeaderVisibility } from "@/providers/HeaderVisibilityProvider";
import type { NavItem } from "@/types/content";

const sectionIds = navigation.flatMap((item) => (item.id ? [item.id] : []));
const COMPACT_AFTER = 80;
const SHEET_EXIT_MS = 320;

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

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const go = (id: string) => {
    if (!isOpen) return navigate(id);
    closeMenu();
    window.setTimeout(() => navigate(id), SHEET_EXIT_MS);
  };

  const select = (item: NavItem) => {
    if (item.id) return go(item.id);
    closeMenu();
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-4 z-50 px-4 transition-[translate,opacity] duration-500 ease-out-expo",
          isHidden && "pointer-events-none -translate-y-[150%] opacity-0",
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
              className="hidden h-9 items-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-white lg:flex"
            >
              Let&apos;s talk
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-expanded={isOpen}
              aria-label="Open menu"
              className="grid size-9 place-items-center rounded-full border border-border lg:hidden"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isOpen}
        isActive={isActive}
        onSelect={select}
        onContact={() => go("contact")}
        onClose={closeMenu}
      />
    </>
  );
}

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
  onSelect: (item: NavItem) => void;
}

function NavLink({ item, isActive, onSelect }: NavLinkProps) {
  const className = cn(
    "relative block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300",
    isActive ? "text-foreground" : "text-muted hover:text-foreground",
  );

  const content = (
    <>
      {isActive && (
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
