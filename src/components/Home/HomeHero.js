import React from 'react';

import { socials } from '../../../data/links';
import { about } from '../../../data/webconfig';

import { HomeHeroLink } from './HomeElements/HomeHeroLink';

import { CiInstagram, CiLinkedin, CiTwitter } from 'react-icons/ci';
import { PiDownload, PiGithubLogo } from 'react-icons/pi';


export default function HomeHero() {
  return (
    <>
      <div className='min-h-screen bg-[#0a0f19]'>
        {/* Background Circle (Blur) */}
        <div className='absolute right-1/4 translate-x-1/4 bottom-1/4 translate-y-1/4 rounded-full blur-3xl w-1/3 aspect-square bg-[#1a2232] -z-0'></div>

        {/* Background Grid Pattern */}
        <div className='absolute top-0 left-0 min-h-screen w-full z-0 background-grid'></div>

        {/* Hero Content */}
        <div className='relative z-10 header-text'>
          <div className='text-5xl pt-[10vh] lg:pt-[20vh] px-4 text-white lg:text-center lg:text-6xl font-semibold'>
            <img
              src='/images/profile.jpeg'
              className='w-40 mx-auto rounded-full'
              alt=''
            />
            Pushkar Yadav
          </div>

          <div className='text-xl my-2 max-w-5xl mx-auto px-4 text-white lg:text-center'>
            {about?.content}
          </div>
          <div className='flex flex-row px-4 sm:justify-center items-center gap-4 my-4'>
            {socials.github != '' && (
              <HomeHeroLink href={socials.github}>
                <PiGithubLogo size={'2rem'} />
              </HomeHeroLink>
            )}

            {socials.linkedin != '' && (
              <HomeHeroLink href={socials.linkedin}>
                <CiLinkedin size={'2rem'} />
              </HomeHeroLink>
            )}

            {socials.instagram != '' && (
              <HomeHeroLink href={socials.instagram}>
                <CiInstagram size={'2rem'} />
              </HomeHeroLink>
            )}

            {socials.twitter != '' && (
              <HomeHeroLink href={socials.twitter}>
                <CiTwitter size={'2rem'} />
              </HomeHeroLink>
            )}
          </div>

          <div className='p-4 text-base text-white flex flex-row flex-wrap items-center gap-2 sm:justify-center'>
            <a
              rel='noopener noreferrer'
              className='no-underline text-inherit hover:scale-95 transition-all flex flex-row gap-2 items-center bg-sky-500 text-neutral-50 w-fit py-2 px-4 rounded-lg'
              target='_blank'
              href='https://drive.google.com/file/d/1W1KVb13VJTWXu1R_AtTl06L7dFbTom_o/view?usp=sharing'
            >
              Resume <PiDownload size={'1.5rem'} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
