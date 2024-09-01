import { TechnologyId } from "@/technologies.tsx";

import { DateRange } from "./dateRange.ts";

export interface WorkExperience {
  company: {
    name: string;
    logo: string;
    website: string;
  };
  jobTitle: string;
  duration: DateRange; // If there is no 'end' in the range, the period is ongoing
  responsibilities: string[];
  technologiesIds: TechnologyId[];
}
