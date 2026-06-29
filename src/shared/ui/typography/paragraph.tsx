import { HTMLAttributes, PropsWithChildren } from "react";

export const Paragraph = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement> & PropsWithChildren) => (
  <p
    className={["text-md md:text-lg lg:text-xl ", className]
      .filter(Boolean)
      .join(" ")}
    {...props}
  >
    {children}
  </p>
);
