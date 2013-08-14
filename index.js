'use strict';

/*!
 * import(s)
 */
var hogan = require('hogan.js');
var debug = require('debug')('component-render-hogan');


/*!
 * export(s)
 */
module.exports = function (template, program, fn) {
  debug('call hogan renderer:', template);
};
