import { Sun as LucideSun } from "lucide-react";
import React from "react";

import { IconProps } from "./types.ts";

export const Sun: React.FC<IconProps> = ({ ...props }) => {
  return <LucideSun {...props} />;
};
