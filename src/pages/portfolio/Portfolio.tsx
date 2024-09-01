"use client";

import React from "react";

import { getProfile } from "@/app/repositories";

import { Layout } from "./layout/Layout";
import AboutMe from "./sections/aboutMe";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Hero from "./sections/hero";

export default function Portfolio() {
  const profile = getProfile();

  return (
    <Layout profile={profile}>
      <Hero profile={profile} />
      <AboutMe about={profile.about} />
      <Experience workExperiences={profile.workExperiences} />
      <Education educationExperiences={profile.educationExperiences} />
    </Layout>
  );
}
