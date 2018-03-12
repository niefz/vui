/**
 * Created by niefz on 2017/11/24.
 */
const path = require('path');
const webpack = require('webpack');
const package = require('./package.json');

const resolve = (dir) => {
  return path.join(__dirname, '.', dir);
};

const MODULES_PATH = resolve('node_modules');
const APP_PATH = resolve('src');

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html',
          },
          {
            loader: 'htmllint'
          }
        ]
      },
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint'
          }
        ],
        include: [
          APP_PATH
        ],
        exclude: [
          MODULES_PATH
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel',
            options: {
              sourceMap: true,
              cacheDirectory: true
            }
          }
        ],
        exclude: [
          MODULES_PATH
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style'
          },
          {
            loader: 'css',
            options: {
              minimize: true
            }
          },
          {
            loader: 'sass'
          },
          {
            loader: 'postcss'
          }
        ]
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
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
        test: /\.vue$/,
        use: [
          {
            loader: 'vue',
            options: {
              loaders: {
                js: 'babel',
                scss: {
                  fallback: 'vue-style',
                  use: [
                    {
                      loader: 'css',
                      options: {
                        minimize: true
                      }
                    },
                    {
                      loader: 'sass'
                    },
                    {
                      loader: 'postcss'
                    }
                  ]
                }
              },
              postLoaders: {
                html: 'babel'
              },
              sourceMap: true
            }
          }
        ]
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