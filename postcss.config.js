// postcss.config.js
module.exports = {
    syntax: 'postcss-scss',
    plugins: [
      require('postcss-import'),
      require('autoprefixer')
    ],
  };