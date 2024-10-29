/** @type {import('next').NextConfig} */
const nextConfig = 
{
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true,
      },
      typescript: {
        // Ignore TypeScript errors during build
        ignoreBuildErrors: true,
      },
};

export default nextConfig;
