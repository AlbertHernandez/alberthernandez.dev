"use client";

import React from "react";

import { AboutMe } from "@/app/components/AboutMe";
import { Education } from "@/app/components/Education";
import { Experience } from "@/app/components/Experience";
import { Hero } from "@/app/components/Hero";
import { Layout } from "@/app/components/Layout";
import { albertHernandezProfile } from "@/app/data/albertHernandezProfile.ts";

export default function Portfolio() {
  return (
    <Layout profile={albertHernandezProfile}>
      <Hero profile={albertHernandezProfile} />
      <AboutMe profile={albertHernandezProfile} />
      <Experience workExperiences={albertHernandezProfile.workExperiences} />
      <Education
        educationExperiences={albertHernandezProfile.educationExperiences}
      />
    </Layout>
  );
}
