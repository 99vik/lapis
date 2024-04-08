import Hero from '@/components/home-sections/Hero';
import { AmicornProject } from '@/components/home-sections/AmicornProject';
import Projects from '@/components/home-sections/Projects';
import News from '@/components/home-sections/News';
import NavigationCards from '@/components/home-sections/NavigationCards';

export default function Home() {
  return (
    <main>
      <Hero />
      <NavigationCards />
      <News />
      <Projects />
      <AmicornProject />
    </main>
  );
}
