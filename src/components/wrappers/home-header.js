import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react';
import { Alert, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';

export function HomeHeader() {
return (
    <div className='w-full max-w-xl mx-auto p-4'>
        <Alert>
            <AlertTitle
                className='w-full flex items-center gap-4 justify-between'
            >
                <span>Hi there visitor! 👋</span>
                <span className='flex gap-2'>
                    <Link
                        href='https://www.linkedin.com/in/pushkarydv'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:bg-accent/40 p-1 rounded-md transition-colors'
                    >
                        <LinkedinIcon size={20} />
                    </Link>
                    <Link
                        href='https://github.com/pushkarydv'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:bg-accent/40 p-1 rounded-md transition-colors'
                    >
                        <GithubIcon size={20} />
                    </Link>
                    <Link
                        href='https://twitter.com/pushkaryadavin'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:bg-accent/40 p-1 rounded-md transition-colors'
                    >
                        <TwitterIcon size={20} />
                    </Link>
                    <Link
                        href='https://www.instagram.com/pushkaryadav_/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:bg-accent/40 p-1 rounded-md transition-colors'
                    >
                        <InstagramIcon size={20} />
                    </Link>
                </span>
            </AlertTitle>
        </Alert>
    </div>
);
}
