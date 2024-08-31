import { Users as LucideUsers } from "lucide-react";
import React from "react";

import { IconProps } from "./types";

export const Users: React.FC<IconProps> = ({ className, ...props }) => {
  return <LucideUsers className={className} {...props} />;
};
