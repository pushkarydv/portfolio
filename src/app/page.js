'use client';

import HomeAbout from "@/components/Home/HomeAbout";
import HomeExperince from "@/components/Home/HomeExperince";
import HomeFooter from "@/components/Home/HomeFooter";
import HomeHero from "@/components/Home/HomeHero";
import HomeProjects from "@/components/Home/HomeProjects";
import HomeStats from "@/components/Home/HomeStats";

import { initMessageGator } from "message-gator";
import { useEffect } from "react";

export default function Home() {
  // useEffect(()=>{
  //   initMessageGator({userId: '7901d8b8-0b51-48fa-a9a7-d37f94e07d7f'});
  // },[])
  return (
    <main>
      <HomeHero />
      {/* <HomeAbout /> */}
      <HomeStats />
      <HomeProjects />
      <HomeExperince/>
      <HomeFooter/>
      
    </main>
  );
}
