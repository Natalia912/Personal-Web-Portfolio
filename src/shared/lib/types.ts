import { socialIcons } from "../data/icons";

export type SocialType = {
  name: string;
  url: string;
  icon: keyof typeof socialIcons;
};

export type ProjectType = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  slug: string;
  featuredImage: string;
  images: string[];
};

export type SkillType = {
  name: string;
  icon: string;
};

export type AboutType = {
  name: string;
  title: string;
  shortDescription: string;
  longDescription: string[];
};

export type ExperienceType = {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  url: string;
  description: string[];
};
