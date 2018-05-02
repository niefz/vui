/**
 * Created by niefz on 2017/11/24.
 */
const {resolve} = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const vueLoaderConfig = require('./vue-loader.config.js');
const markdownConfig = resolve('./markdown.config.js');
const package = require('./package.json');

const APP_PATH = resolve(__dirname, 'src');

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'htmllint',
            options: {}
          },
          {
            loader: 'html',
            options: {}
          }
        ]
      },
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel',
            options: {
              sourceMap: true,
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss'
          },
          {
            loader: 'sass',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss'
          },
          {
            loader: 'less',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file',
            options: {}
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue',
            options: vueLoaderConfig
          }
        ]
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown',
        options: markdownConfig
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.js',
      '@': APP_PATH
    }
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env.VERSION': `'${package.version}'`
    })
  ]
};