"use client";

import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

import { VitaminatedText } from "@/shared/components";
import { ExternalLink } from "@/shared/icons";
import { WorkExperience } from "@/shared/types";
import { formatDateRange } from "@/shared/utils";

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
    <div className="relative flex">
      {!isLast && (
        <div
          className="absolute top-[3.3rem] left-6 h-[calc(100%)] w-px bg-gray-700"
          aria-hidden="true"
        />
      )}
      <div className="flex-shrink-0 w-12 h-12 mt-1">
        <div className="w-12 h-12 rounded-full border-4 border-gray-800 bg-gray-800 z-10 overflow-hidden">
          <Image
            src={experience.company.logo}
            alt={`${experience.company.name} logo`}
            width={48}
            height={48}
            className="rounded-full"
            loading="lazy"
          />
        </div>
      </div>
      <div className="ml-6 flex-grow">
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <div className="flex flex-col">
            <div className="flex items-center">
              <h3 className="text-xl font-bold text-gray-100">
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
                      isLinkFocused
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              </h3>
            </div>
            <p className="text-lg font-semibold text-gray-100 mt-1">
              {experience.jobTitle}
            </p>
          </div>
          <div className="text-gray-400 w-full sm:w-auto sm:text-right mt-2 sm:mt-0">
            <time
              dateTime={`${experience.duration.start.getFullYear()}-${experience.duration.end?.getFullYear() || "present"}`}
            >
              {formatDateRange(experience.duration, {
                format: "month-year",
              })}
            </time>
          </div>
        </div>
        <ul
          className="list-disc list-inside mt-4 mb-6 space-y-2"
          aria-label="Responsibilities"
        >
          {experience.responsibilities.map((responsibility, i) => (
            <li key={i} className="leading-relaxed text-gray-300">
              <VitaminatedText text={responsibility} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
