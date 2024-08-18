import path from 'path';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import DotenvWebpackPlugin from 'dotenv-webpack';
import webpack from 'webpack';

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, 'functions/src/index.ts'), // Ensure this path is correct
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
      net: false,
      http2: false,
      tls: false,
      async_hooks: false,
      child_process: false,
    },
  },
  plugins: [
    new NodePolyfillPlugin(),
    new DotenvWebpackPlugin(), // Correct import and usage
    new webpack.DefinePlugin({
      'process.env': {
        NEXT_PUBLIC_FIREBASE_API_KEY: JSON.stringify(process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
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
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
  },
};

export default config;
