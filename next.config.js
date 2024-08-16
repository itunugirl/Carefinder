const path = require('path');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fonts.googleapis.com',
        port: '',
        pathname: '/css2?family=Roboto:wght@100;300;400;500;700;900&family=EB+Garamond:wght@400;700&family=Nunito:wght@200;400;600;800;1000&display=swap',
      },
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
