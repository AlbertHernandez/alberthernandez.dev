"use client";

import { track } from "@vercel/analytics/react";
import Link from "next/link";

import { useEffect } from "react";

import { ArrowLeft } from "@/shared/icons";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
    track("Global Error", {
      error: error.message,
      stack: error.stack || "",
      digest: error.digest || "",
    });
  }, [error]);

  return (
    <html>
      <body>
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
          <div className="container mx-auto max-w-[1042px] text-center">
            <h1 className="text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Oops!
              </span>
            </h1>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-300 mb-8">
              We apologize for the inconvenience. Our team has been notified and
              is working on fixing the issue.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => reset()}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Try again
              </button>
              <Link href="/" className="inline-block group">
                <button
                  className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                  aria-label="Return to homepage"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  <span>Back to Home</span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
