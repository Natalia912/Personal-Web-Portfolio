import { Project } from "@/src/modules/project";
import { ProjectType } from "@/src/shared/lib";
import { Metadata } from "next";
import { getMessages, getTranslations } from "next-intl/server";

type Props = { params: Promise<{ slug: string; locale: string }> };

export async function generateStaticParams() {
  const projects: ProjectType[] = (await getMessages()).projects;
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  const projects: ProjectType[] = (await getMessages()).projects;
  const project = projects.find((p) => p.slug === slug);

  return {
    title: project?.name ?? "Project page",
    description: project?.description ?? "",
  };
}

const ProjectPage = ({ params }: Props) => <Project params={params} />;

export default ProjectPage;
