import { useEffect } from "react";

export const useObserver = (
  ids: string[],
  options?: IntersectionObserverInit,
  callback?: (entry: IntersectionObserverEntry) => void,
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (callback) {
        callback(entry);
      }
    }, options);

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [ids, options]);
};
