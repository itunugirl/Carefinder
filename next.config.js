const path = require('path');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fonts.googleapis.com',
        port: '',
        pathname: '/css2/**', // You can use wildcard to match any path
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc', // Only the domain name
        port: '',
        pathname: '/6qysBHBj/medease-logo.png', // Correct path for the image
      }
      // Add other patterns if necessary
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@firebaseConfig': path.resolve(__dirname, 'src/firebaseConfig.ts'),
      'metaData': path.resolve(__dirname, 'src/data/metaData'),
    };
    return config;
  },
};

module.exports = nextConfig;
