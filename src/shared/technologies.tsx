import {
  AmazonWebServices,
  CircleCI,
  Datadog,
  Docker,
  GitHubActions,
  GoogleCloudPlatform,
  Icon,
  JavaScript,
  Jest,
  Kubernetes,
  MongoDB,
  NestJS,
  NodeJS,
  PostgreSQL,
  React,
  Redis,
  TypeScript,
} from "@/shared/icons";

export interface Technology {
  name: string;
  color: string;
  icon: Icon;
}

export type TechnologyId =
  | "NodeJS"
  | "JavaScript"
  | "React"
  | "TypeScript"
  | "Jest"
  | "MongoDB"
  | "Redis"
  | "Docker"
  | "Kubernetes"
  | "CircleCI"
  | "GoogleCloudPlatform"
  | "Datadog"
  | "GitHubActions"
  | "AmazonWebServices"
  | "NestJS"
  | "PostgreSQL";

export const Technologies: { [key in TechnologyId]: Technology } = {
  NodeJS: {
    name: "Node.js",
    color: "#43853d",
    icon: <NodeJS />,
  },
  JavaScript: {
    name: "JavaScript",
    color: "#f7df1e",
    icon: <JavaScript />,
  },
  React: {
    name: "React",
    color: "#61DAFB",
    icon: <React />,
  },
  TypeScript: {
    name: "TypeScript",
    color: "#3178C6",
    icon: <TypeScript />,
  },
  Jest: {
    name: "Jest",
    color: "#99425b",
    icon: <Jest />,
  },
  MongoDB: {
    name: "MongoDB",
    color: "#47A248",
    icon: <MongoDB />,
  },
  Redis: {
    name: "Redis",
    color: "#C6302B",
    icon: <Redis />,
  },
  Docker: {
    name: "Docker",
    color: "#2496ED",
    icon: <Docker />,
  },
  Kubernetes: {
    name: "Kubernetes",
    color: "#326DE6",
    icon: <Kubernetes />,
  },
  CircleCI: {
    name: "CircleCI",
    color: "#727272",
    icon: <CircleCI />,
  },
  GoogleCloudPlatform: {
    name: "Google Cloud Platform",
    color: "#4285F4",
    icon: <GoogleCloudPlatform />,
  },
  Datadog: {
    name: "Datadog",
    color: "#632CA6",
    icon: <Datadog />,
  },
  GitHubActions: {
    name: "GitHub Actions",
    color: "#2088FF",
    icon: <GitHubActions />,
  },
  AmazonWebServices: {
    name: "Amazon Web Services",
    color: "#FF9900",
    icon: <AmazonWebServices />,
  },
  NestJS: {
    name: "NestJS",
    color: "#E0234E",
    icon: <NestJS />,
  },
  PostgreSQL: {
    name: "PostgreSQL",
    color: "#4169E1",
    icon: <PostgreSQL />,
  },
} as const;
