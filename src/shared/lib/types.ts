import { socialIcons } from "./icons";

export type Social = {
  name: string;
  url: string;
  icon: keyof typeof socialIcons;
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  url: string;
  featuredImage: string;
  images: string[];
};

export type Skill = {
  name: string;
  icon: string;
};

export type About = {
  name: string;
  title: string;
  shortDescription: string;
  longDescription: string[];
};

export type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  url: string;
  description: string[];
};
