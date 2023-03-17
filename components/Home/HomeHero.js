import React, { useEffect } from "react";
import { Github, LinkedIn, Twitter } from "../svgs";
export default function Hero() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("intersection-show-bottom-up");
        } else {
          entry.target.classList.remove("intersection-show-bottom-up");
        }
      });
    });
    document
      .querySelectorAll(".intersection-flex-bottom-up")
      .forEach((el) => observer.observe(el));
  });
  return (
    <>
      <div className="min-h-[90vh] flex flex-col justify-center items-center">
        <div className="transition-all my-4 mx-2 min-w-fit text-6xl sm:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          <p className="text-emerald-900  intersection-flex-bottom-up">
            Hey.
            <span className="inline-block w-fit scale-90 animate-wobble">
              👋
            </span>
          </p>
          <p className="mt-2 font-medium text-slate-300  intersection-flex-bottom-up">
            I&apos;m{" "}
          </p>
          <p className="mt-2 font-medium text_shadows  intersection-flex-bottom-up">
            Pushkar
          </p>
          <div className="flex flex-row gap-4 mt-6  intersection-flex-bottom-up">
            <a
              href="https://www.linkedin.com/in/pushkarydv"
              rel="noopener noreferrer"
              target="_blank"
              className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center bg-blue-200/80 text-blue-800 rounded-full ring-2 ring-blue-400"
            >
              <LinkedIn className="transition-all ease-in-out w-8 h-8 md:w-10 md:hover:w-12 md:h-10 md:hover:h-12" />
            </a>
            <a
              href="http://github.com/pushkarydv"
              rel="noopener noreferrer"
              target="_blank"
              className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center bg-slate-200/80 text-slate-800 rounded-full ring-2 ring-slate-400"
            >
              <Github className="transition-all ease-in-out w-8 h-8 md:w-10 md:hover:w-12 md:h-10 md:hover:h-12" />
            </a>
            <a
              href="https://twitter.com/pushkaryadavin"
              rel="noopener noreferrer"
              target="_blank"
              className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center bg-sky-200/80 text-sky-800 rounded-full ring-2 ring-sky-400"
            >
              <Twitter className="transition-all ease-in-out w-8 h-8 md:w-10 md:hover:w-12 md:h-10 md:hover:h-12" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
