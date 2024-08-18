const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
  entry: './functions/src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@firebaseConfig': path.resolve(__dirname, 'functions/src/firebaseConfig/'),
      'metaData': path.resolve(__dirname, 'src/data/metaData/'),
      '@': path.resolve(__dirname, 'src/'),
    },
    fallback: {
      "net": false,
      "http2": false,
      "tls": false,
      "async_hooks": false,
      "child_process": false
    }
  },
  plugins: [
    new NodePolyfillPlugin(),
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env': {
        NEXT_PUBLIC_FIREBASE_API_KEY: JSON.stringify(process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
        // Add other environment variables as needed
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`,
    },
  },
};
