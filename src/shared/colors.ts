export const Colors = {
  NodeJS: "#5FA04E",
  JavaScript: "#f7df1e",
  React: "#61DAFB",
  TypeScript: "#3178C6",
} as const;

export type ColorKey = keyof typeof Colors;
