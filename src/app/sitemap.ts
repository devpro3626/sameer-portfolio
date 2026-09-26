import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/work"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...getAllProjects().map((project) => ({
      url: absoluteUrl(`/work/${project.slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: project.featured ? 0.7 : 0.5,
    })),
  ];
}
