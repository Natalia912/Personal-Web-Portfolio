import { type ExperienceType, experience, sections } from "@/src/shared/lib";
import { Section } from "./section";
import { readableDate } from "@/src/shared/utils";
import { ArrowRight } from "@/src/shared/ui/icons";

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
        <h3 className="md:text-2xl text-lg tracking-tight font-bold">
          {exp.company}
        </h3>
        <p className="text-md md:text-lg lg:text-xl text-brand-300">
          {exp.position}
        </p>
      </div>
      {exp.description.map((desc, index) => (
        <p key={index} className="text-md md:text-lg lg:text-xl mt-2">
          {desc}
        </p>
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
        <a
          href="/CV_Natalia_Tretiakova.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-200 font-semibold group flex items-center gap-2 text-lg"
        >
          <ArrowRight className="w-5 h-5 rotate-180 transition-transform group-hover:-translate-x-2" />
          <span>See full resume</span>
          <ArrowRight className="w-5 h-5 -ml-0.5 transition-transform group-hover:translate-x-2" />
        </a>
      </div>
    </Section>
  );
};
