import { useEffect, useState } from "react";

export const useScrollOpacity = (threshold: number = 50) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newOpacity = Math.min(window.scrollY / threshold, 1);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { opacity };
};
