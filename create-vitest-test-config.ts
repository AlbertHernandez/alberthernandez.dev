import { loadEnv } from "vite";
import { InlineConfig } from "vitest";

export const createVitestTestConfig = (testingType: string): InlineConfig => {
  return {
    environment: "jsdom",
    root: "./",
    globals: true,
    isolate: false,
    passWithNoTests: true,
    include: [`tests/${testingType}/**/*.test.ts`],
    env: loadEnv("test", process.cwd(), ""),
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      reportsDirectory: `coverage/${testingType}`,
      include: ["src/**/*.ts"],
    },
  };
};
