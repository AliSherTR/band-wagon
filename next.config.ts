// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // or false for temporary redirect
      },
    ];
  },
};

module.exports = nextConfig;
