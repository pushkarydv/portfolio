import React from "react";

import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { PiGithubLogo } from "react-icons/pi";

const WhatIBring = () => {
  const ExternalLink = ({ children, href }) => (
    <a
      href={href}
      className="text-orange-500 underline-offset-2 underline hover:text-orange-600 transition-colors"
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
  const products = [
    [
      "Mernifier",
      "https://mernifier.itsvg.in",
      "Trained on the latest data, it's your ultimate companion for daily development tasks.It elevates your development game. Generate test cases, squash bugs, and autocomplete efficiently. Trained on the latest data. Your go-to for MERN mastery!",
      "ACTIVE",
      "",
    ],

    [
      "Anomm",
      "https://anomm.pushkaryadav.in",
      "Anomm is a free service to deliver anonymous messages directly to your telegram via bot. this can be integrated anywhere community reviews, confession pages, personal thoughts and a lot more.",
      "ACTIVE",
      "",
    ],
    [
      "Tweeco",
      "https://tweeco.pushkaryadav.in",
      "Tweets ✒️ shouldn't be limited to twitter🐧 : Let's integrate them anywhere fully rendered✨ with this simple API.",
      "INACTIVE",
      "Tweeco hit a max of 73K requests and was shut down due to twitter api being fully paid",
    ],

    [
      "Markdown Badges",
      "https://mdb.pushkaryadav.in",
      "Super Cool SVG based Badges for your products - Socials/ Languages/ Frameworks/ Libraries and more. Get generated markdown code, preview and a change badge style within single click",
      "ACTIVE",
      "",
    ],
    [
      "IBOX",
      "https://ibox.pushkaryadav.in",
      "All in one solution for your all needs of insta. Download Posts, Reels, IGTV videos and analyze any public profile for its followers, following, rand and a whole lot of data.",
      "INACTIVE",
      "API Failure! Will fix as soon as i get time",
    ],
    [
      "NextOS",
      "https://nextos.pushkaryadav.in",
      "A Modern Operating System design built into a Website using Next JS and Tailwind CSS.",
      "ACTIVE",
      "",
    ],
    [
      "Payon",
      "https://payon.pushkaryadav.in",
      "Payon is a template website to show you a better approach of making payments having a simple and interactive interface.This is a prototype website",
      "ACTIVE",
      "",
    ],
    [
      "SummerX",
      "https://summerx.itsvg.in",
      "Through SummerX we are on a mission 🚀 to save lives of people who suffer from heat waves 🍃, excessive heat 🥵, illness and more. This is a prototype website.",
      "ACTIVE",
      "",
    ],
    [
      "APIX",
      "https://apix.pushkaryadav.in",
      "APIX - a collection of 1400+ apis and 50+ categories of api's",
      "ACTIVE",
      "",
    ],
    [
      "COLPIC",
      "https://colpic.pushkaryadav.in",
      "Find Perfect colors, gradients and more for your Amazing products, Posters or Designs, Just copy and paste in single click.",
      "ACTIVE",
      "",
    ],
    [
      "Web Games",
      "https://wg.pushkaryadav.in",
      "Play some of the on the go games in a minimal way",
      "ACTIVE",
      "",
    ],
    [
      "PRM",
      "https://prm.pushkaryadav.in",
      "Create amazing readme for your products, profile from amazing templates and custom too without writing markdown. Explaining everything Screenshots, URL , About, Insights, Local System Guides and a lot more.",
      "ACTIVE",
      "",
    ],
    [
      "Web Searcher",
      "https://websearcher.pushkaryadav.in",
      "Generate meta tags in some clicks and Rank top in search engines.You can generate Open graph, twitter and basic meta tags just in one click and a lot of adjustments in them.",
      "ACTIVE",
      "",
    ],
  ];

  const socials = {
    linkedin: "https://www.linkedin.com/in/pushkarydv",
    github: "https://github.com/pushkarydv",
    twitter: "https://twitter.com/pushkaryadavin",
    instagram: "https://www.instagram.com/pushkaryadav_/",
  };

  const HomeHeroLink = ({ href, children }) => (
    <a
      href={`${href}?ref=pushkaryadav.in`}
      rel="noopener noreferrer"
      className="flex items-center gap-2 p-2 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-800 no-underline"
      target="_blank"
    >
      {children}
    </a>
  );

  const SectionTitle = ({ children }) => (
    <h2 className="text-2xl font-bold text-gray-800 mb-4">{children}</h2>
  );

  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen p-6 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-4">
              Hello, I am Pushkar Yadav
            </h1>
            <p className="text-xl mb-4">
              Software Engineer, I work on making absolutely beautiful Web apps,
              AI and little bit of Research.
            </p>
            <ExternalLink href="https://pushkarydv.github.io/pushkarydv/resume.pdf">
              View Resume
            </ExternalLink>
          </div>
          <img
            src="https://github.com/pushkarydv.png"
            className="w-40 h-40 rounded-lg shadow-lg ring-2 ring-gray-300"
            alt="Pushkar Yadav"
          />
        </div>

        <section className="mb-12">
          <SectionTitle>Few Things I&apos;ve Built</SectionTitle>
          <ul className="space-y-4 ml-6 list-disc">
            <li>
              <ExternalLink href="https://mg.writewrap.in">
                Message Gator
              </ExternalLink>{" "}
              : Built using NextJs, Telegram API, MongoDB is a realtime message
              integration Saas that offers message widget integration into
              websites with a lot of features inside.
            </li>
            <li>
              <ExternalLink href={"http://notez.writewrap.in/"}>
                Notez
              </ExternalLink>{" "}
              : Built on firebase this is a fast note creations and as
              link/image sharing service with beautifully crafted ui of notes
              being shared. this is also integrated as review sharing inside
              Message Gator.
            </li>
            <li>
              <ExternalLink href="https://ai-speed.vercel.app/">
                Fast Rag
              </ExternalLink>{" "}
              : This is built on Pinecone, Groq Laama and Open AI embeedings
              specifically trained on NextJs, TailwindCSS, Shadcn, JS, Node,
              Acternity UI, html, css from publically available (custom
              scrapper) data surapssing available LLMs in terms of accuracy.
              offers a speed of around ~1200 tokens/second and estimated RAG
              time of ~3s.
            </li>
            <li>
              <ExternalLink href="http://labs.writewrap.in/">
                WriteWrap Labs
              </ExternalLink>{" "}
              : I&apos;ve created some tools build on recent AI tech from UI
              Generators, Large Context Data gathering and structuring, Reader
              helpers, RAG and continiously researching, I usually make pages
              about these on labs website. + WriteWrap Labs also got recognized
              by Microsoft For Startups(though it&apos;s not large, but
              i&apos;ve built tools which use credits from MSFT Startups
              access).
            </li>
          </ul>

          <details className="mt-6">
            <summary className="text-orange-500 underline cursor-pointer font-semibold">
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
        </section>

        <section className="mb-12">
          <SectionTitle>
            Numbers and Achievements I&apos;m Proud Of
          </SectionTitle>
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
              : a MERN Stack assistant powered by Pinecone, LangChain, OpenAI,
              etc. (Dec 2023)
            </li>
            <li>
              Hackathon Winner Organised by Major League Hacking. (June 2022)
            </li>
            <li>
              5th Product of the day{" "}
              <ExternalLink href="https://mdb.pushkaryadav.in">
                MDB
              </ExternalLink>{" "}
              (mdb.pushkaryadav.in) recognized by ProductHunt. (March 2021)
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <SectionTitle>Experience</SectionTitle>
          <ul className="space-y-6">
            <li>
              <span className="text-orange-500"> Zura Ventures</span> India /
              Remote
              <br />
              Full Stack Intern (Apr 2023 - Aug 2023)
              <br />
              <ul className="list-disc ml-5">
                <li>
                  Worked on revenue-generating B2B Shopify apps, including
                  GiftKart, Easy Bundles, and Kite Free Gift, resulting in
                  significant sales increases.
                </li>
                <li>
                  Collaborated across teams, implemented features, resolved
                  issues, and optimized performance using Next.js, Redis,
                  GraphQL, Koa, and Shopify API.
                </li>
              </ul>
            </li>
            <li>
              <span className="text-orange-500">Cosmofeed</span> India / Remote
              <br />
              Software Engineering Intern (Nov 2022 - Dec 2022)
              <br />
              <ul className="list-disc ml-5">
                <li>
                  Contributed to a pre-release bio link app website, enhancing
                  user experience and data gathering for potential customers.
                </li>
              </ul>
            </li>
            <li>
              <span className="text-orange-500">
                Open-Source & Personal Projects{" "}
              </span>
              <br />
              Freelance Developer (Dec 2021 - Present)
              <br />
              <ul className="list-disc ml-5">
                <li>
                  Created and maintained open-source apps with 15,000+ users,
                  solving technical problems and simplifying development tasks.
                </li>
                <li>
                  Showcased version control, code review, and collaborative
                  development skills, from ideation to deployment, including
                  SEO, LCP, Client Optimization, etc.
                </li>
              </ul>
            </li>
            <li>
              <span className="text-orange-500"> Volunteering</span> On-Site
              <br />
              Various Roles (Dec 2021 - Present)
              <br />
              <ul className="list-disc ml-5">
                <li>Google DSC Lead (Jul 2023 - Present)</li>
                <li>GDSC Web Development Lead (Sept 2022 - June 2022)</li>
                <li>Community Photographer (Aug 2020 - Present)</li>
                <li>
                  Technocryptics Frontend Developer (Aug 2022 - Jul 2023){" "}
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <SectionTitle>Skills</SectionTitle>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Languages, Frameworks:</h3>
              <p>
                Next.Js, React.Js, Tailwind CSS, MongoDB, Firebase, Pinecone,
                Langchain, Prisma, Figma, Bootstrap, Git/Github/NPM and all
                other base tech of all these frameworks mentioned.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Other:</h3>
              <p>
                Leadership (GDSC Lead 1 Yr, GDSC Web Dev lead 1 Yr,
                Technocryptics Web Lead 1Yr), Collaborative Work (hackathons
                ^7x, SaaS)
              </p>
            </div>
            <p className="italic">
              Most of the projects I&apos;ve made and work I do is towards
              making something interesting and useful for everyone which
              hasn&apos;t been done before or in this way at least.
            </p>
          </div>
        </section>

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
            <div className="w-full md:w-1/2">
              <iframe
                src="https://mg.writewrap.in/widget/clrbyc3ie0000j8lc9zdhosjk"
                className="w-full min-h-[32rem] border-0 rounded-lg ring-1 ring-black/10 "
                title="Contact Form"
              />
            </div>
          </div>
        </section>

        <footer className="text-center text-gray-600">
          Built with ❤️ by Pushkar Yadav
        </footer>
      </div>
    </main>
  );
};

export default WhatIBring;
