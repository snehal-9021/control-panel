import React, { useEffect, useState } from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ControlPanel = () => {
  const [driverLocations, setDriverLocations] = useState([]);

  useEffect(() => {
    const fetchDriverLocations = () => {
      const locations = Array.from({ length: 5 }, (_, index) => ({
        id: index + 1,
        latitude: generateRandomCoordinate(-90, 90),
        longitude: generateRandomCoordinate(-180, 180),
        name: `Driver ${index + 1}`,
      }));

      console.log('Driver Locations:', locations);
      setDriverLocations(locations);
    };

    fetchDriverLocations();
  }, []);

  const generateRandomCoordinate = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer
        center={[37.7749, -122.4194]}
        zoom={12}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {driverLocations.map((driver) => (
          <>
          <Marker key={driver.id} position={[driver.latitude, driver.longitude]}>
            <Popup>{driver.name}</Popup>
          </Marker>
          <>
          {/* you can check here by giving some value in position */}
            <Marker position={[37.7749, -122.4194]} />
            <Marker position={[37.7756, -122.3789]} />
            <Marker position={[37.8389,-122.3594]}/>
            <Marker position={[37.9997,-122.8944]}/>
            <Marker position={[37.3789,-122.3494]}/>
            </>
          </>
        ))}
      </MapContainer>
    </div>
  );
};

export default ControlPanel;



