"use client";

import HomeAbout from "@/components/home/about";
import HomeChoose from "@/components/home/choose";
import HomeCTA from "@/components/home/cta";
import HomeHero from "@/components/home/hero";
import HomeProjects from "@/components/home/projects";
import HomeServices from "@/components/home/services";

export default function Home() {

  return (
    <div >  
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeProjects />
      <HomeChoose />
      <HomeCTA />
    </div>
  );
}
