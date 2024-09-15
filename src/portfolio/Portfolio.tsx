"use client";

import React from "react";

import { Profile } from "@/shared/types";

import { PortfolioFooter, PortfolioNavBar } from "./components";
import { AboutMe, Education, Experience, Hero } from "./sections";

export const Portfolio: React.FC<{ profile: Profile }> = ({ profile }) => {
  return (
    <div
      className={`relative flex flex-col min-h-screen bg-gray-900 text-gray-100`}
    >
      <div className="absolute top-0 left-0 right-0 h-[1900px] bg-[radial-gradient(150%_150%_at_50%_-10%,_var(--tw-gradient-stops))] from-[#1c2b3a] via-[#101827] to-[#101827]" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <PortfolioNavBar />
        <main id="main-content" className="flex-1">
          <Hero profile={profile} />
          <AboutMe about={profile.about} />
          <Experience workExperiences={profile.workExperiences} />
          <Education educationExperiences={profile.educationExperiences} />
        </main>
        <PortfolioFooter profile={profile} />
      </div>
    </div>
  );
};
