"use client";

import { useEffect, useState } from "react";

export const useDevice = () => {
  const [type, setType] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setType("mobile");
      } else if (width >= 768 && width < 1024) {
        setType("tablet");
      } else {
        setType("desktop");
      }
    };
    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return {
    isMobile: type === "mobile",
    isTablet: type === "tablet",
    isDesktop: type === "desktop",
  };
};
