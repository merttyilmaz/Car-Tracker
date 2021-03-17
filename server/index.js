const json=require('./gpsData.json');
const gps=json.gpsData;

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
  }
});

let index = 0;
let interval;

io.on("connection", (socket) => {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  socket.emit("con",gps[index])
  index++;
};

http.listen(4000, function() {
  console.log('listening on port 4000')
})