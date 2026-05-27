import { About, Experience, Project, Skill, Social } from "./types";

export const about: About = {
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

export const socials: Social[] = [
  { name: "GitHub", url: "", icon: "github" },
  { name: "LinkedIn", url: "", icon: "linkedin" },
  { name: "Upwork", url: "", icon: "upwork" },
  { name: "Telegram", url: "", icon: "telegram" },
];

export const skills: Skill[] = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Vue", icon: "vue" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
];

export const experience: Experience[] = [
  {
    company: "AlexFrontEnd",
    position: "Frontend Developer",
    startDate: "2022-01-01",
    endDate: null,
    url: "",
    description: [],
  },
];

export const projects: Project[] = [
  {
    name: "Project Name",
    description: "Brief description of the project.",
    technologies: ["React", "TypeScript", "Next.js"],
    url: "",
    featuredImage: "",
    images: [],
  },
];
