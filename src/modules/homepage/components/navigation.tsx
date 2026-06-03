"use client";

import { useDevice } from "@/src/shared/hooks";
import { sections } from "@/src/shared/lib";
import { Airplane } from "@/src/shared/ui/icons";
import { useNavigationObserver } from "../hooks/useNavigationObserver";

const PageLink = ({
  name,
  url,
  isActive,
}: {
  name: string;
  url: string;
  isActive: boolean;
}) => (
  <a
    href={url}
    className="text-brand-100 transition-colors group md:text-2xl flex items-center gap-2 py-1 w-fit"
  >
    <i
      className={`h-auto w-6 relative before:content-[''] before:absolute before:bg-brand-100 before:w-0 before:right-[25%] before:h-0.75 before:rounded before:top-[50%] transform before:translate-y-[-50%] transition-transform  before:transition-[width] group-hover:translate-x-8 group-hover:before:w-12 group-focus-visible:translate-x-8 group-focus-visible:before:w-12 ${isActive ? "translate-x-8 before:w-12" : ""}`}
    >
      <Airplane className="w-6" />
    </i>

    <span
      className={`transition-transform group-hover:translate-x-8 group-focus-visible:translate-x-8 ${isActive ? "translate-x-8 " : ""}`}
    >
      {name}
    </span>
  </a>
);

const DesktopNavigation = ({ activeSection }: { activeSection: string }) => (
  <nav aria-label="Page navigation links">
    <ul className="flex flex-col gap-2">
      {sections.map((section) => (
        <li key={section.id}>
          <PageLink
            name={section.name}
            url={`#${section.id}`}
            isActive={activeSection === section.id}
          />
        </li>
      ))}
    </ul>
  </nav>
);

export const Navigation = () => {
  const { isDesktop } = useDevice();
  const activeSection = useNavigationObserver();

  if (!isDesktop) {
    return null;
  }

  return <DesktopNavigation activeSection={activeSection} />;
};
