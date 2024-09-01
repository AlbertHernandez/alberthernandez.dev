import React from "react";

import PortfolioLayout from "./layout";
import { getProfile } from "./repositories";
import { AboutMe, Education, Experience, Hero } from "./sections";

export default function Portfolio() {
  const profile = getProfile();

  return (
    <PortfolioLayout profile={profile}>
      <Hero profile={profile} />
      <AboutMe about={profile.about} />
      <Experience workExperiences={profile.workExperiences} />
      <Education educationExperiences={profile.educationExperiences} />
    </PortfolioLayout>
  );
}
