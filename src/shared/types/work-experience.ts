import { DateRange } from "./date-range";

export interface WorkExperience {
  company: {
    name: string;
    logo: string;
    website: string;
  };
  jobTitle: string;
  duration: DateRange; // If there is no 'end' in the range, the period is ongoing
  responsibilities: string[];
}
