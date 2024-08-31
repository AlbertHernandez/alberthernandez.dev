import { Code as LucideCode } from "lucide-react";
import React from "react";

import { IconProps } from "./types";

export const Code: React.FC<IconProps> = ({ className, ...props }) => {
  return <LucideCode className={className} {...props} />;
};
