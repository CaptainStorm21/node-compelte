
const http = require  ('http');
    
const server = http.createServer((req, res) => {

    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    //write allows write some data into response
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><p>Hello this is from node</p></body>');
    res.write('</html>');
    //to complete execution
    res.end();

});

server.listen(3000);

//check dev tools F12
//look at network tab
//Headers
//Response Headers --- content -type will be text/html
//this is exact response from Line 8

//click on Response tab between preview and cookies
//you should see lines 10 through line 13
