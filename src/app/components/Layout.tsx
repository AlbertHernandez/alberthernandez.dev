import React, { Suspense } from "react";

import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { useMount } from "@/shared/hooks";
import { Profile } from "@/shared/types";

interface LayoutProps {
  children: React.ReactNode;
  profile: Profile;
}

export const Layout: React.FC<LayoutProps> = ({ children, profile }) => {
  const { mounted } = useMount();

  if (!mounted) return;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark:bg-gray-900 dark:text-gray-100">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <Header profile={profile} />
      <main id="main-content" className="flex-1 pt-16">
        <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
          {children}
        </Suspense>
      </main>
      <Footer profile={profile} />
    </div>
  );
};