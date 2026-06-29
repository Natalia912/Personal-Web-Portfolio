import { about, socialIcons, socials, type SocialType } from "@/src/shared/lib";
import { Navigation } from "./navigation";
import { Heading, Paragraph } from "@/src/shared/ui/typography";

const SocialLink = ({ name, url, icon }: SocialType) => {
  const Icon = socialIcons[icon];
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brand-100 hover:text-brand-300  focus-visible:text-brand-300 transition-colors"
    >
      <span className="sr-only">{name}</span>
      <Icon className="h-10 w-10 md:h-12 md:w-12" />
    </a>
  );
};

function Header() {
  return (
    <header className="flex flex-col gap-4 justify-between lg:sticky lg:top-0 lg:py-24 lg:my-0 lg:h-screen  lg:w-[50%]">
      <div>
        <Heading bold>{about.name}</Heading>
        <Heading level={2} className="mt-2 mb-4">
          {about.title}
        </Heading>
        <Paragraph className="max-w-88 md:max-w-100">
          {about.shortDescription}
        </Paragraph>
      </div>
      <Navigation />
      <div>
        <ul className="flex gap-1">
          {socials.map((social) => (
            <li key={social.name}>
              <SocialLink {...social} />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export { Header };
