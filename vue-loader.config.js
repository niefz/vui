const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  loaders: {
    js: [
      {
        loader: 'babel',
        options: {
          sourceMap: true
        }
      }
    ],
    scss: [
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
    ],
    less: [
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
  postLoaders: {
    html: 'babel',
    options: {
      sourceMap: true
    }
  },
  preserveWhitespace: false,
  sourceMap: true
};