/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: './',
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'dist',
}

module.exports = nextConfig