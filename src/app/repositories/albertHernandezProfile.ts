import { Profile } from "@/shared/types";
import { getYearsFromDate } from "@/shared/utils/getYearsFromDate.ts";

const firstJobStartDate = new Date("2019-02-01");

const yearsOfExperience = getYearsFromDate(firstJobStartDate);

const title = "Backend Software Engineer";

const location = "Spain";

export const albertHernandezProfile: Profile = {
  name: "Albert Hernández",
  title,
  yearsOfExperience,
  location,
  email: "alberthernandezdev@gmail.com",
  socialPlatformLinks: [
    {
      name: "GitHub",
      url: "https://github.com/AlbertHernandez",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/albert-hernandez-dev",
    },
    {
      name: "X",
      url: "https://x.com/AlbertHernandev",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@AlbertHernandez",
    },
  ],
  image: "/albert.webp",
  description: `I'm a passionate ${title} based in ${location}, with over ${yearsOfExperience} years of experience in building scalable and efficient systems. I also create content on YouTube about web programing. Let's connect!`,
  about: {
    introduction: `More than ${yearsOfExperience} years of experience as a ${title}. Working with product teams focused on the end customer as well as platform teams.`,
    highlights: [
      {
        icon: "Code",
        title: "Backend Developer",
        description:
          "Software Engineer with expertise in backend services, driving efficiency and scalability in complex systems to support millions of users.",
      },
      {
        icon: "Users",
        title: "Cross-functional Collaborator",
        description:
          "With experience in frontend, backend, and SRE teams, I enjoy collaborating with cross-functional teams to bring innovative ideas to life.",
      },
      {
        icon: "Lightbulb",
        title: "Value-Driven Solutions",
        description:
          "I am passionate about working in product and platform teams, creating digital solutions that deliver value and impact end users.",
      },
      {
        icon: "YouTube",
        title: "Content Creator",
        description:
          "In my free time, I create programming videos on YouTube, where I combine my passion for teaching with programming.",
      },
    ],
  },
  workExperiences: [
    {
      company: {
        name: "Edpuzzle",
        logo: "/edpuzzle.webp",
        website: "https://edpuzzle.com",
      },
      jobTitle: "Senior Software Engineer",
      duration: {
        start: new Date("2024-05-01"),
      },
      responsibilities: [
        "Develop an education platform used by millions of teachers and students worldwide, featuring high-performance systems with over 300 million requests per day.",
        "Create search and recommendation tools enabling teachers to discover new materials for their students according to their profiles and preferences.",
        "Ensure code quality and reliability through testing, using design patterns such as CQRS, event-driven architecture, and feature flags. Follow hexagonal architecture and Domain-Driven Design (DDD) principles, and employ Continuous Integration/Continuous Deployment (CI/CD) practices with daily deployments.",
      ],
      technologiesIds: [
        "JavaScript",
        "TypeScript",
        "React",
        "NodeJS",
        "Jest",
        "MongoDB",
        "Redis",
        "Docker",
        "GitHubActions",
        "AmazonWebServices",
        "Datadog",
      ],
    },
    {
      company: {
        name: "CoverWallet, an Aon company",
        logo: "/coverwallet.webp",
        website: "https://www.coverwallet.com",
      },
      jobTitle: "Senior Software Engineer",
      duration: {
        start: new Date("2019-02-01"),
        end: new Date("2024-05-01"),
      },
      responsibilities: [
        "Create internal libraries, making them independent of any specific framework so that all microservices in the platform could utilize them.",
        "Integrate Feature Flag systems, Observability, Cloud Native Development, and Trunk-based development practices, which helped teams deliver software with a greater quality and reliability.",
        "Optimize import and export processes by designing ETLs to reduce manual work for agents, achieving over 80% time savings. Create of a backoffice to visualize, execute, and monitor them in real-time.",
        "Design and implement bridges between cloud systems like GCP and Salesforce, enabling real-time communication via events between both solutions.",
        "Enhanced a public API to enable external developers to interact with the platform easily.",
        "Develop matching systems between agents and end customers to allocate the most suitable agent based on customer profiles.",
      ],
      technologiesIds: [
        "JavaScript",
        "TypeScript",
        "NodeJS",
        "NestJS",
        "Jest",
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Kubernetes",
        "CircleCI",
        "GoogleCloudPlatform",
        "Datadog",
      ],
    },
  ],
  educationExperiences: [
    {
      institution: {
        name: "Universitat Politècnica de València (UPV)",
        logo: "/upv.webp",
        website: "https://www.upv.es",
      },
      degree: "Bachelor's Degree in Computer Science",
      duration: {
        start: firstJobStartDate,
        end: new Date("2019-06-30"),
      },
    },
  ],
} as const;
