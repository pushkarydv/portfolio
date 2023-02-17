import React from "react";

export default function TechStack() {
  return (
    <div className="p-4">
      <div className="text-center text-3xl">My TechStack</div>
      <div className="w-full md:w-[60%] lg:w-[50%] mx-auto text-lg">
        Languages
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {[
            [
              "JavaScript",
              "https://img.shields.io/badge/-JavaScript-242b2e?style=for-the-badge&logo=javascript",
            ],
            [
              "CSS3",
              "https://img.shields.io/badge/-CSS3-242b2e?style=for-the-badge&logo=css3",
            ],
            [
              "HTML5",
              "https://img.shields.io/badge/-HTML5-242b2e?style=for-the-badge&logo=html5",
            ],
            [
              "Markdown",
              "https://img.shields.io/badge/-Markdown-242b2e?style=for-the-badge&logo=markdown",
            ],
            [
              "PHP",
              "https://img.shields.io/badge/php-242b2e?logo=php&logoColor=white&style=for-the-badge",
            ],
          ].map(([name, link]) => (
            <img src={link} key={name} alt={name} loading="lazy" />
          ))}
        </div>
        JS Framework/Library
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {[
            [
              "NextJS",
              "https://img.shields.io/badge/-NextJS-242b2e?style=for-the-badge&logo=next.js",
            ],
            [
              "React",
              "https://img.shields.io/badge/-ReactJS-242b2e?style=for-the-badge&logo=react",
            ],
            [
              "Express.js",
              "https://img.shields.io/badge/express.js-242b2e.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge",
            ],
          ].map(([name, link]) => (
            <img src={link} key={name} alt={name} loading="lazy" />
          ))}
        </div>
        CSS Framework/Library/Pre-processors
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {[
            [
              "TailwindCSS",
              "https://img.shields.io/badge/-TailwindCSS-242b2e?style=for-the-badge&logo=tailwind-css",
            ],
            [
              "Bootstrap",
              "https://img.shields.io/badge/-Bootstrap-242b2e?style=for-the-badge&logo=bootstrap",
            ],
            [
              "MaterializeCSS",
              "https://img.shields.io/badge/-MaterializeCSS-242b2e?style=for-the-badge&logo=MaterializeCSS",
            ],
          ].map(([name, link]) => (
            <img src={link} key={name} alt={name} loading="lazy" />
          ))}
        </div>
        Design/Visual Tools
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {[
            [
              "Figma",
              "https://img.shields.io/badge/-Figma-242b2e?style=for-the-badge&logo=figma",
            ],
            [
              "Adobe Lightroom",
              "https://img.shields.io/badge/-Adobe%20Lightroom-242b2e?style=for-the-badge&logo=adobe%20lightroom",
            ],
            [
              "Canva",
              "https://img.shields.io/badge/-Canva-242b2e?style=for-the-badge&logo=canva",
            ],
          ].map(([name, link]) => (
            <img src={link} key={name} alt={name} loading="lazy" />
          ))}
        </div>
        Database/State
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {[
            [
              "MySQL",
              "https://img.shields.io/badge/-Mysql-242b2e?style=for-the-badge&logo=Mysql",
            ],
            [
              "MongoDB",
              "https://img.shields.io/badge/MongoDB-242b2e.svg?logo=mongodb&logoColor=white&style=for-the-badge",
            ],
            [
              "Firebase",
              "https://img.shields.io/badge/Firebase-242b2e.svg?logo=firebase&logoColor=white&style=for-the-badge",
            ],
          ].map(([name, link]) => (
            <img src={link} key={name} alt={name} loading="lazy" />
          ))}
        </div>
        Backend
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {[
            [
              "NodeJS",
              "https://img.shields.io/badge/-NodeJS-242b2e?style=for-the-badge&logo=node.js&logoColor=pink",
            ],
            [
              "Express.js",
              "https://img.shields.io/badge/-ExpressJS-242b2e?style=for-the-badge&logo=express",
            ],
            [
              "API",
              "https://img.shields.io/badge/-API-242b2e?style=for-the-badge&logo=fastapi",
            ],
          ].map(([name, link]) => (
            <img src={link} key={name} alt={name} loading="lazy" />
          ))}
        </div>
        Web Hosting
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {[
            [
              "Vercel",
              "https://img.shields.io/badge/-Vercel-242b2e?style=for-the-badge&logo=vercel",
            ],
            [
              "Heroku",
              "https://img.shields.io/badge/-Heroku-242b2e?style=for-the-badge&logo=heroku",
            ],
            [
              "Github Pages",
              "https://img.shields.io/badge/-GitHub%20Pages-242b2e?style=for-the-badge&logo=github",
            ],
            [
              "Netlify",
              "https://img.shields.io/badge/-Netlify-242b2e?style=for-the-badge&logo=netlify",
            ],
          ].map(([name, link]) => (
            <img src={link} key={name} alt={name} loading="lazy" />
          ))}
        </div>
        Version Control
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {[
            [
              "Git",
              "https://img.shields.io/badge/-Git-242b2e?style=for-the-badge&logo=git",
            ],
            [
              "GitHub",
              "https://img.shields.io/badge/-GitHub-242b2e?style=for-the-badge&logo=github",
            ],
          ].map(([name, link]) => (
            <img src={link} key={name} alt={name} loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  );
}
