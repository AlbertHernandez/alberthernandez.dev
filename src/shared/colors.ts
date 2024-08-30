export const Colors = {
  NodeJS: "#5FA04E",
  JavaScript: "#f7df1e",
  React: "#61DAFB",
  TypeScript: "#3178C6",
  Jest: "#99425b",
  MongoDB: "#47A248",
  Redis: "#C6302B",
  Docker: "#2496ED",
  GitHubActions: "#2088FF",
  AmazonWebServices: "#FF9900",
  Datadog: "#632CA6",
  NestJS: "#E0234E",
  PostgreSQL: "#4169E1",
  Kubernetes: "#326CE5",
  CircleCI: "#727272",
  GoogleCloudPlatform: "#4285F4",
} as const;

export type ColorKey = keyof typeof Colors;
