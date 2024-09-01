import { Moon as LucideMoon } from "lucide-react";
import React from "react";

import { IconProps } from "./types";

export const Moon: React.FC<IconProps> = ({ ...props }) => {
  return <LucideMoon {...props} />;
};
