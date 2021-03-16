const json=require('./gpsData.json');
const gps=json.gpsData;


const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(3030, () => {
  console.log('listening on *:3030');
});