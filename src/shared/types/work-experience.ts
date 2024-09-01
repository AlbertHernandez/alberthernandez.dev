import { TechnologyId } from "@/shared/technologies";

import { DateRange } from "./date-range.ts";

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
