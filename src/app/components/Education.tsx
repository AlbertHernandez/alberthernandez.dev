import React from "react";

import { EducationCard } from "@/app/components/EducationCard";
import { EducationExperience } from "@/app/data/types";

interface EducationProps {
  educationExperiences: EducationExperience[];
}

export const Education: React.FC<EducationProps> = ({
  educationExperiences,
}) => {
  return (
    <section
      id="education"
      className="py-12 md:py-16 lg:py-18 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-[1042px]">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-8 text-primary">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        <div className="space-y-8">
          {educationExperiences.map(education => (
            <EducationCard
              key={`${education.institution.name}-${education.degree}`}
              education={education}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
