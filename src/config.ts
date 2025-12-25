import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://code-and-civilisation.vercel.app/", // Fixed URL (hyphens)
  author: "Ning Zhao",
  desc: "Disinterested contemplation on the architecture of work, the ascent of systems, and the art of building civilization.",
  title: "Code and Civilisation",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"], 
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

// Keep this array! The template needs it to build.
export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/nnworkspace/codeandcivilization", // Change to your repo later
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nizhao/", // Change to your profile later
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:nnworkspace@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];