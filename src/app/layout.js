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
  description: 'Personal Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
