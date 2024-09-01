import { About } from "./about.ts";
import { EducationExperience } from "./educationExperience.ts";
import { SocialPlatformLink } from "./socialPlatformLink.ts";
import { WorkExperience } from "./workExperience.ts";

export interface Profile {
  name: string;
  image: string;
  description: string;
  title: string;
  yearsOfExperience: number;
  location: string;
  email: string;
  socialPlatformLinks: SocialPlatformLink[];
  about: About;
  workExperiences: WorkExperience[];
  educationExperiences: EducationExperience[];
}
