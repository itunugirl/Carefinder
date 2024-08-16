const path = require('path');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fonts.googleapis.com',
        port: '',
        pathname: '/css2?family=Open+Sans:wght@300;400&display=swap',
      },
      {
        protocol: 'https',
        hostname: '', // Update this if needed
        port: '',
        pathname: '', // Adjust as needed
      },
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
