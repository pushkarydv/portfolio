import HomeCreations from '@/components/Home/outdated/HomeCreations';
import HomeFooter from '@/components/Home/outdated/HomeFooter';
import HomeHero from '@/components/Home/outdated/HomeHero';
import HomeStats from '@/components/Home/outdated/HomeStats';
import HomeWidget from '@/components/Home/outdated/HomeWidget';

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
