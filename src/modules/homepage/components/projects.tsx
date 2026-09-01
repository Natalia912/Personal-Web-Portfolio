import { Section } from "./section";
import Image from "next/image";
import { Heading, Paragraph } from "@/src/shared/ui/typography";
import Link from "next/link";
import { TagList } from "@/src/shared/ui/components";
import { useLocale, useMessages } from "next-intl";
import { ProjectType } from "@/src/shared/lib";

export const Projects = () => {
  const messages = useMessages();
  const projects = messages.projects as ProjectType[];
  const locale = useLocale();
  return (
    <Section id="projects" name={messages.homepage.navigation.projects}>
      <div className="flex flex-col gap-12">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={`${locale}/projects/${project.slug}`}
            className="flex flex-col-reverse md:flex-row items-start gap-6 relative group"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-brand-500 lg:group-hover:shadow"></div>
            <Image
              src={project.featuredImage}
              alt={project.name}
              width={160}
              height={120}
              className="rounded-sm object-cover w-auto"
            />
            <div>
              <Heading level={3} bold className="mb-2">
                {project.name}
              </Heading>
              <Paragraph className="mb-4">{project.description}</Paragraph>
              <TagList>
                {project.technologies.map((tech) => (
                  <TagList.Item key={tech}>{tech}</TagList.Item>
                ))}
              </TagList>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};
