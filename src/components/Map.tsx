import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { MapPin } from 'lucide-react';

interface MapComponentProps {
  pickup: [number, number];
  destination?: [number, number];
}

export function MapComponent({ pickup, destination }: MapComponentProps) {
  return (
    <ReactMapGL
      initialViewState={{
        longitude: pickup[0],
        latitude: pickup[1],
        zoom: 13
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken="pk.eyJ1Ijoic3RhY2tibGl0eiIsImEiOiJjbHRpZnN2djAwNm5rMnFwOWV6dHB4aXozIn0.x0pupQbqV44toGfVrwuWHA"
    >
      <Marker longitude={pickup[0]} latitude={pickup[1]} anchor="bottom">
        <MapPin className="w-6 h-6 text-yellow-500" />
      </Marker>
      {destination && (
        <Marker longitude={destination[0]} latitude={destination[1]} anchor="bottom">
          <MapPin className="w-6 h-6 text-red-500" />
        </Marker>
      )}
    </ReactMapGL>
  );
}