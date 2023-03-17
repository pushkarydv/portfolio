import { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { getAnalytics, logEvent } from "firebase/analytics";
import { app } from "../config/firebase";

/* ---- Page Components ---- */
import Hero from "../components/Home/HomeHero";
import Doodle from "../components/micorcomponents/EyeDoodle";
import About from "../components/Home/HomeAbout";

/* ---- dynamic loading rest of the webpage for improved performance ---- */
const Stats = dynamic(() => import("../components/Home/HomeStats"));
const Projects = dynamic(() => import("../components/Home/HomeProjects"));
const LatestTweet = dynamic(() => import("../components/Home/HomeLatestTweet"));
const TechStack = dynamic(() => import("../components/Home/HomeTechStack"));
const ContactForm = dynamic(() => import("../components/Home/HomeContactForm"));
const Footer = dynamic(() => import("../components/global/Footer"));

export default function Home() {
  useEffect(() => {
    const analytics = getAnalytics(app);
    logEvent(analytics, "User on Home Page");
  });
  return (
    <>
      <Head>
        <title>Pushkar Yadav</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="overflow-x-hidden">
        <Doodle />
        <Hero />
        <About />
        <Stats />
        <Projects />
        <LatestTweet />
        <TechStack />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
