import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

// Sitemap statica con le route attualmente live.
// Quando le città su /dove-operiamo/[slug] passeranno a Sanity, questo file
// diventerà async e leggerà la lista degli slug dal CMS per generare le voci.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/servizi"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/dove-operiamo"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/dove-operiamo/treviso"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
