"use client";

import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { useHideHeaderWhenPast } from "@/hooks/useHideHeaderWhenPast";
import { cn } from "@/lib/cn";
import { ScrollTrigger } from "@/lib/gsap";
import { getCategories, getCategoryLabel } from "@/lib/projects";
import type { Project, ProjectCategory } from "@/types/content";
import { ProjectRow } from "./ProjectRow";

type Filter = ProjectCategory | "all";

function matches(project: Project, query: string) {
  if (!query) return true;
  const haystack = [project.title, project.tagline, ...project.stack].join(" ").toLowerCase();
  return haystack.includes(query);
}

export function ProjectsIndex({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const sentinelRef = useRef<HTMLDivElement>(null);
  useHideHeaderWhenPast(sentinelRef);

  const categories = useMemo(() => getCategories(projects), [projects]);
  const groups = useMemo(
    () =>
      categories
        .filter((category) => filter === "all" || category === filter)
        .map((category) => ({
          category,
          items: projects.filter(
            (project) => project.category === category && matches(project, deferredQuery),
          ),
        }))
        .filter((group) => group.items.length > 0),
    [categories, deferredQuery, filter, projects],
  );
  const resultCount = groups.reduce((total, group) => total + group.items.length, 0);

  useEffect(() => {
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => window.clearTimeout(id);
  }, [filter, deferredQuery]);

  return (
    <section id="archive" className="pt-8 pb-24 md:pb-32">
      <div className="container-page">
        <div ref={sentinelRef} aria-hidden className="h-px" />
        <div className="sticky top-4 z-40 -mx-2 flex flex-col gap-3 rounded-3xl border border-border bg-background/80 p-2 backdrop-blur-xl md:flex-row md:items-center">
          <label className="relative flex flex-1 items-center">
            <Search className="pointer-events-none absolute left-4 size-4 text-muted" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects or technologies…"
              className="h-11 w-full rounded-2xl bg-surface pr-10 pl-11 text-sm outline-none placeholder:text-subtle focus-visible:ring-1 focus-visible:ring-accent"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 grid size-6 place-items-center rounded-full text-muted hover:text-foreground"
              >
                <X className="size-3.5" />
              </button>
            )}
          </label>

          <div role="tablist" aria-label="Filter by category" className="flex gap-1 overflow-x-auto">
            {(["all", ...categories] as Filter[]).map((option) => (
              <button
                key={option}
                type="button"
                role="tab"
                aria-selected={filter === option}
                onClick={() => setFilter(option)}
                className={cn(
                  "relative shrink-0 rounded-xl px-3.5 py-2 text-sm transition-colors duration-300",
                  filter === option ? "text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                {filter === option && (
                  <motion.span
                    layoutId="work-filter"
                    className="absolute inset-0 rounded-xl bg-white/[0.08]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{option === "all" ? "All" : getCategoryLabel(option)}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-muted" aria-live="polite">
          Showing {resultCount} {resultCount === 1 ? "project" : "projects"}
        </p>

        <div className="mt-6 flex flex-col gap-16">
          <AnimatePresence mode="popLayout" initial={false}>
            {groups.map((group) => (
              <motion.div
                key={group.category}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid gap-6 lg:grid-cols-12"
              >
                <div className="lg:col-span-3">
                  <div className="flex items-baseline gap-3 lg:sticky lg:top-28">
                    <h2 className="text-xl font-semibold">{getCategoryLabel(group.category)}</h2>
                    <span className="text-sm text-subtle">{group.items.length}</span>
                  </div>
                </div>
                <ul className="flex flex-col border-t border-border lg:col-span-9">
                  {group.items.map((project) => (
                    <ProjectRow key={project.slug} project={project} />
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>

          {resultCount === 0 && (
            <div className="rounded-3xl border border-dashed border-border-strong p-12 text-center">
              <p className="font-medium">No projects match &ldquo;{query}&rdquo;</p>
              <p className="mt-1 text-sm text-muted">Try a technology like React, Python or Stripe.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
