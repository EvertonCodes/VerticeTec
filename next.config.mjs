/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/VerticeTec',
  assetPrefix: '/VerticeTec/',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
