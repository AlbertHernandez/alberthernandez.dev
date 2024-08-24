"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Briefcase,
  Code,
  ExternalLink,
  Lightbulb,
  Moon,
  Star,
  Sun,
  Users,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "./components/button";

const experiences = [
  {
    company: "Edpuzzle",
    logo: "/cat.webp",
    role: "Senior Software Engineer",
    period: "May 2024 - Present",
    website: "https://edpuzzle.com",
    points: [
      "Develop an education platform used by millions of teachers and students worldwide, featuring high-performance systems with over 300 million requests per day.",
      "Create search and recommendation tools enabling teachers to discover new materials for their students according to their profiles and preferences.",
      "Ensure code quality and reliability through testing, using design patterns such as CQRS, event-driven architecture, and feature flags. Follow hexagonal architecture and Domain-Driven Design (DDD) principles, and employ Continuous Integration/Continuous Deployment (CI/CD) practices with daily deployments.",
    ],
    technologies: [
      { name: "JavaScript", icon: "/cat.webp" },
      { name: "React", icon: "/cat.webp" },
      { name: "Node.js", icon: "/cat.webp" },
      { name: "Jest", icon: "/cat.webp" },
      { name: "MongoDB", icon: "/cat.webp" },
      { name: "Redis", icon: "/cat.webp" },
      { name: "Docker", icon: "/cat.webp" },
      { name: "Github Actions", icon: "/cat.webp" },
      { name: "Datadog", icon: "/cat.webp" },
    ],
  },
  {
    company: "CoverWallet, an Aon company",
    logo: "/cat.webp",
    role: "Senior Software Engineer",
    period: "Feb 2019 - May 2024",
    website: "https://www.coverwallet.com/",
    points: [
      "Create internal libraries, making them independent of any specific framework so that all microservices in the platform could utilize them.",
      "Integrate Feature Flag systems, Observability, Cloud Native Development, and Trunk-based development practices, which helped teams deliver software with a greater quality and reliability.",
      "Optimize import and export processes by designing ETLs to reduce manual work for agents, achieving over 80% time savings. Create of a backoffice to visualize, execute, and monitor them in real-time.",
      "Design and implement bridges between cloud systems like GCP and Salesforce, enabling real-time communication via events between both solutions.",
      "Enhanced a public API to enable external developers to interact with the platform easily.",
      "Develop matching systems between agents and end customers to allocate the most suitable agent based on customer profiles.",
    ],
    technologies: [
      { name: "TypeScript", icon: "/cat.webp" },
      { name: "Node.js", icon: "/cat.webp" },
      { name: "NestJS", icon: "/cat.webp" },
      { name: "Jest", icon: "/cat.webp" },
      { name: "MongoDB", icon: "/cat.webp" },
      { name: "Redis", icon: "/cat.webp" },
      { name: "Docker", icon: "/cat.webp" },
      { name: "Kubernetes", icon: "/cat.webp" },
      { name: "CircleCI", icon: "/cat.webp" },
      { name: "Datadog", icon: "/cat.webp" },
    ],
  },
];

const projects = [
  {
    title: "Task Management App",
    icon: "/cat.webp",
    description:
      "A full-stack application for managing tasks and projects, featuring real-time updates and team collaboration tools.",
    technologies: [
      { name: "React", icon: "/cat.webp" },
      { name: "Node.js", icon: "/cat.webp" },
      { name: "MongoDB", icon: "/cat.webp" },
      { name: "Socket.io", icon: "/cat.webp" },
    ],
    github: "https://github.com/alberthernandez/task-management-app",
    stars: 124,
  },
  {
    title: "E-commerce Platform",
    icon: "/cat.webp",
    description:
      "A scalable e-commerce solution with features like product management, user authentication, and payment integration.",
    technologies: [
      { name: "Next.js", icon: "/cat.webp" },
      { name: "TypeScript", icon: "/cat.webp" },
      { name: "Stripe", icon: "/cat.webp" },
      { name: "PostgreSQL", icon: "/cat.webp" },
    ],
    github: "https://github.com/alberthernandez/ecommerce-platform",
    stars: 89,
  },
  {
    title: "Weather Forecast App",
    icon: "/cat.webp",
    description:
      "A mobile application providing accurate weather forecasts using geolocation and integrating with a weather API.",
    technologies: [
      { name: "React Native", icon: "/cat.webp" },
      { name: "Redux", icon: "/cat.webp" },
      { name: "OpenWeatherMap API", icon: "/cat.webp" },
    ],
    github: "https://github.com/alberthernandez/weather-forecast-app",
    stars: 56,
  },
];

