import path from "path";
import fs from "fs";
import { projects } from "../data/data";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "content");

export const getProjectBySlug = (slug: string) => {
  const projectData = projects.find((p) => p.slug === slug);
  if (!projectData) return null;

  const filePath = path.join(contentDir, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");

  return { ...projectData, rawContent: raw };
};

export const getProjectHtml = async (rawContent: string) => {
  const processed = await remark().use(html).process(rawContent);
  return processed.toString();
};

// Quick check to ensure no typos and all files are available

const files = fs.readdirSync("./content").map((f) => f.replace(".md", ""));
const missing = projects.filter((p) => !files.includes(p.slug));
if (missing.length) {
  throw new Error(
    `Missing markdown for: ${missing.map((p) => p.slug).join(", ")}`,
  );
}
