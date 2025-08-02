import { BorderBox } from './border-box';

// Project data extracted from the provided HTML structure
const featuredProjects = [
  {
    name: 'Message Gator',
    url: 'https://mg.writewrap.in',
    description:
      'Built using NextJs, Telegram API, MongoDB is a realtime message integration Saas that offers message widget integration into websites with a lot of features inside.',
    status: 'ACTIVE',
  },
  {
    name: 'Anomm',
    url: 'https://anomm.pushkaryadav.in',
    description:
      'Anomm is a free service to deliver anonymous messages directly to your telegram via bot. this can be integrated anywhere community reviews, confession pages, personal thoughts and a lot more.',
    status: 'ACTIVE',
  },
  {
    name: 'Fast Rag',
    url: 'https://ai-speed.vercel.app/',
    description:
      'This is built on Pinecone, Groq Laama and Open AI embeedings specifically trained on NextJs, TailwindCSS, Shadcn, JS, Node, Acternity UI, html, css from publically available (custom scrapper) data surapssing available LLMs in terms of accuracy. offers a speed of around ~1200 tokens/second and estimated RAG time of ~3s.',
    status: 'ACTIVE',
  },
  {
    name: 'Memory in Images',
    url: 'https://memory-in-images.vercel.app/',
    description:
      "Search within your images using natural language. Upload images, automatically analyze them with AI, and search through them using conversational queries like 'hiking on a mountain with cows' or 'when I was fat'.",
    status: 'ACTIVE',
  },
];

const allProjects = [
  {
    name: 'Mernifier',
    url: 'https://mernifier.itsvg.in',
    description:
      "Trained on the latest data, it's your ultimate companion for daily development tasks.It elevates your development game. Generate test cases, squash bugs, and autocomplete efficiently. Trained on the latest data. Your go-to for MERN mastery!",
    status: 'ACTIVE',
  },
  {
    name: 'WriteWrap Labs',
    url: 'http://labs.writewrap.in/',
    description:
      "I've created some tools build on recent AI tech from UI Generators, Large Context Data gathering and structuring, Reader helpers, RAG and continiously researching, I usually make pages about these on labs website. + WriteWrap Labs also got recognized by Microsoft For Startups(though it's not large, but i've built tools which use credits from MSFT Startups access).",
    status: 'ACTIVE',
  },
  {
    name: 'Notez',
    url: 'http://notez.writewrap.in/',
    description:
      'Built on firebase this is a fast note creations and as link/image sharing service with beautifully crafted ui of notes being shared. this is also integrated as review sharing inside Message Gator.',
    status: 'ACTIVE',
  },
  {
    name: 'Tweeco',
    url: 'https://tweeco.pushkaryadav.in',
    description:
      "Tweets ✒️ shouldn't be limited to twitter🐧 : Let's integrate them anywhere fully rendered✨ with this simple API.",
    status: 'INACTIVE',
    inactiveReason:
      'Tweeco hit a max of 73K requests and was shut down due to twitter api being fully paid',
  },
  {
    name: 'Markdown Badges',
    url: 'https://mdb.pushkaryadav.in',
    description:
      'Super Cool SVG based Badges for your products - Socials/ Languages/ Frameworks/ Libraries and more. Get generated markdown code, preview and a change badge style within single click',
    status: 'ACTIVE',
  },
  {
    name: 'IBOX',
    url: 'https://ibox.pushkaryadav.in',
    description:
      'All in one solution for your all needs of insta. Download Posts, Reels, IGTV videos and analyze any public profile for its followers, following, rand and a whole lot of data.',
    status: 'INACTIVE',
    inactiveReason: 'API Failure! Will fix as soon as i get time',
  },
  {
    name: 'NextOS',
    url: 'https://nextos.pushkaryadav.in',
    description:
      'A Modern Operating System design built into a Website using Next JS and Tailwind CSS.',
    status: 'ACTIVE',
  },
  {
    name: 'Payon',
    url: 'https://payon.pushkaryadav.in',
    description:
      'Payon is a template website to show you a better approach of making payments having a simple and interactive interface.This is a prototype website',
    status: 'ACTIVE',
  },
  {
    name: 'SummerX',
    url: 'https://summerx.itsvg.in',
    description:
      'Through SummerX we are on a mission 🚀 to save lives of people who suffer from heat waves 🍃, excessive heat 🥵, illness and more. This is a prototype website.',
    status: 'ACTIVE',
  },
  {
    name: 'APIX',
    url: 'https://apix.pushkaryadav.in',
    description:
      "APIX - a collection of 1400+ apis and 50+ categories of api's",
    status: 'ACTIVE',
  },
  {
    name: 'COLPIC',
    url: 'https://colpic.pushkaryadav.in',
    description:
      'Find Perfect colors, gradients and more for your Amazing products, Posters or Designs, Just copy and paste in single click.',
    status: 'ACTIVE',
  },
  {
    name: 'Web Games',
    url: 'https://wg.pushkaryadav.in',
    description: 'Play some of the on the go games in a minimal way',
    status: 'ACTIVE',
  },
  {
    name: 'PRM',
    url: 'https://prm.pushkaryadav.in',
    description:
      'Create amazing readme for your products, profile from amazing templates and custom too without writing markdown. Explaining everything Screenshots, URL , About, Insights, Local System Guides and a lot more.',
    status: 'ACTIVE',
  },
  {
    name: 'Web Searcher',
    url: 'https://websearcher.pushkaryadav.in',
    description:
      'Generate meta tags in some clicks and Rank top in search engines.You can generate Open graph, twitter and basic meta tags just in one click and a lot of adjustments in them.',
    status: 'ACTIVE',
  },
];

