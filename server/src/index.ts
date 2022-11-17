import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

import data from "../data/gpsData.json";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  sendData(socket);
});

let gpsDataIndex = 0;

function sendData(
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) {
  socket.emit("get-data", data.gpsData[gpsDataIndex]);

  gpsDataIndex++;

  if (gpsDataIndex === data.gpsData.length) {
    gpsDataIndex = 0;
  }

  setTimeout(() => {
    sendData(socket);
  }, 1000);
}

server.listen(8080);
