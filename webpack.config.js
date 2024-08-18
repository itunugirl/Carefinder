const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals'); // Add this line

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    main: path.resolve(__dirname, 'functions/src/index.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production',
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
      http2: false,
      async_hooks: false,
      stream: require.resolve('stream-browserify'),
      events: require.resolve('events'),
      util: require.resolve('util'),
      buffer: require.resolve('buffer'),
      path: require.resolve('path-browserify'),
      assert: require.resolve('assert'),
      fs: false,
      tls: false,
      net: false,
      child_process: false,
    },
  },
  experiments: {
    syncWebAssembly: true,
    asyncWebAssembly: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new NodePolyfillPlugin(),
    new DotenvWebpackPlugin(),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.wasm$/,
        type: 'webassembly/async',
      },
    ],
  },
  node: {
    __dirname: true,
    __filename: true,
    global: true,
  },
};
