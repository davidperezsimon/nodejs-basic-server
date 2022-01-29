var http = require('http');

var port = 8080;
var server = http.createServer(( function(req, res){
    
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end("This is showing in a web browser at http://localhost:8080");

}));

server.listen(port);
console.log("Server running in port " + port);