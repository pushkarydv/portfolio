import React from "react";

function HomeAbout() {
  return (
    <div className='text-neutral-800 bg-neutral-50 py-[10vh] px-4 md:px-8 lg:px-[16%]'>
      <p className='text-xl md:text-2xl'>
        As Pushkar Yadav, I am a versatile programmer from India with a passion
        for Full Stack Web Development. I have dabbled in various fields like
        UI/UX, Photography, and blogging, but my current focus is on building
        fantastic websites. My work has reached users in over 104 countries, and
        I have launched more than 16 products. I am proficient in multiple tech
        stacks including JavaScript, NextJS, React, and more.
      </p>
      <p></p>
      <a
        className='no-underline text-sm bg-teal-900 text-white inline-block p-2 rounded-lg my-2'
        href='https://openai.com/research/gpt-4'
        rel='noopener noreferrer'
        target='_blank'
      >
        GPT-4 generated text
      </a>
    </div>
  );
}

export default HomeAbout;
