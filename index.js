'use strict';

/*!
 * import(s)
 */
var hogan = require('hogan.js');
var debug = require('debug')('component-render-hogan');
var path = require('path');
var fs = require('fs');


/*!
 * export(s)
 */
module.exports = function (template, program, fn) {
  debug('call hogan renderer:', template);

  var local = {};
  if (program.local) {
    var resolve_path = path.resolve(program.local);
    local = fs.existsSync(resolve_path) ? require(resolve_path) : require(resolve_path + '.json');
  }

  fs.readFile(template, { encoding: 'utf8' }, function (err, data) {
    if (err) { return fn(err); }
    var renderer = hogan.compile(data);
    var html = renderer.render(local);
    debug('html:', html);
    fn(null, html);
  });
};
