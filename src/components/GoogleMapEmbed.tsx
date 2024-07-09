'use client';

import { GoogleMap, Marker } from '@react-google-maps/api';

const defaultMapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '12px',
};

const defaultPosition = {
  lat: 45.79538,
  lng: 15.97177,
};

const defaultZoom = 17;

export default function GoogleMapEmbed() {
  return (
    <div className="w-[90%] h-[400px] mx-auto">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultPosition}
        zoom={defaultZoom}
      >
        <Marker position={defaultPosition} />
      </GoogleMap>
    </div>
  );
}
