import { AchievementsSection } from '@/components/wrappers/achievements-section';
import { ExperienceSection } from '@/components/wrappers/experince-section';
import FooterSection from '@/components/wrappers/footer-section';
import { HeroSection } from '@/components/wrappers/hero-section';
import { HomeHeader } from '@/components/wrappers/home-header';
import { MessageSection } from '@/components/wrappers/message-section';
import { ProjectsSection } from '@/components/wrappers/projects-section';

export default function Home() {
  return (
    <div className='relative'>
      <HomeHeader />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <MessageSection />
      <FooterSection />
    </div>
  );
}
