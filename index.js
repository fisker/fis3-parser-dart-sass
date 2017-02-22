/*
 * fis3-lint-htmlhint
 * fisker Cheung<lionkay@gmail.com>
 */

var sass = require('dart-sass');
var log = (global.fis && fis.log) || console;

module.exports = function(content, file, conf){
  var result = sass.renderSync({file: file});

  return result;
};

module.exports.defaultOptions = {
  indentType: 'space',
  indentWidth: 2,
  linefeed: 'lf',
  outputStyle: 'expanded', //nested, expanded, compact, compressed
  precision: 5
};
