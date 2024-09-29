'use client';

import React from "react";
import { motion } from "framer-motion";

import Contact from "@/components/Home/Contact";
import Skills from "@/components/Home/Skills";
import Experince from "@/components/Home/Experince";
import WhatIBuilt from "@/components/Home/WhatIBuilt";
import HeroSection from "@/components/Home/HeroSection";
import Achievements from "@/components/Home/Achievements";

const WhatIBring = () => {
  const animationProps = {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    transition: { duration: 0.5 }
  };

  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen p-6 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <motion.div {...animationProps} transition={{ ...animationProps.transition, delay: 0.2 }}>
          <HeroSection />
        </motion.div>
        <motion.div {...animationProps} transition={{ ...animationProps.transition, delay: 0.4 }}>
          <WhatIBuilt />
        </motion.div>
        <motion.div {...animationProps} transition={{ ...animationProps.transition, delay: 0.6 }}>
          <Achievements />
        </motion.div>
        <motion.div {...animationProps} transition={{ ...animationProps.transition, delay: 0.8 }}>
          <Experince />
        </motion.div>
        <motion.div {...animationProps} transition={{ ...animationProps.transition, delay: 1.0 }}>
          <Skills />
        </motion.div>
        <motion.div {...animationProps} transition={{ ...animationProps.transition, delay: 1.2 }}>
          <Contact />
        </motion.div>
        <motion.footer 
          className="text-center text-gray-600"
          {...animationProps} 
          transition={{ ...animationProps.transition, delay: 1.4 }}
        >
          Built with ❤️ by Pushkar Yadav
        </motion.footer>
      </div>
    </main>
  );
};

export default WhatIBring;