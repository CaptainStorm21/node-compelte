const http = require('http')
const url = require ('url')

function handler(req, res) {
    //console.log("this is webserver");
    //console.log(req.url);
    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);

    res.writeHeader(200, { 'Content-type': 'text/plain' });
    res.write('Hello, this is webserver!');
    res.end();

}
const server = http.createServer(handler);

server.listen(3000);