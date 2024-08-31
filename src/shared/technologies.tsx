import {
  CircleCI,
  Docker,
  GoogleCloudPlatform,
  Icon,
  JavaScript,
  Jest,
  Kubernetes,
  MongoDB,
  NodeJS,
  React,
  Redis,
  TypeScript,
} from "@/shared/icons";

export interface Technology {
  name: string;
  color: string;
  icon: Icon;
}

export type TechnologyKey =
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
  | "GoogleCloudPlatform";

export const Technologies: { [key in TechnologyKey]: Technology } = {
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
} as const;
