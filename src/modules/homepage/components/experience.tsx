import { type ExperienceType } from "@/src/shared/lib";
import { experience, sections } from "@/src/shared/data";
import { Section } from "./section";
import { readableDate } from "@/src/shared/utils";
import { Heading, Paragraph } from "@/src/shared/ui/typography";
import { ArrowLink } from "@/src/shared/ui/components";

const ExperienceItem = ({ exp }: { exp: ExperienceType }) => (
  <a
    href={exp.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col md:flex-row gap-4 md:gap-6 relative group"
    aria-label={`View ${exp.company} website`}
  >
    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-brand-500 lg:group-hover:shadow"></div>
    <p className="uppercase text-sm font-semibold tracking-wide min-w-40 pt-1.5 grow text-brand-300">
      {readableDate(exp.startDate)} - {readableDate(exp.endDate)}
    </p>
    <div>
      <div>
        <Heading level={3} bold>
          {exp.company}
        </Heading>
        <Paragraph className=" text-brand-300">{exp.position}</Paragraph>
      </div>
      {exp.description.map((desc, index) => (
        <Paragraph key={index} className="mt-2">
          {desc}
        </Paragraph>
      ))}
    </div>
  </a>
);

export const Experience = () => {
  return (
    <Section id={sections[1].id} name={sections[1].name}>
      <div className="flex flex-col gap-12">
        {experience.map((exp) => (
          <ExperienceItem exp={exp} key={exp.id} />
        ))}
        <ArrowLink
          href="/CV_Natalia_Tretiakova.pdf"
          target="_blank"
          rel="noopener noreferrer"
          text="See full resume"
        />
      </div>
    </Section>
  );
};
