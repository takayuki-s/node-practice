var http = require('http');
var settings = require('./settings.js') 
var server = http.createServer();
server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('hello world !!!');
    res.end();
});
server.listen(settings.port);
console.log("server listening ...");