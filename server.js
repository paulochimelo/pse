const http = require('https');

const app = require('./app')
window.location.href = "/index.html"
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);