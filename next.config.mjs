/** @type {import('next').NextConfig} */
import { createRequire } from "module";

// Check if element-tagger is available
function isElementTaggerAvailable() {
  try {
    const require = createRequire(import.meta.url);
    require.resolve("@softgenai/element-tagger");
    return true;
  } catch {
    return false;
  }
}

// Build turbo rules only if tagger is available
function getTurboRules() {
  if (!isElementTaggerAvailable()) {
    console.log(
      "[Softgen] Element tagger not found, skipping loader configuration"
    );
    return {};
  }

  return {
    "*.tsx": ["@softgenai/element-tagger"],
    "*.jsx": ["@softgenai/element-tagger"],
  };
}

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/en/articles",
        destination: "/en/blog",
        permanent: true,
      },
      {
        source: "/en/business-flight-compensation",
        destination: "/en/compensation-calculator",
        permanent: true,
      },
      {
        source: "/en/cancelled-business-trip",
        destination: "/en/cancelled-flight",
        permanent: true,
      },
      {
        source: "/en/delayed-business-trip",
        destination: "/en/delayed-flight",
        permanent: true,
      },
      {
        source: "/en/corporate-ticket-rights",
        destination: "/en/blog/eu261-complete-guide-passenger-rights",
        permanent: true,
      },
      {
        source: "/en/employer-compensation",
        destination: "/en/blog/eu261-complete-guide-passenger-rights",
        permanent: true,
      },
      {
        source: "/en/articles/flight-delay-compensation-business-travel-employee-or-employer",
        destination: "/en/blog/eu261-complete-guide-passenger-rights",
        permanent: true,
      },
      {
        source: "/en/articles/eu261-compensation-business-flights-guide",
        destination: "/en/blog/eu261-complete-guide-passenger-rights",
        permanent: true,
      },
      {
        source: "/en/articles/can-employer-keep-flight-compensation",
        destination: "/en/blog/eu261-complete-guide-passenger-rights",
        permanent: true,
      },
      {
        source: "/en/articles/how-to-claim-flight-compensation-business-travel",
        destination: "/en/delayed-flight",
        permanent: true,
      },
      {
        source: "/en/articles/lufthansa-flight-delay-compensation-business",
        destination: "/en/blog/lufthansa-compensation-guide",
        permanent: true,
      },
      {
        source: "/en/articles/ryanair-flight-delay-compensation-business",
        destination: "/en/blog/ryanair-compensation-guide",
        permanent: true,
      },
      {
        source: "/en/articles/british-airways-flight-delay-compensation-business",
        destination: "/en/blog/british-airways-compensation-guide",
        permanent: true,
      },
      {
        source: "/en/articles/frankfurt-hub-flight-delays-business",
        destination: "/en/blog/eu261-complete-guide-passenger-rights",
        permanent: true,
      },
      {
        source: "/en/articles/heathrow-hub-flight-delays-business",
        destination: "/en/blog/eu261-complete-guide-passenger-rights",
        permanent: true,
      },
      {
        source: "/en/articles/amsterdam-schiphol-hub-flight-delays-business",
        destination: "/en/blog/klm-compensation-guide",
        permanent: true,
      },
      {
        source: "/en/articles/air-france-flight-delay-compensation-business",
        destination: "/en/blog/air-france-compensation-guide",
        permanent: true,
      },
      {
        source: "/en/articles/can-employer-require-claim-service",
        destination: "/en/blog/eu261-complete-guide-passenger-rights",
        permanent: true,
      },
      {
        source: "/en/articles/tax-treatment-flight-compensation-business",
        destination: "/en/blog/eu261-complete-guide-passenger-rights",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/og-image.png",
          destination: "/api/og?view=site&v=20260414",
        },
      ],
    };
  },
  experimental: {
    turbo: {
      rules: getTurboRules(),
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  allowedDevOrigins: ["*.daytona.work", "*.softgen.dev"],
};

export default nextConfig;
