const http = require ('http');
// const services = require ('../services');

const server = http.createServer();
server.on('request', (request, response) => {
        console.log(request.method, request.url);
    });
server.listen(8080);