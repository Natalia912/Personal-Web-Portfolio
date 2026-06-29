import { projects } from "@/src/shared/lib";
import { notFound } from "next/navigation";
import { Header } from "./components/header";
import { ProjectInfo } from "./components/project-info";

export const Project = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="lg:flex lg:justify-between gap-4 lg:gap-8 pt-8">
        <ProjectInfo
          title={project.name}
          images={project.images}
          technologies={project.technologies}
        />
        <article className="lg:w-[50%]"></article>
      </main>
    </>
  );
};
