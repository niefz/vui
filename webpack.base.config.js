/**
 * Created by niefz on 2017/11/24.
 */
const path = require('path');
const webpack = require('webpack');
const stripTags = require('./strip-tags');
const md = require('markdown-it')();
const MarkdownItContainer = require('markdown-it-container');
const package = require('./package.json');

const resolve = (dir) => {
  return path.join(__dirname, '.', dir);
};

const MODULES_PATH = resolve('node_modules');
const APP_PATH = resolve('src');

/**
 * 增加 hljs 的 className
 */
const wrap = (render) => {
  return (...args) => {
    return render(...args)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
};

/**
 * Convert HTML
 */
const convert = (str) => {
  str = str.replace(/(&#x)(\w{4});/gi, ($0) => {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });

  return str;
};

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
            loader: 'style',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css',
            options: {
              sourceMap: true,
              minimize: true
            }
          },
          {
            loader: 'sass',
            options: {
              sourceMap: true
            }
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
                        sourceMap: true,
                        minimize: true
                      }
                    },
                    {
                      loader: 'sass',
                      options: {
                        sourceMap: true
                      }
                    },
                    {
                      loader: 'postcss'
                    }
                  ]
                }
              },
              postLoaders: {
                html: 'babel',
                options: {
                  sourceMap: true
                }
              },
              preserveWhitespace: false,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown',
        options: {
          wrapper: 'article class="article"',
          use: [
            [MarkdownItContainer, 'demo', {
              validate: (params) => {
                return params.trim().match(/^demo\s*(.*)$/);
              },
              render: (tokens, idx) => {
                const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

                if (tokens[idx].nesting === 1) {
                  const description = (m && m.length > 1) ? m[1] : '';
                  const content = tokens[idx + 1].content;
                  const html = convert(stripTags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
                  const descriptionHTML = description ? md.render(description) : '';

                  return `<demo>
                          <div class="source" slot="source">${html}</div>
                          ${descriptionHTML}
                          <div class="highlight" slot="highlight">`;
                }

                return '</div></demo>\n';
              }
            }],
            [MarkdownItContainer, 'tip'],
            [MarkdownItContainer, 'warning']
          ],
          preprocess: (MarkdownIt, source) => {
            MarkdownIt.renderer.rules.table_open = () => {
              return '<table class="table">'
            };

            MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);

            return source;
          }
        }
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