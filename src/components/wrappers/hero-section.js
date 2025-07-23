import { BorderBox } from './border-box';

export function HeroSection() {
  return (
    <BorderBox joinBottom={true}>
      <img
        src='https://github.com/pushkarydv.png'
        alt='Pushkar Yadav'
        loading='lazy'
        className='w-36 aspect-square bg-gray-200 rounded-3xl shadow-sm border-4 ml-4 mt-4'
      />
      <div className='border-l-2 border-primary mt-4 pl-4 text-3xl'>
        Hello, I&apos;m Pushkar
      </div>
      <div className='border-l-2 mt-2 pl-4 text-xl mb-4'>
        I&apos;m a Software Engineer building Cool User Interfaces and AI
        Experiments with everything in between.
      </div>
    </BorderBox>
  );
}
