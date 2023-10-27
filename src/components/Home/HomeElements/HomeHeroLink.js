import React from "react";

import { refrences } from "../../../../data/links";

export const HomeHeroLink = (props) => {
  return (
    <a
      href={`${props.href}?ref=${refrences.website}`}
      rel='noopener noreferrer'
      className='no-underline p-1 border-2 border-white bg-white text-black  rounded-full transition-all active:scale-95'
      target='_blank'
    >
      {props.children}
    </a>
  );
};
