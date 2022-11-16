export type GpsData = {
  deviceID: string;
  location: Location;
  speed: number;
  timestamp: number;
  t0: number;
};

type Location = {
  type: string;
  coordinates: [number, number];
};
