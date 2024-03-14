import About from '@/components/home-sections/About';
import Hero from '@/components/home-sections/Hero';
import { PleaInteract } from '@/components/home-sections/PleaInteract';
import Projects from '@/components/home-sections/Projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <PleaInteract />
    </main>
  );
}
