/**
 * Created by NieFZ on 2017/11/24.
 */
const path = require('path');
const webpack = require('webpack');

const resolve = (dir) => {
  return path.join(__dirname, '..', dir);
};

const package = require('../package.json');

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
        include: /src/,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel',
            options: {
              cacheDirectory: true
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel',
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: 'ts',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style'
          },
          {
            loader: 'css'
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
        loader: 'vue',
        options: {
          loaders: {
            js: {
              fallback: 'babel',
              use: [
                {
                  loader: 'vue-ts'
                }
              ]
            },
            css: {
              fallback: 'vue-style',
              use: [
                {
                  loader: 'css',
                  options: {
                    minimize: true
                  }
                }
              ]
            },
            sass: {
              fallback: 'vue-style',
              use: [
                {
                  loader: 'css'
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
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', ".tsx", '.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': resolve('src')
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