import React from "react";

import PortfolioLayout from "./layout";
import { getProfile } from "./repositories";
import AboutMe from "./sections/aboutMe";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Hero from "./sections/hero";

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
