import HomeCreations from '@/components/Home/HomeCreations';
import HomeFooter from '@/components/Home/HomeFooter';
import HomeHero from '@/components/Home/HomeHero';
import HomeStats from '@/components/Home/HomeStats';
import HomeWidget from '@/components/Home/HomeWidget';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeStats />
      <HomeCreations />
      <HomeFooter />
      <HomeWidget />
    </main>
  );
}
