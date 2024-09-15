import React from "react";

import { GitHub, Gmail, IconProps, LinkedIn, X, YouTube } from "@/shared/icons";
import { SocialPlatformLink, SocialPlatformName } from "@/shared/types";

export const SocialLinks: React.FC<{
  email: string;
  socialPlatformLinks: SocialPlatformLink[];
}> = ({ email, socialPlatformLinks }) => {
  const getIconForSocialPlatformName = (name: SocialPlatformName) => {
    const socialPlatformNameToIcon: {
      [key in SocialPlatformName]: React.FC<IconProps>;
    } = {
      YouTube: YouTube,
      LinkedIn: LinkedIn,
      X: X,
      GitHub: GitHub,
    };

    return socialPlatformNameToIcon[name];
  };

  return (
    <div className="flex space-x-4">
      <a
        href={`mailto:${email}`}
        aria-label="Email"
        className="text-muted-foreground transition-colors duration-200"
      >
        <Gmail className="fill-current w-6 h-6 transform transition-transform duration-200 hover:scale-110 text-[color:#94a3b8] hover:text-white" />
      </a>
      {socialPlatformLinks.map(({ name, url }) => {
        const Icon = getIconForSocialPlatformName(name);

        return (
          <a
            key={url}
            href={url}
            aria-label={name}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors duration-200"
          >
            <Icon className="fill-current w-6 h-6 transform transition-transform duration-200 hover:scale-110 text-[color:#94a3b8] hover:text-white" />
          </a>
        );
      })}
    </div>
  );
};
