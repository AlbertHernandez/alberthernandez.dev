import { EducationExperience } from "@/app/data/types.ts";

export const educationExperiences: EducationExperience[] = [
  {
    institution: {
      name: "Universitat Politècnica de València (UPV)",
      logo: "/upv.webp",
      website: "https://www.upv.es",
    },
    degree: "Bachelor's Degree in Computer Science",
    duration: {
      start: new Date("2015-09-01"),
      end: new Date("2019-06-30"),
    },
  },
] as const;
