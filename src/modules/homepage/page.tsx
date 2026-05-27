import { About } from "./components/about";
import { Header } from "./components/header";

export function Homepage() {
  return (
    <div className="lg:flex lg:justify-between gap-4 lg:gap-8">
      <Header />
      <main className="lg:w-[50%]">
        <About />
      </main>
    </div>
  );
}
