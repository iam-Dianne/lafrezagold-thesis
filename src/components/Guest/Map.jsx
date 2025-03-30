import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const position = [14.670544134463297, 120.27512493877043]; // Example: Cebu City coordinates

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={position}>
        <Popup>
          La Freza Resort <br /> Cebu City, Philippines.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
