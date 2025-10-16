const path = require('path');

module.exports = [
  {
    entry: './index.js',
    mode: 'production',
    devtool: 'source-map',
  
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'cellmate.min.js',
  
      library: {
        name: 'CellMate',
        type: 'umd',
      },
    },
  },{
    entry: './index.js',
    mode: 'development',
  
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'cellmate.js',
  
      library: {
        name: 'CellMate',
        type: 'umd',
      },
    },
  }]
