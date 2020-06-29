/**
 * @Author: Charles Lo <charlesu>
 * @Date:   2020-06-29 11:17
 * @Email:  Developer.CharlesLo@gmail.com
 * @Project: NotesCLI
 * @Last modified by:   charlesu
 * @Last modified time: 2020-06-29 11:17
 */

import { rollup } from "rollup";
import { terser } from "rollup-plugin-terser";
const version_number = '0.0.5';

//Minify
// export default {
//   input: 'src/main.js',
//   output: {
//     file: 'dist/'+version_number+'/tracksoul-'+version_number+'.min'+'.js',
//     format: 'iife'
//   },
//   plugins: [terser()],
// };

//Pure
export default {
  input: 'src/main.js',
  output: {
    file: 'dist/'+version_number+'/tracksoul-'+version_number+'.js',
    format: 'iife'
  }
};
