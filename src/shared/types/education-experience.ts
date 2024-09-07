import { DateRange } from "./date-range";

export interface EducationExperience {
  institution: {
    name: string;
    logo: string;
    website: string;
  };
  degree: string;
  duration: DateRange;
}
