import { projects, sections } from "@/src/shared/lib";
import { Section } from "./section";
import Image from "next/image";

export const Projects = () => {
  return (
    <Section id={sections[2].id} name={sections[2].name}>
      <div className="flex flex-col gap-12">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col-reverse md:flex-row items-start gap-6 relative group"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-brand-500 lg:group-hover:shadow"></div>
            <Image
              src={project.featuredImage}
              alt={project.name}
              width={160}
              height={120}
              className="rounded-sm object-cover"
            />
            <div>
              <h3 className="text-2xl tracking-tight font-bold mb-2">
                {project.name}
              </h3>
              <p className="text-md md:text-lg lg:text-xl mb-4">
                {project.description}
              </p>
              <ul className="flex gap-2 flex-wrap">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="text-md bg-brand-200 font-bold text-brand-900 px-4 py-1 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};
