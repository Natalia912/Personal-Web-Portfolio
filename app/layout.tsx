import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Natalia Tretiakova - Frontend Developer",
  description:
    "Portfolio of Natalia Tretiakova, a frontend developer specializing in React, Vue,Next.js and TypeScript. Explore my projects, experience, and contact information.",
};

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={nunito.className + " scroll-smooth"}
    >
      <body className="bg-brand-950 text-brand-100 px-4 py-8 md:px-8 lg:px-12 lg:py-0">
        {children}
      </body>
    </html>
  );
}
