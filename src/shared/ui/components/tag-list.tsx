import { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../utils";

const TagList = ({
  className,
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLUListElement>) => (
  <ul className={cn("flex gap-2 flex-wrap", className ?? "")} {...props}>
    {children}
  </ul>
);

const ListItem = ({
  className,
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLLIElement>) => (
  <li
    className={cn(
      "text-sm md:text-md bg-brand-100 font-bold text-brand-900 px-2.5 py-0.5 md:px-4 md:py-1 rounded-full",
      className ?? "",
    )}
    {...props}
  >
    {children}
  </li>
);

TagList.Item = ListItem;

export { TagList };
