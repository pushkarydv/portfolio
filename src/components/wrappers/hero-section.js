import Link from 'next/link';
import { BorderBox } from './border-box';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"


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
        Hello, I&apos;m <Tooltip>
          <TooltipTrigger asChild>
            <span className='underline decoration-dashed'>Pushkar</span>
          </TooltipTrigger>
          <TooltipContent>
            <p>Push-kar &#61; push + कर (do) &rarr; push now. <br />
              Very developer friendly name.</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className='border-l-2 mt-2 pl-4 text-xl mb-4'>
        I&apos;m a Software Engineer building Cool User Interfaces and AI
        Experiments with everything in between. <br />
        <Link
          href='https://pushkarydv.github.io/pushkarydv/resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='underline text-base'
        >
          Get Resume
        </Link>
      </div>

    </BorderBox>
  );
}
