import { ArrowLeft as LucideArrowLeft } from "lucide-react";
import React from "react";

import { IconProps } from "./types";

export const ArrowLeft: React.FC<IconProps> = ({ ...props }) => {
  return <LucideArrowLeft {...props} />;
};
