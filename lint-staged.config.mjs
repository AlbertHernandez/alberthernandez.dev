const config = {
  "**/*.{ts?(x),mts}": () => "tsc",
  "*.{js,jsx,mjs,cjs,ts,tsx,mts}": ["npm run lint", "vitest related --run"],
  "*.{md,json}": "prettier --write",
  "*": "npm run typos",
  "*.{yml,yaml}": "npm run lint:yaml",
};

export default config;
