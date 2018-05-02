/**
 * Created by niefz on 2017/9/1.
 */
module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 20 versions']
    }),
    require('cssnano')()
  ]
};