import { cn } from "@/src/shared/utils";

// tailwind styles to use inside the content
export const styles = cn(
  // Headings
  "[&_h2]:text-2xl [&_h2]:md:text-4xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mt-6 [&_h2]:mb-3 [&_h2]:lg:mt-8 [&_h2]:lg:mb-4",
  "[&_h3]:text-lg [&_h3]:md:text-2xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:mt-6 [&_h3]:mb-3",

  // Body text
  "[&_p]:text-md [&_p]:md:text-lg [&_p]:lg:text-xl [&_p]:mb-4 [&_p]:leading-relaxed",

  // Lists
  "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1",
  "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-1",
  "[&_li]:text-md [&_li]:md:text-lg [&_li]:lg:text-xl",

  // Inline emphasis
  "[&_strong]:font-bold",
  "[&_em]:italic",

  // Quotes
  "[&_blockquote]:border-l-4 [&_blockquote]:border-brand-100 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:mb-4",
);
