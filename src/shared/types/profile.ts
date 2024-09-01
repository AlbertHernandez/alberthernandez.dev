import { About } from "./about";
import { EducationExperience } from "./educationExperience";
import { SocialPlatformLink } from "./socialPlatformLink";
import { WorkExperience } from "./workExperience";

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
