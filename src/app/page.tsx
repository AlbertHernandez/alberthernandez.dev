"use client";

import Image from "next/image";
import Link from "next/link";

import { ExternalLink, Lightbulb, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import {
  Code,
  GitHub,
  Gmail,
  LinkedIn,
  Sun,
  Users,
  X,
  YouTube,
} from "@/shared/icons";
import { Technologies } from "@/shared/technologies";

import { Button } from "./components/button";

const experiences = [
  {
    company: "Edpuzzle",
    logo: "/edpuzzle.webp",
    role: "Senior Software Engineer",
    period: "May 2024 - Present",
    startDate: "2024-05-01",
    website: "https://edpuzzle.com",
    points: [
      "Develop an education platform used by millions of teachers and students worldwide, featuring high-performance systems with over 300 million requests per day.",
      "Create search and recommendation tools enabling teachers to discover new materials for their students according to their profiles and preferences.",
      "Ensure code quality and reliability through testing, using design patterns such as CQRS, event-driven architecture, and feature flags. Follow hexagonal architecture and Domain-Driven Design (DDD) principles, and employ Continuous Integration/Continuous Deployment (CI/CD) practices with daily deployments.",
    ],
    technologies: [
      Technologies.JavaScript,
      Technologies.TypeScript,
      Technologies.React,
      Technologies.NodeJS,
      Technologies.Jest,
      Technologies.MongoDB,
      Technologies.Redis,
      Technologies.Docker,
      Technologies.GitHubActions,
      Technologies.AmazonWebServices,
      Technologies.Datadog,
    ],
  },
  {
    company: "CoverWallet, an Aon company",
    logo: "/coverwallet.webp",
    role: "Senior Software Engineer",
    period: "Feb 2019 - May 2024",
    startDate: "2019-02-01",
    endDate: "2024-05-01",
    website: "https://www.coverwallet.com",
    points: [
      "Create internal libraries, making them independent of any specific framework so that all microservices in the platform could utilize them.",
      "Integrate Feature Flag systems, Observability, Cloud Native Development, and Trunk-based development practices, which helped teams deliver software with a greater quality and reliability.",
      "Optimize import and export processes by designing ETLs to reduce manual work for agents, achieving over 80% time savings. Create of a backoffice to visualize, execute, and monitor them in real-time.",
      "Design and implement bridges between cloud systems like GCP and Salesforce, enabling real-time communication via events between both solutions.",
      "Enhanced a public API to enable external developers to interact with the platform easily.",
      "Develop matching systems between agents and end customers to allocate the most suitable agent based on customer profiles.",
    ],
    technologies: [
      Technologies.JavaScript,
      Technologies.TypeScript,
      Technologies.NodeJS,
      Technologies.NestJS,
      Technologies.Jest,
      Technologies.MongoDB,
      Technologies.PostgreSQL,
      Technologies.Redis,
      Technologies.Docker,
      Technologies.Kubernetes,
      Technologies.CircleCI,
      Technologies.GoogleCloudPlatform,
      Technologies.Datadog,
    ],
  },
];

export default function Portfolio() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getThemeIcon = () => {
    if (resolvedTheme === "light") {
      return <Sun className="h-5 w-5" aria-hidden="true" />;
    } else if (resolvedTheme === "dark") {
      return <Moon className="h-5 w-5" aria-hidden="true" />;
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(`#${sectionId}`);
    if (section instanceof HTMLElement) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  if (!mounted) return;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark:bg-gray-900 dark:text-gray-100">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <header
        className={`fixed left-1/2 transform -translate-x-1/2 z-50 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-500 ease-in-out ${
          visible ? "top-4 opacity-100" : "-top-full opacity-0"
        }`}
      >
        <nav
          className="inline-flex h-14 items-center justify-between px-6 space-x-4"
          aria-label="Main"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center space-x-2"
            aria-label="Go to About section"
          >
            <span className="font-bold text-lg text-primary transition-all ease-in-out hover:scale-110">
              Albert Hernández
            </span>
          </button>
          <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
            <button
              onClick={() => scrollToSection("about-me")}
              className="text-primary transition-all ease-in-out hover:scale-110"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-primary transition-all ease-in-out hover:scale-110"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-primary transition-all ease-in-out hover:scale-110"
            >
              Education
            </button>
          </div>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full group hover:bg-transparent transition-all ease-in-out"
              aria-label="Toggle theme"
            >
              <div
                className={`transition-transform duration-300 ${
                  resolvedTheme === "dark"
                    ? "hover:-rotate-12"
                    : "hover:rotate-12"
                }`}
              >
                {getThemeIcon()}
              </div>
            </Button>
          </div>
        </nav>
      </header>
      <main id="main-content" className="flex-1 pt-16">
        <section
          id="about"
          className="container py-8 md:py-12 lg:py-24 mx-auto"
        >
          <div className="mx-auto max-w-[980px] flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/3 flex justify-center items-center">
              <div className="rounded-full border-4 shadow-lg border-[#27314b] dark:border-[#e5e7eb]">
                <Image
                  src="/albert.webp"
                  alt="Albert Hernández"
                  width={250}
                  height={250}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-2/3">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl mb-4 text-primary">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Albert Hernández
                </span>
              </h1>
              <p className="text-base text-muted-foreground dark:text-gray-400 mb-6">
                I&apos;m a passionate Backend Software Engineer based in Spain,
                with over 5 years of experience in building scalable and
                efficient systems. I also create content on YouTube about web
                programing. Let&apos;s connect!
              </p>
              <div className="flex space-x-4">
                <Link
                  href="mailto:alberthernandezdev@gmail.com"
                  aria-label="Email"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Gmail className="w-6 h-6 transform transition-transform duration-200 hover:scale-110" />
                </Link>
                <Link
                  href="https://github.com/AlbertHernandez"
                  target="_blank"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <GitHub className="w-6 h-6 transform transition-transform duration-200 hover:scale-110" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/albert-hernandez-dev"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <LinkedIn className="w-6 h-6 transform transition-transform duration-200 hover:scale-110" />
                </Link>
                <Link
                  href="https://x.com/AlbertHernandev"
                  target="_blank"
                  aria-label="X"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <X className="w-6 h-6 transform transition-transform duration-200 hover:scale-110" />
                </Link>
                <Link
                  href="https://www.youtube.com/@AlbertHernandez"
                  target="_blank"
                  aria-label="YouTube"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <YouTube className="w-6 h-6 transform transition-transform duration-200 hover:scale-110" />
                </Link>
              </div>
            </div>
          </div>
        </section>

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
                    Software Engineer with expertise in backend services,
                    driving efficiency and scalability in complex systems to
                    support millions of users.
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
                    collaborating with cross-functional teams to bring
                    innovative ideas to life.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lightbulb
                  className="w-8 h-8 text-primary dark:text-primary-dark flex-shrink-0"
                  style={{ marginTop: "-2px" }}
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Value-Driven Solutions
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I am passionate about working in product and platform teams,
                    creating digital solutions that deliver value and impact end
                    users.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <YouTube
                  className="w-8 h-8 text-primary dark:text-primary-dark flex-shrink-0"
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
        <section
          id="experience"
          className="container py-12 md:py-12 lg:py-16 mx-auto"
        >
          <div className="mx-auto max-w-[980px] flex flex-col items-start gap-2 space-y-6">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl flex items-center mb-8 w-full justify-between text-primary">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div key={exp.company} className="relative flex items-start">
                  {index !== experiences.length - 1 && (
                    <div className="absolute top-0 left-6 h-[calc(100%+4rem)] w-px bg-gray-300 dark:bg-gray-700" />
                  )}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-800 z-10">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-6 flex-grow">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                      <div>
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xl font-bold text-primary hover:underline mb-1 group"
                        >
                          {exp.company}
                          <ExternalLink className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <h3 className="text-lg font-semibold mb-2 sm:mb-0">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="text-sm text-muted-foreground dark:text-gray-400 w-full sm:w-auto sm:text-right">
                        <div className="flex items-center sm:justify-end">
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                      {exp.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-sm leading-relaxed dark:text-gray-300"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center px-3 py-2 rounded-lg transition-colors duration-200"
                          style={{
                            backgroundColor: `#6767671A`,
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = `${tech.color}33`;
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = `#6767671A`;
                          }}
                        >
                          <div className="w-4 h-4 mr-1.5 flex items-center justify-center">
                            {tech.icon}
                          </div>
                          <span className="text-xs font-medium">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="education"
          className="py-12 md:py-12 lg:py-16 bg-gray-50 dark:bg-gray-800"
        >
          <div className="container mx-auto max-w-[1042px]">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl flex items-center mb-8 w-full justify-between text-primary">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="flex flex-row items-start gap-4 sm:gap-8">
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image
                  src="/upv.webp"
                  alt="Universitat Politecnica de Valencia logo"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <Link
                    href="https://www.upv.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl font-bold text-primary hover:underline inline-flex items-center group"
                  >
                    Universitat Politècnica de València (UPV)
                    <ExternalLink className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <div className="text-sm text-muted-foreground dark:text-gray-400 w-full sm:w-auto sm:text-right mt-1 sm:mt-0">
                    <div className="flex items-center sm:justify-end">
                      <span>2015 - 2019</span>
                    </div>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4">
                  Bachelor&apos;s Degree in Computer Science
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 md:py-12" role="contentinfo">
        <div className="container mx-auto max-w-[1042px] flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm leading-loose text-muted-foreground dark:text-gray-400 mb-4 md:mb-0">
            Built by Albert Hernández. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="mailto:alberthernandezdev@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Gmail className="w-6 h-6 transform transition-transform duration-200 hover:scale-110" />
            </Link>
            <Link
              href="https://github.com/AlbertHernandez"
              target="_blank"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <GitHub className="fill-current w-6 h-6 transform transition-transform duration-200 hover:scale-110" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/albert-hernandez-dev"
              target="_blank"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <LinkedIn className="w-6 h-6 transform transition-transform duration-200 hover:scale-110" />
            </Link>
            <Link
              href="https://x.com/AlbertHernandev"
              target="_blank"
              aria-label="X"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <X className="w-6 h-6 transform transition-transform duration-200 hover:scale-110" />
            </Link>
            <Link
              href="https://www.youtube.com/@AlbertHernandez"
              target="_blank"
              aria-label="YouTube"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <YouTube className="w-6 h-6 transform transition-transform duration-200 hover:scale-110" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