export default function Portfolio() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark:bg-gray-900 dark:text-gray-100">
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
        <div className="inline-flex h-14 items-center justify-between px-6 space-x-4">
          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center space-x-2"
          >
            <span className="font-bold text-lg text-primary">
              Albert Hernández
            </span>
          </button>
          <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
            <button
              onClick={() => scrollToSection("about-me")}
              className="hover:text-primary"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="hover:text-primary"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-primary"
            >
              Projects
            </button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full group hover:bg-transparent"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5 transition-transform duration-200 ease-in-out group-hover:rotate-12" />
            ) : (
              <Moon className="h-5 w-5 transition-transform duration-200 ease-in-out group-hover:rotate-12" />
            )}
          </Button>
        </div>
      </header>

      <main className="flex-1 pt-24">
        <section
          id="about"
          className="container py-8 md:py-12 lg:py-24 mx-auto"
        >
          <div className="mx-auto max-w-[980px] flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/3 flex justify-center items-center">
              <Image
                src="/perfil.webp"
                alt="Albert Hernández"
                width={250}
                height={250}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-2/3">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl mb-4 text-primary">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Albert Hernández
                </span>
              </h1>
              <p className="text-lg text-muted-foreground dark:text-gray-300 mb-6">
                Backend Software Engineer
              </p>
              <div className="flex space-x-4">
                <Link
                  href="mailto:albert@example.com"
                  aria-label="Email"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    role="img"
                    class="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                  >
                    <title>Gmail</title>
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/alberthernandez"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    role="img"
                    class="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </Link>
                <Link
                  href="https://linkedin.com/in/alberthernandez"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    role="img"
                    class="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com/alberthernandez"
                  aria-label="Twitter"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    role="img"
                    class="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                  >
                    <title>X</title>
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </Link>
                <Link
                  href="https://youtube.com/alberthernandez"
                  aria-label="YouTube"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    role="img"
                    class="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                  >
                    <title>YouTube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about-me"
          className="py-12 md:py-24 lg:py-24 bg-gray-50 dark:bg-gray-800"
        >
          <div className="container mx-auto max-w-[1042px]">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-12 text-left">
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
                <Code className="w-8 h-8 text-primary dark:text-primary-dark flex-shrink-0 mt-1" />
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
                <Users className="w-8 h-8 text-primary dark:text-primary-dark flex-shrink-0 mt-1" />
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
                <Lightbulb className="w-8 h-8 text-primary dark:text-primary-dark flex-shrink-0 mt-1" />
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
                <svg
                  className="w-8 h-8 text-primary dark:text-primary-dark flex-shrink-0 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <title>YouTube</title>
                  <path d="M23.498 6.186a2.963 2.963 0 0 0-2.084-2.084C19.963 3.5 12 3.5 12 3.5s-7.963 0-9.414.602A2.963 2.963 0 0 0 .502 6.186C0 7.638 0 12 0 12s0 4.362.502 5.814a2.963 2.963 0 0 0 2.084 2.084C4.037 20.5 12 20.5 12 20.5s7.963 0 9.414-.602a2.963 2.963 0 0 0 2.084-2.084C24 16.362 24 12 24 12s0-4.362-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z" />
                </svg>

                <div>
                  <h3 className="text-xl font-bold mb-2">Content Creator</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    In my free time, I create programming videos on{" "}
                    <a
                      href="https://www.youtube.com/@AlbertHernandez"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary dark:text-primary-dark hover:underline"
                    >
                      YouTube
                    </a>
                    , where I combine my passion for teaching with programming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="container py-8 md:py-12 lg:py-24 mx-auto"
        >
          <div className="mx-auto max-w-[980px] flex flex-col items-start gap-2">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl flex items-center mb-8 w-full justify-between text-primary">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Experience
              </span>
              <Briefcase className="ml-2 h-8 w-8" />
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
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <div className="text-sm text-muted-foreground dark:text-gray-400">
                        {exp.period}
                      </div>
                    </div>
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-lg text-primary hover:underline mb-4 group"
                    >
                      {exp.company}
                      <ExternalLink className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-sm leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={16}
                            height={16}
                            className="mr-1"
                          />
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

        <section id="projects" className="container mx-auto">
          <div className="mx-auto max-w-[980px] flex flex-col items-start gap-2">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl flex items-center mb-8 w-full justify-between text-primary">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Projects
              </span>
              <Code className="ml-2 h-8 w-8" />
            </h2>
            <div className="space-y-8 w-full">
              {projects.map(project => (
                <div
                  key={project.title}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <Image
                        src={project.icon}
                        alt={`${project.title} icon`}
                        width={40}
                        height={40}
                        className="mr-4"
                      />
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-5 h-5 mr-1 fill-current" />
                      <span>{project.stars}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          width={16}
                          height={16}
                          className="mr-1"
                        />
                        <span className="text-xs font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:underline"
                  >
                    <svg
                      role="img"
                      className="fill-current mr-2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    View on GitHub
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 md:py-12">
        <div className="container mx-auto max-w-[1042px] flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm leading-loose text-muted-foreground dark:text-gray-400 mb-4 md:mb-0">
            Built by Albert Hernández. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="mailto:albert@example.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary"
            >
              <svg
                role="img"
                className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <title>Gmail</title>
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </Link>
            <Link
              href="https://github.com/alberthernandez"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary"
            >
              <svg
                role="img"
                className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com/in/alberthernandez"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary"
            >
              <svg
                role="img"
                className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com/alberthernandez"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary"
            >
              <svg
                role="img"
                className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </Link>
            <Link
              href="https://youtube.com/alberthernandez"
              aria-label="YouTube"
              className="text-muted-foreground hover:text-primary"
            >
              <svg
                role="img"
                className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <title>YouTube</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
