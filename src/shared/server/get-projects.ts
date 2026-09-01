import path from "path";
import fs from "fs";
import { remark } from "remark";
import html from "remark-html";
import { ProjectType } from "../lib";
import { locales as localesObject } from "../data";

const contentDir = path.join(process.cwd(), "content");
const locales = localesObject.map((l) => l.code);

// Cache parsed content.json per locale so we're not re-reading/parsing on every call
const projectsCache = new Map<string, ProjectType[]>();

const getProjectsData = (locale: string): ProjectType[] => {
  if (projectsCache.has(locale)) {
    return projectsCache.get(locale)!;
  }

  const filePath = path.join(contentDir, locale, "content.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(raw).projects as ProjectType[];

  projectsCache.set(locale, data);
  return data;
};

export const getProjectBySlug = (slug: string, locale: string) => {
  const projects = getProjectsData(locale);
  const projectData = projects.find((p) => p.slug === slug);
  if (!projectData) return null;

  const mdPath = path.join(contentDir, locale, `${slug}.md`);
  const finalMdPath = fs.existsSync(mdPath)
    ? mdPath
    : path.join(contentDir, locales[0], `${slug}.md`);

  const raw = fs.readFileSync(finalMdPath, "utf8");

  return { ...projectData, rawContent: raw };
};

export const getProjectHtml = async (rawContent: string) => {
  const processed = await remark().use(html).process(rawContent);
  return processed.toString();
};

// Integrity check: every locale's content.json must list projects that
// all have matching slugs across every locale, and matching .md files
const checkContentIntegrity = () => {
  const slugSets = locales.map((locale) => {
    const projects = getProjectsData(locale);
    return { locale, slugs: new Set(projects.map((p) => p.slug)) };
  });

  const baseline = slugSets[0];

  for (const { locale, slugs } of slugSets) {
    // Check slugs match across locales
    const missingHere = [...baseline.slugs].filter((s) => !slugs.has(s));
    if (missingHere.length) {
      throw new Error(
        `[${locale}] content.json is missing project entries for: ${missingHere.join(", ")}`,
      );
    }

    // Check .md files exist for each slug
    const localeDir = path.join(contentDir, locale);
    const mdFiles = fs
      .readdirSync(localeDir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(".md", ""));

    const missingMd = [...slugs].filter((s) => !mdFiles.includes(s));
    if (missingMd.length) {
      throw new Error(
        `[${locale}] Missing markdown for: ${missingMd.join(", ")}`,
      );
    }
  }
};

checkContentIntegrity();
