import { useState, useEffect } from "react";
import io from "socket.io-client";
import Map from "./components/Map";
import { GpsData } from "./types/typing";

const socket = io("http://localhost:8080");

const App = () => {
  const [gpsData, setGpsData] = useState<GpsData>({
    deviceID: "",
    timestamp: 0,
    t0: 0,
    speed: 0,
    location: {
      type: "",
      coordinates: [30.359908933333333, 40.750262166666666],
    },
  });

  useEffect(() => {
    socket.on("get-data", (data) => {
      setGpsData(data);
    });
  }, []);

  return <Map gpsData={gpsData} />;
};

export default App;
