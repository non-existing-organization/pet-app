import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent: React.FC = () => {
  // Define the center position for the map
  const center = { lat: 51.5074, lng: -0.1278 }; // London

  // Define the locations to display pins
  const locations = [
    { id: 1, lat: 51.5074, lng: -0.1278, name: 'London' },
    { id: 2, lat: 48.8566, lng: 2.3522, name: 'Paris' },
    { id: 3, lat: 40.7128, lng: -74.0060, name: 'New York' },
  ];

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%', padding:0 }}
        center={center}
        zoom={4}
      >
        {/* Render markers for each location */}
        {locations.map(location => (
          <Marker key={location.id} position={{ lat: location.lat, lng: location.lng }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;