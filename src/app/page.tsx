"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Briefcase,
  Code,
  ExternalLink,
  FileText,
  Github,
  Lightbulb,
  Linkedin,
  Mail,
  Moon,
  Star,
  Sun,
  Twitter,
  Users,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./components/button";

const experiences = [
  {
    company: "TechCorp Inc.",
    logo: "/cat.webp",
    role: "Senior Software Engineer",
    period: "Jan 2018 - Present",
    points: [
      "Led the development and implementation of a groundbreaking microservices-based architecture that revolutionized our platform's scalability and reliability. This ambitious project involved a complete overhaul of our existing monolithic system, requiring deep expertise in distributed systems design, cloud technologies, and agile methodologies. By leveraging cutting-edge technologies such as Kubernetes for container orchestration, Istio for service mesh, and Prometheus for monitoring, we were able to create a highly resilient and scalable infrastructure. The new architecture not only improved our system's performance, reducing downtime by an impressive 35%, but also significantly enhanced our ability to rapidly deploy new features and updates. This transformation allowed us to handle a 300% increase in user load without any degradation in performance, positioning us as a leader in our industry. Additionally, the modular nature of the microservices architecture enabled our development teams to work more efficiently, fostering innovation and reducing time-to-market for new features. The success of this project has become a case study within the company, showcasing the power of modern software architecture in driving business growth and technological advancement.",
    ],
    technologies: [
      { name: "React", icon: "/cat.webp" },
      { name: "Node.js", icon: "/cat.webp" },
      { name: "AWS", icon: "/cat.webp" },
      { name: "Docker", icon: "/cat.webp" },
      { name: "Kubernetes", icon: "/cat.webp" },
    ],
  },
  {
    company: "InnoSoft Solutions",
    logo: "/cat.webp",
    role: "Software Developer",
    period: "Mar 2015 - Dec 2017",
    points: [
      "Developed and maintained web applications for a diverse client base, focusing on responsive design and cross-browser compatibility.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions on time and within budget.",
      "Optimized database queries, resulting in a 30% improvement in application performance.",
    ],
    technologies: [
      { name: "Angular", icon: "/cat.webp" },
      { name: "Python", icon: "/cat.webp" },
      { name: "PostgreSQL", icon: "/cat.webp" },
      { name: "Redis", icon: "/cat.webp" },
    ],
  },
  {
    company: "StartUp Innovations",
    logo: "/cat.webp",
    role: "Junior Developer",
    period: "Jun 2013 - Feb 2015",
    points: [
      "Assisted in front-end development for various web and mobile applications.",
      "Participated in code reviews, improving code quality and learning best practices.",
      "Contributed to mobile app projects, gaining experience in cross-platform development.",
    ],
    technologies: [
      { name: "JavaScript", icon: "/cat.webp" },
      { name: "React Native", icon: "/cat.webp" },
      { name: "Firebase", icon: "/cat.webp" },
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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              className="hover:text-primary transition-colors"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-primary transition-colors"
            >
              Projects
            </button>
            <a
              href="/albert_hernandez_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary transition-colors"
            >
              <FileText className="w-4 h-4 mr-1" />
              Resume
            </a>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full group hover:bg-transparent"
          >
            {darkMode ? (
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
                src="/cat.webp"
                alt="Albert Hernández"
                width={250}
                height={250}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-2/3">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl mb-4 text-primary">
                Albert Hernández
              </h1>
              <p className="text-lg text-muted-foreground dark:text-gray-300 mb-6">
                Software Engineer | Innovator | Problem Solver
              </p>
              <div className="flex space-x-4">
                <Link
                  href="mailto:albert@example.com"
                  aria-label="Email"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Mail className="h-6 w-6" />
                </Link>
                <Link
                  href="https://github.com/alberthernandez"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/alberthernandez"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="https://twitter.com/alberthernandez"
                  aria-label="Twitter"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link
                  href="https://youtube.com/alberthernandez"
                  aria-label="YouTube"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about-me"
          className="py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800"
        >
          <div className="container mx-auto max-w-[980px]">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl text-primary dark:text-primary-dark mb-12 text-left">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Code className="w-8 h-8 text-primary dark:text-primary-dark flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Web Development Specialist
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I am a Software Engineer specializing in Web Development.
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
                    creating digital solutions that deliver value and positively
                    impact end users.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Youtube className="w-8 h-8 text-primary dark:text-primary-dark flex-shrink-0 mt-1" />
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
                    , where I share all the knowledge I'm learning with the
                    community.
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
              Experience
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
                    <p className="text-lg text-muted-foreground dark:text-gray-400 mb-4">
                      {exp.company}
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-4">
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

        <section
          id="projects"
          className="container py-8 md:py-12 lg:py-24 mx-auto"
        >
          <div className="mx-auto max-w-[980px] flex flex-col items-start gap-2">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl flex items-center mb-8 w-full justify-between text-primary">
              Projects
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
                    <Github className="w-4 h-4 mr-1" />
                    View on GitHub
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 md:py-12 mb-8">
        <div className="container mx-auto max-w-[980px] flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm leading-loose text-muted-foreground dark:text-gray-400 mb-4 md:mb-0">
            Built by Albert Hernández. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="mailto:albert@example.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/alberthernandez"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/alberthernandez"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com/alberthernandez"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://youtube.com/alberthernandez"
              aria-label="YouTube"
              className="text-muted-foreground hover:text-primary"
            >
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
