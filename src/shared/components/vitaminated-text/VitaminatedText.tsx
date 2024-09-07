import React from "react";

interface VitaminatedTextProps {
  text: string;
}

export const VitaminatedText: React.FC<VitaminatedTextProps> = ({ text }) => {
  const parts = text.split(/(<highlight>.*?<\/highlight>)/);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("<highlight>") && part.endsWith("</highlight>")) {
          const highlightedText = part
            .replace("<highlight>", "")
            .replace("</highlight>", "");
          return (
            <span key={index} className="font-bold text-blue-500">
              {highlightedText}
            </span>
          );
        }
        return part;
      })}
    </>
  );
};
