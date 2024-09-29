import React from "react";
import { ExternalLink, SectionTitle } from "../elements/basics";

export default function Achievements() {
  return (
    <section className="mb-12">
      <SectionTitle>Numbers and Achievements I&apos;m Proud Of</SectionTitle>
      <ul className="list-disc ml-6 space-y-3">
        <li>~ 20+ total products made.</li>
        <li>~ 25k+ users using my products.</li>
        <li>~ 100k requests per month on server.</li>
        <li>
          ~ 350k+ views on pexels community photos and being used in news
          articles like indiatimes.
        </li>
        <li>
          LeanIn Hack IGDTUW 5.0 Top Team: Worked on{" "}
          <ExternalLink href="https://sakhi.vercel.app/dashboard">
            {" "}
            Sakhi app
          </ExternalLink>{" "}
          for empowering women and promoting gender equality. (Feb 2024)
        </li>
        <li>
          HackJNU 3.0 Finalists: Innovative UN SDG-focused app addressing
          sustainable development goals. (Jan 2024)
        </li>
        <li>
          Top 5 - IITB Techfest: Developed{" "}
          <ExternalLink href={"https://mernifier.itsvg.in/"}>
            MERNifier
          </ExternalLink>
          : a MERN Stack assistant powered by Pinecone, LangChain, OpenAI, etc.
          (Dec 2023)
        </li>
        <li>Hackathon Winner Organised by Major League Hacking. (June 2022)</li>
        <li>
          5th Product of the day{" "}
          <ExternalLink href="https://mdb.pushkaryadav.in">MDB</ExternalLink>{" "}
          (mdb.pushkaryadav.in) recognized by ProductHunt. (March 2021)
        </li>
      </ul>
    </section>
  );
}
