/**
 * Created by niefz on 2018/1/8.
 */
const {resolve} = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');

const APP_PATH = resolve(__dirname, 'src');
const EXAMPLES_PATH = resolve(__dirname, 'examples');

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'development',
  entry: {
    vendors: ['vue', 'vue-router'],
    index: './examples/index'
  },
  output: {
    path: EXAMPLES_PATH,
    publicPath: '',
    filename: 'assets/js/[name].min.js?v=[hash:8]',
    chunkFilename: 'assets/js/[name].min.js?v=[chunkhash:8]'
  },
  resolve: {
    alias: {
      vui: `${APP_PATH}/index`
    }
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: EXAMPLES_PATH,
    compress: true,
    historyApiFallback: true,
    host: 'free-ui.io',
    hot: true,
    inline: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    port: 3011,
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendors',
          priority: 10
        },
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve('examples/index.html'),
      template: resolve('examples/index.html'),
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].min.css?v=[hash:8]',
      allChunks: true
    }),
    new FriendlyErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});