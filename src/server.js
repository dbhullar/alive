var http = require('http');
var hash = require('./hash');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(hash.hash());
    res.end();
}).listen(1337);