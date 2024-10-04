import { createContext, useContext, useEffect, useState } from "react";
import { division } from "../JSON/region";
import axios from "axios";
import { months } from "../JSON/time";
const Context = createContext();
const ProviderComponent = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(1);
  const [val, setVal] = useState(11);
  const [query, setQuery] = useState({});
  const [region, setRegion] = useState({
    data: division,
    type: 0,
  });
  const [position, setPosition] = useState(division.map((i) => i.coordinates));
  const [mapViewPosition, setMapViewPosition] = useState([23.8793, 93.3178]);
  const [center, setCenter] = useState(null);

  /* Search Location Function */
  const handleLocationSearch = async (search) => {
    if (!search) return;
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${search}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length > 0) {
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
  const getDataFromDB = async (value) => {
    setLoading(true);
    const url =
      import.meta.env.VITE_SOME_URL +
      `/${value.time}?lat=${value.lat}&long=${value.long}`;
    await axios
      .get(url)
      .then((res) => {
        if (res.data !== null) {
          setQuery({ ...query, result: { ...res.data } });
        } else setQuery({ ...query, result: undefined });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const vv = {
      time: `2019-${months[val].value}-01`,
      lat: query.lat,
      long: query.long,
    };
    getDataFromDB(vv);
  }, [center, val, query.location]);
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
        loading,
        setLoading,
        val,
        setVal,
        handleLocationSearch,
        getDataFromDB,
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
