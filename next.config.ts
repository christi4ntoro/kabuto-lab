import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/blog', destination: '/transmissions', permanent: true },
      { source: '/blog/:slug', destination: '/transmissions/:slug', permanent: true },
      { source: '/products', destination: '/systems', permanent: true },
      { source: '/products/:slug', destination: '/systems/:slug', permanent: true },
      { source: '/contact', destination: '/connect', permanent: true },
    ];
  },
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