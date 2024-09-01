export type SocialPlatformName = "GitHub" | "LinkedIn" | "X" | "YouTube";

export interface SocialPlatformLink {
  name: SocialPlatformName;
  url: string;
}
