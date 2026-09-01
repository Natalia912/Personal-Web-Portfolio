import { Nunito } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { locales } from "@/src/shared/data";

const nunito = Nunito({ subsets: ["latin"] });

export function generateStaticParams() {
  const localeCodes = locales.map((l) => l.code);
  return localeCodes.map((code) => ({ locale: code }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={nunito.className + " scroll-smooth"}
      data-scroll-behavior="smooth"
    >
      <body className="bg-brand-950 text-brand-100 px-4 py-8 md:px-8 lg:px-12 lg:py-0">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
