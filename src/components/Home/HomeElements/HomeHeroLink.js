import React from "react";

import { refrences } from "../../../../data/links";

export const HomeHeroLink = (props) => {
  return (
    <a
      href={`${props.href}?ref=${refrences.website}`}
      rel='noopener noreferrer'
      className='no-underline text-inherit hover:scale-95 transition-all'
      target='_blank'
    >
      {props.children}
    </a>
  );
};
