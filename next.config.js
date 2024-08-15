const path = require('path');

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
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@firebaseConfig': path.resolve(__dirname, 'src/firebaseConfig'),
      'metaData': path.resolve(__dirname, 'src/data/metaData') // Adjust the path as needed
    };
    return config;
  },
};

module.exports = nextConfig;
