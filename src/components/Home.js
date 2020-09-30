import React from "react";
import { homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import HeroSection from "./Hero/HeroSection";

function Home() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
