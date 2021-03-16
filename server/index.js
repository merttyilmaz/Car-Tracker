const json=require('./gpsData.json');
const gps=json.gpsData;


const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


io.on("connection", (socket) => {
   console.log('connected');
   socket.emit('mert');

  });
  
  const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
  };


http.listen(3030, () => {
  console.log('listening on *:3030');
});