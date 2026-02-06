import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1 bg-background text-foreground selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
