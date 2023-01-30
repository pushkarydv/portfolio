import Head from "next/head";
import About from "../components/Home/About";
import ContactForm from "../components/Home/ContactForm";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Stats from "../components/Home/Stats";
import TechStack from "../components/Home/TechStack";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pushkar Yadav</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="text-4xl">
        <Hero />
        <Stats />
        <About />
        <Projects />
        <TechStack />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
