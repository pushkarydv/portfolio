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
        <div className="absolute top-0 left-0 right-0 z-10 w-full max-w-2xl mx-auto p-4">
            <Alert>
                <AlertTitle className="flex items-center justify-between gap-4">
                    <span className="text-lg font-medium">Hi there visitor! 👋</span>
                    <div className="flex gap-3">
                        {socialLinks.map(({ href, Icon, label }) => (
                            <Link
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 rounded-md transition-colors hover:bg-accent/40 active:scale-95 ease-in-out"
                                aria-label={label}
                            >
                                <Icon size={20} />
                            </Link>
                        ))}
                    </div>
                </AlertTitle>
            </Alert>
        </div>
    );
}

const socialLinks = [
    {
        href: 'https://www.linkedin.com/in/pushkarydv',
        Icon: LinkedinIcon,
        label: 'LinkedIn',
    },
    {
        href: 'https://github.com/pushkarydv',
        Icon: GithubIcon,
        label: 'GitHub',
    },
    {
        href: 'https://twitter.com/pushkaryadavin',
        Icon: TwitterIcon,
        label: 'Twitter',
    },
    {
        href: 'https://www.instagram.com/pushkaryadav_/',
        Icon: InstagramIcon,
        label: 'Instagram',
    },
];
