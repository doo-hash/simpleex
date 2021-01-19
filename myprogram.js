var http = require('http');
var date = require('./myfirstmodule');
 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write('Hello World!' + date.myDateTime());
   res.end();
 }).listen(8080);