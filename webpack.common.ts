import dotenv from 'dotenv';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import path from 'path';
import { DefinePlugin, Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

dotenv.config();

export interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  entry: { app: path.resolve(__dirname, 'src/index.tsx') },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL),
    }),
  ],
};

export default config;
