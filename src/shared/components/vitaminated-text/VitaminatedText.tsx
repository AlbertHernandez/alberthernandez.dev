import React, { Fragment } from "react";

interface VitaminatedTextProps {
  text: string;
}

export const VitaminatedText: React.FC<VitaminatedTextProps> = ({ text }) => {
  const parts = text.split(/(<highlight>.*?<\/highlight>)/);

  return (
    <span className="vitaminatedText" role="text">
      {parts.map((part, index) => {
        if (part.startsWith("<highlight>") && part.endsWith("</highlight>")) {
          const highlightedText = part
            .replace("<highlight>", "")
            .replace("</highlight>", "");
          return (
            <mark
              key={index}
              className="font-bold bg-transparent text-[color:#5BC0BE]"
              aria-label={`Emphasized: ${highlightedText}`}
            >
              {highlightedText}
            </mark>
          );
        }
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </span>
  );
};
