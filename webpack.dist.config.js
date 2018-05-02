/**
 * Created by niefz on 2017/11/24.
 */
const {resolve} = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');

const BUILD_PATH = resolve(__dirname, 'dist');

module.exports = webpackMerge(webpackBaseConfig, {
  entry: {
    main: './src/index'
  },
  output: {
    path: BUILD_PATH,
    publicPath: '/dist/',
    filename: 'vui.min.js',
    library: 'vui',
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      parallel: true,
      sourceMap: true
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