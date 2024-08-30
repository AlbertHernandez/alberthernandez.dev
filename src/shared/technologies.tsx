import { Icon, JavaScript, NodeJS, React, TypeScript } from "@/shared/icons";

export interface Technology {
  name: string;
  color: string;
  icon: Icon;
}

export type TechnologyKey = "NodeJS" | "JavaScript" | "React" | "TypeScript";

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
} as const;
