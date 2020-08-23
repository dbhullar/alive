var dt = require('./date');
var crypto = require('crypto');

exports.hash = function () {
    return crypto.createHash('sha256').update(dt.myDateTime()).digest('hex');
  };