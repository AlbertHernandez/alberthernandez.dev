"use client";

import Image from "next/image";

import React, { useState } from "react";

import { SocialLinks, VitaminatedText } from "@/shared/components";
import { Profile } from "@/shared/types";

export const Hero: React.FC<{ profile: Profile }> = ({ profile }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="about"
      className="container pb-4 md:py-12 lg:py-18 mx-auto mt-8 md:mt-24"
    >
      <div className="mx-auto max-w-[1042px] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/3 flex justify-center md:justify-start items-center lg:pl-8">
          <div className="rounded-full border-4 shadow-lg border-[#e5e7eb] relative min-w-[150px] min-h-[150px]">
            {!imageLoaded && (
              <div className="absolute inset-0 rounded-full bg-gray-700 animate-pulse" />
            )}
            <Image
              src={profile.image}
              alt={profile.name}
              width={250}
              height={250}
              className={`rounded-full transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              priority
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-2/3">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="text-gray-400 mb-6 text-lg max-w-[640px]">
            <VitaminatedText text={profile.description} />
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
