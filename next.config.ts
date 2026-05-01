import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permanent redirects from retired routes — protects any inbound links
  // and tells search engines the canonical destinations.
  // Old /fleet (and any per-asset path under it) → /capabilities.
  // Old /services and /industries are folded into /capabilities and /projects.
  async redirects() {
    return [
      { source: "/fleet", destination: "/capabilities", permanent: true },
      { source: "/fleet/:slug*", destination: "/capabilities", permanent: true },
      { source: "/services", destination: "/capabilities", permanent: true },
      { source: "/services/:slug*", destination: "/capabilities", permanent: true },
      { source: "/industries", destination: "/projects", permanent: true },
      { source: "/industries/:slug*", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;
