"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Briefcase,
  Code,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  Moon,
  Star,
  Sun,
  Twitter,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./components/button";

const experiences = [
  {
    company: "TechCorp Inc.",
    logo: "/techcorp-logo.png",
    role: "Senior Software Engineer",
    period: "Jan 2018 - Present",
    points: [
      "Led the development and implementation of a groundbreaking microservices-based architecture that revolutionized our platform's scalability and reliability. This ambitious project involved a complete overhaul of our existing monolithic system, requiring deep expertise in distributed systems design, cloud technologies, and agile methodologies. By leveraging cutting-edge technologies such as Kubernetes for container orchestration, Istio for service mesh, and Prometheus for monitoring, we were able to create a highly resilient and scalable infrastructure. The new architecture not only improved our system's performance, reducing downtime by an impressive 35%, but also significantly enhanced our ability to rapidly deploy new features and updates. This transformation allowed us to handle a 300% increase in user load without any degradation in performance, positioning us as a leader in our industry. Additionally, the modular nature of the microservices architecture enabled our development teams to work more efficiently, fostering innovation and reducing time-to-market for new features. The success of this project has become a case study within the company, showcasing the power of modern software architecture in driving business growth and technological advancement.",
    ],
    technologies: [
      { name: "React", icon: "/react-icon.svg" },
      { name: "Node.js", icon: "/nodejs-icon.svg" },
      { name: "AWS", icon: "/aws-icon.svg" },
      { name: "Docker", icon: "/docker-icon.svg" },
      { name: "Kubernetes", icon: "/kubernetes-icon.svg" },
    ],
  },
  {
    company: "InnoSoft Solutions",
    logo: "/innosoft-logo.png",
    role: "Software Developer",
    period: "Mar 2015 - Dec 2017",
    points: [
      "Developed and maintained web applications for a diverse client base, focusing on responsive design and cross-browser compatibility.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions on time and within budget.",
      "Optimized database queries, resulting in a 30% improvement in application performance.",
    ],
    technologies: [
      { name: "Angular", icon: "/angular-icon.svg" },
      { name: "Python", icon: "/python-icon.svg" },
      { name: "PostgreSQL", icon: "/postgresql-icon.svg" },
      { name: "Redis", icon: "/redis-icon.svg" },
    ],
  },
  {
    company: "StartUp Innovations",
    logo: "/startup-logo.png",
    role: "Junior Developer",
    period: "Jun 2013 - Feb 2015",
    points: [
      "Assisted in front-end development for various web and mobile applications.",
      "Participated in code reviews, improving code quality and learning best practices.",
      "Contributed to mobile app projects, gaining experience in cross-platform development.",
    ],
    technologies: [
      { name: "JavaScript", icon: "/javascript-icon.svg" },
      { name: "React Native", icon: "/react-native-icon.svg" },
      { name: "Firebase", icon: "/firebase-icon.svg" },
    ],
  },
];

const projects = [
  {
    title: "Task Management App",
    icon: "/task-management-icon.svg",
    description:
      "A full-stack application for managing tasks and projects, featuring real-time updates and team collaboration tools.",
    technologies: [
      { name: "React", icon: "/react-icon.svg" },
      { name: "Node.js", icon: "/nodejs-icon.svg" },
      { name: "MongoDB", icon: "/mongodb-icon.svg" },
      { name: "Socket.io", icon: "/socketio-icon.svg" },
    ],
    github: "https://github.com/alberthernanded/task-management-app",
    stars: 124,
  },
  {
    title: "E-commerce Platform",
    icon: "/ecommerce-icon.svg",
    description:
      "A scalable e-commerce solution with features like product management, user authentication, and payment integration.",
    technologies: [
      { name: "Next.js", icon: "/nextjs-icon.svg" },
      { name: "TypeScript", icon: "/typescript-icon.svg" },
      { name: "Stripe", icon: "/stripe-icon.svg" },
      { name: "PostgreSQL", icon: "/postgresql-icon.svg" },
    ],
    github: "https://github.com/alberthernanded/ecommerce-platform",
    stars: 89,
  },
  {
    title: "Weather Forecast App",
    icon: "/weather-icon.svg",
    description:
      "A mobile application providing accurate weather forecasts using geolocation and integrating with a weather API.",
    technologies: [
      { name: "React Native", icon: "/react-native-icon.svg" },
      { name: "Redux", icon: "/redux-icon.svg" },
      { name: "OpenWeatherMap API", icon: "/openweathermap-icon.svg" },
    ],
    github: "https://github.com/alberthernanded/weather-forecast-app",
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
              Albert Hernanded
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
            <a
              href="/albert_hernanded_resume.pdf"
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
                src="/placeholder.svg?height=250&width=250"
                alt="Albert Hernanded"
                width={250}
                height={250}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-2/3">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl mb-4 text-primary">
                Albert Hernanded
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
                  href="https://github.com/alberthernanded"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/alberthernanded"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="https://twitter.com/alberthernanded"
                  aria-label="Twitter"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link
                  href="https://youtube.com/alberthernanded"
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
          className="container py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-gray-800/50 mx-auto"
        >
          <div className="mx-auto max-w-[980px]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl text-primary">
                About Me
              </h2>
              <Code className="h-8 w-8 text-primary" aria-hidden="true" />
            </div>
            <div className="space-y-6 text-left">
              <p className="text-lg leading-relaxed">
                I'm a Software Engineer{" "}
                <span role="img" aria-label="rocket">
                  🚀
                </span>{" "}
                from Spain{" "}
                <span role="img" aria-label="flag of Spain">
                  🇪🇸
                </span>
                , currently working{" "}
                <span role="img" aria-label="man technologist">
                  👨🏻‍💻
                </span>{" "}
                at Coverwallet, an Aon Company. My passion lies in creating
                innovative solutions and tackling complex problems in the world
                of technology.
              </p>
              <p className="text-lg leading-relaxed">
                As a passionate learner who loves code{" "}
                <span role="img" aria-label="coffee">
                  ☕︎
                </span>
                , you'll always find me exploring new technologies and staying
                up-to-date with the latest industry trends. I believe in
                continuous improvement and pushing the boundaries of what's
                possible in software development.
              </p>
              <p className="text-lg leading-relaxed">
                I've also started a YouTube channel where I create tutorials
                about Web Technologies like Node.js and JavaScript. I love
                sharing knowledge and believe it's the best way to grow{" "}
                <span role="img" aria-label="rocket">
                  🚀
                </span>
                . Through my tutorials, I aim to help other developers learn and
                advance in their careers.
              </p>
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
            Built by Albert Hernanded. All rights reserved.
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
              href="https://github.com/alberthernanded"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/alberthernanded"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com/alberthernanded"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://youtube.com/alberthernanded"
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
