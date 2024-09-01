import { Code as LucideCode } from "lucide-react";
import React from "react";

import { IconProps } from "./types.ts";

export const Code: React.FC<IconProps> = ({ ...props }) => {
  return <LucideCode {...props} />;
};
