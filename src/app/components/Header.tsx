import React from "react";

import { ThemeToggleButton } from "@/app/components/ThemeToggleButton";
import { useDelayedVisibility } from "@/shared/hooks";

interface HeaderProps {
  scrollTo: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ scrollTo }) => {
  const { isVisible } = useDelayedVisibility();

  return (
    <header
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-500 ease-in-out ${
        isVisible ? "top-4 opacity-100" : "-top-full opacity-0"
      }`}
    >
      <nav
        className="inline-flex h-14 items-center justify-between px-6 space-x-4"
        aria-label="Main"
      >
        <button
          onClick={() => scrollTo("about")}
          className="flex items-center space-x-2"
          aria-label="Go to About section"
        >
          <span className="font-bold text-lg text-primary transition-all ease-in-out hover:scale-110">
            Albert Hernández
          </span>
        </button>
        <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
          <button
            onClick={() => scrollTo("about-me")}
            className="text-primary transition-all ease-in-out hover:scale-110"
          >
            About Me
          </button>
          <button
            onClick={() => scrollTo("experience")}
            className="text-primary transition-all ease-in-out hover:scale-110"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo("education")}
            className="text-primary transition-all ease-in-out hover:scale-110"
          >
            Education
          </button>
        </div>
        <div className="relative">
          <ThemeToggleButton className="group transition-all ease-in-out" />
        </div>
      </nav>
    </header>
  );
};
