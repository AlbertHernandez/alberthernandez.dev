import React from "react";

import { VitaminatedText } from "@/shared/components";
import { IconName, YouTube } from "@/shared/icons";
import * as icons from "@/shared/icons";
import { About } from "@/shared/types";

export const AboutMe: React.FC<{ about: About }> = ({ about }) => {
  const getIconFromName = (name: IconName) => {
    const iconNameToCustomIcon: {
      [key in IconName]?: React.JSX.Element;
    } = {
      YouTube: <YouTube className="fill-current w-8 h-8" />,
    };

    const customIcon = iconNameToCustomIcon[name];

    if (customIcon) return customIcon;

    const Icon = icons[name];

    if (Icon) return <Icon className="w-8 h-8" />;

    throw new Error(`Icon not found for icon name: ${name}`);
  };

  return (
    <section id="about-me" className="py-12">
      <div className="container mx-auto max-w-[1042px]">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-6 text-left">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          <VitaminatedText text={about.introduction} />
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {about.highlights.map(highlight => (
            <div
              key={highlight.title}
              className="flex items-start space-x-4 text-gray-100"
            >
              <div
                className="flex-shrink-0 -mt-0.5 text-gray-100"
                aria-hidden="true"
              >
                {getIconFromName(highlight.icon)}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-gray-300">
                  <VitaminatedText text={highlight.description} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
