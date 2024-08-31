// components/ExperienceCard.tsx
import Image from "next/image";

import React from "react";

import { TechnologyTag } from "@/app/components/TechnologyTag";
import { WorkExperience } from "@/app/data/types";
import { ExternalLink } from "@/shared/icons";
import { formatDateRange } from "@/shared/utils/dateFormatter";

interface ExperienceCardProps {
  experience: WorkExperience;
  isLast: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  isLast,
}) => {
  return (
    <div className="relative flex items-start">
      {!isLast && (
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
            <li key={i} className="text-sm leading-relaxed dark:text-gray-300">
              {responsibility}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          {experience.technologiesUsed.map(tech => (
            <TechnologyTag
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              color={tech.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
