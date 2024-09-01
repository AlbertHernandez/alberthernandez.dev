import { DateRange } from "./dateRange";

export interface EducationExperience {
  institution: {
    name: string;
    logo: string;
    website: string;
  };
  degree: string;
  duration: DateRange;
}
