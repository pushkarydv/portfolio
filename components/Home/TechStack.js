import React from "react";
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
  return (
    <div className="p-4">
      <div className="text-center text-3xl">My TechStack</div>
      <div className="w-full md:w-[60%] lg:w-[50%] mx-auto text-lg">
        Languages
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {Languages.map(([name, link]) => (
            <img src={link} key={name} alt={name} loading="lazy" />
          ))}
        </div>
        JS Framework/Library
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {JS.map(([name, link]) => (
            <img src={link} key={name} alt={name} loading="lazy" />
          ))}
        </div>
        CSS Framework/Library/Pre-processors
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {CSS.map(([name, link]) => (
            <img src={link} key={name} alt={name} loading="lazy" />
          ))}
        </div>
        Design/Visual Tools
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {Design.map(([name, link]) => (
            <img src={link} key={name} alt={name} loading="lazy" />
          ))}
        </div>
        Database/State
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {Database.map(([name, link]) => (
            <img src={link} key={name} alt={name} loading="lazy" />
          ))}
        </div>
        Backend
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {Backend.map(([name, link]) => (
            <img src={link} key={name} alt={name} loading="lazy" />
          ))}
        </div>
        Web Hosting
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {WebHosting.map(([name, link]) => (
            <img src={link} key={name} alt={name} loading="lazy" />
          ))}
        </div>
        Version Control
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {VersionControl.map(([name, link]) => (
            <img src={link} key={name} alt={name} loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  );
}
