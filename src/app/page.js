import { ExperinceSection } from '@/components/wrappers/experince-section';
import { HeroSection } from '@/components/wrappers/hero-section';
import { HomeHeader } from '@/components/wrappers/home-header';
import { MessageSection } from '@/components/wrappers/message-section';

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <HeroSection />
      <ExperinceSection />
      <MessageSection />
    </div>
  );
}
