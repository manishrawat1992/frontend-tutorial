import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

// Import and init Sentry SDK
import * as Sentry from "@sentry/react";

Sentry.init({
  //dsn: "https://d0e21a8c272c18930d99436c16e28333@811sensei.kotak811.com/14",
  dsn: "https://b71dda2fa11cff76a2f74c4194c4ca6c@811sentry.uat.kotak811.com/4",
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  //replaysSessionSampleRate: 0.1,
   replaysOnErrorSampleRate: 1.0,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);