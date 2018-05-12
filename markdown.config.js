const md = require('markdown-it')();
const MarkdownItContainer = require('markdown-it-container');

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
          const source = tokens[idx + 1].content;
          const description = (m && m.length > 1) ? m[1] : '';
          const descriptionHTML = description ? md.render(description) : '';

          return `<demo>
                          <template slot="source">${source}</template>
                          ${descriptionHTML}
                          <template slot="highlight">`;
        }

        return '</template></demo>\n';
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