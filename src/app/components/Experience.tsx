import Image from "next/image";

import React from "react";

import { WorkExperience } from "@/app/data/types.ts";
import { ExternalLink } from "@/shared/icons";
import { formatDateRange } from "@/shared/utils/dateFormatter";

interface ExperienceProps {
  experiences: WorkExperience[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
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
          {experiences.map((experience, index) => (
            <div
              key={experience.company.name}
              className="relative flex items-start"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute top-0 left-6 h-[calc(100%+4rem)] w-px bg-gray-300 dark:bg-gray-700" />
              )}
              <div className="flex-shrink-0 w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-800 z-10">
                <Image
                  src={experience.company.logo}
                  alt={`${experience.company.name} logo`}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
              <div className="ml-6 flex-grow">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                  <div>
                    <a
                      href={experience.company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xl font-bold text-primary hover:underline mb-1 group"
                    >
                      {experience.company.name}
                      <ExternalLink className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <h3 className="text-lg font-semibold mb-2 sm:mb-0">
                      {experience.jobTitle}
                    </h3>
                  </div>
                  <div className="text-sm text-muted-foreground dark:text-gray-400 w-full sm:w-auto sm:text-right">
                    <div className="flex items-center sm:justify-end">
                      <span>
                        {formatDateRange(experience.duration, {
                          format: "month-year",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li
                      key={i}
                      className="text-sm leading-relaxed dark:text-gray-300"
                    >
                      {responsibility}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  {experience.technologiesUsed.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center px-3 py-2 rounded-lg transition-colors duration-200"
                      style={{
                        backgroundColor: `#6767671A`,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = `${tech.color}33`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = `#6767671A`;
                      }}
                    >
                      <div className="w-4 h-4 mr-1.5 flex items-center justify-center">
                        {tech.icon}
                      </div>
                      <span className="text-xs font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
