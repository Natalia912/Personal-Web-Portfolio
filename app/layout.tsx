import { MainLayout } from "@/src/modules/main-layout";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Natalia Tretiakova - Frontend Developer",
  description:
    "Portfolio of Natalia Tretiakova, a skilled frontend developer specializing in React, Vue, and TypeScript. Explore my projects, experience, and contact information.",
};

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={nunito.className}>
      <body className="bg-brand-950 text-brand-100">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
