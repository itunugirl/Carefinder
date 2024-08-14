/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // Replace with your domain
        port: '',
        pathname: '/path/to/images/**', // Adjust as necessary
      },
    ],
  },
  // Any other Next.js configuration options can go here
};

module.exports = nextConfig;
