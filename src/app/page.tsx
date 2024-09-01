"use client";

import React from "react";

import { AboutMe } from "@/app/components/AboutMe";
import { Education } from "@/app/components/Education";
import { Experience } from "@/app/components/Experience";
import { Hero } from "@/app/components/Hero";
import { Layout } from "@/app/components/Layout";
import { getProfile } from "@/app/repositories";

export default function Portfolio() {
  const profile = getProfile();
  return (
    <Layout profile={profile}>
      <Hero profile={profile} />
      <AboutMe profile={profile} />
      <Experience workExperiences={profile.workExperiences} />
      <Education educationExperiences={profile.educationExperiences} />
    </Layout>
  );
}
