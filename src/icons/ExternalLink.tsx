import { ExternalLink as LucideExternalLink } from "lucide-react";
import React from "react";

import { IconProps } from "./types.ts";

export const ExternalLink: React.FC<IconProps> = ({ ...props }) => {
  return <LucideExternalLink {...props} />;
};
