import { defineRouting } from "next-intl/routing";
import { locales } from "../data";

const localeCodes = locales.map((l) => l.code);

export const routing = defineRouting({
  locales: localeCodes,
  defaultLocale: localeCodes[0],
  localeDetection: false,
});
