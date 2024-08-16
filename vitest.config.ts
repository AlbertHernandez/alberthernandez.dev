import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

import { createVitestTestConfig } from "./create-vitest-test-config";

export default defineConfig({
  test: createVitestTestConfig("unit"),
  plugins: [react()],
});
