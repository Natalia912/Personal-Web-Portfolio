import { HTMLAttributes, PropsWithChildren } from "react";

export const Heading = ({
  children,
  level = 1,
  bold = false,
  className,
  ...props
}: {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  bold?: boolean;
} & HTMLAttributes<HTMLHeadingElement> &
  PropsWithChildren) => {
  const Tag = `h${level}` as const;

  const styles = {
    1: "text-4xl tracking-tight text-brand-50 md:text-6xl",
    2: "text-2xl md:text-4xl",
    3: "md:text-2xl text-lg tracking-tight",
    4: "text-md md:text-lg",
    5: "text-md md:text-lg",
    6: "text-md md:text-lg",
  } as const;

  return (
    <Tag
      className={[styles[level], bold && "font-bold", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
};
