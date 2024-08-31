import Image from "next/image";
import Link from "next/link";

import React from "react";

import { EducationExperience } from "@/app/data/types.ts";
import { ExternalLink } from "@/shared/icons";
import { formatDateRange } from "@/shared/utils/dateFormatter";

interface EducationProps {
  educationExperiences: EducationExperience[];
}

export const Education: React.FC<EducationProps> = ({
  educationExperiences,
}) => {
  return (
    <section
      id="education"
      className="py-12 md:py-12 lg:py-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-[1042px]">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl flex items-center mb-8 w-full justify-between text-primary">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        {educationExperiences.map((education, index) => (
          <div
            key={education.institution.name}
            className={`flex flex-row items-start gap-4 sm:gap-8 ${
              index === educationExperiences.length - 1 ? "" : "mb-4"
            }`}
          >
            <div className="w-16 h-16 relative flex-shrink-0">
              <Image
                src={education.institution.logo}
                alt={`${education.institution.name} logo`}
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <Link
                  href={education.institution.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl font-bold text-primary hover:underline inline-flex items-center group"
                >
                  {education.institution.name}
                  <ExternalLink className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <div className="text-sm text-muted-foreground dark:text-gray-400 w-full sm:w-auto sm:text-right mt-1 sm:mt-0">
                  <div className="flex items-center sm:justify-end">
                    <span>
                      {formatDateRange(education.duration, {
                        format: "year",
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4">
                {education.degree}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
