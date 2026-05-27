import { about, socialIcons, socials, type Social } from "@/src/shared/lib";
import { Navigation } from "./navigation";

const SocialLink = ({ name, url, icon }: Social) => {
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
        <h1 className="text-4xl tracking-tight font-bold text-brand-50 md:text-6xl">
          {about.name}
        </h1>
        <p className="text-2xl mt-2 mb-4 md:text-4xl">{about.title}</p>
        <p className="text-lg max-w-88 md:text-2xl md:max-w-100">
          {about.shortDescription}
        </p>
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
