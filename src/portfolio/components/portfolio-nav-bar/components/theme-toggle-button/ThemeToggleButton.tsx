import React from "react";

import { Button } from "@/shared/components";
import useTheme from "@/shared/hooks/use-theme";
import { Moon, Sun } from "@/shared/icons";

interface ThemeToggleButtonProps {
  className?: string;
}

export const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  className = "",
}) => {
  const { toggleTheme, isLightTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`rounded-full hover:bg-transparent ${className}`}
    >
      <div
        className={`transition-transform duration-300 ${
          isLightTheme ? "hover:rotate-12" : "hover:-rotate-12"
        }`}
      >
        {isLightTheme ? (
          <Sun className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Moon className="h-5 w-5" aria-hidden="true" />
        )}
      </div>
    </Button>
  );
};
