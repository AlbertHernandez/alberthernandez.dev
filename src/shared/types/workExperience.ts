import { Technology } from "@/shared/technologies.tsx";
import { DateRange } from "@/shared/types/dateRange.ts";

export interface WorkExperience {
  company: {
    name: string;
    logo: string;
    website: string;
  };
  jobTitle: string;
  duration: DateRange; // If there is no 'end' in the range, the period is ongoing
  responsibilities: string[];
  technologiesUsed: Technology[];
}
