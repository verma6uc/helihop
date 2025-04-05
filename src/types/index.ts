
export interface Route {
  id: string;
  name: string;
  origin: {
    name: string;
    coordinates: [number, number];
  };
  destination: {
    name: string;
    coordinates: [number, number];
  };
  helicopterTime: number; // in minutes
  carTime: number; // in minutes
}
  