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
  useEffect(()=>{
    initMessageGator('485a5f50-1e3c-4f3b-942b-2cd7aa280f42');
  },[])
  return (
    <main>
      <div className='bg-neutral-800 text-teal-300 p-2'>
        <div className='p-2 text-sm rounded-md border border-1 border-teal-300'>
          Bugs everywhere 🪲
        </div>
      </div>

      <HomeHero />
      <HomeAbout />
      <HomeStats />
      <HomeProjects />
      <HomeExperince/>
      <HomeFooter/>
      
    </main>
  );
}
