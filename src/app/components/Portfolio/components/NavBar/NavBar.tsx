"use client";

import React from "react";

import { useScrollOpacity, useSmoothScroll } from "./hooks";

export const NavBar: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const { opacity } = useScrollOpacity();

  const NAV_BUTTON_CLASSES =
    "transition-all hover:scale-110 py-2 px-3 max-[440px]:py-1 max-[440px]:px-2 rounded-full text-gray-300 hover:text-white whitespace-nowrap text-center text-sm max-[440px]:text-xs";

  return (
    <header
      className="fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out top-4 rounded-full"
      style={{
        backgroundColor: `rgba(30, 40, 54, ${opacity * 0.9})`,
        borderColor: `rgba(75, 85, 99, ${opacity * 0.3})`,
        borderWidth: "1px",
        borderStyle: "solid",
        backdropFilter: `blur(${opacity * 8}px)`,
      }}
      role="banner"
    >
      <nav
        className="flex items-center justify-between px-6 max-[440px]:px-2 transition-all duration-300 ease-in-out h-12 max-[440px]:h-8"
        aria-label="Main navigation"
      >
        <ul className="flex items-center space-x-4 max-[440px]:space-x-1 text-sm max-[440px]:text-xs font-medium list-none m-0 p-0">
          <li>
            <button
              onClick={() => scrollTo("about-me")}
              className={`${NAV_BUTTON_CLASSES} hover:bg-[#2a3749]`}
              aria-label="Scroll to About Me section"
            >
              About Me
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("experience")}
              className={`${NAV_BUTTON_CLASSES} hover:bg-[#2a3749]`}
              aria-label="Scroll to Experience section"
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("education")}
              className={`${NAV_BUTTON_CLASSES} hover:bg-[#2a3749]`}
              aria-label="Scroll to Education section"
            >
              Education
            </button>
          </li>
          <li>
            <a
              href="/curriculum.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${NAV_BUTTON_CLASSES} hover:bg-[#2a3749] inline-block`}
              aria-label="Open CV in a new tab"
              onClick={e => {
                e.preventDefault();
                window.open("/curriculum.pdf", "_blank", "noopener,noreferrer");
              }}
            >
              CV
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
