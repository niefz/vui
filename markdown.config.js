const cheerio = require('cheerio');
const md = require('markdown-it')();
const MarkdownItContainer = require('markdown-it-container');

const strip = (str, tags) => {
  const $ = cheerio.load(str, {decodeEntities: false});

  if (!tags || tags.length === 0) {
    return str;
  }

  tags = !Array.isArray(tags) ? [tags] : tags;

  let len = tags.length;

  while (len--) {
    $(tags[len]).remove();
  }

  return $.html();
};

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
          const html = convert(strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
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
};