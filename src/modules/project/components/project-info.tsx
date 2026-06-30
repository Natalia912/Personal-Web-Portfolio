import { Carousel, TagList } from "@/src/shared/ui/components";
import { Heading } from "@/src/shared/ui/typography";

type Props = {
  title: string;
  images: string[];
  technologies: string[];
};

export const ProjectInfo = ({ title, images, technologies }: Props) => {
  return (
    <aside className="flex flex-col gap-8 flex-1 justify-between h-full lg:sticky lg:top-17">
      <div>
        <Heading>{title}</Heading>
        <TagList className="mt-4">
          {technologies.map((tech) => (
            <TagList.Item key={tech}>{tech}</TagList.Item>
          ))}
        </TagList>
      </div>
      <Carousel images={images} />
    </aside>
  );
};
