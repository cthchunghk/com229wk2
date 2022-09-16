const fs  = require("fs");
const {connect} = require("http2");
const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile("index.html", function (error, data) {
        if(error){
            res.writeHead(404);
            res.write('Error: File not found');
        }else{
            console.log('reading html...');
            res.write(data);
        }
    })
    res.end();
})

server.listen(port, hostname, (error) => {
    if(error){
        console.log("Sth wrong!!");
    }else{
        console.log("Server running on http://127.0.0.1:3000");
    }
})