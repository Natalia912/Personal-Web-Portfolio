import {
  AboutType,
  ExperienceType,
  ProjectType,
  SkillType,
  SocialType,
} from "./types";

export const about: AboutType = {
  name: "Natalia Tretiakova",
  title: "Frontend Developer",
  shortDescription:
    "Developing user-friendly and pixel-perfect web applications since 2022.",
  longDescription: [
    `I am a frontend developer with ${new Date().getFullYear() - 2022} years of experience in creating user-friendly and pixel-perfect web applications. I specialize in React, Next.js, Vue, and TypeScript, and I am passionate about building high-quality software that meets the needs of users.`,
    `As of this moment, I am working full-time at AlexFrontEnd, where I have been involved in various projects, starting from simple landing pages to large-scale web applications. I have built 20+ projects for clients in different industries, such as architecture & construction, oil & gas, finance, AI, and more.`,
    `In my free time, I am pursuing an online Bachelor's degree in Software Development at International University of Applied Sciences. I also enjoy knitting, crochet, photography, and running.`,
  ],
};

export const socials: SocialType[] = [
  { name: "GitHub", url: "https://github.com/Natalia912", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tretiakovan/",
    icon: "linkedin",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~019fb92627a2b0d689",
    icon: "upwork",
  },
];

export const experience: ExperienceType[] = [
  {
    id: 1,
    company: "AlexFrontEnd",
    position: "Frontend Developer",
    startDate: "2022-09",
    endDate: null,
    url: "https://www.alexfrontend.com/",
    description: [
      "Developed and maintained web applications using React, Next.js, Vue, and TypeScript. Built 20+ projects for clients in different industries, such as architecture & construction, oil & gas, finance, AI, and more.",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    name: "Script & Package Management Web App",
    description:
      "A cloud-based platform built with Vue.js and the Quasar framework that enables AEC (architecture, engineering, and construction) teams to deploy, document, and govern their Dynamo and Grasshopper automation scripts across their organization.",
    technologies: [
      "JavaScript",
      "Vue.js",
      "Quasar",
      "Pinia",
      "D3.js",
      "Editor.js",
    ],
    slug: "scripts-and-package-management-app",
    url: "https://app.orkestra.online/#/login",
    featuredImage: "/1-3.png",
    images: ["/1-1.png", "/1-2.png", "/1-3.png", "/1-4.png"],
  },
  {
    id: 2,
    name: "Next.js marketing website for a B2B SaaS platform with Headless CMS",
    description:
      "A marketing website for a B2B SaaS platform for geoscience, petrophysics, and production analytics used by geologists at major oil & gas companies including Devon, OXY, Coterra, and Hilcorp.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Sanity CMS",
      "Tailwind CSS",
    ],
    slug: "nextjs-marketing-website",
    url: "https://www.danomics.com/",
    featuredImage: "/2-1.png",
    images: ["/2-1.png", "/2-2.png", "/2-3.png"],
  },
];
