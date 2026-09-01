import { getProjectBySlug, getProjectHtml } from "@/src/shared/server";
import { notFound } from "next/navigation";
import { Header } from "./components/header";
import { ProjectInfo } from "./components/project-info";
import { cn } from "@/src/shared/utils";
import { styles } from "./lib/content-styles";

export const Project = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) => {
  const { slug, locale } = await params;

  const project = getProjectBySlug(slug, locale);

  if (!project) {
    notFound();
  }

  const content = await getProjectHtml(project.rawContent);

  return (
    <div className="relative">
      <Header />
      <main className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-16 pt-6">
        <ProjectInfo
          title={project.name}
          images={project.images}
          technologies={project.technologies}
        />
        <article
          className={cn("flex-1", styles)}
          dangerouslySetInnerHTML={{ __html: content }}
        ></article>
      </main>
    </div>
  );
};
