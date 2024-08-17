import * as Sentry from "@sentry/nextjs";

Sentry.init({
  enabled: process.env.SENTRY_ENABLED === "true",
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0,
  replaysOnErrorSampleRate: 0,
  replaysSessionSampleRate: 0,
});
