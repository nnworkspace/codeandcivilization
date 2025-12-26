export const SITE = {
  website: "https://code-and-civilisation.vercel.app/", // Fixed URL (hyphens)
  author: "Ning Zhao",
  profile: "https://www.linkedin.com/in/nizhao/",
  desc: "Disinterested contemplation on the architecture of collaboration, the ascent of systems, and the art of building civilisation.",
  title: "Code and Civilisation",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/nnworkspace/codeandcivilization/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Berlin", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
} as const;
