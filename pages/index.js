import Head from "next/head";
import About from "../components/Home/About";
import ContactForm from "../components/Home/ContactForm";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Stats from "../components/Home/Stats";
import TechStack from "../components/Home/TechStack";
import Doodle from "../components/micorcomponents/Doodle";
// TODO : DYNAMIC LOADING, META TAGS - EDIT ABOUT FROM PREV PORTFOLIO
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
        <TechStack />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
