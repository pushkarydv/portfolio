import React from "react";
import { about } from "../../../data/webconfig";

function HomeAbout() {
  return (
    <div className='text-neutral-800 bg-neutral-50 py-[10vh] px-4 md:px-8 lg:px-[16%]'>

      {about.content && about.content != "" && (
        <p className='text-xl md:text-2xl'>{about.content}</p>
      )}

      {about.tag && about.tag != "" && (
        <span className='no-underline text-sm bg-teal-900 text-white inline-block p-2 rounded-lg my-2'>
          {about.tag}
        </span>
      )}
      
    </div>
  );
}

export default HomeAbout;
