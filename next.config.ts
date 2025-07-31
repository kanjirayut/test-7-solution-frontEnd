import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  env: {
    API_URL: process.env.API_URL || "http://localhost:3000/api",
  },
  
  /* config options here */
};

export default nextConfig;
