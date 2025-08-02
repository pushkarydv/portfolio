import { BorderBox } from './border-box';

// Achievements data extracted from the provided HTML structure
const achievements = [
  {
    text: '~ 20+ total products made.',
    type: 'stat'
  },
  {
    text: '~ 25k+ users using my products.',
    type: 'stat'
  },
  {
    text: '~ 500k+ views on pexels community photos and being used in news articles like indiatimes.',
    type: 'stat'
  },
  {
    text: 'LeanIn Hack IGDTUW 5.0 Top Team: Worked on',
    link: {
      url: 'https://sakhi.vercel.app/dashboard',
      text: 'Sakhi app'
    },
    continuation: 'for empowering women and promoting gender equality. (Feb 2024)',
    type: 'award'
  },
  {
    text: 'HackJNU 3.0 Finalists: Innovative UN SDG-focused app addressing sustainable development goals. (Jan 2024)',
    type: 'award'
  },
  {
    text: 'Top 5 - IITB Techfest: Developed',
    link: {
      url: 'https://mernifier.itsvg.in/',
      text: 'MERNifier'
    },
    continuation: ': a MERN Stack assistant powered by Pinecone, LangChain, OpenAI, etc. (Dec 2023)',
    type: 'award'
  },
  {
    text: 'Hackathon Winner Organised by Major League Hacking. (June 2022)',
    type: 'award'
  },
  {
    text: '5th Product of the day',
    link: {
      url: 'https://mdb.pushkaryadav.in',
      text: 'MDB'
    },
    continuation: '(mdb.pushkaryadav.in) recognized by ProductHunt. (March 2021)',
    type: 'award'
  }
];

// External link component matching the established pattern
const ExternalLink = ({ children, href }) => (
  <a
    href={href}
    className='text-primary-600 font-medium underline-offset-2 underline hover:tracking-widest transition-all'
    rel='noopener noreferrer'
    target='_blank'
  >
    {children} &#10548;
  </a>
);

// Achievement item component
const AchievementItem = ({ achievement }) => (
  <li className='mb-3'>
    <div className='text-gray-700 leading-relaxed'>
      {achievement.text}
      {achievement.link && (
        <>
          {' '}
          <ExternalLink href={achievement.link.url}>
            {achievement.link.text}
          </ExternalLink>
          {achievement.continuation && ` ${achievement.continuation}`}
        </>
      )}
    </div>
  </li>
);

function AchievementsSectionBase() {
  return (
    <div className='px-6 py-8'>
      {/* Main section title */}
      <h2 className='text-4xl font-extrabold mb-8 text-gray-800'>
        Numbers and Achievements I&apos;m Proud Of
      </h2>
      
      {/* Achievements list */}
      <ul className='list-disc ml-6 space-y-4'>
        {achievements.map((achievement, index) => (
          <AchievementItem key={index} achievement={achievement} />
        ))}
      </ul>
    </div>
  );
}

export function AchievementsSection() {
  return (
    <BorderBox joinTop={true} joinBottom={true}>
      <AchievementsSectionBase />
    </BorderBox>
  );
}
