import Image from "next/image";

import React from "react";

import { SocialLinks } from "@/shared/components/social-links";
import { Profile } from "@/shared/types";

export const Hero: React.FC<{ profile: Profile }> = ({ profile }) => {
  return (
    <section id="about" className="container py-8 md:py-12 lg:py-24 mx-auto">
      <div className="mx-auto max-w-[980px] flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-1/3 flex justify-center items-center">
          <div className="rounded-full border-4 shadow-lg border-[#27314b] dark:border-[#e5e7eb]">
            <Image
              src={profile.image}
              alt={profile.name}
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-2/3">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl mb-4 text-primary">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="text-base text-muted-foreground dark:text-gray-400 mb-6">
            {profile.description}
          </p>
          <SocialLinks
            email={profile.email}
            socialPlatformLinks={profile.socialPlatformLinks}
          />
        </div>
      </div>
    </section>
  );
};
