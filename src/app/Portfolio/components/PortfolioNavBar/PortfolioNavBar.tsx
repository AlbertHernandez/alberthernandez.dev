"use client";

import React from "react";

import { useScrollOpacity, useSmoothScroll } from "./hooks";

export const PortfolioNavBar: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const { opacity } = useScrollOpacity();

  const NAV_BUTTON_CLASSES =
    "transition-all hover:scale-110 py-2 px-3 rounded-full text-gray-300 hover:text-white";

  return (
    <header
      className="fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out top-4 rounded-full hidden md:block"
      style={{
        backgroundColor: `rgba(30, 40, 54, ${opacity * 0.9})`,
        borderColor: `rgba(75, 85, 99, ${opacity * 0.3})`,
        borderWidth: "1px",
        borderStyle: "solid",
        backdropFilter: `blur(${opacity * 8}px)`,
      }}
    >
      <nav
        className="inline-flex items-center justify-between px-6 space-x-4 transition-all duration-300 ease-in-out h-12"
        aria-label="Main"
      >
        <div className="flex items-center space-x-4 text-sm font-medium">
          <button
            onClick={() => scrollTo("about-me")}
            className={`${NAV_BUTTON_CLASSES} hover:bg-[#2a3749]`}
          >
            About Me
          </button>
          <button
            onClick={() => scrollTo("experience")}
            className={`${NAV_BUTTON_CLASSES} hover:bg-[#2a3749]`}
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo("education")}
            className={`${NAV_BUTTON_CLASSES} hover:bg-[#2a3749]`}
          >
            Education
          </button>
        </div>
      </nav>
    </header>
  );
};
