import { Technology } from "@/shared/technologies.tsx";
import { DateRange } from "@/shared/types";

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

export interface EducationExperience {
  institution: {
    name: string;
    logo: string;
    website: string;
  };
  degree: string;
  duration: DateRange;
}
