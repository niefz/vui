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
    ],
    less: [
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
  postLoaders: {
    html: 'babel',
    options: {
      sourceMap: true
    }
  },
  preserveWhitespace: false,
  sourceMap: true
};