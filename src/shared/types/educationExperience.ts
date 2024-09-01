import { DateRange } from "@/shared/types/dateRange.ts";

export interface EducationExperience {
  institution: {
    name: string;
    logo: string;
    website: string;
  };
  degree: string;
  duration: DateRange;
}
