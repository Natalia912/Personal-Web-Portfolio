import { about } from "@/src/shared/lib";
import { Section } from "./section";

export const About = () => {
  return (
    <Section id="about" name="About">
      {about.longDescription.map((paragraph, index) => (
        <p key={index} className="text-lg md:text-2xl mb-4">
          {paragraph}
        </p>
      ))}
    </Section>
  );
};
