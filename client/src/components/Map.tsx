import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { GpsData } from "../types/typing";
import "leaflet/dist/leaflet.css";

type Props = {
  gpsData: GpsData;
};

const Map = ({ gpsData }: Props) => {
  const initialPosition = gpsData?.location?.coordinates;

  return (
    <MapContainer center={initialPosition} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker key={gpsData?.timestamp} position={gpsData?.location.coordinates}>
        <Popup>
          <div className="space-y-6">
            <p>{gpsData?.deviceID}</p>
            <p>{gpsData?.timestamp}</p>
            <p>{gpsData?.speed}</p>
            <p>{gpsData?.t0}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
