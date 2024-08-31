"use client";

import React from "react";

import { AboutMe } from "@/app/components/AboutMe";
import { Education } from "@/app/components/Education";
import { Experience } from "@/app/components/Experience";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { educationExperiences, workExperiences } from "@/app/data";
import { useMount, useSmoothScroll } from "@/shared/hooks";

export default function Portfolio() {
  const { mounted } = useMount();
  const { scrollTo } = useSmoothScroll();

  if (!mounted) return;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark:bg-gray-900 dark:text-gray-100">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <Header scrollTo={scrollTo} />
      <main id="main-content" className="flex-1 pt-16">
        <Hero />
        <AboutMe />
        <Experience experiences={workExperiences} />
        <Education educationExperiences={educationExperiences} />
      </main>
      <Footer />
    </div>
  );
}
