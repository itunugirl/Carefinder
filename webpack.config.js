const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
<<<<<<< HEAD
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
=======
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
  entry: './functions/src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
>>>>>>> 30b08d0e0e84c47b5b27a5b30d47eb97b8444662
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 30b08d0e0e84c47b5b27a5b30d47eb97b8444662
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
<<<<<<< HEAD
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
=======
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
>>>>>>> 30b08d0e0e84c47b5b27a5b30d47eb97b8444662
  },
};
