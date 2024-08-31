import Link from "next/link";

import React from "react";

import { GitHub, Gmail, LinkedIn, X, YouTube } from "@/shared/icons";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ElementType;
}

const socialLinks: SocialLink[] = [
  {
    name: "Email",
    href: "mailto:alberthernandezdev@gmail.com",
    icon: Gmail,
  },
  {
    name: "GitHub",
    href: "https://github.com/AlbertHernandez",
    icon: GitHub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/albert-hernandez-dev",
    icon: LinkedIn,
  },
  {
    name: "X",
    href: "https://x.com/AlbertHernandev",
    icon: X,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@AlbertHernandez",
    icon: YouTube,
  },
];

export const SocialLinks: React.FC = () => {
  const isMailLink = (href: string) => href.startsWith("mailto:");

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ name, href, icon: Icon }) => {
        const isMail = isMailLink(href);

        return (
          <Link
            key={href}
            href={href}
            aria-label={name}
            target={isMail ? undefined : "_blank"}
            rel={isMail ? undefined : "noopener"}
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Icon className="fill-current w-6 h-6 transform transition-transform duration-200 hover:scale-110" />
          </Link>
        );
      })}
    </div>
  );
};
