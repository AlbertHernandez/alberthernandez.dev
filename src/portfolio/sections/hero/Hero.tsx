"use client";

import Image from "next/image";

import React, { useState } from "react";

import { SocialLinks } from "@/shared/components/social-links";
import { VitaminatedText } from "@/shared/components/vitaminated-text";
import { Profile } from "@/shared/types";

export const Hero: React.FC<{ profile: Profile }> = ({ profile }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="about"
      className="container pb-8 md:py-20 lg:py-24 mx-auto mt-8"
    >
      <div className="mx-auto max-w-[980px] flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-1/3 flex justify-center items-center">
          <div className="rounded-full border-4 shadow-lg dark:border-[#e5e7eb] relative">
            {!imageLoaded && (
              <div className="absolute inset-0 rounded-full dark:bg-gray-700 animate-pulse" />
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
              onLoadingComplete={() => setImageLoaded(true)}
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-2/3">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="text-muted-foreground dark:text-gray-400 mb-6 text-lg">
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
