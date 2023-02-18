import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Puhskar yadav" />
        <meta name="title" content="Pushkar Yadav" />
        <meta
          name="description"
          content="I am Pushkar Yadav a Programmer from India mostly doing Full Stack Web Development on MERN stack and having 16+ personal projects with 15K+ users"
        />
        <meta
          name="keywords"
          content="Pushkar Yadav, pushkaryadavain,  pushkarydv"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Pushkar Yadav" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pushkaryadav.in" />
        <meta property="og:title" content="Pushkar Yadav" />
        <meta
          property="og:description"
          content="I am Pushkar Yadav a Programmer from India mostly doing Full Stack Web Development on MERN stack and having 16+ personal projects with 15K+ users"
        />
        <meta
          property="og:image"
          content="https://pushkaryadav.in/banner.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://pushkaryadav.in" />
        <meta property="twitter:title" content="Pushkar Yadav" />
        <meta
          property="twitter:description"
          content="I am Pushkar Yadav a Programmer from India mostly doing Full Stack Web Development on MERN stack and having 16+ personal projects with 15K+ users"
        />
        <meta
          property="twitter:image"
          content="https://pushkaryadav.in/banner.png"
        />
        <link rel="icon" href="/logo.png" />
        {/* Google analitics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CRTMPL86HY"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CRTMPL86HY', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
