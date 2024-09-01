import React from "react";

import { WorkExperience } from "@/types";

import ExperienceCard from "./components/ExperienceCard";

export const Experience: React.FC<{ workExperiences: WorkExperience[] }> = ({
  workExperiences,
}) => {
  return (
    <section
      id="experience"
      className="container py-12 md:py-12 lg:py-16 mx-auto"
    >
      <div className="mx-auto max-w-[980px] flex flex-col items-start gap-2 space-y-6">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl flex items-center mb-8 w-full justify-between text-primary">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="space-y-16">
          {workExperiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company.name}
              experience={experience}
              isLast={index === workExperiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
