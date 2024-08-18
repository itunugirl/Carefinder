declare module 'dotenv-webpack' {
    import { WebpackPluginInstance } from 'webpack';
  
    class DotenvWebpackPlugin implements WebpackPluginInstance {
      constructor(options?: any);
      apply: (compiler: import('webpack').Compiler) => void;
    }
  
    export default DotenvWebpackPlugin;
  }