const path = require('path');

module.exports = {
  entry: './javascripts/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  }
};