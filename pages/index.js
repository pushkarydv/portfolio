import Head from "next/head";
import dynamic from "next/dynamic";
import Hero from "../components/Home/Hero";
import Doodle from "../components/micorcomponents/Doodle";
import About from "../components/Home/About";

/* ---- dynamic loading rest of the webpage for improved perfornamce ---- */
const Stats = dynamic(() => import("../components/Home/Stats"));
const Projects = dynamic(() => import("../components/Home/Projects"));
const LatestTweet = dynamic(() => import("../components/Home/LatestTweet"));
const TechStack = dynamic(() => import("../components/Home/TechStack"));
const ContactForm = dynamic(() => import("../components/Home/ContactForm"));
const Footer = dynamic(() => import("../components/Home/Footer"));

// TODO : META TAGS - EDIT ABOUT FROM PREV PORTFOLIO
export default function Home() {
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
