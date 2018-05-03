/**
 * Created by niefz on 2018/1/8.
 */
const {resolve} = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');

const BUILD_PATH = resolve(__dirname, 'dist');

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'production',
  output: {
    path: BUILD_PATH,
    publicPath: '/dist/',
    filename: 'free-vui.min.js',
    library: 'free-vui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'source-map',
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(BUILD_PATH),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
});