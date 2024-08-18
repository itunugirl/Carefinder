const path = require('path');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fonts.googleapis.com',
        port: '',
        pathname: '/css2/**', // Wildcard to match any path
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc', // Only the domain name
        port: '',
        pathname: '/**', // Match any path
      },
      // Add other patterns if necessary
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@firebaseConfig': path.resolve(__dirname, 'src/firebaseConfig'),
      'metaData': path.resolve(__dirname, 'src/data/metaData'),
    };
    return config;
  },
};

module.exports = nextConfig;
