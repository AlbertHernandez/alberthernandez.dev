import { About } from "./about";
import { EducationExperience } from "./education-experience";
import { SocialPlatformLink } from "./social-platform-link";
import { WorkExperience } from "./work-experience";

export interface Profile {
  name: string;
  image: string;
  description: string;
  title: string;
  yearsOfExperience: number;
  location: string;
  email?: string;
  socialPlatformLinks: SocialPlatformLink[];
  about: About;
  workExperiences: WorkExperience[];
  educationExperiences: EducationExperience[];
}
