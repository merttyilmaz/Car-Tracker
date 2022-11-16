import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

import data from "../data/gpsData.json";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  setInterval(() => {
    socket.emit(
      "get-data",
      data.gpsData.forEach((item) => item)
    );
  }, 2000);
});

server.listen(8080);
