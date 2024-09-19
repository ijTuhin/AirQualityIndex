import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import SearchBox from "./SearchBox";
import { useContextData } from "../Context/UseContext";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fixed marker icon not showing issue in Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { division } from "../JSON/data";

// Fixed default marker icons in Leaflet for React
let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function MapBox() {
  const { query, setQuery } = useContextData();
  const [position, setPosition] = useState(division.map((i) => i.coordinates));
  console.log(position);
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
        // setLocationName("Location not found");
      }
    } catch (error) {
      console.error("Error fetching location name:", error);
    }
  };

  // Component to handle map clicks
  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        getLocationName(lat, lng); // Fetch the location name on click
        console.log(lat, lng);
      },
    });
    return null;
  };

  return (
    <section className={`w-full flex flex-col bg-white`}>
      <div className="flex-grow relative">
        <div className={`w-full flex justify-center`}>
          <div
            className={`h-fitpx-2 py-3 space-y-2 absolute z-[1200] top-2 ${
              query?.location ? "lg:md:w-[80%]" : "lg:md:w-[60%]"
            } w-1/2`}
          >
            <SearchBox />
          </div>
        </div>
        <MapContainer
          center={query.coordinates} /* 23.1793, 91.9882 */
          zoom={7}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapClickHandler />
          {/* Marker on the given location */}
          {position.map((i, index) => {
            return (
              <Marker
                key={index}
                position={i}
                eventHandlers={{
                  mouseover: (event) => event.target.openPopup(),
                  click: (e) => {
                    const { lat, lng } = e.latlng;
                    getLocationName(lat, lng); // Fetch the location name on click
                  },
                }}
              >
                <Popup>
                  A marker at the given location! <br /> Latitude: {i[0]},
                  Longitude: {i[1]}.
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </section>
  );
}
