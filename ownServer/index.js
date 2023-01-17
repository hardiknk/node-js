const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end("hello hardik from home page");
    } else if ('/about-us') {
        res.end("hello hardik from about us");
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("404 page is not exists");
    }
});

server.listen("5000", '127.0.0.1'); //listing to the server 