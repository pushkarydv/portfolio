import Head from "next/head";
import Hero from "../components/Home/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pushkar Yadav</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="text-4xl">
        <Hero />
        <Hero />
      </main>
    </>
  );
}
