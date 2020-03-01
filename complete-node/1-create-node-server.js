//import http module 
const http = require  ('http');
    
const server = http.createServer((req, res) => {
    //step 1 - runs the request
    //step 2 - go to localhost: 3000
    console.log(req);
    //step 3 - terminates the process
    //process.exit() is hard exit
    process.exit();
});

server.listen(3000);



//createServer has access to two properties 
// request : incoming message
// response : server response
// function rqListener(req, res){}
//. gives an access to methods() that are in side of the library
// http.createServer(rqListener);
