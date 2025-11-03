/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'github.com'],
    unoptimized: true
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/emmanuel-portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/emmanuel-portfolio' : '',
}

module.exports = nextConfig