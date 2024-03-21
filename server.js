var http = require('http');
var fs = require('fs');
var path = require('path');

const PORT = 5500;

http.createServer(function(request, response) {
    var filePath = '.' + request.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;
    }

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){
                response.writeHead(404);
                response.end('File not found');
            } else {
                response.writeHead(500);
                response.end('Server error: ' + error.code);
            }
        } else {
            response.writeHead(200, {'Content-Type': contentType});
            response.end(content, 'utf-8');
        }
    });

}).listen(PORT);

console.log('Server running at http://localhost:' + PORT + '/');