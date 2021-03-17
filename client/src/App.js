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
                    <p>{settings.deviceID}</p>
                    <p>{settings.timestamp}</p>
                    <p>{settings.speed}</p>
                    <p>{settings.t0}</p>
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
