import React, { useEffect } from "react";
import {
  Backend,
  CSS,
  Database,
  Design,
  JS,
  Languages,
  VersionControl,
  WebHosting,
} from "../data/techstack";

export default function TechStack() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("intersection-show-left-3d");
        } else {
          entry.target.classList.remove("intersection-show-left-3d");
        }
      });
    });
    document
      .querySelectorAll(".intersection-flex-3d")
      .forEach((el) => observer.observe(el));
  });
  return (
    <div className="p-4">
      <div className="text-center text-3xl">My TechStack</div>
      <div className="w-full md:w-[60%] lg:w-[50%] mx-auto text-lg">
        Languages
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {Languages.map(([name, link]) => (
            <img
              src={link}
              key={name}
              alt={name}
              loading="lazy"
              className="intersection-flex-3d"
            />
          ))}
        </div>
        JS Framework/Library
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {JS.map(([name, link]) => (
            <img
              src={link}
              key={name}
              alt={name}
              loading="lazy"
              className="intersection-flex-3d"
            />
          ))}
        </div>
        CSS Framework/Library/Pre-processors
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {CSS.map(([name, link]) => (
            <img
              src={link}
              key={name}
              alt={name}
              loading="lazy"
              className="intersection-flex-3d"
            />
          ))}
        </div>
        Design/Visual Tools
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {Design.map(([name, link]) => (
            <img
              src={link}
              key={name}
              alt={name}
              loading="lazy"
              className="intersection-flex-3d"
            />
          ))}
        </div>
        Database/State
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {Database.map(([name, link]) => (
            <img
              src={link}
              key={name}
              alt={name}
              loading="lazy"
              className="intersection-flex-3d"
            />
          ))}
        </div>
        Backend
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {Backend.map(([name, link]) => (
            <img
              src={link}
              key={name}
              alt={name}
              loading="lazy"
              className="intersection-flex-3d"
            />
          ))}
        </div>
        Web Hosting
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {WebHosting.map(([name, link]) => (
            <img
              src={link}
              key={name}
              alt={name}
              loading="lazy"
              className="intersection-flex-3d"
            />
          ))}
        </div>
        Version Control
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {VersionControl.map(([name, link]) => (
            <img
              src={link}
              key={name}
              alt={name}
              loading="lazy"
              className="intersection-flex-3d"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
