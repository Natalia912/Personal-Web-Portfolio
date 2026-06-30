import { about, sections } from "@/src/shared/data";
import { Section } from "./section";
import { Paragraph } from "@/src/shared/ui/typography";

export const About = () => {
  return (
    <Section id={sections[0].id} name={sections[0].name}>
      {about.longDescription.map((paragraph, index) => (
        <Paragraph key={index} className="mb-4">
          {paragraph}
        </Paragraph>
      ))}
    </Section>
  );
};
