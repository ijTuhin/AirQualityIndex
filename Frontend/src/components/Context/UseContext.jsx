import { createContext, useContext, useEffect, useState } from "react";
import { division } from "../JSON/region";
const Context = createContext();
const ProviderComponent = ({ children }) => {
  const [content, setContent] = useState(1);
  const [query, setQuery] = useState({
    time: "2019-12-01",
  });
  const [region, setRegion] = useState({
    data: division,
    type: 0,
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
      if (data.length > 0) {
        // Extract latitude, longitude and location from the first result
        const { lat, lon, display_name } = data[0];
        const newCenter = [parseFloat(lat), parseFloat(lon)];
        // Update the map center and marker position
        setMapViewPosition(newCenter);
        setCenter(newCenter);
        setPosition([newCenter]);
        setQuery({
          ...query,
          location: display_name,
          lat: parseFloat(lat),
          long: parseFloat(lon),
        });
        setContent(0);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log(center, query);
    // axios
    //   .get("./pm2.5.json")
    //   .then((res) => console.log(res.data[0], "Console"))
    //   .catch((err) => console.log(err));
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
        content,
        setContent,
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
