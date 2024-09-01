import { DateRange } from "./dateRange.ts";

export interface EducationExperience {
  institution: {
    name: string;
    logo: string;
    website: string;
  };
  degree: string;
  duration: DateRange;
}
