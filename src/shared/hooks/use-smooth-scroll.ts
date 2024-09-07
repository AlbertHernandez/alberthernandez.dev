import { useCallback } from "react";

export const useSmoothScroll = () => {
  const scrollTo = useCallback((sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return { scrollTo };
};
