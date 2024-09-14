import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import SearchBox from "./SearchBox";

export default function MapBox() {
  const [locationName, setLocationName] = useState(null);
  const getLocationName = async (lat, lon) => {
    try {
      console.log(lat, lon);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
      if (data && data.display_name) {
        setLocationName({
          district: data.address.state_district,
          division: data.address.state,
          town: data.address.town,
          address: data.display_name,
        });
        console.log(data);
      } else {
        setLocationName("Location not found");
      }
    } catch (error) {
      console.error("Error fetching location name:", error);
      setLocationName("Error fetching location");
    }
  };

  // Component to handle map clicks
  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        getLocationName(lat, lng); // Fetch the location name on click
      },
    });
    return null;
  };
  return (
    <section className={`w-full flex flex-col px-3.5 py-2.5 bg-white`}>
      <div className="flex-grow relative">
        <div
          className={`h-fit w-full px-2 py-3 space-y-2 absolute z-[1200] top-2`}
        >
          <SearchBox />
        </div>
        <MapContainer
          center={[24.0, 90.3563]}
          zoom={7}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapClickHandler />
        </MapContainer>
      </div>
      <div className={`p-3 bg-amber-100 text-sm text-gray-700`}>
        {!locationName ? <></> : <p>Location: {locationName.address}</p>}
      </div>
    </section>
  );
}
