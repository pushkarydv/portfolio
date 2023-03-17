import React from "react";

export default function LatestTweet() {
  return (
    <div className="p-4 my-8">
      <div className="text-2xl text-center mb-4">My Latest tweet</div>
      <a
        href="https://tweeco.pushkaryadav.in"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src="https://tweeco.pushkaryadav.in/api/handle/pushkaryadavin"
          className="w-full md:w-[80%] lg:w-1/2 mx-auto"
        />
      </a>
      <p className="text-center">
        PS: i made this twitter integration tool -{" "}
        <a
          href="https://tweeco.pushkaryadav.in"
          className="no-underline text-sky-800"
        >
          TWEECO
        </a>
      </p>
    </div>
  );
}
