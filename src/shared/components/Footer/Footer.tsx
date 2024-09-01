import React from "react";

import { SocialLinks } from "@/shared/components/SocialLinks";
import { Profile } from "@/shared/types";

export const Footer: React.FC<{ profile: Profile }> = ({ profile }) => {
  return (
    <footer className="py-8 md:py-12" role="contentinfo">
      <div className="container mx-auto max-w-[1042px] flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm leading-loose text-muted-foreground dark:text-gray-400 mb-4 md:mb-0">
          {`Built by ${profile.name}. All rights reserved.`}
        </p>
        <SocialLinks
          email={profile.email}
          socialPlatformLinks={profile.socialPlatformLinks}
        />
      </div>
    </footer>
  );
};
