import Link from "next/link";

import React from "react";

import { Code, Lightbulb, Users, YouTube } from "@/shared/icons";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 -mt-0.5" aria-hidden="true">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

export const AboutMe: React.FC = () => {
  const features: FeatureProps[] = [
    {
      icon: <Code className="w-8 h-8 text-primary dark:text-primary-dark" />,
      title: "Backend Developer",
      description:
        "Software Engineer with expertise in backend services, driving efficiency and scalability in complex systems to support millions of users.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary dark:text-primary-dark" />,
      title: "Cross-functional Collaborator",
      description:
        "With experience in frontend, backend, and SRE teams, I enjoy collaborating with cross-functional teams to bring innovative ideas to life.",
    },
    {
      icon: (
        <Lightbulb className="w-8 h-8 text-primary dark:text-primary-dark" />
      ),
      title: "Value-Driven Solutions",
      description:
        "I am passionate about working in product and platform teams, creating digital solutions that deliver value and impact end users.",
    },
    {
      icon: (
        <YouTube className="fill-current w-8 h-8 text-primary dark:text-primary-dark" />
      ),
      title: "Content Creator",
      description: (
        <>
          In my free time, I create programming videos on{" "}
          <Link
            href="https://www.youtube.com/@AlbertHernandez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primary-dark hover:underline"
          >
            YouTube
          </Link>
          , where I combine my passion for teaching with programming.
        </>
      ),
    },
  ];

  return (
    <section
      id="about-me"
      className="py-12 md:py-12 lg:py-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-[1042px]">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-6 text-left">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          More than 5 years of experience as a Backend Software Engineer.
          Working with product teams focused on the end customer as well as
          platform teams.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map(feature => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
