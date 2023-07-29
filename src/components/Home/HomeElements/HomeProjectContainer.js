import React from "react";

import { PiArrowUpRightBold } from "react-icons/pi";

import { refrences } from "../../../../data/links";

export const HomeProjectContainer = ({ project }) => {
  return (
    <div
      className='flex flex-col-reverse md:flex-row jutify-center gap-4 p-4 rounded-md my-2'
    >
      <div className='w-full md:w-2/3'>
        <div className='text-2xl font-semibold underline'>{project[0]}</div>
        <div className='text-base'>{project[3]}</div>
        <div className='block w-fit bg-sky-300 text-black py-1 px-3 text-sm rounded-full'>
          {project[4]}
        </div>
        {project[5] != "" && (
          <div className='font-semibold text-black'>{project[5]}</div>
        )}
        <a
          href={project[2] + `?ref=${refrences.website}`}
          rel='noopener noreferrer'
          className='no-underline text-white transition-all flex flex-row my-2 gap-2 items-center w-fit bg-black p-2 text-sm rounded-lg'
          target='_blank'
        >
          Visit <PiArrowUpRightBold size={"1rem"} />
        </a>
      </div>
      <div className='w-full md:w-1/3 flex justify-center items-center text-center'>
        <img
          src={project[1]}
          loading='lazy'
          className='w-full rounded-lg'
          alt="Ayoo banner image here"
        />
      </div>
    </div>
  );
};
