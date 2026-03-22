/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/VerticeTec',
  assetPrefix: '/VerticeTec/',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
