import { useEffect, useState } from "react";

export const useScrollOpacity = (threshold: number = 50) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const calculateOpacity = () => {
      const newOpacity = Math.min(window.scrollY / threshold, 1);
      setOpacity(newOpacity);
    };

    calculateOpacity();

    const handleScroll = () => {
      calculateOpacity();
    };

    const handleResize = () => {
      calculateOpacity();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [threshold]);

  return { opacity };
};
