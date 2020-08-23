var http = require('http');
var dt = require('./date');
var crypto = require('crypto');

var myArgs = process.argv.slice(2);
var options = {
  host: myArgs[0],
  port: myArgs[1]
};

var d = dt.myDateTime();
var h = crypto.createHash('sha256').update(d).digest('hex');  

callback = function(response) {
  var str = '';

  //another chunk of data has been received, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  response.on('end', function () { 
    if (str.endsWith(h))
    {
        console.log(d);
    }
  });
}

http.request(options, callback).end();
