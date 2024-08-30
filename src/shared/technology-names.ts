export const TechnologyNames = {
  NodeJS: "Node.js",
  JavaScript: "JavaScript",
  React: "React",
  TypeScript: "TypeScript",
  Jest: "Jest",
  MongoDB: "MongoDB",
  Redis: "Redis",
  Docker: "Docker",
  GitHubActions: "GitHub Actions",
  AmazonWebServices: "Amazon Web Services",
  Datadog: "Datadog",
  NestJS: "NestJS",
  PostgreSQL: "PostgreSQL",
  Kubernetes: "Kubernetes",
  CircleCI: "CircleCI",
  GoogleCloudPlatform: "Google Cloud Platform",
} as const;

export type TechnologyNameKey = keyof typeof TechnologyNames;
