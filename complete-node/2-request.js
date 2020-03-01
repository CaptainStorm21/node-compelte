//import http module 
const http = require  ('http');
    
const server = http.createServer((req, res) => {

    console.log(req.url, req.method, req.headers);
    //check the output 
    //all outputs have GET method

});

server.listen(3000);

