export const SITE = {
  website: "https://code-and-civilisation.vercel.app/", // Fixed URL (hyphens)
  author: "Ning Zhao",
  desc: "Disinterested contemplation on the architecture of work, the ascent of systems, and the art of building civilization.",
  title: "Code and Civilisation",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  timezone: "Europe/Berlin", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/
} as const;

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"], 
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
} as const;
