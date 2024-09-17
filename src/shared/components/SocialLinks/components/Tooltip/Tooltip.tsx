"use client";

import React, {
  cloneElement,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";

interface TooltipProps {
  content: string;
  children: ReactElement<{
    onClick?: (event: React.MouseEvent<HTMLElement>) => Promise<void> | void;
  }>;
  duration?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  duration = 2000,
}) => {
  const [show, setShow] = useState(false);

  const showTooltip = useCallback(() => {
    setShow(true);
    setTimeout(() => setShow(false), duration);
  }, [duration]);

  useEffect(() => {
    return () => {
      setShow(false);
    };
  }, []);

  const childrenWithProps = cloneElement(children, {
    onClick: async (e: React.MouseEvent<HTMLElement>) => {
      showTooltip();
      if (children.props.onClick) {
        await children.props.onClick(e);
      }
    },
  });

  return (
    <div className="relative inline-flex items-center">
      {childrenWithProps}
      <div
        role="status"
        aria-live="polite"
        className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs rounded-full py-1 px-2 transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
          show ? "w-24 opacity-100" : "w-0 opacity-0"
        }`}
      >
        {content}
      </div>
    </div>
  );
};
