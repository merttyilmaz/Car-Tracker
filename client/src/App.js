import './App.css';

import React,{useState,useEffect} from 'react';
import io from 'socket.io-client';
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';

function App() {
  const socket = io("http://localhost:4000")
  const [settings, setSettings] = useState(null)

  useEffect(() => {
   try {

     socket.on("con", (data) => {
       setSettings(data)
     })
   } catch (error) {
     console.log(error)
   }
 }, [settings])
  console.log(settings)

  return (
    <div className="App">
      <MapContainer center={[30.359908933333333,40.750262166666666]} zoom={7} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {(() => {
          if (settings!=null) {
            return (
              <div>
                <Marker position={[settings.location.coordinates[0],settings.location.coordinates[1]]}>
                    <Popup>
                      <h1>Car's Data</h1>
                      <p>Speed: {settings.speed}</p>
                      <p>Plate Number: {settings.t0}</p>
                      <p>Group Name: {settings.deviceID}</p>
                      <p>Location Type: {settings.location.type}</p>
                      <p>Timestamp: {settings.timestamp}</p>
                    </Popup>
                </Marker>
              </div>
          )
        }
      })()}
      </MapContainer>
    </div>
  );
}

export default App;
