/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'tympanus.net', 'cdn.dribbble.com'],
  },
};

module.exports = nextConfig;
