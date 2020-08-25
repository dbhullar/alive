var http = require('http');
var url = require('url');
var hash = require('./common/hash');

aliveServer = function (request,response){
    
    //silly logging to console
    let path = url.parse(request.url).pathname;
    let ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    console.log(Date() + " " + ip + " " + path);
    
    // the route we want to react on
    if(path === '/alive'){
      response.writeHead(200,{'Content-Type':'text/html'});
      // reply with hashed value
      response.write(hash.hash());
    }
    else{
      // ..otherwise perform jedi mind trick
      response.writeHead(404,{'Content-Type':'text/html'});
      response.write('These are not the androids your were looking for...');
    }
    response.end();
}

// start serving...
http.createServer(aliveServer).listen(1337);