const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzM3NDgxODU1LCJleHAiOjE3NDAwNzM4NTV9.rgOgyP5J9Gou40cam0UhTEGCU_2GEwXX6Z2tcdfSLrA';
const ws = new WebSocket(`ws://localhost:8080?token=${token}`);

ws.onopen = () => {
    console.log('Connected to WebSocket server.');
    ws.send('Hello server!');
};

ws.onmessage = (event) => {
    console.log('Received:', event.data);
};

ws.onclose = () => {
    console.log('WebSocket connection closed.');
};
