import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { caseStudySlugs } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date(), priority: 1 },
    ...caseStudySlugs().map((slug) => ({
      url: `${site.url}/work/${slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
}
