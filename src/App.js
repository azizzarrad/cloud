import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 37.7749, 
  lng: -122.4194, 
};

const GoogleMaps = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBmbOVZCd3XX5nlDWkCWx35KwCvUKGH2DI">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
      </GoogleMap>
    </LoadScript>
  );
};

function App() {
  return (
    <div>
      <h1>My Google Maps Landing Page</h1>
      <GoogleMaps />
    </div>
  );
}

export default App;
