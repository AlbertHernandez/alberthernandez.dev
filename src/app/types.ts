import { Technology } from "@/shared/technologies.tsx";

export interface WorkExperience {
  companyName: string;
  companyLogo: string;
  companyWebsite: string;
  jobTitle: string;
  employmentPeriod: {
    startDate: Date;
    endDate?: Date;
  };
  responsibilities: string[];
  technologiesUsed: Technology[];
}
