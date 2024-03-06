const http = require('http');

const routeOne = require('./A1routes');

const server = http.createServer(routeOne.handler);

server.listen(3000);