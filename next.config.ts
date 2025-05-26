import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'build_new',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
