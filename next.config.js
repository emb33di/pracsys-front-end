/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [], // Add external image domains if needed
    },
    async redirects() {
      return [
        {
          source: "/",
          destination: "/dashboard",
          permanent: true, // Redirect "/" to "/dashboard"
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  