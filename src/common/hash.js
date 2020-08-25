var dt = require('./date');
var crypto = require('crypto');

// return current timestamp as SHA256 hash in HEX
exports.hash = function () {
    return crypto.createHash('sha256').update(dt.myDateTime()).digest('hex');
  };