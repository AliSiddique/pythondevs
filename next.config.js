/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')();
const nextConfig = {
  images: {
    domains: ['images.unsplash.com','raw.githubusercontent.com'],
  },
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
