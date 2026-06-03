import { about, sections } from "@/src/shared/lib";
import { Section } from "./section";

export const About = () => {
  return (
    <Section id={sections[0].id} name={sections[0].name}>
      {about.longDescription.map((paragraph, index) => (
        <p key={index} className="text-md md:text-lg lg:text-xl mb-4">
          {paragraph}
        </p>
      ))}
    </Section>
  );
};
