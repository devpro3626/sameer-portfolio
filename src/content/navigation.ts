import type { NavItem } from "@/types/content";

export const navigation: NavItem[] = [
  { label: "About", id: "about", icon: "about" },
  { label: "Services", id: "services", icon: "services" },
  { label: "Work", id: "work", icon: "work" },
  { label: "Experience", id: "experience", icon: "experience" },
  { label: "Reviews", id: "testimonials", icon: "reviews" },
  { label: "All projects", href: "/work", icon: "projects" },
];
