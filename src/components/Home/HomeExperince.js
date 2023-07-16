import React from "react";

function HomeExperince() {
  const expreince = [
    ["Software Engineering Intern", "Zura Ventures", "Apr 2023 - Present"],
    ["Web Lead", "Google Developer Students Club", "Sep 2022 - Present"],
    ["Open Source Developer", "HacktoberFest", "Oct 2022 - 1mo"],
    ["SWE", "Cosmofeed", "Nov 2022 - Dec 2022"],
  ];
  return (
    <div className='text-lime-950 bg-lime-200 py-[10vh] px-4 md:px-8 lg:px-[16%]'>
      <div className='text-4xl font-medium'>Experince</div>
      {expreince.map((expreince) => (
        <div className='bg-white text-lime-950 my-4 p-2 rounded-lg' key={expreince[0]}>
          <div className='text-2xl'>{expreince[0]}</div>
          <div className='text-lg'>{expreince[1]}</div>
          <div className='text-lg'>{expreince[2]}</div>
        </div>
      ))}
      <a
          href={"https://www.linkedin.com/in/pushkarydv" + "?ref=pushkaryadav.in"}
          rel='noopener noreferrer'
          className='text-center block text-inherit hover:scale-95 transition-all underline underline-offset-2 decoration-wavy font-semibold my-4'
          target='_blank'
        >
         See updated on my LinkedIn
        </a>
    </div>
    
  );
}

export default HomeExperince;
