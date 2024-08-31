import { WorkExperience } from "@/app/types.ts";
import { Technologies } from "@/shared/technologies.tsx";

export const workExperiences: WorkExperience[] = [
  {
    companyName: "Edpuzzle",
    companyLogo: "/edpuzzle.webp",
    companyWebsite: "https://edpuzzle.com",
    jobTitle: "Senior Software Engineer",
    employmentPeriod: {
      start: new Date("2024-05-01"),
    },
    responsibilities: [
      "Develop an education platform used by millions of teachers and students worldwide, featuring high-performance systems with over 300 million requests per day.",
      "Create search and recommendation tools enabling teachers to discover new materials for their students according to their profiles and preferences.",
      "Ensure code quality and reliability through testing, using design patterns such as CQRS, event-driven architecture, and feature flags. Follow hexagonal architecture and Domain-Driven Design (DDD) principles, and employ Continuous Integration/Continuous Deployment (CI/CD) practices with daily deployments.",
    ],
    technologiesUsed: [
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
    companyName: "CoverWallet, an Aon company",
    companyLogo: "/coverwallet.webp",
    companyWebsite: "https://www.coverwallet.com",
    jobTitle: "Senior Software Engineer",
    employmentPeriod: {
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
    technologiesUsed: [
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
