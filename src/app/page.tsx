"use client";

import React from "react";

import { AboutMe } from "@/app/components/AboutMe";
import { Education } from "@/app/components/Education";
import { Experience } from "@/app/components/Experience";
import { Hero } from "@/app/components/Hero";
import { Layout } from "@/app/components/Layout";
import { educationExperiences, workExperiences } from "@/app/data";

export default function Portfolio() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Experience experiences={workExperiences} />
      <Education educationExperiences={educationExperiences} />
    </Layout>
  );
}
