import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import DummyPage from "@/app/dummy-page";

test("DummyPage", () => {
  render(<DummyPage />);
  expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
});
