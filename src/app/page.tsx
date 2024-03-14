import About from '@/components/home-sections/About';
import Hero from '@/components/home-sections/Hero';
import { AmicornProject } from '@/components/home-sections/AmicornProject';
import Projects from '@/components/home-sections/Projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <AmicornProject />
    </main>
  );
}
