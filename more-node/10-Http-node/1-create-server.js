const http = require ('http');
const server = http.createServer();

server.on('request', (request, response) => {
    console.log('this is an incoming request');
});

server.listen(8080)

//here we are receiving the request
//but we are no send the response back

/*
event emitter - we created server 
    const server = http.createServer();
and then used



*/