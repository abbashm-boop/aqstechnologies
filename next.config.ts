import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/brands", destination: "/partners", permanent: true },
    ];
  },
};

export default nextConfig;
