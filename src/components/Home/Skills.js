import React from "react";
import { SectionTitle } from "../elements/basics";

export default function Skills() {
  return (
    <section className="mb-12">
      <SectionTitle>Skills</SectionTitle>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Languages, Frameworks:</h3>
          <p>
            Next.Js, React.Js, Tailwind CSS, MongoDB, Firebase, Pinecone,
            Langchain, Prisma, Figma, Bootstrap, Git/Github/NPM and all other
            base tech of all these frameworks mentioned.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Other:</h3>
          <p>
            Leadership (GDSC Lead 1 Yr, GDSC Web Dev lead 1 Yr, Technocryptics
            Web Lead 1Yr), Collaborative Work (hackathons ^7x, SaaS)
          </p>
        </div>
        <p className="italic">
          Most of the projects I&apos;ve made and work I do is towards making
          something interesting and useful for everyone which hasn&apos;t been
          done before or in this way at least.
        </p>
      </div>
    </section>
  );
}
