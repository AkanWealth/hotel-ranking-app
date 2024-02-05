import React from 'react';
import { LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';

interface MapComponentProps {
  position: [number, number];
  onClick: (position: [number, number]) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ position, onClick }) => {
  const handleMapClick = (e: LeafletMouseEvent) => {
    onClick([e.latlng.lat, e.latlng.lng]);
  };

  const MapEvents = () => {
    useMapEvents({
      click: handleMapClick,
    });

    return null;
  };

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '300px', width: '100%' }}
    >
      <MapEvents />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Your Hotel Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
