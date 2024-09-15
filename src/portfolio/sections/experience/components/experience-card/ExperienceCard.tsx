import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

import { VitaminatedText } from "@/shared/components/vitaminated-text";
import { ExternalLink } from "@/shared/icons";
import { Technologies } from "@/shared/technologies";
import { WorkExperience } from "@/shared/types";
import { formatDateRange } from "@/shared/utils";

import { TechnologyTag } from "./components";

interface ExperienceCardProps {
  experience: WorkExperience;
  isLast: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  isLast,
}) => {
  const [isLinkFocused, setIsLinkFocused] = useState(false);

  return (
    <div className="relative flex items-start">
      {!isLast && (
        <div
          className="absolute top-0 left-6 h-[calc(100%+4rem)] w-px bg-gray-300 dark:bg-gray-700"
          aria-hidden="true"
        />
      )}
      <div className="flex-shrink-0 w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-800 z-10">
        <Image
          src={experience.company.logo}
          alt={`${experience.company.name} logo`}
          width={48}
          height={48}
          className="rounded-full"
          loading="lazy"
        />
      </div>
      <div className="ml-6 flex-grow">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold mb-1 text-gray-100">
              <Link
                href={experience.company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center group hover:underline"
                onFocus={() => setIsLinkFocused(true)}
                onBlur={() => setIsLinkFocused(false)}
                aria-label={`${experience.company.name} (opens in a new tab)`}
              >
                {experience.company.name}
                <ExternalLink
                  className={`ml-1 h-4 w-4 transition-opacity ${
                    isLinkFocused || isLinkFocused
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            </h3>
            <p className="text-lg font-semibold mb-2 sm:mb-0 text-gray-100">
              {experience.jobTitle}
            </p>
          </div>
          <div className="text-muted-foreground dark:text-gray-400 w-full sm:w-auto sm:text-right">
            <div className="flex items-center sm:justify-end">
              <time
                dateTime={`${experience.duration.start.getFullYear()}-${experience.duration.end?.getFullYear() || "present"}`}
              >
                {formatDateRange(experience.duration, {
                  format: "month-year",
                })}
              </time>
            </div>
          </div>
        </div>
        <ul
          className="list-disc list-inside mb-6 space-y-2"
          aria-label="Responsibilities"
        >
          {experience.responsibilities.map((responsibility, i) => (
            <li key={i} className="leading-relaxed dark:text-gray-300">
              <VitaminatedText text={responsibility} />
            </li>
          ))}
        </ul>
        {experience.technologiesIds.length > 0 && (
          <div className="flex flex-wrap gap-3" aria-label="Technologies used">
            {experience.technologiesIds.map(technologyId => {
              const technology = Technologies[technologyId];

              return (
                <TechnologyTag
                  key={technology.name}
                  name={technology.name}
                  icon={technology.icon}
                  color={technology.color}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
