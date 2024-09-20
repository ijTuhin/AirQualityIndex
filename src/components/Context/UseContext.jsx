import { createContext, useContext, useEffect, useState } from "react";
import { division, months, years } from "../JSON/data";

const Context = createContext();
const ProviderComponent = ({ children }) => {
  const [query, setQuery] = useState({
    year: years[0],
    month: months[0],
    coordinates: [24.0, 90.3563],
  });
  const [region, setRegion] = useState({
    data: division,
    type: null,
  });
  const [position, setPosition] = useState(division.map((i) => i.coordinates));
  const [mapViewPosition, setMapViewPosition] = useState([23.8793, 93.3178]);
  const [center, setCenter] = useState(null);

  /* Search Location Function */
  const handleLocationSearch = async (search) => {
    console.log(search);
    if (!search) return;
    // Call Nominatim API to convert the search query to lat/lng
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${search}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.length > 0) {
        // Extract latitude, longitude and location from the first result
        const { lat, lon, display_name } = data[0];
        const newCenter = [parseFloat(lat), parseFloat(lon)];

        // Update the map center and marker position
        setMapViewPosition(newCenter);
        setCenter(newCenter);
        setPosition([newCenter]);
        setQuery({ ...query, location: display_name });
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log(query);
  }, [query]);
  return (
    <Context.Provider
      value={{
        query,
        setQuery,
        region,
        setRegion,
        position,
        setPosition,
        mapViewPosition,
        setMapViewPosition,
        center,
        setCenter,
        handleLocationSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
const useContextData = () => {
  return useContext(Context);
};
export { ProviderComponent, useContextData };
