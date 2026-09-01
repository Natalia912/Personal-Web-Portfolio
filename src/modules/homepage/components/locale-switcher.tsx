"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";
import { locales } from "@/src/shared/data";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("buttons");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    // Strip the current locale prefix, then prepend the new one
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    const newPath = segments.join("/");

    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      disabled={isPending}
      aria-label={t("selectLanguage")}
      name="locale"
      className="appearance-none rounded-md border border-brand-300 bg-transparent px-3 py-1.5 h-10 text-sm text-brand-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-600 disabled:opacity-50 disabled:cursor-not-allowed
      "
    >
      {locales.map((l) => (
        <option
          key={l.code}
          value={l.code}
          className="text-brand-900 bg-brand-100"
        >
          {l.label}
        </option>
      ))}
    </select>
  );
}
