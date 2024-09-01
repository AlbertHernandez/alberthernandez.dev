import { Lightbulb as LucideLightbulb } from "lucide-react";
import React from "react";

import { IconProps } from "./types";

export const Lightbulb: React.FC<IconProps> = ({ ...props }) => {
  return <LucideLightbulb {...props} />;
};
