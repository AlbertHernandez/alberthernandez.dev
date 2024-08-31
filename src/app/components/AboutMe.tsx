import Link from "next/link";

import React from "react";

import { Code, Lightbulb, Users, YouTube } from "@/shared/icons";

export const AboutMe: React.FC = () => {
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
          <div className="flex items-start space-x-4">
            <Code
              className="w-8 h-8 text-primary dark:text-primary-dark flex-shrink-0"
              style={{ marginTop: "-2px" }}
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Backend Developer</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Software Engineer with expertise in backend services, driving
                efficiency and scalability in complex systems to support
                millions of users.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Users
              className="w-8 h-8 text-primary dark:text-primary-dark flex-shrink-0"
              style={{ marginTop: "-2px" }}
            />
            <div>
              <h3 className="text-xl font-bold mb-2">
                Cross-functional Collaborator
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                With experience in frontend, backend, and SRE teams, I enjoy
                collaborating with cross-functional teams to bring innovative
                ideas to life.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Lightbulb
              className="w-8 h-8 text-primary dark:text-primary-dark flex-shrink-0"
              style={{ marginTop: "-2px" }}
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Value-Driven Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I am passionate about working in product and platform teams,
                creating digital solutions that deliver value and impact end
                users.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <YouTube
              className="fill-current w-8 h-8 text-primary dark:text-primary-dark flex-shrink-0"
              style={{ marginTop: "-2px" }}
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Content Creator</h3>
              <p className="text-gray-600 dark:text-gray-300">
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
