import { useObserver } from "@/src/shared/hooks";
import { sections } from "@/src/shared/data";
import { useRef, useState } from "react";

export const useNavigationObserver = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const visibilityMap = useRef(new Map<string, number>());
  useObserver(
    sections.map((el) => el.id),
    { threshold: [0, 0.25, 0.5, 0.75, 1] },
    (entry) => {
      visibilityMap.current.set(entry.target.id, entry.intersectionRatio);

      // Find the element with the highest visibility
      const mostVisible = Array.from(visibilityMap.current.entries()).reduce(
        (max, [id, ratio]) => (ratio > max[1] ? [id, ratio] : max),
        ["", 0],
      );

      if (mostVisible[0] && mostVisible[1] > 0) {
        setActiveSection(mostVisible[0]);
      }
    },
  );

  return activeSection;
};
