import { useTheme as useNextTheme } from "next-themes";
import { useCallback, useMemo } from "react";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

const useTheme = () => {
  const { setTheme, resolvedTheme } = useNextTheme();

  const setLightTheme = useCallback(() => {
    setTheme(Theme.Light);
  }, [setTheme]);

  const setDarkTheme = useCallback(() => {
    setTheme(Theme.Dark);
  }, [setTheme]);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === Theme.Light ? Theme.Dark : Theme.Light);
  }, [setTheme, resolvedTheme]);

  const isLightTheme = useMemo(
    () => resolvedTheme === Theme.Light,
    [resolvedTheme],
  );
  const isDarkTheme = useMemo(
    () => resolvedTheme === Theme.Dark,
    [resolvedTheme],
  );

  return {
    setLightTheme,
    setDarkTheme,
    toggleTheme,
    isLightTheme,
    isDarkTheme,
  };
};

export default useTheme;
