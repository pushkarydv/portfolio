import React from "react";

import Contact from "@/components/Home/Contact";
import Skills from "@/components/Home/Skills";
import Experince from "@/components/Home/Experince";
import WhatIBuilt from "@/components/Home/WhatIBuilt";
import HeroSection from "@/components/Home/HeroSection";
import Achievements from "@/components/Home/Achievements";

const WhatIBring = () => {
  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen p-6 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto">

        <HeroSection />
        <WhatIBuilt />
        <Achievements />
        <Experince />
        <Skills />
        <Contact />

        <footer className="text-center text-gray-600">
          Built with ❤️ by Pushkar Yadav
        </footer>
      </div>
    </main>
  );
};

export default WhatIBring;
