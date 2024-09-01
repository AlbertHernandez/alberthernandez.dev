import { Code as LucideCode } from "lucide-react";
import React from "react";

import { IconProps } from "./types";

export const Code: React.FC<IconProps> = ({ ...props }) => {
  return <LucideCode {...props} />;
};
