import React from "react";

import { projectsSet1, projectsSet2 } from "../../../data/projects";

import { refrences, socials } from "../../../data/links";
import { HomeProjectContainer } from "./HomeElements/HomeProjectContainer";

function HomeProjects() {
  return (
    <div className='text-violet-950 bg-violet-300 py-[10vh] px-4 md:px-8 lg:px-[16%]'>
      <div className='text-4xl font-medium'>Projects</div>
      <p className='text-sm my-2'>
        Not actively making or mainitining but will do (time issues) here are
        some
      </p>

      {projectsSet1.map((project) => (
        <HomeProjectContainer project={project} key={project[0]} />
      ))}

      <details>
        <summary className='bg-white cursor-pointer p-2 rounded-lg'>
          View More: A lot more
        </summary>

        {projectsSet2.map((project) => (
          <HomeProjectContainer project={project} key={project[0]} />
        ))}

        <a
          href={`${socials.github}?ref=${refrences.website}`}
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
