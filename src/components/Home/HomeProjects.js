import React from "react";
import {
  PiArrowArcRight,
  PiArrowElbowRightUp,
  PiArrowUpRight,
  PiArrowUpRightBold,
} from "react-icons/pi";

function HomeProjects() {
  const projectsSet1 = [
    [
      "Anomm",
      "https://anomm.pushkaryadav.in/banner.png",
      "https://anomm.pushkaryadav.in",
      "Anomm is a free service to deliver anonymous messages directly to your telegram via bot. this can be integrated anywhere community reviews, confession pages, personal thoughts and a lot more.",
      "ACTIVE",
      "",
    ],
    [
      "Tweeco",
      "https://tweeco.pushkaryadav.in/images/tweeco_banner.png",
      "https://tweeco.pushkaryadav.in",
      "Tweets ✒️ shouldn't be limited to twitter🐧 : Let's integrate them anywhere fully rendered✨ with this simple API.",
      "INACTIVE",
      "Tweeco hit a max of 73K requests and was shut down due to twitter api being fully paid",
    ],
  ];
  const projectsSet2 = [
    [
      "Markdown Badges",
      "https://mdb.pushkaryadav.in/banner.png",
      "https://mdb.pushkaryadav.in",
      "Super Cool SVG based Badges for your Projects - Socials/ Languages/ Frameworks/ Libraries and more. Get generated markdown code, preview and a change badge style within single click",
      "ACTIVE",
      "",
    ],
    [
      "IBOX",
      "https://ibox.pushkaryadav.in/banner.png",
      "https://ibox.pushkaryadav.in",
      "All in one solution for your all needs of insta. Download Posts, Reels, IGTV videos and analyze any public profile for its followers, following, rand and a whole lot of data.",
      "INACTIVE",
      "API Failure! Will fix as soon as i get time",
    ],
    [
      "NextOS",
      "https://nextos.pushkaryadav.in/banner.png",
      "https://nextos.pushkaryadav.in",
      "A Modern Operating System design built into a Website using Next JS and Tailwind CSS.",
      "ACTIVE",
      "",
    ],
    [
      "Payon",
      "https://payon.pushkaryadav.in/banner.png",
      "https://payon.pushkaryadav.in",
      "Payon is a template website to show you a better approach of making payments having a simple and interactive interface.This is a prototype website",
      "ACTIVE",
      "",
    ],
    [
      "SummerX",
      "https://summerx.itsvg.in/webimg.png",
      "https://summerx.itsvg.in",
      "Through SummerX we are on a mission 🚀 to save lives of people who suffer from heat waves 🍃, excessive heat 🥵, illness and more. This is a prototype website.",
      "ACTIVE",
      "",
    ],
    [
      "APIX",
      "https://apix.pushkaryadav.in/banner.png",
      "https://apix.pushkaryadav.in",
      "APIX - a collection of 1400+ apis and 50+ categories of api's",
      "ACTIVE",
      "",
    ],
    [
      "COLPIC",
      "https://colpic.pushkaryadav.in/banner.jpg",
      "https://colpic.pushkaryadav.in",
      "Find Perfect colors, gradients and more for your Amazing Projects, Posters or Designs, Just copy and paste in single click.",
      "ACTIVE",
      "",
    ],
    [
      "Web Games",
      "https://wg.pushkaryadav.in/banner.png",
      "https://wg.pushkaryadav.in/",
      "Play some of the on the go games in a minimal way",
      "ACTIVE",
      "",
    ],
    [
      "PRM",
      "https://prm.pushkaryadav.in/banner.png",
      "https://prm.pushkaryadav.in/",
      "Create amazing readme for your projects, profile from amazing templates and custom too without writing markdown. Explaining everything Screenshots, URL , About, Insights, Local System Guides and a lot more.",
      "ACTIVE",
      "",
    ],
    [
      "Web Searcher",
      "https://websearcher.pushkaryadav.in/banner.png",
      "https://websearcher.pushkaryadav.in/",
      "Generate meta tags in some clicks and Rank top in search engines.You can generate Open graph, twitter and basic meta tags just in one click and a lot of adjustments in them.",
      "ACTIVE",
      "",
    ],
  ];
  return (
    <div className='text-violet-950 bg-violet-300 py-[10vh] px-4 md:px-8 lg:px-[16%]'>
      <div className='text-4xl font-medium'>Projects</div>
      <p className='text-sm my-2'>
        Not actively making or mainitining but will do(time issues) here are
        some
      </p>

      {projectsSet1.map((project) => (
        <div className='flex flex-col-reverse md:flex-row jutify-center gap-4 p-4 rounded-md my-2' key={project[0]}>
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
              href={project[1] + "?ref=pushkaryadav.in"}
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
              alt="Pushkar' Profile Pic with some boxes"
            />
          </div>
        </div>
      ))}
      <details>
        <summary className='bg-white cursor-pointer p-2 rounded-lg'>
          View More: A lot more
        </summary>
        {projectsSet2.map((project) => (
          <div className='flex flex-col-reverse md:flex-row jutify-center gap-4 p-4 rounded-md my-2'  key={project[0]}>
            <div className='w-full md:w-2/3'>
              <div className='text-2xl font-semibold underline'>
                {project[0]}
              </div>
              <div className='text-base'>{project[3]}</div>
              <div className='block w-fit bg-sky-300 text-black py-1 px-3 text-sm rounded-full'>
                {project[4]}
              </div>
              {project[5] != "" && (
                <div className='font-semibold text-black'>{project[5]}</div>
              )}
              <a
                href={project[1] + "?ref=pushkaryadav.in"}
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
                alt="Pushkar' Profile Pic with some boxes"
              />
            </div>
          </div>
        ))}
        <a
          href={"http://github.com/pushkarydv" + "?ref=pushkaryadav.in"}
          rel='noopener noreferrer'
          className='text-center block text-inherit hover:scale-95 transition-all underline underline-offset-2 decoration-wavy font-semibold my-4'
          target='_blank'
        >
          Some might not be here visit my GitHub for more
        </a>
      </details>
    </div>
  );
}

export default HomeProjects;
