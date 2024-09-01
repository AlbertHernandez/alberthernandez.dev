import { useEffect, useState } from "react";

const useDelayedVisibility = (delay: number = 100) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return { isVisible };
};

export default useDelayedVisibility;
