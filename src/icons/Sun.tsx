import { Sun as LucideSun } from "lucide-react";
import React from "react";

import { IconProps } from "./types";

export const Sun: React.FC<IconProps> = ({ ...props }) => {
  return <LucideSun {...props} />;
};
