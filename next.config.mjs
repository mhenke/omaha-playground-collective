import { withSentryConfig } from "@sentry/nextjs";
import { withAxiom } from "next-axiom";
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  output: "standalone",
  images: {
    domains: [
      "znmzqhaphohpkdunuiqu.supabase.co",
      "avatars.githubusercontent.com",
    ], // Add your image domain here
  },
};

const headers = [
  {
    source: "/(.*)",
    headers: [
      {
        key: "Content-Security-Policy",
        value:
          "default-src 'self'; font-src 'self' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
      },
      {
        key: "X-Frame-Options",
        value: "DENY",
      },
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        key: "Referrer-Policy",
        value: "origin-when-cross-origin",
      },
      {
        key: "Permissions-Policy",
        value:
          "camera=(); battery=(self); geolocation=(); microphone=('https://somewhere.com')",
      },
    ],
  },
  // Add more header configurations as needed for different paths
];

export default withSentryConfig(
  withAxiom({
    ...config,
    poweredByHeader: false,
    headers: async () => {
      return Promise.resolve(headers);
    },
  }),
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "mike-henke",
    project: "omaha-playground-collective",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  },
);
