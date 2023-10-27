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
    <div className='py-[10vh]  px-4 md:px-8 lg:px-[16%]'>
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
          <div className='border-2 text-black border-black m-1 rounded-xl md:m-0 md:mr-4 p-4 md:py-8 gap-2 flex flex-col items-center justify-center hover:bg-black hover:text-white hover:transition-all'>
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
          <div className='border-2 text-black border-black m-1 rounded-xl md:m-0 md:mr-4 p-4 md:py-8 gap-2 flex flex-col items-center justify-center hover:bg-black hover:text-white hover:transition-all'>
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
          <div className='border-2 text-black border-black m-1 rounded-xl md:m-0 md:mr-4 p-4 md:py-8 gap-2 flex flex-col items-center justify-center hover:bg-black hover:text-white hover:transition-all'>
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
          <div className='border-2 text-black border-black m-1 rounded-xl md:m-0 md:mr-4 p-4 md:py-8 gap-2 flex flex-col items-center justify-center hover:bg-black hover:text-white hover:transition-all'>
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
