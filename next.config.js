/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: './',
  basePath: '',
  trailingSlash: true,
  images: {
    domains: ["arweave.net"],
  },
  distDir: 'dist',
}

module.exports = nextConfig