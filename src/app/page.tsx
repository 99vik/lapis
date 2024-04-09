import Hero from '@/components/home-sections/Hero';
import News from '@/components/home-sections/News';
import NavigationCards from '@/components/home-sections/NavigationCards';

export default function Home() {
  return (
    <main>
      <Hero />
      <NavigationCards />
      <News />
    </main>
  );
}
