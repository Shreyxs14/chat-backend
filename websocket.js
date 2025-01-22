const WebSocket = require('ws');
const jwt = require('jsonwebtoken');

const SECRET = 'YmO3Qm22olCEiZ7fleG5AQ=='; // Use your Strapi secret
const wsServer = new WebSocket.Server({ port: 8080 });

wsServer.on('connection', (ws, req) => {
    const params = new URLSearchParams(req.url.split('?')[1]);
    const token = params.get('token');

    if (!token) {
        console.log('No token provided. Closing connection.');
        ws.close(1008, 'Unauthorized');
        return;
    }

    try {
        const user = jwt.verify(token, SECRET);
        console.log('Authenticated user:', user);

        ws.on('message', (message) => {
            console.log(`Message received: ${message}`);
            ws.send(`Echo: ${message}`);
        });

        ws.on('close', () => {
            console.log('Client disconnected.');
        });
    } catch (err) {
        console.error('Token verification failed:', err.message);
        ws.close(1008, 'Unauthorized');
    }
});

console.log('WebSocket server is running on ws://localhost:8080');
