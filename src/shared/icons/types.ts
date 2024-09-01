import React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Icon = React.ReactElement<IconProps>;

export type IconName =
  | "AmazonWebServices"
  | "CircleCI"
  | "Code"
  | "Datadog"
  | "Docker"
  | "ExternalLink"
  | "GitHub"
  | "GitHubActions"
  | "Gmail"
  | "GoogleCloudPlatform"
  | "JavaScript"
  | "Jest"
  | "Kubernetes"
  | "Lightbulb"
  | "LinkedIn"
  | "MongoDB"
  | "Moon"
  | "NestJS"
  | "NodeJS"
  | "PostgreSQL"
  | "React"
  | "Redis"
  | "Sun"
  | "TypeScript"
  | "Users"
  | "X"
  | "YouTube";
