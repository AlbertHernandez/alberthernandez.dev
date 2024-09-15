import React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Icon = React.ReactElement<IconProps>;

export type IconName =
  | "Code"
  | "ExternalLink"
  | "GitHub"
  | "Gmail"
  | "Lightbulb"
  | "LinkedIn"
  | "Users"
  | "X"
  | "YouTube";
