const path = require('path');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
    port: 8080,
  },
  devtool: 'inline-source-map',
  module: {
   
  },
};
