/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Set basePath only if deploying to <username>.github.io/<repo-name>
  basePath: process.env.NODE_ENV === 'production' ? '/Lic-Agent-Portfolio-Website' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

