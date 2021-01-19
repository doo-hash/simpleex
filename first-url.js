var http = require('http');
var date = require('./myfirstmodule');

http.createServer(function(req, res){
res.writeHead(200,{'Content-Type':'text/html'});
res.write('writing the first program of node.js '+ date.myDateTime());
res.write(req.url);
res.end();
}).listen(8080);