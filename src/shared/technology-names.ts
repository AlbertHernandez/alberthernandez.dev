export const TechnologyNames = {
  NodeJS: "Node.js",
  JavaScript: "JavaScript",
  React: "React",
  TypeScript: "TypeScript",
} as const;

export type TechnologyNameKey = keyof typeof TechnologyNames;
