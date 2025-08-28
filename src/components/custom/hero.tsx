"use client";
import React from "react";

import HeroContent from "./hero-content";

const Hero = () => {
  return (
    <main className="min-h-screen relative grid  gap-6 sm:gap-8 justify-center items-center w-full pt-20 ">
      {/* <Blur img={appConfig.hero.background} /> */}
      <HeroContent />
    </main>
  );
};

export default Hero;
