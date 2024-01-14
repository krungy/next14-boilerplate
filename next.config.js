/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "production" ? false : true,
  swcMinify: process.env.NODE_ENV === "production" ? false : true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? true : false,
  },
  output: "standalone",
};

module.exports = nextConfig;
