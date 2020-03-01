const http = require ('http');
const services = require ('./services');
const url = require ('url');

const server = http.createServer();
server.on('request', (request, response) => {
  const parsedUrl = url.parse(request.url, true);
  if (request.method === 'GET' && parsedUrl.pathname === '/metadata') {
    const { id } = parsedUrl.query;
    const metadata = services.fetchImageMetadata(id);
    console.log(metadata);
    console.log(request.headers);
  }
});
server.listen(8081);

//http://localhost:8080/metadata/?id\=1