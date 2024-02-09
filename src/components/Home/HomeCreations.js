import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
const HomeCreations = () => {
  const productsSet1 = [
    [
      'Message Gator',
      'https://mg.writewrap.in/banner.png',
      'https://mg.writewrap.in',
      'Message Gator lets you amplify communication with message widgets, real-time integrations on Telegram, ratings, review-to-image transformations for social media, and seamless direct mail replies on any responses!',
      'ACTIVE',
      '',
    ],
    [
      'Mernifier',
      'https://mernifier.itsvg.in/banner.png',
      'https://mernifier.itsvg.in',
      "Trained on the latest data, it's your ultimate companion for daily development tasks.It elevates your development game. Generate test cases, squash bugs, and autocomplete efficiently. Trained on the latest data. Your go-to for MERN mastery!",
      'ACTIVE',
      '',
    ],
    [
      'Notez',
      'https://notez.writewrap.in/banner.png',
      'https://notez.writewrap.in',
      'Unlock heartfelt connections with Notez - the dynamic notes service. Create and share personalized messages effortlessly. Dive into a world of creativity with private, public, or vibrant picture notes. Instant, personalized messaging at your fingertips.',
      'ACTIVE',
      '',
    ],
    [
      'Anomm',
      'https://anomm.pushkaryadav.in/banner.png',
      'https://anomm.pushkaryadav.in',
      'Anomm is a free service to deliver anonymous messages directly to your telegram via bot. this can be integrated anywhere community reviews, confession pages, personal thoughts and a lot more.',
      'ACTIVE',
      '',
    ],
    [
      'Tweeco',
      'https://tweeco.pushkaryadav.in/images/tweeco_banner.png',
      'https://tweeco.pushkaryadav.in',
      "Tweets ✒️ shouldn't be limited to twitter🐧 : Let's integrate them anywhere fully rendered✨ with this simple API.",
      'INACTIVE',
      'Tweeco hit a max of 73K requests and was shut down due to twitter api being fully paid',
    ],
  ];
  const productsSet2 = [
    [
      'Markdown Badges',
      'https://mdb.pushkaryadav.in/banner.png',
      'https://mdb.pushkaryadav.in',
      'Super Cool SVG based Badges for your products - Socials/ Languages/ Frameworks/ Libraries and more. Get generated markdown code, preview and a change badge style within single click',
      'ACTIVE',
      '',
    ],
    [
      'IBOX',
      'https://ibox.pushkaryadav.in/banner.png',
      'https://ibox.pushkaryadav.in',
      'All in one solution for your all needs of insta. Download Posts, Reels, IGTV videos and analyze any public profile for its followers, following, rand and a whole lot of data.',
      'INACTIVE',
      'API Failure! Will fix as soon as i get time',
    ],
    [
      'NextOS',
      'https://nextos.pushkaryadav.in/banner.png',
      'https://nextos.pushkaryadav.in',
      'A Modern Operating System design built into a Website using Next JS and Tailwind CSS.',
      'ACTIVE',
      '',
    ],
    [
      'Payon',
      'https://payon.pushkaryadav.in/banner.png',
      'https://payon.pushkaryadav.in',
      'Payon is a template website to show you a better approach of making payments having a simple and interactive interface.This is a prototype website',
      'ACTIVE',
      '',
    ],
    [
      'SummerX',
      'https://summerx.itsvg.in/webimg.png',
      'https://summerx.itsvg.in',
      'Through SummerX we are on a mission 🚀 to save lives of people who suffer from heat waves 🍃, excessive heat 🥵, illness and more. This is a prototype website.',
      'ACTIVE',
      '',
    ],
    [
      'APIX',
      'https://apix.pushkaryadav.in/banner.png',
      'https://apix.pushkaryadav.in',
      "APIX - a collection of 1400+ apis and 50+ categories of api's",
      'ACTIVE',
      '',
    ],
    [
      'COLPIC',
      'https://colpic.pushkaryadav.in/banner.jpg',
      'https://colpic.pushkaryadav.in',
      'Find Perfect colors, gradients and more for your Amazing products, Posters or Designs, Just copy and paste in single click.',
      'ACTIVE',
      '',
    ],
    [
      'Web Games',
      'https://wg.pushkaryadav.in/banner.png',
      'https://wg.pushkaryadav.in',
      'Play some of the on the go games in a minimal way',
      'ACTIVE',
      '',
    ],
    [
      'PRM',
      'https://prm.pushkaryadav.in/banner.png',
      'https://prm.pushkaryadav.in',
      'Create amazing readme for your products, profile from amazing templates and custom too without writing markdown. Explaining everything Screenshots, URL , About, Insights, Local System Guides and a lot more.',
      'ACTIVE',
      '',
    ],
    [
      'Web Searcher',
      'https://websearcher.pushkaryadav.in/banner.png',
      'https://websearcher.pushkaryadav.in',
      'Generate meta tags in some clicks and Rank top in search engines.You can generate Open graph, twitter and basic meta tags just in one click and a lot of adjustments in them.',
      'ACTIVE',
      '',
    ],
  ];

  const ProductContainer = (props) => {
    return (
      <div className='max-w-3xl grid grid-cols-12 gap-4 bg-white mx-auto my-8 p-4 border shadow-md rounded-xl border-violet-900/20 shadow-violet-900/5'>
        <img
          src={props.banner}
          className='rounded-xl w-full col-span-12 sm:col-span-5'
          alt=''
        />
        <div className='col-span-12 sm:col-span-7'>
          <div className='text-2xl font-semibold'>{props.name}</div>
          <p>{props.description}</p>
          <a
            href={props.href}
            rel='noopener noreferrer'
            className='no-underline px-3 py-1 flex flex-row  justify-start items-center gap-2 flex-wrap w-fit mt-4 border shadow-sm shadow-black/20 text-black  rounded-full transition-all active:scale-95'
            target='_blank'
          >
            {props.href.includes('https://')
              ? props.href.split('https://')[1]
              : props.href}
            <FaAngleRight />
          </a>
          {props.status === 'INACTIVE' && (
            <div className='text-red-500 text-sm mt-2'>{props.extraText}</div>
          )}
        </div>
      </div>
    );
  };
  return (
    <div className='min-h-[80vh] bg-gradient-to-b from-sky-100 to-fuchsia-50 py-[20vh] p-4'>
      <div className='text-4xl md:text-6xl text-center font-serif font-semibold text-[#404642]'>
        Creations
      </div>

      {productsSet1.map((project, index) => (
        <ProductContainer
          key={index}
          name={project[0]}
          banner={project[1]}
          href={project[2]}
          description={project[3]}
          status={project[4]}
          extraText={project[5]}
        />
      ))}
      <details>
        <summary className='w-fit mx-auto bg-white border text-xl list-none cursor-pointer py-2 px-4 rounded-lg'>
          View More Products: A lot more
        </summary>

        {productsSet2.map((project, index) => (
          <ProductContainer
            key={index}
            name={project[0]}
            banner={project[1]}
            href={project[2]}
            description={project[3]}
            status={project[4]}
            extraText={project[5]}
          />
        ))}

        <a
          href={`https://github.com/pushkarydv?ref=pushkaryadav.in`}
          rel='noopener noreferrer'
          className='text-center block text-inherit hover:scale-95 transition-all underline underline-offset-2 decoration-wavy font-semibold my-4'
          target='_blank'
        >
          Some might not be here visit my GitHub for more
        </a>
      </details>
    </div>
  );
};

export default HomeCreations;
