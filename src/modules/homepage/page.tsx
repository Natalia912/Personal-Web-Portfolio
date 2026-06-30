import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Header } from "./components/header";
import { Projects } from "./components/projects";

export function Homepage() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-0 lg:gap-4">
      <Header />
      <main className="flex-1">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
