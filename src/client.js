var http = require('http');
var dt = require('./common/date');
var crypto = require('crypto');

// get ip address and port as arguments
var myArgs = process.argv.slice(2);
var options = {
  host: myArgs[0],
  port: myArgs[1],
  path: '/alive',  //always look for the 'alive' route
  method: 'GET',
};

// save current timestamp and create a local hashed 
var local_dt = dt.myDateTime();
var local_hash = crypto.createHash('sha256').update(local_dt).digest('hex');  

callback = function(response) {
  var str = '';

  // collect the response
  response.on('data', function (chunk) {
    str += chunk;
  });

  // response collected
  response.on('end', function () { 
    
    // if we have a match say something
    if (str.endsWith(local_hash))
    {
      // ..the say something  
      console.log(local_dt);
    }
    // ..stay quite
  });
}

http.request(options, callback).end();
