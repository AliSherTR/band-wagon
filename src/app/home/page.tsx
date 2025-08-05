"use client";
import Filters from "@/components/filters";
import MapMarker from "@/components/map-marker";
import dynamic from "next/dynamic";
import React from "react";

// Type for marker data
interface MarkerData {
  lat: number;
  lng: number;
  popup: React.ReactElement;
}

// Dynamically import the Map component with SSR disabled
const DynamicMap = dynamic(() => import("@/components/map"), {
  ssr: false,
  loading: () => (
    <div className="h-96 w-full bg-gray-900 rounded-lg flex items-center justify-center">
      <div className="text-gray-400">Loading map...</div>
    </div>
  ),
});

const MapPage: React.FC = () => {
  const sampleMarkers: MarkerData[] = [
    { lat: 33.6844, lng: 73.0479, popup: <MapMarker /> },
    { lat: 33.7181, lng: 73.0776, popup: <MapMarker /> },
    { lat: 33.1439, lng: 73.9918, popup: <MapMarker /> },
  ];

  return (
    <div className="h-full relative">
      {/* Map as background - should be interactive */}
      <div className="h-full w-full absolute inset-0 z-0">
        <DynamicMap
          center={[33.6844, 73.0479]}
          zoom={12}
          markers={sampleMarkers}
          className="h-full w-full shadow-lg"
          darkMode={true}
        />
      </div>

      {/* Filters overlay - positioned to not block map interaction */}
      <div className="absolute w-full top-0 left-0 z-[1000] pointer-events-none">
        {/* Only the filter component itself should catch pointer events */}
        <div className="p-4 w-full inline-block pointer-events-auto">
          <Filters />
        </div>
      </div>
    </div>
  );
};

export default MapPage;
