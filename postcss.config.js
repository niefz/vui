/**
 * Created by niefz on 2018/1/8.
 */
module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 20 versions']
    }),
    require('cssnano')()
  ]
};