/** @type {import('next').NextConfig} */

// Para GitHub Pages, defina NEXT_PUBLIC_BASE_PATH=/nome-do-repositorio
// Em builds locais e no Netlify, deixe vazio.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
