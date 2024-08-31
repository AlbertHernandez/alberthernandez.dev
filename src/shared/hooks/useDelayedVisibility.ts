import { useEffect, useState } from "react";

export const useDelayedVisibility = (delay: number = 100) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return { isVisible };
};
