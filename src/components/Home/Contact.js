import React from "react";

import { socials } from "@/utils/data";
import { HomeHeroLink, SectionTitle } from "../elements/basics";

import { PiGithubLogo } from "react-icons/pi";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";

export default function Contact() {
  return (
    <section className="mb-12">
      <SectionTitle>Contact Me</SectionTitle>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="flex flex-wrap gap-4">
            <HomeHeroLink href={socials.github}>
              <PiGithubLogo size={"1.2rem"} /> pushkarydv
            </HomeHeroLink>
            <HomeHeroLink href={socials.linkedin}>
              <CiLinkedin size={"1.2rem"} /> pushkarydv
            </HomeHeroLink>
            <HomeHeroLink href={socials.instagram}>
              <CiInstagram size={"1.2rem"} /> pushkaryadav_
            </HomeHeroLink>
            <HomeHeroLink href={socials.twitter}>
              <CiTwitter size={"1.2rem"} /> pushkaryadavin
            </HomeHeroLink>
          </div>
        </div>
        {/* Iframe built from Message Gator Widget (build yours: https://mg.writewrap.in/) */}
        <div className="w-full md:w-1/2">
          <iframe
            src="https://mg.writewrap.in/widget/clrbyc3ie0000j8lc9zdhosjk"
            className="w-full min-h-[32rem] border-0 rounded-lg ring-1 ring-black/10 "
            title="Contact Form"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
