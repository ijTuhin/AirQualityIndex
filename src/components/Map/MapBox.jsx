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
    <section className={`border flex flex-col`}>
      <div className={`h-fit px-2 py-3`}>
        {!locationName ? (
          <SearchBox/>
        ) : (
          <div className={``}>
            {locationName.division ? (
              <p>
                Division Name:{" "}
                <span className={`text-sm`}>{locationName.division}</span>
              </p>
            ) : (
              <></>
            )}
            {locationName.district ? (
              <p>
                Disctrict Name:{" "}
                <span className={`text-sm`}>{locationName.district}</span>
              </p>
            ) : (
              <></>
            )}
            {locationName.district ? (
              <p>
                Town/City Name:{" "}
                <span className={`text-sm`}>{locationName.town}</span>
              </p>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
      <div className="flex-grow">
        <MapContainer
          center={[23.885, 90.3563]}
          zoom={6.5}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapClickHandler />
        </MapContainer>
      </div>
    </section>
  );
}
