import React from "react";

import { useScrollPosition, useSmoothScroll } from "@/shared/hooks";

import { ThemeToggleButton } from "./components";

export const PortfolioNavBar: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const { scrollPosition } = useScrollPosition();
  const NAV_BUTTON_CLASSES =
    "text-primary transition-all hover:scale-110 py-2 px-3 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-700/50";

  return (
    <header
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all ease-in-out top-4 rounded-full ${
        scrollPosition > 0
          ? "bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      style={{
        borderColor: `rgba(75, 85, 99, ${scrollPosition === 0 ? 0 : 0.3})`,
        borderWidth: "1px",
        borderStyle: "solid",
      }}
    >
      <nav
        className={`inline-flex items-center justify-between px-6 space-x-4 transition-all duration-300 ease-in-out h-12`}
        aria-label="Main"
      >
        <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
          <button
            onClick={() => scrollTo("about-me")}
            className={NAV_BUTTON_CLASSES}
          >
            About Me
          </button>
          <button
            onClick={() => scrollTo("experience")}
            className={NAV_BUTTON_CLASSES}
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo("education")}
            className={NAV_BUTTON_CLASSES}
          >
            Education
          </button>
          <ThemeToggleButton className="group transition-all ease-in-out" />
        </div>
      </nav>
    </header>
  );
};
