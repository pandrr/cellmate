const path = require('path');

module.exports = [
  {
    // watch:true,
    entry: './index.js',
    mode: 'production',
    devtool: 'source-map',
  
    output: {
      // path: '/Users/tom/cables_dev/cables_ui/libs/ui/',
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
      // path: path.resolve(__dirname, 'dist'),
      path: '/Users/tom/cables_dev/cables_ui/libs/ui/',
      filename: 'cellmate.js',
  
      library: {
        name: 'CellMate',
        type: 'umd',
      },
    },
  }]
