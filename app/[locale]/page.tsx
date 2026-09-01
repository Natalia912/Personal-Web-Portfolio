import { Homepage } from "@/src/modules/homepage";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  console.log(locale, "locale");
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale,
    },
    alternates: {
      languages: {
        en: "/en",
        ru: "/ru",
        "x-default": "/en",
      },
    },
  };
}

export default async function Home() {
  return <Homepage />;
}
