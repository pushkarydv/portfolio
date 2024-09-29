import React from 'react';

const HomeStats = () => {
  const stats = {
    products: '20+',
    users: '25k+',
    photography: '300k+',
    countries: '104+',
  };
  return (
    <div className='min-h-[60vh] bg-gradient-to-b from-violet-100 to-sky-100 py-[20vh] relative'>
      <img
        src='/assets/eyes-svgrepo-com.svg'
        className='absolute top-0 right-[10%] w-32 -rotate-[15deg] z-0'
        alt=''
      />
      <div className='w-[90%] md:w-[70%] p-4 md:p-8 bg-white mx-auto border shadow-md rounded-2xl border-violet-900/20 shadow-violet-900/5'>
        <p className='text-2xl md:text-4xl text-center font-serif font-semibold'>
          Stats
        </p>
        <div className='flex flex-row justify-center items-center flex-wrap flex-shrink-0 mt-6'>
          <a
            className='w-1/2 md:w-1/4'
            target='_blank'
            href='https://www.producthunt.com/@pushkaryadav'
            rel='noopener noreferrer'
          >
            <div className='m-1 md:m-0 md:mr-4 p-4 md:py-8 gap-2 flex flex-col items-center justify-center transition-all'>
              <p className='text-3xl lg:text-4xl xl:text-5xl text-black/90 font-semibold'>
                {stats.products}
              </p>
              <p className='text-base md:text-lg text-black/70 text-center'>
                Products <br />
                Launched
              </p>
            </div>
          </a>
          <a
            className='w-1/2 md:w-1/4'
            target='_blank'
            href='https://github.com/pushkarydv'
            rel='noopener noreferrer'
          >
            <div className='md:border-l m-1 md:m-0 md:mr-4 p-4 md:py-8 gap-2 flex flex-col items-center justify-center transition-all'>
              <p className='text-3xl lg:text-4xl xl:text-5xl text-black/90 font-semibold'>
                {stats.users}
              </p>
              <p className='text-base md:text-lg text-black/70 text-center'>
                Users <br />
                Worldwide
              </p>
            </div>
          </a>
          <a
            className='w-1/2 md:w-1/4'
            target='_blank'
            href='https://www.pexels.com/@pushkaryadav'
            rel='noopener noreferrer'
          >
            <div className='md:border-l m-1 md:m-0 md:mr-4 p-4 md:py-8 gap-2 flex flex-col items-center justify-center transition-all'>
              <p className='text-3xl lg:text-4xl xl:text-5xl text-black/90 font-semibold'>
                {stats.photography}
              </p>
              <p className='text-base md:text-lg text-black/70 text-center'>
                Clicks <br />
                @pexels
              </p>
            </div>
          </a>
          <a
            className='w-1/2 md:w-1/4'
            target='_blank'
            href='https://github.com/pushkarydv'
            rel='noopener noreferrer'
          >
            <div className='md:border-l m-1 md:m-0 md:mr-4 p-4 md:py-8 gap-2 flex flex-col items-center justify-center transition-all'>
              <p className='text-3xl lg:text-4xl xl:text-5xl text-black/90 font-semibold'>
                {stats.countries}
              </p>
              <p className='text-base md:text-lg text-black/70 text-center'>
                Country <br />
                Users
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeStats;
