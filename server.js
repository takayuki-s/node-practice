var http = require('http');
  fs = require('fs');
  ejs = require('ejs');
var settings = require('./settings.js') 
var server = http.createServer();
var template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8');
var n = 0
server.on('request', function(req, res) {
    n++;
    var data = ejs.render(template, {
        title: "hello",
        content: "World!",
        n: n
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
});
server.listen(settings.port);
console.log("server listening ...");