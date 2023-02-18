import React from "react";

export default function About() {
  return (
    <div id="about" className="p-4">
      <div className="content-container w-[95] lg:w-1/2 mx-auto">
        <div className="rounded-2xl bg-yellow-400/40 p-4 backdrop-blur-lg relative mt-24 mb-12 lg:mb-24">
          <img
            src="/images/profile.jpg"
            className="rounded-full w-36 md:w-44 lg:w-56 absolute top-0 -translate-y-1/2 right-0 lg:translate-x-1/2 ring-4 ring-yellow-400"
            alt=""
          />
          <div className="text-4xl md:text-5xl text-yellow-800 font-semibold my-3 lg:my-2">
            About me
          </div>
          <div className="text-base md:text-xl lg:text-2xl">
            I am Pushkar Yadav a Programmer from India.
            <br />I have tried a lot of things mostly as hoppy like UI/UX,
            Photography, LAMP Stack, MERN stack, Blogging, Ethical Practices of
            Cybersecurity but currently doing Full Stack Web development and
            built some fantastic websites.
            <div className="my-4 flex flex-row gap-4">
              <a
                className="bg-yellow-900 text-white transition-all hover:scale-95 font-semibold py-2 px-4 rounded-lg cursor-pointer hover:shadow-md hover:shadow-black/10"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1BSLZwSJMuTkBmTaAXLB_shqVQVCTahEb/view?usp=sharing"
              >
                Resume
              </a>
              <a
                className="bg-white transition-all hover:scale-95 font-semibold py-2 px-4 rounded-lg cursor-pointer hover:shadow-md hover:shadow-black/10"
                href="#contact"
              >
                Contact
              </a>
            </div>
            <span className="animate-pulse">
              There is a lot more ⚡ Scroll Down!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
