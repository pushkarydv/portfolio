import React from "react";
import {
  PiAppWindowLight,
  PiCameraLight,
  PiMapTrifoldLight,
  PiUsersThreeBold,
} from "react-icons/pi";

function HomeStats() {
  const stats = {
    products: "16+",
    users: "15k+",
    photography: "200k+",
    countries: "104+",
  };
  return (
    <div className='bg-neutral-800 text-neutral-50 py-[10vh]  px-4 md:px-8 lg:px-[16%]'>
      <p className='text-2xl'>
        Wanna see projects? Go down, here are some stats to flex of
      </p>

      <div className='flex flex-row justify-center items-center flex-wrap flex-shrink-0 mt-6'>
        <a
          className='w-1/2 md:w-1/4'
          target='_blank'
          href='https://www.producthunt.com/@pushkaryadav'
          rel='noopener noreferrer'
        >
          <div className='bg-white text-neutral-950 m-1 rounded-md md:m-0 md:mr-4 p-4 md:py-8 gap-2 flex flex-col items-center justify-center hover:translate-y-2 hover:translate-x-2 hover:transition-all'>
            <PiAppWindowLight size={"6rem"} />
            <p className='text-4xl font-semibold'>{stats.products}</p>
            <p className='text-xl text-center'>Products</p>
          </div>
        </a>
        <a
          className='w-1/2 md:w-1/4'
          target='_blank'
          href='https://github.com/pushkarydv'
          rel='noopener noreferrer'
        >
          <div className='bg-white text-neutral-950 m-1 rounded-md md:m-0 md:mx-4 p-4 md:py-8 gap-2 flex flex-col items-center justify-center hover:translate-y-2 hover:translate-x-2 hover:transition-all'>
            <PiUsersThreeBold size={"6rem"} />
            <p className='text-4xl font-semibold'>{stats.users}</p>
            <p className='text-xl text-center'>Users</p>
          </div>
        </a>
        <a
          className='w-1/2 md:w-1/4'
          target='_blank'
          href='https://www.pexels.com/@pushkaryadav'
          rel='noopener noreferrer'
        >
          <div className='bg-white text-neutral-950 m-1 rounded-md md:m-0 md:mx-4 p-4 md:py-8 gap-2 flex flex-col items-center justify-center hover:translate-y-2 hover:translate-x-2 hover:transition-all'>
            <PiCameraLight size={"6rem"} />
            <p className='text-4xl font-semibold'>{stats.photography}</p>
            <p className='text-xl text-center'>Clicks</p>
          </div>
        </a>
        <a
          className='w-1/2 md:w-1/4'
          target='_blank'
          href='https://github.com/pushkarydv'
          rel='noopener noreferrer'
        >
          <div className='bg-white text-neutral-950 m-1 rounded-md md:m-0 md:ml-4 p-4 md:py-8 gap-2 flex flex-col items-center justify-center hover:translate-y-2 hover:translate-x-2 hover:transition-all'>
            <PiMapTrifoldLight size={"6rem"} />
            <p className='text-4xl font-semibold'>{stats.countries}</p>
            <p className='text-xl text-center'>Reached</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default HomeStats;
