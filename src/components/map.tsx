"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React, { useEffect, useState } from "react";

// Type definitions
interface MarkerData {
  lat: number;
  lng: number;
  popup?: React.ReactElement;
}

interface MapProps {
  center?: [number, number];
  zoom?: number;
  markers?: MarkerData[];
  className?: string;
  darkMode?: boolean;
}

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Map: React.FC<MapProps> = ({
  center = [33.6844, 73.0479],
  zoom = 13,
  markers = [],
  className = "h-full w-full",
  darkMode = true,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Dark tile layer options
  const darkTileUrl = darkMode
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  const attribution = darkMode
    ? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  // Don't render until client-side
  if (!isClient) {
    return (
      <div className={className}>
        <div className="h-full w-full bg-gray-900 rounded-lg flex items-center justify-center">
          <div className="text-gray-400">Loading map...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        className="rounded-lg"
      >
        <TileLayer url={darkTileUrl} attribution={attribution} />
        {markers.map((marker: MarkerData, index: number) => (
          <Marker key={index} position={[marker.lat, marker.lng]}>
            <Popup className={darkMode ? "dark-popup" : ""}>
              {marker.popup || "Location"}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Custom CSS for dark popups */}
      <style jsx global>{`
        .dark-popup .leaflet-popup-content-wrapper {
          background: #2a2b2f;
          color: white;
          width: 464px;
          border-radius: 20px;
        }
        .dark-popup .leaflet-popup-tip {
          background: #525252;
        }
        .leaflet-popup-content-wrapper {
          width: 300px;
          padding: 3px;
        }
        .leaflet-popup-content {
          margin: 0;
          padding: 16px;
          width: 100% !important;
        }
      `}</style>
    </div>
  );
};

export default Map;
