/**
 * Created by niefz on 2018/1/8.
 */
const {resolve} = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const vueLoaderConfig = require('./vue-loader.config.js');
const markdownConfig = require('./markdown.config.js');
const package = require('./package.json');

const APP_PATH = resolve(__dirname, 'src');

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'htmllint'
          },
          {
            loader: 'html'
          }
        ]
      },
      // {
      //   test: /\.(js|vue)$/,
      //   include: /src/,
      //   exclude: /node_modules/,
      //   enforce: 'pre',
      //   use: [
      //     {
      //       loader: 'eslint',
      //       options: {
      //         formatter: require('eslint-friendly-formatter')
      //       }
      //     }
      //   ]
      // },
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
            loader: 'css'
          },
          {
            loader: 'postcss'
          },
          {
            loader: 'sass'
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
            loader: 'css'
          },
          {
            loader: 'postcss'
          },
          {
            loader: 'less'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
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
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file'
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
      'free-vui': resolve(__dirname, './'),
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