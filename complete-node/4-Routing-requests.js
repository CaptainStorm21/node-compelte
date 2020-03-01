
const http = require  ('http');
    
const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Node Form</title></head>');
        res.write('<body><form action = "nodeForm" action = "POST"><input type = "text" method="POST"> <button type="submit">Submit </button> </form></body>');
        res.write('</html>');
        return res.end();
    } 
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><p>Hello this is from node</p></body>');
    res.write('</html>');
    res.end();

});

server.listen(3000);

//make sure you have return on line 11.. without it there is an error