import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Header } from "./components/header";
import { Projects } from "./components/projects";

export function Homepage() {
  return (
    <div className="lg:flex lg:justify-between gap-4 lg:gap-8">
      <Header />
      <main className="lg:w-[50%]">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
