import { sections } from "@/src/shared/data";
import { Section } from "./section";
import { Paragraph } from "@/src/shared/ui/typography";
import { useTranslations } from "next-intl";

export const About = () => {
  const t = useTranslations("homepage");
  const description = t.raw("about.longDescription") as string[];
  const yoe = new Date().getFullYear() - 2022;
  const rendered = description.map((p) => p.replace("{yoe}", String(yoe)));
  return (
    <Section id="about" name={t("navigation.about")}>
      {rendered.map((paragraph, index) => (
        <Paragraph key={index} className="mb-4">
          {paragraph}
        </Paragraph>
      ))}
    </Section>
  );
};
