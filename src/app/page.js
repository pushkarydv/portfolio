'use client';
import { useEffect } from 'react';
import { initWebFrame } from 'web-frame-lib';

import HomeExperince from '@/components/Home/HomeExperince';
import HomeFooter from '@/components/Home/HomeFooter';
import HomeHero from '@/components/Home/HomeHero';
import HomeProjects from '@/components/Home/HomeProjects';
import HomeStats from '@/components/Home/HomeStats';

export default function Home() {
  useEffect(() => {
    initWebFrame({
      url: 'https://mg.writewrap.in/widget/clrbyc3ie0000j8lc9zdhosjk',
      config: {
        activatorText: 'Message Me',
        css: '#wfl-frame{border: 2px solid #000; background: #fff;} @media (max-width: 450px){#wfl-frame{border:none;}}',
      },
    });
  }, []);

  return (
    <main>
      <HomeHero />
      {/* <HomeAbout /> */}
      <HomeStats />
      <HomeProjects />
      <HomeExperince />
      <HomeFooter />
    </main>
  );
}
