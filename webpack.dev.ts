import path from 'path';
import { merge } from 'webpack-merge';

import common, { Configuration } from './webpack.common';

const config: Configuration = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.dev.json',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    compress: true,
    static: { directory: path.resolve(__dirname, 'dist') },
    historyApiFallback: true,
    devMiddleware: { stats: 'minimal' },
  },
});

export default config;
