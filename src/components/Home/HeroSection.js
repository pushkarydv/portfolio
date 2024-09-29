import React from "react";
import { ExternalLink } from "../elements/basics";

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 mb-12">
      <div>
        <h1 className="text-3xl font-bold mb-4">Hello, I am Pushkar Yadav</h1>
        <p className="text-xl mb-4">
          Software Engineer, I work on making absolutely beautiful Web apps, AI
          and little bit of Research.
        </p>
        <ExternalLink href="https://pushkarydv.github.io/pushkarydv/resume.pdf">
          View Resume
        </ExternalLink>
      </div>
      <img
        src="https://github.com/pushkarydv.png"
        className="w-40 h-40 rounded-lg shadow-lg ring-2 ring-gray-300"
        alt="Pushkar Yadav"
        loading="lazy"
      />
    </div>
  );
}
