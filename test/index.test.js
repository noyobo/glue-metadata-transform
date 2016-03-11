var data = require('./data.js');

var swig = require('swig');

var path = require('path');
var fs = require('fs');

var template = path.join(__dirname, '../lib/less.jinja');



var less = swig.renderFile(template, data, function(err, output) {
  if (err) {
    throw err;
  }

  fs.writeFileSync('./index.less', output);
});
