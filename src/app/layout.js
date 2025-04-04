import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const customFont = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Pushkar Yadav',
  description: 'I am Pushkar Yadav a Programmer from India mostly doing Full Stack Web Development on MERN stack and having 20+ personal projects with 25K+ users',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='title' content='Pushkar Yadav' />
        <meta
          name='description'
          content='I am Pushkar Yadav a Programmer from India mostly doing Full Stack Web Development on MERN stack and having 20+ personal projects with 25K+ users'
        />
        <meta
          name='keywords'
          content='Pushkar Yadav, pushkaryadavain,  pushkarydv'
        />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='author' content='Pushkar Yadav' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://pushkaryadav.in' />
        <meta property='og:title' content='Pushkar Yadav' />
        <meta
          property='og:description'
          content='I am Pushkar Yadav a Programmer from India mostly doing Full Stack Web Development on MERN stack and having 20+ personal projects with 25K+ users'
        />
        <meta
          property='og:image'
          content='https://pushkaryadav.in/banner.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://pushkaryadav.in' />
        <meta property='twitter:title' content='Pushkar Yadav' />
        <meta
          property='twitter:description'
          content='I am Pushkar Yadav a Programmer from India mostly doing Full Stack Web Development on MERN stack and having 20+ personal projects with 25K+ users'
        />
        <meta
          property='twitter:image'
          content='https://pushkaryadav.in/banner.jpg'
        />
        <link rel='icon' href='/logo.png' />
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-CRTMPL86HY`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CRTMPL86HY', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </head>
      <body className={customFont.className}>{children}</body>
    </html>
  );
}
