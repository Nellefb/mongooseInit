const http = require('http');
const app = require('../src/app');
const port = parseInt(process.env.PORT, 10) || 3000;
const server = http.createServer(app);

server.listen(port);
server.on('listening', onListening);
console.log(`Api executada na porta: ${port}`);

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}
