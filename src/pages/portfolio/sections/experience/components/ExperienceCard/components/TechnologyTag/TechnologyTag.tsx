import React from "react";

interface TechnologyTagProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  className?: string;
}

const TechnologyTag: React.FC<TechnologyTagProps> = ({
  name,
  icon,
  color,
  className = "",
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const baseStyle =
    "flex items-center px-3 py-2 rounded-lg transition-colors duration-200";
  const bgColor = isHovered ? `${color}33` : "#6767671A";

  return (
    <span
      role="status"
      aria-label={`Technology: ${name}`}
      className={`${baseStyle} ${className}`}
      style={{ backgroundColor: bgColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <span
        className="w-4 h-4 mr-1.5 flex items-center justify-center"
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="text-xs font-medium">{name}</span>
    </span>
  );
};

export default TechnologyTag;
