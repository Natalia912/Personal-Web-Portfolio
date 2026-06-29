import { Project } from "@/src/modules/project";
import { projects } from "@/src/shared/lib";
import { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  const project = projects.find((p) => p.slug === slug);

  return {
    title: project?.name ?? "Project page",
    description: project?.description ?? "",
  };
}

const ProjectPage = ({ params }: Props) => <Project params={params} />;

export default ProjectPage;
