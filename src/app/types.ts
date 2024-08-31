import { Technology } from "@/shared/technologies.tsx";
import { DateRange } from "@/shared/types";

export interface WorkExperience {
  companyName: string;
  companyLogo: string;
  companyWebsite: string;
  jobTitle: string;
  employmentPeriod: DateRange; // If there is no 'end' in the range, the period is ongoing
  responsibilities: string[];
  technologiesUsed: Technology[];
}

export interface Education {
  institutionName: string;
  institutionLogo: string;
  institutionWebsite: string;
  degree: string;
  period: DateRange;
}
