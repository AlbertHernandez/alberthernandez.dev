"use client";

import React from "react";

import useMount from "@/shared/hooks/use-mount";
import { Profile } from "@/shared/types";

import { PortfolioFooter, PortfolioNavBar } from "./components";
import { AboutMe, Education, Experience, Hero } from "./sections";

export const Portfolio: React.FC<{ profile: Profile }> = ({ profile }) => {
  const { mounted } = useMount();

  if (!mounted) return;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark:bg-gray-900 dark:text-gray-100">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <PortfolioNavBar profile={profile} />
      <main id="main-content" className="flex-1 pt-16">
        <Hero profile={profile} />
        <AboutMe about={profile.about} />
        <Experience workExperiences={profile.workExperiences} />
        <Education educationExperiences={profile.educationExperiences} />
      </main>
      <PortfolioFooter profile={profile} />
    </div>
  );
};
