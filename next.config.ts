import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Config options here */

  async rewrites() {
    return [
      {
        source: "/api/product", // The URL path in your app
        destination:
          "https://glore-bd-backend-node-mongo.vercel.app/api/product", // The external API URL
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn11.bigcommerce.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "pub-c053b04a208d402dac06392a3df4fd32.r2.dev", // Add the new hostname here
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
