import { FC, PropsWithChildren } from "react";
import { Footer } from "./footer";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="px-4 py-8 md:px-8 lg:px-12 lg:py-0">
      {children}
      <Footer />
    </div>
  );
};

export { MainLayout };
