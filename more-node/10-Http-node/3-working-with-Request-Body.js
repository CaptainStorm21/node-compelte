const http = require ('http');
const services = require ('./services');
const url = require ('url');

const server = http.createServer();
server.on('request', (request, response) => {
  const parsedUrl = url.parse(request.url, true);
  if (request.method === 'GET' && parsedUrl.pathname === '/metadata') {
    const { id } = parsedUrl.query;
    const metadata = services.fetchImageMetadata(id);
    // console.log(metadata);
    console.log(request.headers)
  };

  //create a handler Data which gets addmitted every time we receive a new chunk of data or in 
  const body = [];
  request.on('data', (chunk) => {
    //   console.log('this is a chunck \n');
    //   console.log(chunk.toString())
    body.push(chunk);
  }).on('end', () => {
      const parsedJSON = JSON.parse(Buffer.concat(body));
      const userName = parsedJSON[0]['userName'];
      console.log(userName);
      services.createUser(userName);
  });
});
server.listen(8081);

