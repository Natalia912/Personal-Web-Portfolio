import { AnchorHTMLAttributes } from "react";
import { ArrowRight } from "../icons";
import Link from "next/link";

export const ArrowLink = ({
  isNextLink = false,
  href,
  text,
  className,
  ...props
}: {
  isNextLink?: boolean;
  href: string;
  text: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const Tag = isNextLink ? Link : "a";
  return (
    <Tag
      href={href}
      className={[
        "text-brand-200 font-semibold group flex items-center gap-2 text-lg",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <ArrowRight className="w-5 h-5 rotate-180 transition-transform group-hover:-translate-x-2" />
      <span>{text}</span>
      <ArrowRight className="w-5 h-5 -ml-0.5 transition-transform group-hover:translate-x-2" />
    </Tag>
  );
};
