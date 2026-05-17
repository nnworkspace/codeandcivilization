import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";

// Canonical tag vocabulary. Adding a new tag is deliberate: extend this list,
// then use it. The lint:tags script reads this array as the source of truth.
export const TAGS = [
  // Themes
  "civilisation",
  "digital-civilisation",
  "governance",
  "institutions",
  "institutional-memory",
  "systems-thinking",
  "automation",
  "knowledge",
  // Tools & concepts
  "git",
  "markdown",
  "version-control",
  "infrastructure-as-code",
  "open-source",
  "software-architecture",
  "artificial-intelligence",
  // Domains
  "public-sector",
  "regulated-industries",
  // Projects
  "elan",
  // Genre
  "essay",
] as const;

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.enum(TAGS)).default(["essay"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

export const collections = { blog };
