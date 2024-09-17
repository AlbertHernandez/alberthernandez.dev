"use client";

import Link from "next/link";

import React from "react";

import { useScrollOpacity, useSmoothScroll } from "./hooks";

export const NavBar: React.FC = () => {
  const { scrollTo } = useSmoothScroll();
  const { opacity } = useScrollOpacity();

  const NAV_BUTTON_CLASSES =
    "transition-all hover:scale-110 py-2 px-3 rounded-full text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white";

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
      role="banner"
    >
      <nav
        className="inline-flex items-center justify-between px-6 space-x-4 transition-all duration-300 ease-in-out h-12"
        aria-label="Main navigation"
      >
        <ul className="flex items-center space-x-4 text-sm font-medium list-none m-0 p-0">
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
            <Link
              href="/curriculum.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${NAV_BUTTON_CLASSES} hover:bg-[#2a3749]`}
              aria-label="Open CV in a new tab"
            >
              CV
              <span className="sr-only">(opens in a new tab)</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
