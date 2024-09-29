import React from "react";

import { products, socials, tests } from "@/utils/data";
import { ExternalLink, SectionTitle } from "../elements/basics";

export default function WhatIBuilt() {
  return (
    <section className="mb-12">
      <SectionTitle>Few Things I&apos;ve Built</SectionTitle>
      <ul className="space-y-4 ml-6 list-disc">
        <li>
          <ExternalLink href="https://mg.writewrap.in">
            Message Gator
          </ExternalLink>{" "}
          : Built using NextJs, Telegram API, MongoDB is a realtime message
          integration Saas that offers message widget integration into websites
          with a lot of features inside.
        </li>
        <li>
          <ExternalLink href={"http://notez.writewrap.in/"}>Notez</ExternalLink>{" "}
          : Built on firebase this is a fast note creations and as link/image
          sharing service with beautifully crafted ui of notes being shared.
          this is also integrated as review sharing inside Message Gator.
        </li>
        <li>
          <ExternalLink href="https://ai-speed.vercel.app/">
            Fast Rag
          </ExternalLink>{" "}
          : This is built on Pinecone, Groq Laama and Open AI embeedings
          specifically trained on NextJs, TailwindCSS, Shadcn, JS, Node,
          Acternity UI, html, css from publically available (custom scrapper)
          data surapssing available LLMs in terms of accuracy. offers a speed of
          around ~1200 tokens/second and estimated RAG time of ~3s.
        </li>
        <li>
          <ExternalLink href="http://labs.writewrap.in/">
            WriteWrap Labs
          </ExternalLink>{" "}
          : I&apos;ve created some tools build on recent AI tech from UI
          Generators, Large Context Data gathering and structuring, Reader
          helpers, RAG and continiously researching, I usually make pages about
          these on labs website. + WriteWrap Labs also got recognized by
          Microsoft For Startups(though it&apos;s not large, but i&apos;ve built
          tools which use credits from MSFT Startups access).
        </li>
      </ul>

      <details className="mt-6">
        <summary className="text-orange-600 underline cursor-pointer font-semibold">
          View all others
        </summary>
        <ul className="list-disc ml-6 mt-4 space-y-3">
          {products.map((product, index) => (
            <li key={index}>
              <ExternalLink href={product[1]}>{product[0]}</ExternalLink>
              <p className="mt-1">{product[2]}</p>
              {product[3] === "INACTIVE" && (
                <p className="text-red-500 mt-1">Inactive: {product[4]}</p>
              )}
            </li>
          ))}
        </ul>
      </details>

      <details className="mt-6">
        <summary className="text-orange-600 underline cursor-pointer font-semibold">
          currently testing out
        </summary>
        <ul className="list-disc ml-6 mt-4 space-y-3">
          {tests.map((item, index) => (
            <li key={index}>
              <ExternalLink href={item[1]}>{item[0]}</ExternalLink>
              <p className="mt-1">{item[2]}</p>
              {item[3] !== "ACTIVE" && (
                <p className="text-red-500 mt-1">
                  {item[3]} : {item[4]}
                </p>
              )}
            </li>
          ))}
        </ul>
        <br />A lot of tests are never released but cool to use ,you can check
        them out at my{" "}
        <ExternalLink href={socials.linkedin}>linkedin</ExternalLink>
        {" / "}
        <ExternalLink href={socials.twitter}>twitter</ExternalLink> posts and
        contect me if you need them.
      </details>
    </section>
  );
}
