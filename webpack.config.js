import path from "path" 
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default[
  {
    // watch:true,
    entry: './index.js',
    mode: 'development',
    devtool: 'source-map',
  
    output: {
      // path: '/Users/tom/cables_dev/cables_ui/libs/ui/',
      path: path.resolve(__dirname, 'dist'),
      filename: 'cellmate.js',
  
      library: {
        name: 'CellMate',
        type: 'module',
      },
    },
  }
  ,
  ]
