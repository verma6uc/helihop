
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import { gsap } from 'gsap';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Route } from '../../../../../types';

// Prevent Leaflet icon issues
// This is a common fix for Leaflet markers in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface MapVisualizationProps {
  selectedRoute: Route | null;
}

/**
 * Interactive map component that visualizes the selected helicopter route
 */
const MapVisualization: React.FC<MapVisualizationProps> = ({ selectedRoute }) => {
  const mapRef = useRef<L.Map | null>(null);
  
  useEffect(() => {
    if (selectedRoute && mapRef.current) {
      const map = mapRef.current;
      const bounds = L.latLngBounds([
        selectedRoute.origin.coordinates,
        selectedRoute.destination.coordinates
      ]);
      
      // Add some padding to the bounds
      map.fitBounds(bounds, { padding: [50, 50] });
      
      // Animate the route path using GSAP
      const polylineElement = document.querySelector('.route-line');
      if (polylineElement) {
        gsap.fromTo(
          polylineElement,
          { strokeDashoffset: 1000 },
          { strokeDashoffset: 0, duration: 2, ease: "power2.out" }
        );
      }
    }
  }, [selectedRoute]);
  
  if (!selectedRoute) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg" aria-label="Map visualization container">
        <p className="text-gray-500">Select a route to view the map</p>
      </div>
    );
  }
  
  return (
    <div className="h-80 rounded-lg overflow-hidden shadow-md" aria-label={`Map showing route from ${selectedRoute.origin.name} to ${selectedRoute.destination.name}`}>
      <MapContainer
        center={[40.7128, -74.0060]} // NYC default center
        zoom={10}
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
        //@ts-ignore - ref typing issue with react-leaflet
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <Marker 
          position={selectedRoute.origin.coordinates}
          title={selectedRoute.origin.name}
        >
          <L.Tooltip permanent>{selectedRoute.origin.name}</L.Tooltip>
        </Marker>
        <Marker 
          position={selectedRoute.destination.coordinates}
          title={selectedRoute.destination.name}
        >
          <L.Tooltip permanent>{selectedRoute.destination.name}</L.Tooltip>
        </Marker>
        
        <Polyline
          positions={[
            selectedRoute.origin.coordinates,
            selectedRoute.destination.coordinates
          ]}
          pathOptions={{ 
            color: '#0077B6', 
            weight: 4,
            opacity: 0.7,
            dashArray: "10, 10",
            className: "route-line"
          }}
        />
      </MapContainer>
    </div>
  );
};

export default MapVisualization;
  