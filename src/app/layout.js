import { IBM_Plex_Mono, Libre_Baskerville, Lora } from 'next/font/google';
import './globals.css';

const fontSans = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const fontSerif = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const fontMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: 'Pushkar Yadav',
  description: 'Pushkar Yadav - Software Engineer crafting UIs, AI tools, and products used by 25k+ users and global communities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='title' content='Pushkar Yadav' />
        <meta
          name='description'
          content='Pushkar Yadav - Software Engineer crafting UIs, AI tools, and products used by 25k+ users and global communities.'
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
          content='Pushkar Yadav - Software Engineer crafting UIs, AI tools, and products used by 25k+ users and global communities.'
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
          content='Pushkar Yadav - Software Engineer crafting UIs, AI tools, and products used by 25k+ users and global communities.'
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
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
