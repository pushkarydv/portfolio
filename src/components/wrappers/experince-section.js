import { BorderBox } from './border-box';

const forcedLoadTailwind = [
  'border-emerald-300',
  'border-fuchsia-300',
  'border-amber-300',
  'border-teal-300', 
  'border-sky-300',
]

const experiences = [
  {
    title: 'Frautect / Web & AI Engineer',
    duration: 'Dec 2024 - Present',
    description: `
      Developed end-to-end data scraping and storage solution, with capability to run on millions of parameters every day. Built internal dashboards and tools to label, showcase, and perform various operations on custom datasets. 
      Building prediction system for Brand Protection at scale.
    `,
    borderColor: 'emerald-300',
  },
  {
    title: 'Zura Ventures / Full Stack Intern',
    duration: 'Apr 2023 - Aug 2023',
    description: `
      Worked on revenue-generating B2B Shopify apps, including GiftKart, Easy Bundles, and Kite Free Gift, resulting in significant sales increases. 
      Collaborated across teams, implemented features, resolved issues, and optimized performance using Next.js, Redis, GraphQL, Koa, and Shopify API.
    `,
    borderColor: 'fuchsia-300',
  },
  {
    title: 'Cosmofeed / Software Engineering Intern',
    duration: 'Nov 2022 - Dec 2022',
    description: `
      Contributed to a pre-release bio link app website, enhancing user experience and data gathering for potential customers.
    `,
    borderColor: 'amber-300',
  },
  {
    title: 'Open-Source & Personal Projects / Freelance Developer',
    duration: 'Dec 2021 - Present',
    description: `
      Created and maintained open-source apps with 15,000+ users, solving technical problems and simplifying development tasks. 
      Showcased version control, code review, and collaborative development skills, from ideation to deployment, including SEO, LCP, Client Optimization, etc.
    `,
    borderColor: 'teal-300',
  },
  {
    title: 'Volunteering / Various Roles',
    duration: 'Dec 2021 - Present',
    description: `
      👍 Google DSC Lead (Jul 2023 - June 2024) 
      👍 GDSC Web Development Lead (Sept 2022 - June 2022) 
      👍 Community Photographer (Aug 2020 - Present) 
      👍 Technocryptics Frontend Developer (Aug 2022 - Jul 2023) 
      👍 Pexels Contributor (Aug 2020 - Present) (500k+ views)
    `,
    borderColor: 'sky-300',
  },
];

function ExperienceItem({ title, duration, description, borderColor }) {
  return (
    <div className="py-4 mb-6">
      <div className={`border-l-4 border-${borderColor} text-2xl font-semibold px-6`}>{title} <br />
      <span className="text-sm text-gray-500">{duration}</span></div>
      <div className="text-base text-gray-700 leading-relaxed whitespace-pre-line px-6">
        {description}
      </div>
    </div>
  );
}

export function ExperinceSection() {
  return (
    <BorderBox joinBottom={true} joinTop={true}>
      <div className="px-6 text-4xl font-extrabold my-6">Experience</div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </BorderBox>
  );
}
