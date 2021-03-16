const json=require('./gpsData.json');
const gps=json.gpsData;


const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.set('transports', ['websocket'])

io.on("connection", (socket) => { 
  // console.log("Backend, connected!"); // user or client is connected.
  console.log("User connected with a unique socketId ", socket.id);
  socket.emit('mert','connected');  
  socket.on("msg", function (msg) {
        console.log("entered!"); // <--- It will print now !
        
        console.log("message: " + msg);
        
    });

});
http.listen(3030, () => {
  console.log('listening on *:3030');
});