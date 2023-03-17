import React, { useEffect } from "react";

export default function Stats() {
  /* ---- Custom Aimmation using IntersectionObserver : Styling in styles/customConfiguration file */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("intersection-show-left");
        } else {
          entry.target.classList.remove("intersection-show-left");
        }
      });
    });
    document
      .querySelectorAll(".intersection-flex")
      .forEach((el) => observer.observe(el));
  });
  return (
    <div className="relative lg:py-20" id="stats">
      <div className="absolute bg-indigo-200 blur-3xl -z-0 animate-circular"></div>
      <div className="relative z-10 p-4">
        <div className="text-2xl text-emerald-500 text-center">
          <span className="text-4xl font-semibold">Stats</span> <br />
          &apos;&apos; Some cool numbers &apos;&apos;
        </div>
        <div className="flex flex-row flex-wrap font-semibold justify-between w-full sm:w-8/12 md:w-full lg:w-10/12 mx-auto items-center text-center my-6 stats-intersection-flex">
          <div className="w-1/2 md:w-1/4 p-2 md:p-1 lg:p-4 intersection-flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.producthunt.com/@pushkaryadav"
              className="bg-emerald-200 px-2 py-6 rounded-xl block"
            >
              <span className="text-5xl md:text-6xl">🚀</span>
              <span className="text-center text-4xl md:text-5xl text-emerald-900 block mt-6 mb-4 font-bold">
                16+
              </span>
              <span className="text-2xl md:text-3xl">Products</span>
            </a>
          </div>
          <div className="w-1/2 md:w-1/4 p-2 md:p-1 lg:p-4 intersection-flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/pushkarydv"
              className="bg-fuchsia-200 px-2 py-6 rounded-xl block"
            >
              <span className="text-5xl md:text-6xl">👤</span>
              <span className="text-center text-4xl md:text-5xl text-fuchsia-900 block mt-6 mb-4 font-bold">
                15K+
              </span>
              <span className="text-2xl md:text-3xl"> Users</span>
            </a>
          </div>
          <div className="w-1/2 md:w-1/4 p-2 md:p-1 lg:p-4 intersection-flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.pexels.com/@pushkaryadav"
              className="bg-yellow-200 px-2 py-6 rounded-xl block"
            >
              <span className="text-5xl md:text-6xl">📸</span>
              <span className="text-center text-4xl md:text-5xl text-yellow-900 block mt-6 mb-4 font-bold">
                150K+
              </span>
              <span className="text-2xl md:text-3xl"> Pexels</span>
            </a>
          </div>
          <div className="w-1/2 md:w-1/4 p-2 md:p-1 lg:p-4 intersection-flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/pushkarydv"
              className="bg-pink-200 px-2 py-6 rounded-xl block"
            >
              <span className="text-5xl md:text-6xl">🌍</span>
              <span className="text-center text-4xl md:text-5xl text-pink-900 block mt-6 mb-4 font-bold">
                104+
              </span>
              <span className="text-2xl md:text-3xl"> Countries</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
