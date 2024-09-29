import React from "react";
import { SectionTitle } from "../elements/basics";

export default function Experince() {
  return (
    <section className="mb-12">
      <SectionTitle>Experience</SectionTitle>
      <ul className="space-y-6">
        <li>
          <span className="text-orange-600"> Zura Ventures</span> India / Remote
          <br />
          Full Stack Intern (Apr 2023 - Aug 2023)
          <br />
          <ul className="list-disc ml-5">
            <li>
              Worked on revenue-generating B2B Shopify apps, including GiftKart,
              Easy Bundles, and Kite Free Gift, resulting in significant sales
              increases.
            </li>
            <li>
              Collaborated across teams, implemented features, resolved issues,
              and optimized performance using Next.js, Redis, GraphQL, Koa, and
              Shopify API.
            </li>
          </ul>
        </li>
        <li>
          <span className="text-orange-600">Cosmofeed</span> India / Remote
          <br />
          Software Engineering Intern (Nov 2022 - Dec 2022)
          <br />
          <ul className="list-disc ml-5">
            <li>
              Contributed to a pre-release bio link app website, enhancing user
              experience and data gathering for potential customers.
            </li>
          </ul>
        </li>
        <li>
          <span className="text-orange-600">
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
              development skills, from ideation to deployment, including SEO,
              LCP, Client Optimization, etc.
            </li>
          </ul>
        </li>
        <li>
          <span className="text-orange-600"> Volunteering</span> On-Site
          <br />
          Various Roles (Dec 2021 - Present)
          <br />
          <ul className="list-disc ml-5">
            <li>Google DSC Lead (Jul 2023 - Present)</li>
            <li>GDSC Web Development Lead (Sept 2022 - June 2022)</li>
            <li>Community Photographer (Aug 2020 - Present)</li>
            <li>Technocryptics Frontend Developer (Aug 2022 - Jul 2023) </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
