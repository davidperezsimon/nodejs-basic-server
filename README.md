## Project generation

**Create a folder with the name nodejs-basic-server and go to the folder root**
```
mkdir nodejs-basic-server
cd nodejs-basic-server
```

## Start a project
```
npm init -y
```
> This will automatically generate the package.json containing the project metadata and dependencies

***package.json***
```
{
  "name": "nodejs-basic-server",
  "version": "1.0.0",
  "description": "A basic nodejs server implementation",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "https://github.com/davidperezsimon",
  "license": "ISC"
}
```

## Create a file with the name index.js and paste the code

***index.js***
```
var http = require('http');

var port = 8080;
var server = http.createServer(function(req, res){
    
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end("This is showing in a web browser at http://localhost:8080");

});

server.listen(port);
console.log("Server running in port " + port);
```

**Code explanation:**

---
```
var http = require('http');
```
> Imports the native http module for nodejs, this allows to transfer data over HTTP protocol

*Take a look to the nodejs official docs [Link to HTTP](https://nodejs.org/api/http.html)*

---
```
var port = 8080;
```
> Setting the port for the server, now the server listen at 8080 port

---
```
var server = http.createServer(function(req, res){
```
> Create a server object

---
```
res.writeHead(200, {"Content-Type" : "text/plain"});
```
> Send the response status code to the client with the 200 value

*You can research about http response status codes [Link to MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)*

---
```
res.end("This is showing in a web browser at http://localhost:8080");
```
> Ending the response sending to the cliente the text "This is showing in a web browser at http://localhost:8080"

---
```
server.listen(port);
```
> Setting the port for the server with the value located in the var 'port'

---
```
console.log("Server running in port " + port);
```
> It displays a message on the console indicating that the server is running

## Running the server

In the root of the project execute the command
```
node index.js
```
*Open a web browser and search http://localhost:8080*


