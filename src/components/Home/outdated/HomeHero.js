import { CiInstagram, CiLinkedin, CiTwitter } from 'react-icons/ci';
import { PiDownload, PiGithubLogo } from 'react-icons/pi';
import React from 'react';

const HomeHero = () => {
  const socials = {
    linkedin: 'https://www.linkedin.com/in/pushkarydv',
    github: 'https://github.com/pushkarydv',
    twitter: 'https://twitter.com/pushkaryadavin',
    instagram: 'https://www.instagram.com/pushkaryadav_/',
  };

  const HomeHeroLink = (props) => {
    return (
      <a
        href={`${props.href}?ref=pushkaryadav.in`}
        rel='noopener noreferrer'
        className='no-underline p-2 border-none shadow-sm shadow-black/20 text-black  rounded-full transition-all active:scale-95'
        target='_blank'
      >
        {props.children}
      </a>
    );
  };

  return (
    <section className='min-h-[90vh] py-[25vh] lg:py-[10vh] bg-gradient-to-b from-fuchsia-100 via-pink-100 to-violet-100 flex justify-center items-center overflow-hidden'>
      <a
        rel='noopener noreferrer'
        className='no-underline absolute top-4 right-4 text-inherit hover:scale-95 transition-all flex flex-row gap-2 items-center bg-white/40 text-black w-fit py-2 px-4 rounded-full shadow-md shadow-black/10 ring-2 ring-white/80 z-10'
        target='_blank'
        href='https://pushkarydv.github.io/pushkarydv/resume.pdf'
      >
        Resume <PiDownload size={'1.5rem'} />
      </a>
      <div className='absolute w-96 h-96 rounded-full bg-pink-100 blur-2xl -top-24 -left-24'></div>
      <div className='pt-24 px-4 pb-4 md:px-8 md:pb-8 w-[90%] max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto border border-black/5 bg-white/40 shadow-md shadow-black/5 rounded-xl relative'>
        <img
          src='/images/profile.jpeg'
          className='w-36 aspect-square rounded-full absolute -top-36 translate-y-1/2 left-1/2 -translate-x-1/2 ring-2 ring-white/30'
          alt=''
        />
        <div className='text-black/80'>
          Hey there! <br />
          I&apos;m{' '}
          <span className='text-violet-900/80 font-serif font-bold'>
            Pushkar Yadav
          </span>
          , a developer, idea generator, and product enthusiast. I&apos;ve launched
          over 20+ products, reaching 25k+ users across 104+ countries. My
          expertise lies in JavaScript, NextJS, React. From conceptualization to
          launch, I prioritize SEO, loading speed, and user experience. Outside
          of coding, I share my tech insights through blogging and capture
          moments as a photographer.
        </div>

        <div
          className='flex flex-row flex-wrap justify-start items-center gap-4 mt-4'
          initial='hidden'
          animate='visible'
        >
          <HomeHeroLink href={socials.github}>
            <PiGithubLogo size={'2rem'} />
          </HomeHeroLink>

          <HomeHeroLink href={socials.linkedin}>
            <CiLinkedin size={'2rem'} />
          </HomeHeroLink>

          <HomeHeroLink href={socials.instagram}>
            <CiInstagram size={'2rem'} />
          </HomeHeroLink>

          <HomeHeroLink href={socials.twitter}>
            <CiTwitter size={'2rem'} />
          </HomeHeroLink>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
