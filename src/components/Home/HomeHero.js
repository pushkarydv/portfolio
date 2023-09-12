"use client";

import React, { useEffect, useState } from "react";

import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { PiDownload, PiGithubLogo } from "react-icons/pi";

import { socials } from "../../../data/links";
import { texts } from "../../../data/homeTexts";

import { HomeHeroLink } from "./HomeElements/HomeHeroLink";

export default function HomeHero() {
  const [text, setText] = useState(texts[0]);

  useEffect(() => {

    const textAnimator = setInterval(() => {
      const index = texts.indexOf(text);
      const next = (index + 1) % texts.length;
      setText(texts[next]);
    }, 2000);
    return () => clearInterval(textAnimator);

  }, [text]);

  return (
    <div className='bg-neutral-800 py-[10vh] px-4 md:px-8 lg:px-[16%]'>
      <div className='py-4 flex flex-col md:flex-row items-center gap-4'>
        <div className='w-full md:w-1/2 flex justify-center items-center text-center'>

          <img
            src='/aws-s3/pic.png'
            className='max-h-[45vh] md:max-h-[60vh]'
            alt="Pushkar&apos;s Profile Pic with some boxes"
          />

        </div>
        <div className='w-full md:w-1/2 py-4'>
          <div className='bg-white p-8 outline outline-2 rounded-xl outline-neutral-900'>

            <p className='text-neutral-950 text-sm'>Hey It&apos;s</p>
            <p className='text-6xl font-semimbold text-black'>PUSHKAR</p>
            <p className='text-teal-950 text-xl mt-3'>{text}</p>

            <div className='flex flex-row items-center gap-2 my-4'>

              {socials.github != "" && (
                <HomeHeroLink href={socials.github}>
                  <PiGithubLogo size={"2.4rem"} />
                </HomeHeroLink>
              )}

              {socials.linkedin != "" && (
                <HomeHeroLink href={socials.linkedin}>
                  <CiLinkedin size={"2.4rem"} />
                </HomeHeroLink>
              )}

              {socials.instagram != "" && (
                <HomeHeroLink href={socials.instagram}>
                  <CiInstagram size={"2.4rem"} />
                </HomeHeroLink>
              )}

              {socials.twitter != "" && (
                <HomeHeroLink href={socials.twitter}>
                  <CiTwitter size={"2.4rem"} />
                </HomeHeroLink>
              )}

            </div>

            <p className='mt-4 font-mono'>😶‍🌫️ Did you ever saw me and Batman at same place?</p>

            <a
              rel='noopener noreferrer'
              className='no-underline text-inherit hover:scale-95 transition-all flex flex-row gap-2 items-center bg-teal-800 text-neutral-50 w-fit py-2 px-4 rounded-lg mt-6'
              target='_blank'
              href='https://drive.google.com/file/d/189kzUrLgCO2v7sIJRI02ChWtjTXWdy3Z/view?usp=sharing'
            >
              Resume <PiDownload size={"1.5rem"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
