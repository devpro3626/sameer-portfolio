export type ProjectCategory = "saas" | "ai" | "web" | "games" | "systems";

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface ExternalLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  summary: string;
  overview: string[];
  highlights: string[];
  stack: string[];
  images: ProjectImage[];
  links?: ExternalLink[];
  featured?: boolean;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Social {
  label: string;
  handle: string;
  href: string;
}

export interface Profile {
  name: string;
  headline: string;
  firstName: string;
  lastName: string;
  role: string;
  location: string;
  timeZone: string;
  email: string;
  phone: string;
  resume: string;
  intro: string;
  bio: string[];
  stats: Stat[];
  socials: Social[];
}

export interface Experience {
  role: string;
  company: string;
  context: string;
  period: string;
  points: string[];
}

export interface Credential {
  title: string;
  issuer: string;
  year?: string;
}

export type ServiceIcon = "platform" | "agent" | "code" | "vision";

export interface Service {
  icon: ServiceIcon;
  title: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  country: string;
  project: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export type NavItem =
  { label: string; id: string; href?: never } | { label: string; href: string; id?: never };
