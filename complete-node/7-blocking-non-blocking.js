const http = require  ('http');
const fs = require ('fs');
    
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Node Form</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        return res.end();
    } 
    if (url === '/message' && method === 'POST'){
        const body = [];
        // event listener. on() allows us to listen to the evens
        //second function needs to be added after 'data'
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            //writeFileSync - 
            //synchronous - waits until each operation gets completed
            //fs.writeFileSync ('message.txt', message);
            // fs.writeFile ('message.txt', message)
            fs.writeFile ('message.txt', message, err =>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
   
        // res.statusCode = 302;
        // res.setHeader('Location', '/');
        // return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><p>result from form</p></body>');
    res.write('</html>');
    res.end();

});

server.listen(3000);

