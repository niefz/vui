/*
 * strip-tags <https://github.com/jonschlinkert/strip-tags>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */
const cheerio = require('cheerio');

exports.strip = (str, tags) => {
  const $ = cheerio.load(str, { decodeEntities: false });

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

exports.fetch = (str, tag) => {
  const $ = cheerio.load(str, { decodeEntities: false });

  if (!tag) return str;

  return $(tag).html();
};