"use client";
import React, { useEffect, useState } from "react";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { PiGithubLogo } from "react-icons/pi";
export default function HomeHero() {
  const texts = [
    "Designer 🎨",
    "<Developer />🧑‍💻",
    "Hobby Photograper 📷",
    "Developer Advocate",
    "Figuring out life 🤔",
  ];
  const [text, setText] = useState(texts[0]);
  const socials = {
    linkedin: "https://www.linkedin.com/in/pushkarydv",
    github: "http://github.com/pushkarydv",
    twitter: "https://twitter.com/pushkaryadavin",
    instagram: "https://www.instagram.com/pushkaryadav_/",
  };
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
          <img src='/aws-s3/pic.png' className='max-h-[45vh] md:max-h-[60vh]' alt='Pushkar&apos; Profile Pic with some boxes' />
        </div>
        <div className='w-full md:w-1/2 py-4'>
          <div className='bg-white p-8 outline outline-2 rounded-xl outline-neutral-900'>
            <p className='text-neutral-950 text-sm'>Hey It&apos;s</p>
            <p className='text-6xl font-semimbold text-black'>PUSHKAR</p>
            <p className='text-teal-950 text-xl mt-3'>{text}</p>

            <div className='flex flex-row items-center gap-2 my-4'>
              {socials.github != "" && (
                <a
                  href={socials.github + "?ref=pushkaryadav.in"}
                  rel='noopener noreferrer'
                  className='no-underline text-inherit hover:scale-95 transition-all'
                  target='_blank'
                >
                  <PiGithubLogo size={"2.4rem"} />
                </a>
              )}
              {socials.linkedin != "" && (
                <a
                  href={socials.linkedin + "?ref=pushkaryadav.in"}
                  rel='noopener noreferrer'
                  className='no-underline text-inherit hover:scale-95 transition-all'
                  target='_blank'
                >
                  <CiLinkedin size={"2.4rem"} />
                </a>
              )}
              {socials.instagram != "" && (
                <a
                  href={socials.instagram + "?ref=pushkaryadav.in"}
                  rel='noopener noreferrer'
                  className='no-underline text-inherit hover:scale-95 transition-all'
                  target='_blank'
                >
                  <CiInstagram size={"2.4rem"} />
                </a>
              )}
              {socials.twitter != "" && (
                <a
                  href={socials.twitter + "?ref=pushkaryadav.in"}
                  rel='noopener noreferrer'
                  className='no-underline text-inherit hover:scale-95 transition-all'
                  target='_blank'
                >
                  <CiTwitter size={"2.4rem"} />
                </a>
              )}
            </div>
            <p className='mt-4 font-mono'>😶‍🌫️ Have you heard Tere Naina?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
