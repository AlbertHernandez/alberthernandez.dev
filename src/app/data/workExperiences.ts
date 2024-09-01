import { WorkExperience } from "@/shared/types";

export const workExperiences: WorkExperience[] = [
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
] as const;
