// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
// import * as Sentry from "@sentry/node"
// import {nodeProfilingIntegration} from "@sentry/profiling-node"

// Sentry.init({
//   dsn: "https://24b0f79b57fe7d151d28e75d896b5d16@o4510183345160192.ingest.us.sentry.io/4510183354138624",
//   integrations:[
//     nodeProfilingIntegration(),
//   ]
//   // Setting this option to true will send default PII data to Sentry.
//   // For example, automatic IP address collection on events
//   sendDefaultPii: true,
// });


import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://24b0f79b57fe7d151d28e75d896b5d16@o4510183345160192.ingest.us.sentry.io/4510183354138624",
  integrations: [
    nodeProfilingIntegration(), // ✅ Make sure this has a comma after the array
  ],
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

