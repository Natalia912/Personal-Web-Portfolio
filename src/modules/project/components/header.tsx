"use client";

import { ArrowLeftWIthTail } from "@/src/shared/ui/icons";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export const Header = () => {
  const t = useTranslations("buttons");
  const locale = useLocale();

  return (
    <header className="lg:pt-4 lg:sticky lg:top-0">
      <Link
        href={`/${locale}/#projects`}
        className="flex gap-2 cursor-pointer hover:text-brand-300 group focus-visible:text-brand-300 transition-colors w-fit"
      >
        <ArrowLeftWIthTail className="w-4 md:w-5 transition-transform lg:group-hover:-translate-x-2" />
        <span className="text-md md:text-lg font-semibold">{t("goBack")}</span>
      </Link>
    </header>
  );
};
