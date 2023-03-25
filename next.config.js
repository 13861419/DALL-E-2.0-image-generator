/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "http://localhost:3000",
      "http://localhost:7071",
      "https://api.openai.com/v1/completions",
    ],
  },
};

module.exports = nextConfig;
