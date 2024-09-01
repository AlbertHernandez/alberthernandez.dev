import { Lightbulb as LucideLightbulb } from "lucide-react";
import React from "react";

import { IconProps } from "./types.ts";

export const Lightbulb: React.FC<IconProps> = ({ ...props }) => {
  return <LucideLightbulb {...props} />;
};
