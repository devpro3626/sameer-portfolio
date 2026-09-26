import { profile } from "@/content/profile";
import type { Project } from "@/types/content";
import { absoluteUrl, SITE_DESCRIPTION, SITE_URL } from "./site";

const personId = `${SITE_URL}/#person`;

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    jobTitle: profile.role,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    image: absoluteUrl("/images/portrait-formal.webp"),
    address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
    sameAs: profile.socials.map((social) => social.href),
    knowsAbout: ["Full-stack development", "SaaS", "Artificial intelligence", "Next.js", "Node.js", "Python"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: profile.name,
    url: SITE_URL,
    author: { "@id": personId },
  };
}

export function projectSchema(project: Project) {
  const url = absoluteUrl(`/work/${project.slug}`);

  return [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      headline: project.tagline,
      description: project.summary,
      url,
      image: project.images[0] ? absoluteUrl(project.images[0].src) : undefined,
      keywords: project.stack.join(", "),
      author: { "@type": "Person", "@id": personId, name: profile.name },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Projects", item: absoluteUrl("/work") },
        { "@type": "ListItem", position: 3, name: project.title, item: url },
      ],
    },
  ];
}
