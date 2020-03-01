const http = require ('http');

const server = http.createServer((req, res) => {
    if(req.url ==='/'){
        //output in the browser server 3000
        res.write("running on this service")
        res.end();
    }
    if (req.url == '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.on('connection', (socket) =>{
    console.log('new connection....')
});

server.listen(3000)
console.log('listening on port 3000')