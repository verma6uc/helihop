
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { RouteInfo } from '../../../../../types';
import { gsap } from 'gsap';

// Fix for default marker icons in react-leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapVisualizationProps {
  route: RouteInfo;
  className?: string;
}

/**
 * Map visualization component that shows the selected route
 */
const MapVisualization: React.FC<MapVisualizationProps> = ({ route, className = '' }) => {
  // Center position calculated from route coordinates
  const centerLat = (route.originCoordinates[0] + route.destinationCoordinates[0]) / 2;
  const centerLng = (route.originCoordinates[1] + route.destinationCoordinates[1]) / 2;
  const centerPosition: [number, number] = [centerLat, centerLng];

  // Calculate map bounds to fit markers
  const bounds = L.latLngBounds(
    L.latLng(route.originCoordinates[0], route.originCoordinates[1]),
    L.latLng(route.destinationCoordinates[0], route.destinationCoordinates[1])
  );

  // Expand bounds by 10% for better visualization
  const expandedBounds = bounds.pad(0.1);

  // Animate the route line using GSAP
  useEffect(() => {
    const routeLine = document.querySelector('.route-line');
    if (routeLine) {
      gsap.fromTo(
        routeLine,
        { strokeDashoffset: 1000 },
        { 
          strokeDashoffset: 0, 
          duration: 2, 
          ease: 'power2.out',
        }
      );
    }
  }, [route]);

  return (
    <MapContainer
      center={centerPosition}
      bounds={expandedBounds}
      zoom={10}
      className={`${className} z-10`}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Origin Marker */}
      <Marker position={route.originCoordinates}>
        <Popup>
          <div className="text-gray-800">
            <strong>Origin:</strong> {route.origin}
            <br />
            <strong>Flight Time:</strong> {route.flightTimeMinutes} minutes
          </div>
        </Popup>
      </Marker>
      
      {/* Destination Marker */}
      <Marker position={route.destinationCoordinates}>
        <Popup>
          <div className="text-gray-800">
            <strong>Destination:</strong> {route.destination}
            <br />
            <strong>Ground Time:</strong> {route.groundTimeMinutes} minutes
          </div>
        </Popup>
      </Marker>
      
      {/* Route Line */}
      <Polyline
        positions={[route.originCoordinates, route.destinationCoordinates]}
        pathOptions={{ 
          color: '#0077B6', 
          weight: 4, 
          opacity: 0.8,
          dashArray: '10, 10',
          dashOffset: '0'
        }}
        className="route-line"
      />
    </MapContainer>
  );
};

export default MapVisualization;
