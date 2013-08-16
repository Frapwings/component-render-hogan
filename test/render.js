'use strict';

/*!
 * import(s)
 */

var expect = require('expect.js');
var path = require('path');
var hogan = require('../');

var FIXTURES_DIR = __dirname + '/fixtures';


/*!
 * test(s)
 */

describe('component-render-hogan', function () {

  var program = {};
  before(function (done) {
    program.local = path.join(FIXTURES_DIR, 'user.json');
    done();
  });

  it('expect to contain "<p>Name: taro</p><p>Age: 99</p>"', function (done) {
    hogan(path.join(FIXTURES_DIR, 'user.mustache'), program, function (err, html) {
      expect(html).to.contain('<p>Name: taro</p><p>Age: 99</p>');
      done();
    });
  });

});