const experimentalProjects = [
  {
    name: 'x/pushkaryadavin Chat : fine tuned gpt-4o-mini',
    url: 'http://tw-pushkaryadavin-chat.vercel.app/',
    description:
      'Fine tuned gpt-4o-mini on my public interaction data via a custom tool to scrap, fix and remove clutter like usernames links to create a perfect replier for my chat.',
    status: 'RES',
    note: "I don't tweet a lot so the data was pretty low and model isn't that accurate but good then pure gpt (~97k training tokens)",
  },
  {
    name: 'Video Memory',
    url: 'https://video-memory.vercel.app/',
    description:
      'Video memory remembers moments of videos form millions of these and can directly search for any video from a single moment.',
    status: 'ACTIVE',
  },
];

// External link component matching the established pattern
const ExternalLink = ({ children, href }) => (
  <a
    href={href}
    className='text-primary-600 font-semibold underline-offset-2 underline hover:tracking-widest transition-all'
    rel='noopener noreferrer'
    target='_blank'
  >
    {children} &#10548;
  </a>
);

// Project item component
const ProjectItem = ({ project }) => (
  <li className='mb-3'>
    <ExternalLink href={project.url}>{project.name}</ExternalLink>
    {project.description && (
      <p className='mt-1 text-gray-700 leading-relaxed'>
        {project.description}
      </p>
    )}
    {project.status === 'INACTIVE' && project.inactiveReason && (
      <p className='text-secondary-500 mt-1 text-sm'>
        Inactive: {project.inactiveReason}
      </p>
    )}
    {project.status === 'RES' && project.note && (
      <p className='text-secondary-500 mt-1 text-sm'>
        {project.status} : {project.note}
      </p>
    )}
  </li>
);

// Collapsible section component
const CollapsibleSection = ({
  title,
  titleColor = 'primary-600',
  projects,
  children,
  defaultOpen = false,
}) => (
  <details className='mt-6' open={defaultOpen}>
    <summary
      className={`text-${titleColor} font-bold underline cursor-pointer hover:tracking-wider transition-all`}
    >
      {title}
    </summary>
    <ul className='list-disc ml-6 mt-4 space-y-3'>
      {projects?.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </ul>
    {children}
  </details>
);

function ProjectsSectionBase() {
  return (
    <div className='px-6 py-8'>
      {/* Main section title */}
      <h2 className='text-4xl font-extrabold mb-8 text-gray-800'>
        Few Things I&apos;ve Built
      </h2>

      {/* Featured projects */}
      <ul className='space-y-6 ml-6 list-disc mb-8'>
        {featuredProjects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </ul>

      {/* All other projects */}
      <CollapsibleSection
        title='View all others'
        titleColor='primary-800'
        projects={allProjects}
        defaultOpen={false}
      />

      {/* Experimental projects */}
      <CollapsibleSection
        title='Not So Prod (but interesting approaches)'
        titleColor='green-600'
        projects={experimentalProjects}
        defaultOpen={false}
      >
        <div className='mt-4'>
          <p className='text-gray-700'>
            A lot of tests are never released but cool to use, you can check
            them out at my{' '}
            <ExternalLink href='https://www.linkedin.com/in/pushkarydv'>
              linkedin
            </ExternalLink>
            {' / '}
            <ExternalLink href='https://twitter.com/pushkaryadavin'>
              twitter
            </ExternalLink>{' '}
            posts and contact me if you need them.
          </p>
        </div>
      </CollapsibleSection>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <BorderBox joinTop={true} joinBottom={true}>
      <ProjectsSectionBase />
    </BorderBox>
  );
}
