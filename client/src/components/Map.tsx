import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { GpsData } from "../types/typing";
import "leaflet/dist/leaflet.css";

type Props = {
  gpsData: GpsData[];
};

const Map = ({ gpsData }: Props) => {
  const initialPosition = gpsData[0]?.location?.coordinates ?? [
    30.359908933333333, 40.750262166666666,
  ];
  console.log(gpsData);
  return (
    <MapContainer center={initialPosition} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {gpsData.map((gps) => (
        <Marker key={gps.timestamp} position={gps.location.coordinates}>
          <Popup>{gps.location.coordinates}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
