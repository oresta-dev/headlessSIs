import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    STRAPI_HOST: process.env.STRAPI_HOST,
    STRAPI_TOKEN: process.env.STRAPI_TOKEN
  }
};

export default nextConfig;
