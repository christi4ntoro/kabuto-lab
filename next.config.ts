import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Add markdown files to the watch list
    if (!isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/node_modules', '**/.git'],
      };
    }
    return config;
  },
};

export default nextConfig;