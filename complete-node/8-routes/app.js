
const http = require  ('http');
const routes = require ('./8-routes');

const server = http.createServer(routes);


server.listen(3000);

/*
option 2
console.log(routes.someText);
const server = http.createServer(routes.handler)

*/

