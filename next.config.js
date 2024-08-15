const path = require('path');

const nextConfig = {
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
