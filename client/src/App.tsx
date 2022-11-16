import { useState, useEffect } from "react";
import io from "socket.io-client";
import Map from "./components/Map";
import { GpsData } from "./types/typing";

const socket = io("http://localhost:8080");

const App = () => {
  const [gpsData, getGpsData] = useState<GpsData[]>([]);

  useEffect(() => {
    socket.on("get-data", (data) => {
      console.log(data);
    });
  }, []);

  return <Map gpsData={gpsData} />;
};

export default App;
