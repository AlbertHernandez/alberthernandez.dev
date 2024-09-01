import Image from "next/image";
import Link from "next/link";

import React from "react";

import { ExternalLink } from "@/icons";
import { EducationExperience } from "@/types";
import { formatDateRange } from "@/utils";

interface EducationCardProps {
  education: EducationExperience;
}

export const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <article className="flex flex-row items-start gap-4 sm:gap-8">
      <div className="w-16 h-16 relative flex-shrink-0">
        <Image
          src={education.institution.logo}
          alt={`${education.institution.name} logo`}
          fill
          sizes="(max-width: 640px) 64px, 64px"
          className="rounded-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <h3>
            <Link
              href={education.institution.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl font-bold text-primary hover:underline inline-flex items-center group"
              aria-label={`${education.institution.name} (opens in a new tab)`}
            >
              {education.institution.name}
              <ExternalLink
                className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />
            </Link>
          </h3>
          <time
            className="text-sm text-muted-foreground dark:text-gray-400 w-full sm:w-auto sm:text-right mt-1 sm:mt-0"
            dateTime={`${education.duration.start.getFullYear()}-${education.duration.end?.getFullYear() || "present"}`}
          >
            {formatDateRange(education.duration, { format: "year" })}
          </time>
        </header>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          {education.degree}
        </p>
      </div>
    </article>
  );
};
