import { MapContainer, TileLayer, useMap, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SearchBox from "./SearchBox";
import LocationPointer from "./LocationPointer";
import { useContextData } from "../Context/UseContext";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// Fixed marker icon not showing issue in Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useState } from "react";

// Fixed default marker icons in Leaflet for React
let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
  const { query, setQuery, position, setPosition } = useContextData();
  const [mapViewPosition, setMapViewPosition] = useState([23.8793, 93.3178]);
  const [center, setCenter] = useState(null);
  const getLocationName = async (lat, lon) => {
    try {
      /* Make API request to get map location using lat long */
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
      if (data && data.display_name) {
        setQuery({ ...query, location: data.display_name });
      } else {
        // console.log("Location not found");
      }
    } catch (error) {
      console.error("Error fetching location name:", error);
    }
  };

  // Component to handle map clicks
  const MapClickHandler = () => {
    useMapEvents({
      // Fetch the location name on click
      click(e) {
        const { lat, lng } = e.latlng;
        getLocationName(lat, lng);
        console.log(lat, lng);
      },
    });
    return null;
  };

  // Component to update the map view
  const SetMapView = ({ center }) => {
    const map = useMap();
    map.setView(center, map.getZoom());

    return null;
  };

  return (
    <section className={`w-full flex flex-col bg-white`}>
      <div className="flex-grow relative">
        <SearchBox
          setMapViewPosition={setMapViewPosition}
          setCenter={setCenter}
        />
        <MapContainer
          center={mapViewPosition}
          zoom={7}
          style={{ height: "100%", width: "100%" }}
        >
          {center ? <SetMapView center={center} /> : <></>}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Click handler component to get location data onClick from Map */}
          <MapClickHandler />
          {/* Marker on the given location */}
          <LocationPointer getLocationName={getLocationName} />
        </MapContainer>
      </div>
    </section>
  );
}
