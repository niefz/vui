/**
 * Created by NieFZ on 2017/11/24.
 */
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');

const resolve = (dir) => {
  return path.join(__dirname, '..', dir);
};

const APP_PATH = resolve('src');
const EXAMPLES_PATH = resolve('examples');

module.exports = webpackMerge(webpackBaseConfig, {
  entry: {
    vendor: ['vue', 'vue-router'],
    main: './examples/index'
  },
  output: {
    path: EXAMPLES_PATH,
    publicPath: '',
    filename: 'assets/js/[name].min.js?v=[hash:8]',
    chunkFilename: 'assets/js/[name].min.js?v=[chunkhash:8]'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    compress: true,
    contentBase: EXAMPLES_PATH,
    historyApiFallback: true,
    host: 'free-ui.io',
    hot: true,
    inline: true,
    overlay: {
      warnings: true,
      errors: true
    },
    port: 3011,
    publicPath: "/",
    stats: {
      assets: true,
      colors: true,
      errors: true,
      errorDetails: true,
      performance: true,
      timings: true,
      version: true,
      warnings: true,
    }
  },
  resolve: {
    alias: {
      vui: `${APP_PATH}/index`
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.min.js'
    }),
    new HtmlWebpackPlugin({
      filename: resolve('examples/index.html'),
      template: resolve('examples/index.html'),
      inject: 'body'
    }),
    new FriendlyErrorsPlugin(),
    new OpenBrowserPlugin({url: 'http://free-ui.io:3011/'})
  ]
});