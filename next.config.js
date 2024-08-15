// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fonts.googleapis.com',
        port: '',
        pathname: '/css2?family=Satoshi:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },
};

module.exports = nextConfig;
